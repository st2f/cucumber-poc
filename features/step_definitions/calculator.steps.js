import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";

let numbers = [];
let result = 0;

Given("I have entered {int}", function (number) {
    numbers.push(number);
});

When("I press add", function () {
    result = numbers.reduce((a, b) => a + b, 0);
});

Then("the result should be {int}", function (expected) {
    assert.strictEqual(result, expected);
});
