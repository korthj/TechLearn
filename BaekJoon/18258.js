//18258번 큐2 문제
const filePath = process.platform === "linux" ? "/dev/stdin" : "testInput.txt";
const [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(v => v.split(" "));

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };
    
    push(val) {
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.head.next = this.tail;
        }else{
            this.tail.next = node;
        };
        this.tail = node;
        this.size += 1;
    };

    getSize() {
        return this.size;
    };

    pop() {
        if(this.size > 2){
            const val = this.head.val;
            const newHead = this.head.next;
            this.head = newHead;
            this.size -= 1;
            return val;
        }else if(this.size === 2){
            const val = this.head.val;
            const newHead = this.head.next;
            this.head = newHead;
            this.tail = newHead;
            this.size -= 1;
            return val;
        }else if(this.size === 1){
            const val = this.head.val;
            this.head = null;
            this.tail = null;
            this.size -= 1;
            return val;
        }else{
            return -1;
        };
    };

    empty() {
        return this.size ? 0 : 1;
    };

    front() {
        return this.head ? this.head.val : -1;
    };

    back() {
        return this.tail ? this.tail.val : -1;
    };
};

let result = '';
const queue = new Queue();

for(let i = 0; i < N; i++){
    //
    switch(input[i][0]){
        case "push":
            queue.push(input[i][1]);
            break;
        case "pop":
            result += queue.pop() + '\n';
            break;
        case "size":
            result += queue.getSize() + '\n';
            break;
        case "empty":
            result += queue.empty() + '\n';
            break;
        case "front":
            result += queue.front() + '\n';
            break;
        case "back":
            result += queue.back() + '\n';
            break;
    };
};


console.log(result);

