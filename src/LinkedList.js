import { Node } from "./Node"

export class LinkedList {
  constructor(head = null) {
    this.head = head
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
    const myList = new LinkedList()
    for (const val of arr) myList.append(val)
    return myList
  }
}
