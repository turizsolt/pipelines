import TodoList from "../../core/src/TodoList";
import InMemoryTodoList from "../../core/src/InMemoryTodoList";

export default class TodoListController {
    private todoList:TodoList;

    constructor() {
        this.todoList = new InMemoryTodoList();
    }

    getAll(req, res) {
        res.send(this.todoList.getAll());
    }

    create(req, res) {
        if(req.body.text) {
            const id = this.todoList.add(req.body.text);
            res.send({created: true, id: id});
        } else {
            res.send({error: "No 'text' field present. Should be."});
        }
    }

    get(req, res) {
        if(req.params.id) {
            const text = this.todoList.get(req.params.id);
            res.send({text: text});
        } else {
            res.send({error: "No 'id' field present. Should be."});
        }
    }

    remove(req, res) {
        if(req.params.id) {
            const text = this.todoList.remove(req.params.id);
            res.send({removed: true});
        } else {
            res.send({error: "No 'id' field present. Should be."});
        }
    }
}
