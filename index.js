require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.json({message: "Funcionando"});
})

app.get("/Conexao", async (req, res) => {
    const Conexao = await db.selectCustomers();
    res.json(Conexao);
})
app.listen(port);

console.log("Backend rodando");