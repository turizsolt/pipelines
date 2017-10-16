import * as express from 'express';
import InMemoryTodoList from "../../core/src/InMemoryTodoList";
import TodoListController from "./todo-list-controller";
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const todoListController = new TodoListController();

app.route('/')
    .get((req, res) => todoListController.getAll(req, res))
    .post((req, res) => todoListController.create(req, res))
;

app.route('/:id')
    .get((req, res) => todoListController.get(req, res))
    .delete((req, res) => todoListController.remove(req, res))
;

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
