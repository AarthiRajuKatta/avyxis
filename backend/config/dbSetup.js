import fs from "fs";
import path from "path";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const sqlRootFolder = path.resolve("sql");

/* =========================================
   GET ALL SQL FILES RECURSIVELY
========================================= */

const getAllSqlFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      getAllSqlFiles(fullPath, arrayOfFiles);
    } else {
      if (file.endsWith(".sql")) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
};

/* =========================================
   RUN SQL FILES
========================================= */

export const runSqlFiles = async () => {
  try {
    /* ==========================
       CREATE DB CONNECTION
    ========================== */
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      multipleStatements: true,
    });

    /* ==========================
       CREATE DATABASE
    ========================== */
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``
    );
    console.log(
      `Database Checked : ${process.env.DB_NAME}`
    );

    /* ==========================
       USE DATABASE
    ========================== */
    await connection.query(
      `USE \`${process.env.DB_NAME}\``
    );

    /* ==========================
       GET ALL SQL FILES
    ========================== */
    const sqlFiles = getAllSqlFiles(sqlRootFolder);

    /* ==========================
       EXECUTE SQL FILES
    ========================== */
    for (const file of sqlFiles) {
      const sql = fs.readFileSync(file, "utf8");
      console.log(`🚀 Running SQL : ${file}`);
      await connection.query(sql);
    }
    console.log("✅ All SQL Files Executed");
    await connection.end();
  } catch (error) {
    console.error("❌ SQL Runner Error");
    console.error(error.message);
    process.exit(1);
  }
};