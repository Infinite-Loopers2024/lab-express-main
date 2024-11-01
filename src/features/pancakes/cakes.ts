import { Cake, CakeLayer } from "./types";

const chocolateLayer: CakeLayer = { content: "chokladfrosting" };
const creamLayer: CakeLayer = { content: "grädde" };
const strawberryLayer: CakeLayer = { content: "jordgubbar" };

export const cakes = {
  chocolateCake: [chocolateLayer, creamLayer, chocolateLayer],
  strawberryCake: [creamLayer, strawberryLayer, creamLayer],
  princessCake: [creamLayer, chocolateLayer, strawberryLayer],
};
