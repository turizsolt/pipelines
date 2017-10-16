interface TodoList {
    add(itemName: string): number;
    get(id: number): string ;
    remove(id: number);
    getAll(): string[];
}

export default TodoList;