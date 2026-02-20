export const getGame = (req, res) => {
  console.log("Loading Game");
  res.json({ id: "chess", name: "Chess" });
};
