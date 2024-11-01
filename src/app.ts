import express from "express";
import { createCakesFeature } from "./features";
import { Cake, Db } from "./features/pancakes/types";

function createDb(): Db {
  const data: Cake[] = [];
  return {
    getAll: async () => data,
    cookCake: async (cake: Cake) => {
      data.push(cake);
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

  const cakesFeature = createCakesFeature(db);

  app.use("/api/v1/pancakes", cakesFeature.getRouter());

  return app;
}
