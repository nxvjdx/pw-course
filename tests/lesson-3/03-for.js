// 1. Tính tổng từ 1 đến 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Tổng từ 1 đến 100 là:", sum);


// 2. In bảng cửu chương từ 2 đến 9

for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }

  
  // 3. Tạo mảng chứa các số lẻ từ 1 đến 99

  const oddNumbers = [];
for (let i = 1; i < 100; i += 2) {
  oddNumbers.push(i);
}
console.log("Mảng các số lẻ từ 1 đến 99:", oddNumbers);


// 4. In 10 email dựa trên tên người dùng và số thứ tự

const emails = [];
for (let i = 1; i <= 10; i++) {
  emails.push(`user-${i}@example.com`);
}
console.log("Danh sách email:", emails);


// 5. Tính tổng doanh thu của 12 tháng

const revenue = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 150 },
    { month: 4, total: 250 },
    { month: 5, total: 300 },
    { month: 6, total: 200 },
    { month: 7, total: 180 },
    { month: 8, total: 230 },
    { month: 9, total: 170 },
    { month: 10, total: 210 },
    { month: 11, total: 190 },
    { month: 12, total: 220 },
  ];
  
  let totalRevenue = 0;
  for (const record of revenue) {
    totalRevenue += record.total;
  }
  
  console.log("Tổng doanh thu của 12 tháng là:", totalRevenue);
  