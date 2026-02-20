export const getStore = (req, res) => {
    console.log("Fetching Store");
    res.json({ id: "sid", name: "Pro Classics" });
  };
  