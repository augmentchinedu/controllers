export const getStore = (c) => {
    console.log("Fetching Store");
    return c.json({ id: "sid", name: "Pro Classics" });
  };
  