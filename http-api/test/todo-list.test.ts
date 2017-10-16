import 'reflect-metadata';

import * as chai from 'chai';
const expect = chai.expect;
import TodoListController from "../src/todo-list-controller";
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import TodoList from "../../core/src/TodoList";
import {myContainer} from "../../inversify.config";
import {TYPES} from "../../types";

chai.use(sinonChai);

describe("TodoListController", () => {

    it("Get all todoes", () => {
        const todoList = {getAll: sinon.spy()};
        const responseSend = sinon.spy();

        const todoListController = new TodoListController(todoList as any);
        todoListController.getAll(null, {send: responseSend});

        expect(todoList.getAll).called;
        expect(responseSend).called;
    });

    it("Get a todo", () => {
        const todoListController = new TodoListController(myContainer.get<TodoList>(TYPES.TodoList));
        const responseSend = sinon.spy();
        todoListController.get({params:{id:1}}, {send: responseSend});

        expect(responseSend).calledWith({ text: undefined });
    });
});
