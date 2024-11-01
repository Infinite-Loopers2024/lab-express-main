import express from "express";
import { v4 } from "uuid";
import { z } from "Zod";
import { Db } from "./types";



const cakeLayersSchema = z.object({
  layers: z.string().array(),
});

export function createCakesFeature(db: Db) {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      router.post("/", async (req, res) => {
        const { layers } = req.body;

        const result = cakeLayersSchema.safeParse(req.body);
        if (!result.success) {
          res.status(400).json(result.error.issues);
          return;
        }

        const id = "1";
        const cake = { id, layers };
        await db.cookCake(cake);

        res.status(201).json({ message: "user created" });
      });

      return router;
    },
  };
}
