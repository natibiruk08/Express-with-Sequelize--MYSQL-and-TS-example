import { RequestHandler } from "express";

import { Todos } from "../models/todos";

export const createTodo: RequestHandler = async (req, res, next) => {
  const todo = await Todos.create({ ...req.body });
  return res.status(200).json({
    message: "Todo added",
    data: todo,
  });
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedTodo: Todos | null = await Todos.findByPk(id);

  await Todos.destroy({ where: { id } });

  return res.status(200).json({ message: "Todo removed", data: deletedTodo });
};

export const getAllTodos: RequestHandler = async (req, res, next) => {
  const allTodos: Todos[] | null = await Todos.findAll();

  return res.status(200).json({ message: "Todos fetched", data: allTodos });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todo: Todos | null = await Todos.findByPk(id);

  return res.status(200).json({ message: "Todo fetched", data: todo });
};

export const updateTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  await Todos.update({ ...req.body }, { where: { id } });

  const updatedTodo: Todos = await Todos.findByPk(id);

  return res.status(200).json({ message: "Todo updated", data: updatedTodo });
};
