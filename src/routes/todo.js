import express from "express";
import { createTodo ,editTodo ,deleteTodo ,getAllTodos } from "../constrollers/todo.js";


const todoRouter = express.Router();

todoRouter.post("/create", createTodo);
todoRouter.get("/todos",getAllTodos);
todoRouter.delete("/delete",deleteTodo);
todoRouter.patch("/update", editTodo)

export { todoRouter };
