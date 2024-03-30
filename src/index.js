import express from "express";
import userRoutes from "./routes/user.js";
import dotenv from "dotenv";

// IGNORE THIS PART: FUCK JAVASCRIPT
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "./.env") });
// NOW STOP IGNORING

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
