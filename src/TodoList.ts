export default class TodoList {
    private storage:string[];

    constructor(){
        this.storage = [];
    }

    public add(itemName: string): number {
        this.storage.push(itemName);
        return this.storage.length-1;
    }

    public get(id: number): string {
        return this.storage[id];
    }

    public remove(id: number) {
        this.storage[id] = null;
    }

    public getAll(): string[] {
        return this.storage.filter(x => x !== null);
    }
}
