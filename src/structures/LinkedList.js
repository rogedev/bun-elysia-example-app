export class LinkedList {
  constructor(head = null) {
    this.head = new Node(head)
  }
  append(val) {
    let value = new Node(val)
    let node = this.head
    if (node == null) {
      this.head = value
      return
    }
    while (node.next) {
      node = node.next
    }
    node.next = value
  }
  static fromArray(arr) {
    const myList = new LinkedList(arr[0])
    for (let i = 1; i < arr.length; i++) {
      myList.append(arr[i])
    }
    return myList
  }
}

export class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
