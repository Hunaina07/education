require("dotenv").config();
const express = express();
const app = express();
const cors = require('cors');
const { connection } = require("mongoose");
 
// database connection
connection();
// middleware
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 8000;
app.listen(port ,()=>{
   console.log(`listening on port${port}`)
})