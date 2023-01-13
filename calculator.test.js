const {
  appendToDisplay,
  performOperation,
  add,
  subtract,
  multiply,
  divide,
  clearDisplay
} = require('./script.js')

//Mock function
// function mockAppendToDisplay(value, display) {
//   let displayValue = display.value;
//   if (displayValue === "0") {
//     displayValue = value;
//   } else {
//     displayValue += value;
//   }
//   display.value = displayValue;
// }

// describe("appendToDisplay", () => {
//   it("appends value to the display", () => {
//     const display = { value: "0" };
//     mockAppendToDisplay("5", display);
//     expect(display.value).toBe("5");
//   });
// });

// describe("clearDisplay", () => {
//   it("clears the display", () => {
//     clearDisplay();
//     expect(display.value).toBe("0");
//   });
// });

describe("add", () => {
  it("adds two values", () => {
    expect(add("5", "5")).toBe("10");
  });
  it("adds a decimal value", () => {
    expect(add("5.5", "5")).toBe("10.5");
  });
  it("handles adding a negative value", () => {
    expect(add("-5", "5")).toBe("0");
  });
  it("handles adding by a large number", () => {
    expect(add("1000", "5")).toBe("1005");
  });
  it("handles adding a negative number", () => {
    expect(add("5", "-5")).toBe("0");
  });
  it("handles adding a decimal value by a decimal value", () => {
    expect(add("5.5", "2.5")).toBe("8");
  });
  it("handles adding a large decimal value", () => {
    expect(add("10000.5", "5")).toBe("10005.5");
  });
  it("handles adding by zero", () => {
    expect(add("5", "0")).toBe("5");
  });
  it("handles adding a negative decimal value", () => {
    expect(add("-5.5", "5")).toBe("-0.5");
  });
  it("handles adding a negative decimal value by a negative value", () => {
    expect(add("-5.5", "-5")).toBe("-10.5");
  });
  it("handles adding a large negative decimal value by a large value", () => {
    expect(add("-10000.5", "5")).toBe("-9995.5");
  });
  it("handles adding a large negative decimal value by a large negative value", () => {
    expect(add("-10000.5", "-5")).toBe("-10005.5");
  });
  it("handles adding a large decimal value by a large decimal value", () => {
    expect(add("10000.5", "2.5")).toBe("10003");
  });
    it("handles adding a large decimal value by a negative decimal value", () => {
    expect(add("10000.5", "-2.5")).toBe("9998");
  });
  it("handles adding a large negative decimal value by a large decimal value", () => {
    expect(add("-10000.5", "2.5")).toBe("-9998");
  });
  it("handles adding a large negative decimal value by a negative decimal value", () => {
    expect(add("-10000.5", "-2.5")).toBe("-10003");
  });
});


describe("subtract", () => {
  it("subtracts two values", () => {
    expect(subtract("5", "5")).toBe("0");
  });
  it("subtracts a decimal value", () => {
    expect(subtract("5.5", "5")).toBe("0.5");
  });
  it("handles subtracting a negative value", () => {
    expect(subtract("-5", "5")).toBe("-10");
  });
  it("handles subtracting by a large number", () => {
    expect(subtract("1000", "5")).toBe("995");
  });
  it("handles subtracting a negative number", () => {
    expect(subtract("5", "-5")).toBe("10");
  });
  it("handles subtracting a decimal value by a decimal value", () => {
    expect(subtract("5.5", "2.5")).toBe("3");
  });
  it("handles subtracting a large decimal value", () => {
    expect(subtract("10000.5", "5")).toBe("9995.5");
  });
  it("handles subtracting by zero", () => {
    expect(subtract("5", "0")).toBe("5");
  });
  it("handles subtracting a negative decimal value", () => {
    expect(subtract("-5.5", "5")).toBe("-10.5");
  });
  it("handles subtracting a negative decimal value by a negative value", () => {
    expect(subtract("-5.5", "-5")).toBe("-0.5");
  });
    it("handles subtracting a large negative decimal value by a large value", () => {
    expect(subtract("-10000.5", "5")).toBe("-10005.5");
  });
  it("handles subtracting a large negative decimal value by a large negative value", () => {
    expect(subtract("-10000.5", "-5")).toBe("-9995.5");
  });
  it("handles subtracting a large decimal value by a large decimal value", () => {
    expect(subtract("10000.5", "2.5")).toBe("9998");
  });
  it("handles subtracting a large decimal value by a negative decimal value", () => {
    expect(subtract("10000.5", "-2.5")).toBe("10003");
  });
  it("handles subtracting a large negative decimal value by a large decimal value", () => {
    expect(subtract("-10000.5", "2.5")).toBe("-10003");
  });
  it("handles subtracting a large negative decimal value by a negative decimal value", () => {
    expect(subtract("-10000.5", "-2.5")).toBe("-9998");
  });
});


