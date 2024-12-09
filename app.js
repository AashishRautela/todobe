// const express=require("express");

// const app=express();
// app.use(express.json());

// const {todoRouter}=require("./src/routes/todo.js");
// app.use("/todo",todoRouter)

// module.exports={app}

import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import { todoRouter } from "./src/routes/todo.js";
app.use("/todo", todoRouter);

export { app };


