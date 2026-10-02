import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'M@yur9117', // <-- Put your MySQL root password here
  database: 'sportsturf_db',
  waitForConnections: true,
  connectionLimit: 10
});

// GET /api/turfs: Fetch all arenas
app.get('/api/turfs', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM turfs');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve turfs.' });
  }
});

// POST /api/bookings: Save a booking
app.post('/api/bookings', async (req, res) => {
  const { turf_id, customer_name, phone, booking_date, time_slot, hours, total_amount } = req.body;

  try {
    const sql = `
      INSERT INTO bookings 
      (turf_id, customer_name, phone, booking_date, time_slot, hours, total_amount) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await pool.execute(sql, [
      turf_id,
      customer_name,
      phone,
      booking_date,
      time_slot,
      hours,
      total_amount
    ]);

    res.status(201).json({
      message: 'Booking confirmed!',
      bookingId: `ST-${result.insertId}`
    });
  } catch (err) {
    if (err.errno === 1062) {
      return res.status(409).json({ error: 'This slot is already booked. Please choose another time.' });
    }
    console.error(err);
    res.status(500).json({ error: 'Database operation failed.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});