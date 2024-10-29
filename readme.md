## Problem Statement

```
Shamir's Secret Sharing - Constant Term Calculator

This project implements a simplified version of Shamir's Secret Sharing algorithm to find the constant term \( c \) of a polynomial using Lagrange interpolation. The input is provided in JSON format, containing points in different bases.

-->Features
- Decodes values from different bases.
- Utilizes Lagrange interpolation to compute the polynomial's constant term.

-->Installation
Clone the repository:
https://github.com/gowthamreddy17/catalog-assesment.git
```

## Usage

Create JSON files (`input.json`, `input1.json`) in the project directory with the required format.

Run the script to find the constant terms:
```
node index.js
```

## Input JSON Format

The input JSON should follow this structure:

**input.json**
```json
{
  "keys": {
    "n": 4,
    "k": 3
  },
  "1": {
    "base": "10",
    "value": "4"
  },
  "2": {
    "base": "2",
    "value": "111"
  },
  "3": {
    "base": "10",
    "value": "12"
  },
  "6": {
    "base": "4",
    "value": "213"
  }
}
```

## Example

For the given input files, the script will output:
```
Secret value for Test Case 1: 3
Secret value for Test Case 2: 79836264046592
```


![image](https://github.com/user-attachments/assets/521cdeab-2437-44f8-a00e-cef05403a0f6)

