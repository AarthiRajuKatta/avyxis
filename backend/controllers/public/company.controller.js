import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import { generateToken } from "../../utils/jwt.util.js";
import { findCompanyByKey } from "../../models/public/company.model.js";
import { findUserByEmail } from "../../models/public/user.model.js";

/* =========================================
   COMPANY LOGIN
========================================= */

export const companyLogin = async (req, res) => {
  try {
    const { companyKey } = req.params;
    const { email, password } = req.body;

    /* ==========================
       FIND COMPANY
    ========================== */

    const company = await findCompanyByKey(companyKey);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    /* ==========================
       CONNECT COMPANY DB
    ========================== */

    const companyPool = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: company.db_name,
    });

    /* ==========================
       FIND USER
    ========================== */

    const user = await findUserByEmail(companyPool, email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken({
      type: "COMPANY",
      user_id: user.user_id,
      company_id: company.company_id,
      company_key: company.company_key,
      company_db: company.db_name,
    });

    return res.json({
      success: true,
      token,
      company,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
