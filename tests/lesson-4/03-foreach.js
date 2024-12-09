// 1. In ra tất cả các phần tử của một mảng.

const arr = [1, 2, 3];

arr.forEach((element) => {
  console.log(element);
});


// 2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng.

const arr = [1, 2, 3];
let total = 0;
let max = arr[0];
let min = arr[0];

arr.forEach((element) => {
  total += element;
  if (element > max) max = element;
  if (element < min) min = element;
});

console.log(`Tổng: ${total}`);
console.log(`Giá trị lớn nhất: ${max}`);
console.log(`Giá trị nhỏ nhất: ${min}`);


// 3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi

const arr = [1, 2, 3];
const doubledArr = [];

arr.forEach((element) => {
  doubledArr.push(element * 2);
});

console.log(doubledArr);


