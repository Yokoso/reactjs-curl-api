import { multiply, makeUpperCase } from "./testFunctions";

test("multiply", () => {
    expect(multiply(2, 5)).toBe(10)
});

test("makeUpperCase", () => {
    expect(makeUpperCase("hi")).toBe("HI");
}); 