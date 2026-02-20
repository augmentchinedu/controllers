export const getClient = (req, res) => {
  console.log("Fetching Client");
  res.json({ id: "express", name: "Express" });
};
