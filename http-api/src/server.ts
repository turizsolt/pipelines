import * as express from 'express';
import InMemoryTodoList from "../../core/src/InMemoryTodoList";

const app = express();

const todoList = new InMemoryTodoList();
todoList.add("Alma");
todoList.add("Körte");

app.get('/', (req, res) => {
    res.send(todoList.getAll());
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
