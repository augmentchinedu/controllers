export const getGame = (c) => {
  console.log("Loading Game");
  return c.json({ id: "chess", name: "Chess" });
};
