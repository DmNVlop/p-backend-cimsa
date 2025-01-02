export default ({ env }) => {
  console.log("APP_KEYS:", env.array("APP_KEYS"));
  console.log("MODE:", env("MODE", "dev"));

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
    mode: env("MODE", "dev"),
  };
};
