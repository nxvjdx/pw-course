// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước

const arr = [1, 2, 3, 4, 3, 55, 23];
const value = 3;

let firstIndex = -1;
let lastIndex = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
    if (firstIndex === -1) {
      firstIndex = i;
    }
    lastIndex = i;
  }
}

console.log(`Vị trí đầu tiên: ${firstIndex}`);
console.log(`Vị trí cuối cùng: ${lastIndex}`);


// 2. Tạo mảng chứa các ký tự nghịch đảo từ một chuỗi đã cho

const str = "Playwright";
const reversedArray = [];

for (let char of str) {
  reversedArray.unshift(char);
}

console.log(reversedArray);


// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng

const arr = [1, 2, 3, 1, 2, 4, 5];
const uniqueElements = [];

for (let num of arr) {
  if (arr.indexOf(num) === arr.lastIndexOf(num)) {
    uniqueElements.push(num);
  }
}

console.log(uniqueElements);
