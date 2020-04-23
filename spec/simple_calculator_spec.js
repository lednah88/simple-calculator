const { add, multiply } = require("../src/simple_calculator")
describe("add", function() {
    it("should add numbers", function() {
        expect(add(1, 2)).toEqual(3)
    })
    it("should add numbers", function() {
        expect(add(-1, -1)).toEqual(-2)
    })
    it("should add numbers", function() {
        expect(add(1, 2, 3, 4, 5)).toEqual(15)
    })

})
describe("multiply", function() {
    it("should multiply numbers", function() {
        expect(multiply(1, 2)).toEqual(2)
    })
    it("should add numbers", function() {
        expect(multiply(-1, 2)).toEqual(-2)
    })
    it("should add numbers", function() {
        expect(multiply(1, 2, 3, 4, 5)).toEqual(120)
    })
})