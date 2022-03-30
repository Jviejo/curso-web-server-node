const express = require("express")
const pg = require("pg")

const {q} =require('./bdd')
const fs = require('fs')
var app = express()

app.get("/", async (req, res) => {
    const r = await q("select * from customers limit 10",[])
    res.send(r)
})


app.get("/carga", async (req, res) => {
    const sql = fs.readFileSync("./n.sql")
    console.log(sql)
    const r = await q(sql.toString(),[])
    res.send(sql.toString())
}
)
app.listen(8080, () => {
    console.log("Server is running on port 8080")
})