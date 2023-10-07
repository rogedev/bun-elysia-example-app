import { expect, test} from "bun:test";
import { transformArrayToLinkedList } from "../src/services/transformArrayToLinkedList";
import { LinkedList } from "../src/structures/LinkedList";

test('transformArrayToLinkedList test', () => {
    const given = [1]
    const expected =  new LinkedList(1)
    expect(transformArrayToLinkedList(given)).toEqual(expected)
})