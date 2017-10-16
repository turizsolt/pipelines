import * as chai from 'chai';
const expect = chai.expect;
import TodoListController from "../src/todo-list-controller";
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe("TodoListController", () => {

    it("Get all todoes", () => {
        const todoListController = new TodoListController();
        const responseSend = sinon.spy();
        todoListController.getAll(null, {send: responseSend});

        expect(responseSend).calledWith([]);
    });

    it("Get a todo", () => {
        const todoListController = new TodoListController();
        const responseSend = sinon.spy();
        todoListController.get({params:{id:1}}, {send: responseSend});

        expect(responseSend).calledWith({ text: undefined });
    });
});