describe("multiply", () => {
  it("multiplies two values", () => {
    expect(multiply("5", "5")).toBe("25");
  });
  it("multiplies a decimal value", () => {
    expect(multiply("5.5", "5")).toBe("27.5");
  });
  it("handles multiplying a negative value", () => {
    expect(multiply("-5", "5")).toBe("-25");
  });
  it("handles multiplying by a large number", () => {
    expect(multiply("1000", "5")).toBe("5000");
  });
  it("handles multiplying by a negative number", () => {
    expect(multiply("5", "-5")).toBe("-25");
  });
  it("handles multiplying a decimal value by a decimal value", () => {
    expect(multiply("5.5", "2.5")).toBe("13.75");
  });
  it("handles multiplying a large decimal value", () => {
    expect(multiply("10000.5", "5")).toBe("50002.5");
  });
  it("handles multiplying by zero", () => {
    expect(multiply("5", "0")).toBe("0");
  });
  it("handles multiplying a negative decimal value", () => {
    expect(multiply("-5.5", "5")).toBe("-27.5");
  });
  it("handles multiplying a large negative decimal value by a large value", () => {
    expect(multiply("-10000.5", "5")).toBe("-50002.5");
  });
  it("handles multiplying a large negative decimal value by a large negative value", () => {
    expect(multiply("-10000.5", "-5")).toBe("50002.5");
  });
  it("handles multiplying a large decimal value by a large decimal value", () => {
    expect(multiply("10000.5", "2.5")).toBe("25001.25");
  });
  it("handles multiplying a large decimal value by a negative decimal value", () => {
    expect(multiply("10000.5", "-2.5")).toBe("-25001.25");
  });
  it("handles multiplying a large negative decimal value by a large decimal value", () => {
    expect(multiply("-10000.5", "2.5")).toBe("-25001.25");
  });
  it("handles multiplying a large negative decimal value by a negative decimal value", () => {
    expect(multiply("-10000.5", "-2.5")).toBe("25001.25");
  });
});


describe("divide", () => {
  it("divides two values", () => {
    expect(divide("5", "5")).toBe("1");
  });
  it("divides a decimal value", () => {
    expect(divide("5.5", "5")).toBe("1.1");
  });
  it("handles dividing by a decimal value", () => {
    expect(divide("5", "2.5")).toBe("2");
  });
  it("handles dividing a negative value", () => {
    expect(divide("-5", "5")).toBe("-1");
  });
  it("handles dividing by a large number", () => {
    expect(divide("1000", "5")).toBe("200");
  });
  it("handles dividing by a negative number", () => {
    expect(divide("5", "-5")).toBe("-1");
  });
  it("handles dividing a decimal value by a decimal value", () => {
    expect(divide("5.5", "2.5")).toBe("2.2");
  });
  it("handles dividing a large decimal value", () => {
    expect(divide("10000.5", "5")).toBe("2000.1");
  });
  it("handles dividing a zero by a non-zero value", () => {
    expect(divide("0", "5")).toBe("0");
  });
  it("handles dividing a non-zero value by zero", () => {
    expect(divide("5", "0")).toBe("error");
  });
  it("handles dividing a negative decimal value", () => {
    expect(divide("-5.5", "5")).toBe("-1.1");
  });
  it("handles dividing a negative decimal value by a negative value", () => {
    expect(divide("-5.5", "-5")).toBe("1.1");
  });
  it("handles dividing a large negative decimal value by a large value", () => {
    expect(divide("-10000.5", "5")).toBe("-2000.1");
  });
  it("handles dividing a large negative decimal value by a large negative value", () => {
    expect(divide("-10000.5", "-5")).toBe("2000.1");
  });
  it("handles dividing a large decimal value by a large decimal value", () => {
    expect(divide("10000.5", "2.5")).toBe("4000.2");
  });
  it("handles dividing a large decimal value by a negative decimal value", () => {
    expect(divide("10000.5", "-2.5")).toBe("-4000.2");
  });
  it("handles dividing a large negative decimal value by a large decimal value", () => {
    expect(divide("-10000.5", "2.5")).toBe("-4000.2");
  });
  it("handles dividing a large negative decimal value by a negative decimal value", () => {
    expect(divide("-10000.5", "-2.5")).toBe("4000.2");
  });
});


