import {expect} from 'chai';
import TodoList from "../src/TodoList";

describe("TodoList", () => {
    const closeTheDoor = "Close the door.";
    const bringTheGarbageOut = "Bring the garbage out.";

    it("Creating a TodoList", () => {
        let todoList = new TodoList();
        expect(todoList).not.null;
    });

    it("Adding a todo", () => {
        const todoList = new TodoList();
        const returnedId = todoList.add(closeTheDoor);
        expect(returnedId).equal(0);
    });

    it("Adding multiple todoes", () => {
        const todoList = new TodoList();
        todoList.add(bringTheGarbageOut);
        const returnedId = todoList.add(closeTheDoor);
        expect(returnedId).equal(1);
    });

    it("Geting a todo", () => {
        const todoList = new TodoList();
        const returnedId = todoList.add(bringTheGarbageOut);
        const itemGotBack = todoList.get(returnedId);
        expect(itemGotBack).equal(bringTheGarbageOut);
    });

    it("Removing a todo", () => {
        const todoList = new TodoList();
        const returnedId = todoList.add(bringTheGarbageOut);
        todoList.remove(returnedId);
        const itemGotBack = todoList.get(returnedId);
        expect(itemGotBack).null;
    });

    it("Get all the todoes", () => {
        const todoList = new TodoList();
        todoList.add(bringTheGarbageOut);
        todoList.add(closeTheDoor);
        const itemsGotBack:string[] = todoList.getAll();
        expect(itemsGotBack).deep.equal([bringTheGarbageOut, closeTheDoor]);
    });

    it("Get all the todoes after removal", () => {
        const todoList = new TodoList();
        todoList.add(bringTheGarbageOut);
        const returnedId = todoList.add(closeTheDoor);
        todoList.add(bringTheGarbageOut);
        todoList.remove(returnedId);
        const itemsGotBack:string[] = todoList.getAll();
        expect(itemsGotBack).deep.equal([bringTheGarbageOut, bringTheGarbageOut]);
    });
});
