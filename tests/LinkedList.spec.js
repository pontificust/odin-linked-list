import { beforeEach, describe, equal, expect, test } from "@jest/globals";
import { LinkedList } from "../src/LinkedList.js";

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe("head()", () => {
    test("returns undefined if the list is empty", () => {
      expect(list.head()).toEqual(undefined);
    });

    test("returns the value of the first node if the list is not empty", () => {
      list.append("alpha");
      expect(list.head()).toEqual("alpha");
    });
  });

  describe("tail()", () => {
    test("returns undefined if the list is empty", () => {
      expect(list.tail()).toEqual(undefined);
    });

    test("returns the value of the last node if the list is not empty", () => {
      list.append("alpha");
      expect(list.tail()).toEqual("alpha");
    });
  });

  describe("at()", () => {
    test("returns undefined if the list is empty", () => {
      expect(list.at(0)).toEqual(undefined);
    });

    test("returns undefined if there is no an element at the given index", () => {
      expect(list.at(1)).toEqual(undefined);
    });

    test("returns the value of the node at the given index", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      expect(list.at(2)).toEqual("gamma");
    });

    test("return undefined on a negative index", () => {
      list.append("alpha");
      list.append("gamma");
      expect(list.at(-1)).toEqual(undefined);
    });
  });

  describe("append(value)", () => {
    test("add a node to the empty list, it becomes a head", () => {
      list.append("alpha");
      expect(list.head()).toEqual("alpha");
      expect(list.firstNode.nextNode).toBeNull();
    });

    test("add a node to the not empty list, it becomes a tail", () => {
      list.append("beta");
      list.append("gamma");
      expect(list.tail()).toEqual("gamma");
      expect(list.firstNode.nextNode.value).toEqual("gamma");
    });
  });

  describe("prepend(value)", () => {
    test("add a node to a list, it becomes a head", () => {
      list.prepend("alpha");
      expect(list.head()).toEqual("alpha");
    });

    test("add a node to a list, it becomes a head", () => {
      list.prepend("beta");
      list.prepend("gamma");
      expect(list.head()).toEqual("gamma");
      expect(list.tail()).toEqual("beta");
      expect(list.firstNode.nextNode.value).toEqual("beta");
    });
  });

  describe("size()", () => {
    test("returns the length of a list", () => {
      list.append("alpha");
      expect(list.size()).toEqual(1);
    });

    test("returns the length of a list", () => {
      list.append("beta");
      list.append("gamma");
      list.append("gamma");
      list.append("gamma");
      list.append("gamma");
      list.append("gamma");
      list.append("gamma");
      list.append("gamma");
      expect(list.size()).toEqual(8);
    });
  });

  describe("pop()", () => {
    test("returns undefined it it's used on an empty list", () => {
      expect(list.pop()).toEqual(undefined);
    });

    test("removes the head node and returns its value", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      expect(list.pop()).toEqual("alpha");
      expect(list.head()).toEqual("beta");
    });
  });

  describe("contains(value)", () => {
    test("returns true if the list contains the value", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      expect(list.contains("alpha")).toEqual(true);
    });

    test("returns false if the list doesn't contain the value", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      expect(list.contains("theta")).toEqual(false);
    });
  });

  describe("findIndex(value)", () => {
    test("returns the index of the node containing the value", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      expect(list.findIndex("gamma")).toEqual(2);
    });

    test("returns -1 if the list doen't contain the value", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      expect(list.findIndex("theta")).toEqual(-1);
    });
  });

  describe("toString()", () => {
    test("if the list is empty returns '' ", () => {
      expect(list.toString()).toEqual("");
    });

    test("returns string representation of the unempty list", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      expect(list.toString()).toEqual(
        "{ alpha } -> { beta } -> { gamma } -> null",
      );
    });
  });

  describe("insertAt(index, ...values)", () => {
    test("if the index is out of bounds throw a RangeError", () => {
      expect(() => list.insertAt(10, 'alpha', 'beta', 'gamma')).toThrow(RangeError);
    });

    test("if the index is 0", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      list.insertAt(0, 'theta', 'lambda', 'sigma')
            expect(list.toString()).toEqual(
        "{ theta } -> { lambda } -> { sigma } -> { alpha } -> { beta } -> { gamma } -> null",
      );
    });

        test("if the index equals the length of the list", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      list.insertAt(3, 'theta', 'lambda', 'sigma')
            expect(list.toString()).toEqual(
        "{ alpha } -> { beta } -> { gamma } -> { theta } -> { lambda } -> { sigma } -> null",
      );
    });

    test("insert new nodes with the given values at the given index", () => {
      list.append("alpha");
      list.append("beta");
      list.append("gamma");
      list.insertAt(1, 'theta', 'lambda', 'sigma')
      expect(list.toString()).toEqual(
        "{ alpha } -> { theta } -> { lambda } -> { sigma } -> { beta } -> { gamma } -> null",
      );
    });
  });
});
