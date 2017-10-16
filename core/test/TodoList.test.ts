import {expect} from 'chai';
import * as mocha from 'mocha';
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";
import TodoList from "../src/TodoList";
import {myContainer} from "../../inversify.config";

describe("TodoList", () => {
    const closeTheDoor = "Close the door.";
    const bringTheGarbageOut = "Bring the garbage out.";

    it("Creating a TodoList", () => {
        let todoList = myContainer.get<TodoList>(TYPES.TodoList);
        expect(todoList).not.null;
    });

    it("Adding a todo", () => {
        const todoList = myContainer.get<TodoList>(TYPES.TodoList);
        const returnedId = todoList.add(closeTheDoor);
        expect(returnedId).equal(0);
    });

    it("Adding multiple todoes", () => {
        const todoList = myContainer.get<TodoList>(TYPES.TodoList);
        todoList.add(bringTheGarbageOut);
        const returnedId = todoList.add(closeTheDoor);
        expect(returnedId).equal(1);
    });

    it("Geting a todo", () => {
        const todoList = myContainer.get<TodoList>(TYPES.TodoList);
        const returnedId = todoList.add(bringTheGarbageOut);
        const itemGotBack = todoList.get(returnedId);
        expect(itemGotBack).equal(bringTheGarbageOut);
    });

    it("Removing a todo", () => {
        const todoList = myContainer.get<TodoList>(TYPES.TodoList);
        const returnedId = todoList.add(bringTheGarbageOut);
        todoList.remove(returnedId);
        const itemGotBack = todoList.get(returnedId);
        expect(itemGotBack).null;
    });

    it("Get all the todoes", () => {
        const todoList = myContainer.get<TodoList>(TYPES.TodoList);
        todoList.add(bringTheGarbageOut);
        todoList.add(closeTheDoor);
        const itemsGotBack = todoList.getAll();
        expect(itemsGotBack).deep.equal([{id:0,text:bringTheGarbageOut}, {id:1,text:closeTheDoor}]);
    });

    it("Get all the todoes after removal", () => {
        const todoList = myContainer.get<TodoList>(TYPES.TodoList);
        todoList.add(bringTheGarbageOut);
        const returnedId = todoList.add(closeTheDoor);
        todoList.add(bringTheGarbageOut);
        todoList.remove(returnedId);
        const itemsGotBack = todoList.getAll();
        expect(itemsGotBack).deep.equal([{id:0,text:bringTheGarbageOut}, {id:2,text:bringTheGarbageOut}]);
    });
});
