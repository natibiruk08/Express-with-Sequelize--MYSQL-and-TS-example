import { RequestHandler } from "express";

import { Todos } from "../models/todos";

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const { name, description }: Todos = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name and description can not be empty" });
    }

    const todo = await Todos.create({ name, description });
    return res.status(200).json({
      message: "Todo added",
      data: todo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTodo: Todos | null = await Todos.findByPk(id);

    await Todos.destroy({ where: { id } });

    return res.status(200).json({ message: "Todo removed", data: deletedTodo });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllTodos: RequestHandler = async (req, res, next) => {
  try {
    const allTodos: Todos[] | null = await Todos.findAll();

    return res.status(200).json({ message: "Todos fetched", data: allTodos });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo: Todos | null = await Todos.findByPk(id);

    return res.status(200).json({ message: "Todo fetched", data: todo });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateTodoById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Todos.update({ ...req.body }, { where: { id } });

    const updatedTodo: Todos | null = await Todos.findByPk(id);

    return res.status(200).json({ message: "Todo updated", data: updatedTodo });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
