const fs = require("fs");

function decodeValue(base, value) {
  return parseInt(value, base);
}

function lagrangeInterpolation(points) {
  let c = 0;

  for (let i = 0; i < points.length; i++) {
    let xi = points[i][0];
    let yi = points[i][1];

    let productTerm = yi;
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        let xj = points[j][0];
        productTerm *= (0 - xj) / (xi - xj);
      }
    }
    c += productTerm;
  }
  return Math.round(c);
}

function findConstantTerm(fileName) {
  const data = fs.readFileSync(fileName, "utf8");
  const jsonData = JSON.parse(data);

  const k = jsonData.keys.k;
  const n = jsonData.keys.n;
  const m = k - 1;

  const points = [];
  for (const [key, obj] of Object.entries(jsonData)) {
    if (key === "keys") continue;
    const x = parseInt(key, 10);
    const y = decodeValue(parseInt(obj.base, 10), obj.value);
    points.push([x, y]);
  }

  if (points.length < k) {
    throw new Error(
      `Not enough points to solve the polynomial. Minimum required is ${k}, but got ${points.length}`
    );
  }

  const selectedPoints = points.slice(0, k);
  return lagrangeInterpolation(selectedPoints);
}

function main() {
  const files = ["input.json", "input1.json"];
  
  try {
    const sec1 = findConstantTerm(files[0]);
    console.log("Secret value for Test Case 1:", sec1);

    const sec2 = findConstantTerm(files[1]);
    console.log("Secret value for Test Case 2:", sec2);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
