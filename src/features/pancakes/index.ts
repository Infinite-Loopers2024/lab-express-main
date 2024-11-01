import express from "express";
import { v4 } from "uuid";

export type PancakeLayer = {
  content: string;
};

export type Pancake = {
  id: string;
  layers: PancakeLayer[];
};

export type Db = {
  getAll: () => Promise<Pancake[]>;
  cookPancake: (pancake: Pancake) => Promise<void>;
};

export function createPancakesFeature(db: Db) {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      router.post("/", async (req, res) => {
        const { layers } = req.body;

        const id = "1";
        const pankcake = { id, layers };
        await db.cookPancake(pankcake);

        res.status(201).json({ id });
      });

      return router;
    },
  };
}
