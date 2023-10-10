import { expect, test } from "bun:test"
import { transformArrayToLinkedList } from "../src/services/transformArrayToLinkedList"
import { LinkedList } from "../src/structures/LinkedList"

test("transformArrayToLinkedList test", () => {
  expect(transformArrayToLinkedList([1])).toEqual(new LinkedList(1))
  expect(transformArrayToLinkedList(null)).toEqual({
    errorMessage: "Invalid javascript Array",
  })
})
