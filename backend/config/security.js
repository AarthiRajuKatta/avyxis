import express from "express";

import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import csrf from "csurf";

const securityMiddleware = (app) => {
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    })
  );

  app.use(express.json({ limit: "10kb" }));
  app.use(cookieParser());
  app.use(xss());
  app.use(mongoSanitize());
  app.use(hpp());

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,

    message: {
      success: false,
      message: "Too many requests",
    },
  });

  app.use(limiter);

  app.use(
    csrf({
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      },
    })
  );
};

export default securityMiddleware;