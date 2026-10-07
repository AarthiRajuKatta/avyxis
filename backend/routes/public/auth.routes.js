import express from "express";

import { rootLogin } from "../../controllers/public/root.controller.js";
import { companyLogin } from "../../controllers/public/company.controller.js";

const router = express.Router();

/* ==========================
   ROOT LOGIN
========================== */

router.post("/root/login",rootLogin);

/* ==========================
   COMPANY LOGIN
========================== */

router.post("/company/login/:companyKey",companyLogin);

export default router;