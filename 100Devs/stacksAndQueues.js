// https://youtu.be/1AJ4ldcH2t4

// STACK

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }
    
    push(element) {
        this.size++
        this.storage[this.size] = element
    }
    
    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }
    
    peek() {
        return this.storage[this.size]
    }
}

const stack = new Stack()
// push
stack.push('dog')
stack.push('cat')
stack.push('bear')

console.log(stack)

// pop
console.log(stack.pop())

// peek
stack[stack.length - 1]

console.log(stack)
console.log(stack.peek())


// QUEUE

class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    
    enqueue(element){
        this.storage[this.tail] = element
        this.tail++
    }
    
    dequeue(){
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}


const queue = new Queue()

// enqueue
queue.enqueue('seahorse')
queue.enqueue('dolphin')
queue.enqueue('whale')

console.log(queue)

// dequeue
queue.dequeue()

console.log(queue)
