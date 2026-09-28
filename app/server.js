const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.json());

// Security headers
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

app.get("/", (req, res) => {
  res.json({
    service: "TaskMaster API",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`TaskMaster API listening on port ${PORT}`);
});
