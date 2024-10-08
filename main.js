class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    let currentNode;

    if(!this.first) {
      this.first = node;
    } else {
      currentNode = this.first;

      while(currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = node;
    }

    this.length++;
  }

  prepend(value) {
    this.first = new Node(value, this.first);
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.first;
  }

  tail() {
    let currentNode = this.first;

    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    let currentNode = this.first;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    let currentNode = this.first;

    for (let i = 1; i < this.length; i++) {
      
      if (i === this.length - 1) {
        currentNode.nextNode = null;
      }
      
      currentNode = currentNode.nextNode;
    }

    this.length--;
  }

  contains(value) {
    let currentNode = this.first;
    let doesContain = false;
    
    while(currentNode.nextNode) {
      if (currentNode.value === value) {
        doesContain = true;
      }
      currentNode = currentNode.nextNode;
    }

    return doesContain;
  }

  find(value) {
    let currentNode = this.first;
    let index = null;
    
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === value) {
        index = i;
      }
      currentNode = currentNode.nextNode;
    }

    return index;
  }

  toString() {
    let currentNode = this.first;
    let listString = '';

    while(currentNode) {
      listString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    
    listString += null;

    return listString;
  }
  
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());