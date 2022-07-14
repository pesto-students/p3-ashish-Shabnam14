const createStack = () => {
    items: [];
    return ({
       push(item) {
        this.items.push(item);
        //console.log("push operation");
        },
        pop() {
            return this.items.pop();
        }
    });
};
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items;