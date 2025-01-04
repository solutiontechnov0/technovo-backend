import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" })); // Allow frontend

// Routes
app.use("/api/contact", contactRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
