import express from "express";
import { createPancakesFeature, Db, Pancake } from "./features";

function createDb(): Db {
  const data: Pancake[] = [];
  return {
    getAll: async () => data,
    cookPancake: async (pancake: Pancake) => {
      data.push(pancake);
    },
  };
}
export function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  const db = createDb();

  const pancakesFeature = createPancakesFeature(db);

  app.use("/api/v1/pancakes", pancakesFeature.getRouter());

  return app;
}
