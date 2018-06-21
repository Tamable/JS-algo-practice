const Node = (data) => {
  this.data = data;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    let node = new Node(val);
    let currentNode = this.head;

    if (!currentNode) {
      this.head.next = node;
      node.next = this.tail;
    }
  }

}
