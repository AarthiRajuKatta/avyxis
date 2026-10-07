import bcrypt from "bcryptjs";
import rootPool from "../../config/db.js";
import { generateToken } from "../../utils/jwt.util.js";
import { findUserByEmail } from "../../models/public/user.model.js";

/* =========================================
   ROOT LOGIN
========================================= */

export const rootLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(rootPool, email);

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
      type: "ROOT",
      user_id: user.user_id,
    });

    return res.json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
