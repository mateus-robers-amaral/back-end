const express = require("express")
const app = express()
const Todo = require("./todo.model")

app.use(express.json())

const listTodo = []

app.get("/todo",(pergunta, resposta)=>{
    resposta.send(listTodo)
})
app.post("/todo", (pergunta, resposta) => {
    const body = pergunta.body
    const newTodo = new Todo(body.checked, body.text)
    listTodo.push(newTodo)
    resposta.sendStatus(201)
})
app.listen(8080,()=>{
    console.log("Servidor aberto na porta 8080")
})