const name = process.env.APP_NAME || "App";

export const getHealth = (c) => {
  return c.json({ status: "ok", service: name });
};
