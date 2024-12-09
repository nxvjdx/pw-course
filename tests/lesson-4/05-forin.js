// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng

const student = { name: "Alex", age: 10 };

for (let key in student) {
  console.log(`${key}=${student[key]}`);
}


// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng

const student = { name: "Alex", age: 10, salary: 20 };
let total = 0;

for (let key in student) {
  if (typeof student[key] === "number") {
    total += student[key];
  }
}

console.log(`Tổng các giá trị số: ${total}`);


// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng

const student = { name: "Alex", age: 10 };
const keys = [];

for (let key in student) {
  keys.push(key);
}

console.log(keys);
