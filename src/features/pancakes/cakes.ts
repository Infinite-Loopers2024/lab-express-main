import { Cake, CakeLayer } from "./types";

export const chocolateLayer: CakeLayer = { content: "chokladfrosting" };
export const creamLayer: CakeLayer = { content: "grädde" };
export const strawberryLayer: CakeLayer = { content: "jordgubbar" };

export const cakes = {
  chocolateCake: [chocolateLayer, creamLayer, chocolateLayer],
  strawberryCake: [creamLayer, strawberryLayer, creamLayer],
  princessCake: [creamLayer, chocolateLayer, strawberryLayer],
};
