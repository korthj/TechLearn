//2164번 카드2 문제, 클래스(Class), 링크드리스트(LinkedList)
// let input = require('fs').readFileSync(0).toString().trim();
// input = Number(input);
// let count = 0;
// while (input > 2 ** count) {
//   count++;
// }
// let gap = 2 ** count - input;
// console.log(2 ** count - gap * 2);

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'testInput.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split("\n");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    push(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        }else{
            //링크드리스트 이전 링크의 다음 값을 현재 노드를, 현재 노드의 이전 링크 값에 이전 테일 링크를 넣는다.
            this.tail.next = node;
            node.prev = this.tail;
        };

        this.tail = node;
        this.length++;
        return node;
    };

    getHead() { 
        return this.head.value;
    };

    removeHead() { 
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    };

    getSize() { 
        return this.length;
    };
};

const list = new LinkedList();

for(let i = 1; i <= input; i++) list.push(i);

for(;;){
    if(list.getSize() <= 1) break;
    list.removeHead();
    list.push(list.getHead());
    list.removeHead();
};

console.log(list.getHead());