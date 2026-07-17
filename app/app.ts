import app from "./config";

export function startServer(): void {
  app.use((req, res) => {
    res.status(404).json({
      status: 404,
      message: "Not Found!",
    });
  });

  const PORT = Number(process.env.PORT) || 3000;
  const HOST = process.env.HOST || "0.0.0.0";

  app.listen(PORT, HOST, () => {
    console.log(`🚀 Server running at http://${HOST}:${PORT}`);
  });
}