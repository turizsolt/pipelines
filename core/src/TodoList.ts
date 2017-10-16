interface TodoList {
    add(itemName: string): number;
    get(id: number): string ;
    remove(id: number);
    getAll(): {id: number, text:string}[];
}

export default TodoList;