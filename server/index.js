import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import path from 'path';

import { fileURLToPath } from 'url';

const app = express();

const PORT = process.env.PORT;



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"views","index.html")); 
});

app.get('/vikas', (req, res) => {
  res.json({ "message": "Hi this is Vikas!!!" });
  
})



app.use(express.static(path.join(__dirname, "views")));



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
