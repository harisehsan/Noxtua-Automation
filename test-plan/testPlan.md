# Test Plan: Counter Component

## Overview

This test plan defines the end-to-end test cases for the Counter component in a web application. The counter must:
- Only show positive values (≥ 0)
- Support increment and decrement via buttons
- Never display a negative number

Tests are implemented using Cypress and follow the Page Object Model (POM) structure.

---

## Test Cases

### ✅ TC-01: Initial Counter State Check

- **Description**: Counter should display `0` on load
- **Steps**:
    1. Visit the counter page
- **Expected Result**: Counter reads `0`

---

### ✅ TC-02: Increment Functionality Check

- **Description**: Clicking "Increment" should increase the counter
- **Steps**:
    1. Click increment button once
- **Expected Result**: Counter reads `1`

---

## Edge Cases

### ✅ TC-03: Negative Values Check

- **Description**: Counter should not go below `0`
- **Steps**:
    1. Click decrement button once
- **Expected Result**: Counter remains `0`

---

### ✅ TC-04: Multiple Increments and Decrements Check

- **Description**: Counter should handle multiple button clicks correctly
- **Steps**:
    1. Click increment button 3 times
    2. Click decrement button 2 times
- **Expected Result**: Counter reads `1`

---

### ✅ TC-05: Large Volume Operations Check

- **Description**: Counter should handle a high number of operations
- **Steps**:
    1. Click increment button 100 times
    2. Click decrement button 50 times
- **Expected Result**: Counter reads `50`

---

### Note: All the above stated testcases are implemented in 'cypress/e2e/counter.spec.cy.ts'

## Tools & Frameworks

- **Test Framework**: Cypress
- **Test Pattern**: Page Object Model (POM)
- **Automation Language**: TypeScript
- **Environment**: `http://localhost:3000`

---

## Notes

- All selectors (`#counter`, `#increment-btn`, `#decrement-btn`) are stable and ID-based.
- No backend or state persistence is required for these tests.
- Tests are suitable for CI execution via GitHub Actions.

---

