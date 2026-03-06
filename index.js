import { resolveFile } from "../resolvers/index.js";

export const sendFile = async (c) => {
  try {
    const hostHeader = c.req.header("host");
    if (!hostHeader) throw new Error("Missing host header");

    const host = hostHeader.split(":")[0];
    const parts = host.split(".");

    let client = null;
    let domain;

    if (parts.length > 2) {
      if (parts[0] === "www") {
        domain = parts.slice(1).join(".");
      } else {
        client = parts[0];
        domain = parts.slice(1).join(".");
      }
    } else {
      domain = host;
    }

    const reqPath = c.req.path || "/";

    const response = await resolveFile({ client, host: domain }, reqPath);

    return response;
  } catch (err) {
    if (err === 404) {
      console.error("Unknown Domain", 404);
      return c.text("Not Found", 404);
    }

    console.error("File send error:", err);
    return c.text("Server error", 500);
  }
};
