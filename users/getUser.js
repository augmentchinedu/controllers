export const getUser = (c) => {
  console.log("Getting User");
  return c.json({ id: "uid", name: "Augment" });
};
