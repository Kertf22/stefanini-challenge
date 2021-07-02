const express = require("express");

const app = express();
const routes = require("./routes.js");

app.use(express.json());

app.use(routes)

app.use((err,req,res,next) =>{
    if (err instanceof Error) {
        return res.status(400).json({
            error:err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

module.exports = app