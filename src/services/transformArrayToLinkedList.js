import { LinkedList } from "../structures/LinkedList"

export function transformArrayToLinkedList(arr) {
  if (!Array.isArray(arr)) return { errorMessage: "Invalid javascript Array" }
  return LinkedList.fromArray(arr)
}
