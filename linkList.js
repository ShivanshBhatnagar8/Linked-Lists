class Node1 {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  size() {
    return this.length;
  }
  prependValue(value) {
    let node = new Node1(value);
    node.nextNode = this.head;
    this.head = node;
    if (this.tail === null) {
      this.tail = this.head;
    }
    this.length++;
  }

  appendValue(value) {
    if (this.tail === null) {
      this.appendValue(value);
      return;
    }
    let node = new Node1(value);
    this.tail.nextNode = node;
    this.tail = node;
    this.length++;
  }
  getHead() {
    return this.head.value;
  }
  getTail() {
    if (!this.head) {
      return;
    }

    return this.tail.value;
  }

  at(index) {
    let temp = new Node1();
    temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp;
  }
  pop() {
    let temp = this.at(this.length - 2);
    let val = this.tail.value;
    this.tail = temp;
    this.tail.nextNode = null;
    this.length--;
    return val;
  }
  contains(value) {
    let temp = new Node1();
    temp = this.head;
    let contain = false;
    while (temp !== null) {
      if (temp.value === value) {
        contain = true;
      }
      temp = temp.nextNode;
    }
    return contain;
  }

  find(value) {
    let temp = new Node1();
    temp = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      if (temp.value === value) {
        return i;
      }
      temp = temp.nextNode;
    }
  }

  insertAt(index, value) {
    if (index === 0) {
      this.prependValue(value);
      return;
    }
    if (index === this.size - 1) {
      this.appendValue(value);
      return;
    }
    let temp = new Node1();
    temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.nextNode;
    }
    let newNode = new Node1(value, temp.nextNode);
    temp.nextNode = newNode;
    this.length++;
  }

  removeAt(index) {
    if (index === this.length - 1) {
      this.pop();
      return;
    }
    let temp = this.at(index - 1);
    let val = temp.nextNode.value;
    temp.nextNode = temp.nextNode.nextNode;
    return val;
  }

  toString() {
    let string = "";
    let temp = new Node1();
    temp = this.head;
    while (temp !== null) {
      string += temp.value + " " + "->" + " ";
      temp = temp.nextNode;
    }
    string += "null";
    console.log(`${string}`);
  }
}

let list = new LinkedList();
list.prependValue(4);
list.prependValue(5);
list.appendValue(6);
list.getHead();
list.getTail();
list.at(1);
list.contains(6);
list.insertAt(1, 9);
list.pop();
list.removeAt(1);
list.find(4);
list.size();
list.toString();
