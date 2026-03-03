export const getClient = (c) => {
  const id = c.req.param("id"); // get :id from path
  console.log("Getting Client", id);
  return c.json({ id, name: "Augment" });
};
