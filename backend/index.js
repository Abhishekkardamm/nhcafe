const express = require('express')
const app= express();
const port = 5000;
const mongoDB = require("./db");

const cors = require('cors');

app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

// Your existing routes here

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});



mongoDB();
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use(express.json());
app.use('/api',require("./Routes/createUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // or specify a specific origin
    next();
  });
  
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
