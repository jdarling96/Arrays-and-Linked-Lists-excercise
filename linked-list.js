/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.next = null;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let tailNode = this.tail;
    try {
      if (!this.length) {
        throw new Error("list is empty");
      } else if (currentNode === tailNode) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return currentNode.val;
      } else {
        while (currentNode) {
          if (currentNode.next.val === tailNode.val) {
            this.tail = currentNode;
            this.tail.next = null;
            this.length -= 1;
            return tailNode.val;
          }
          currentNode = currentNode.next;
        }
      }
    } catch (error) {
      return error;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let currentNode = this.head;
    let tailNode = this.tail;
    try {
      if (!this.length) {
        throw new Error("list is empty");
      } else if (currentNode === tailNode) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return currentNode.val;
      } else {
        let secondNode = currentNode.next;
        this.head = secondNode;
        this.length -= 1;
        return currentNode.val;
      }
    } catch (error) {
      return error;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;

    try {
      if (idx > this.length || idx < 0) {
        throw new Error("Index is invalid");
      } else {
        for (let i = 0; i < idx; i++) {
          currentNode = currentNode.next;
        }
      }
      return currentNode.val;
    } catch (error) {
      return error;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;

    try {
      if (idx > this.length || idx < 0) {
        throw new Error("Index is invalid");
      } else {
        for (let i = 0; i < idx; i++) {
          currentNode = currentNode.next;
        }
      }
      currentNode.val = val;
      let getIdx = this.getAt(idx);
      getIdx.val = val;
    } catch (error) {
      return error;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let currentNode = this.head;

    try {
      if (idx > this.length || idx < 0) {
        throw new Error("Index is invalid");
      }
      if (this.length === 1) {
        this.unshift(val);
      }
      if (idx === this.length || !this.length) {
        this.push(val);
      } else {
        for (let i = 0; i < idx; i++) {
          if (i === idx - 1) {
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.length += 1;
          }
          currentNode = currentNode.next;
        }
      }
    } catch (error) {
      return error;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let beforeNode;

    try {
      if (idx > this.length || idx < 0) {
        throw new Error("Index is invalid");
      }
      if (this.length === 1) {
        this.shift();
      }
      if (idx === this.length) {
        this.pop();
      } else {
        for (let i = 0; i <= idx; i++) {
          if (i === idx - 1) {
            beforeNode = currentNode;
          }
          if (i === idx) {
            beforeNode.next = currentNode.next;
          }
          currentNode = currentNode.next;
        }
      }
    } catch (error) {
      return error;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head
      if(!this.length){
        return 0
      }
      let sum = 0
      while(currentNode){
       sum += currentNode.val
        currentNode = currentNode.next

      }
      return sum / this.length

      
    
  }
}

module.exports = LinkedList;
