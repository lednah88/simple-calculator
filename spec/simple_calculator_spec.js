const { add, multiply } = require("../src/simple_calculator")
describe("add", function() {
    it("should add two numbers", function() {
        expect(add(1, 2)).toEqual(3)
    })
    it("should multiple numbers", function() {
        expect(add(1, 2)).toEqual(3)
    })

})
describe("multiply", function() {
    it("should multiply two numbers", function() {
        expect(multiply(1, 2)).toEqual(2)
    })
    it("should multiply multiple numbers", function() {
        expect(multiply(1, 2)).toEqual(2)
    })

})