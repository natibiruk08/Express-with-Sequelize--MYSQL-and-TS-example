import { Router } from "express";

import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodoById,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", getAllTodos);

router.get("/:id", getTodoById);

router.put("/:id", updateTodoById);

router.delete("/:id", deleteTodo);

export default router;
