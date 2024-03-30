import pool from "../db/connection.js";

const getUsers = async (_req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM users");
		res.json(rows);
	} catch (error) {
		console.log(error);
		res.status(500).send("Internal Server Error");
	}
};

export { getUsers };
