const app = require("./app");
const dotenv = require("dotenv"); // to let it know where the env value is stored
const connectDatabase = require("./config/db");

// Config
dotenv.config({ path: "backend/config/config.env" })

//connecting to databse (always connect database only after config the env variables)
connectDatabase()


// creating a server
app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
}) 