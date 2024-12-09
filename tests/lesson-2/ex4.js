// a. Khai báo chiều cao của bạn (cm)
const heightInCm = 170;

// b. Tính cân nặng lý tưởng, tối đa, tối thiểu
const lastDigit = heightInCm % 100; // Lấy số lẻ của chiều cao
const idealWeight = (lastDigit * 9) / 10;
const maxWeight = lastDigit;
const minWeight = (lastDigit * 8) / 10;

// In kết quả trên cùng một dòng
console.log(
  `Cân nặng lý tưởng: ${idealWeight}kg, Cân nặng tối đa: ${maxWeight}kg, Cân nặng tối thiểu: ${minWeight}kg`
);
