export type CakeLayer = {
  content: string;
};

export type Cake = {
  id: string;
  layers: CakeLayer[];
};

export type Db = {
  getAll: () => Promise<Cake[]>;
  cookCake: (pancake: Cake) => Promise<void>;
};
