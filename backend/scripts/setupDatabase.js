import { runSqlFiles } from "../config/dbSetup.js";

const startSetup = async () => {
  console.log("Starting Database Setup...");
  await runSqlFiles();
  console.log("Database Setup Completed");
  process.exit(0);
};

startSetup();