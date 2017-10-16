import { Container } from "inversify";
import {TYPES} from "./types";
import TodoList from "./core/src/TodoList";
import InMemoryTodoList from "./core/src/InMemoryTodoList";
import TodoListController from "./http-api/src/todo-list-controller";

const myContainer = new Container();
myContainer.bind<TodoList>(TYPES.TodoList).to(InMemoryTodoList);

export { myContainer };
