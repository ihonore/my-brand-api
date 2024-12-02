import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";

import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;
const mode = process.env.NODE_ENV || "development";

try {
  console.log(`Server running in ${mode} mode`);

  const dbUri =
    mode === "development"
      ? process.env.DEVELOPMENT_DB
      : mode === "test"
        ? process.env.TEST_DB
        : process.env.PRODUCTION_DB;

  if (!dbUri) {
    throw new Error("Database URI is not defined");
  }

  mongoose
    .connect(dbUri, { useNewUrlParser: true })
    .then(() => {
      console.log(`${mode.toUpperCase()} DB CONNECTED`);
    })
    .catch((err) => {
      console.error("Failed to connect to the database", err);
      process.exit(1);
    });

  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({
      message:
        "🟢WELCOME TO THE API🟢 add /api-docs to Url to get to the documentation",
    });
  });

  app.use("/api/v1/", routes);

  const swaggerDocument = JSON.parse(fs.readFileSync("swagger.json", "utf-8"));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use("*", (req, res) => {
    res.status(404).json({
      error: "NOT FOUND",
    });
  });

  app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
  });
} catch (error) {
  console.error("Application initialization error:", error);
}
export default app;
