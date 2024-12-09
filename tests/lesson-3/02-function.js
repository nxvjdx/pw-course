// 1. Hàm tính chỉ số BMI

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) return "Thiếu cân";
    if (bmi < 25) return "Bình thường";
    if (bmi < 30) return "Thừa cân";
    return "Béo phì";
  }
  
  console.log(calculateBMI(weight, height));
  

// 2. Hàm chuyển đổi nhiệt độ

function convertTemperature(value, type) {
    if (type === "C") return value * 9 / 5 + 32; // Từ độ C sang độ F
    if (type === "F") return (value - 32) * 5 / 9; // Từ độ F sang độ C
    return "Loại nhiệt độ không hợp lệ";
  }
  
  console.log(convertTemperature(25, "C")); // Ví dụ: 77 (độ F)
  console.log(convertTemperature(77, "F")); // Ví dụ: 25 (độ C)


// 3. Hàm tính tổng các phần tử trong mảng

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4])); // Ví dụ tổng = 10
  

// 4. Hàm lọc số nguyên tố

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function filterPrimes(arr) {
    return arr.filter(isPrime);
  }
  
  console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7])); // Ví dụ các số nguyên tố trong mảng đã cho là: [2, 3, 5, 7]


// 5. Hàm cập nhật email người dùng

const users = [
    { name: "Dung", email: "dung@example.com" },
    { name: "Huy", email: "huy@example.com" },
  ];
  
  function updateEmail(name, newEmail) {
    for (const user of users) {
      if (user.name === name) {
        user.email = newEmail;
        break;
      }
    }
  }
  
  updateEmail("Dung", "dung.new@example.com");
  console.log(users);


// 6. Hàm tính điểm trung bình

function calculateAverage(students) {
    const total = students.reduce((sum, student) => sum + student.score, 0);
    return total / students.length;
  }
  
  const students = [
    { name: "Dung", score: 8 },
    { name: "Huy", score: 7 },
    { name: "Bon", score: 9 },
  ];
  
  console.log(calculateAverage(students)); // Ví dụ điểm trung bình = 8

  
// 7. Kiểm tra giá sản phẩm trong giỏ hàng

function allPricesGreaterThanZero(cart) {
    return cart.every(product => product.price > 0);
  }
  
  const cart = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
  ];
  
  console.log(allPricesGreaterThanZero(cart));


// 8. Kiểm tra cửa hàng còn mở không

function isStoreOpen(hour) {
    if (hour >= 9 && hour <= 21) return "Cửa hàng đang mở";
    return "Cửa hàng đã đóng";
  }
  
  console.log(isStoreOpen(10)); // Ví dụ: Cửa hàng đang mở
  console.log(isStoreOpen(22)); // Ví dụ: Cửa hàng đã đóng

  
// 9. Tính giá vé theo độ tuổi

function ticketPrice(age) {
    if (age < 5) return "Miễn phí";
    if (age < 18) return "50k";
    return "100k";
  }
  
  console.log(ticketPrice(4));  // Ví dụ: Miễn phí
  console.log(ticketPrice(10)); // Ví dụ: 50k
  console.log(ticketPrice(20)); // Ví dụ: 100k

  
// 10. In ra tên tháng

function getMonthName(month) {
    switch (month) {
      case 1: return "Tháng 1";
      case 2: return "Tháng 2";
      case 3: return "Tháng 3";
      case 4: return "Tháng 4";
      case 5: return "Tháng 5";
      case 6: return "Tháng 6";
      case 7: return "Tháng 7";
      case 8: return "Tháng 8";
      case 9: return "Tháng 9";
      case 10: return "Tháng 10";
      case 11: return "Tháng 11";
      case 12: return "Tháng 12";
      default: return "Số tháng không hợp lệ";
    }
  }
  
  console.log(getMonthName(5)); // Ví dụ: Tháng 5
  console.log(getMonthName(13)); // Ví dụ: Số tháng không hợp lệ
  
  
// 11. Phân loại điểm học sinh

function classifyGrade(score) {
    if (score >= 8) return "Giỏi";
    if (score >= 6.5) return "Khá";
    if (score >= 5) return "Trung bình";
    return "Yếu";
  }
  
  console.log(classifyGrade(7));  // Ví dụ: Khá
  console.log(classifyGrade(4));  // Ví dụ: Yếu
  console.log(classifyGrade(9));  // Ví dụ: Giỏi

  
// 12. Kiểm tra trạng thái thời tiết

function checkWeather(temp) {
    if (temp >= 30) return "Nóng";
    if (temp >= 20) return "Mát";
    return "Lạnh";
  }
  
  console.log(checkWeather(35)); // Ví dụ: Nóng
  console.log(checkWeather(25)); // Ví dụ: Mát
  console.log(checkWeather(15)); // Ví dụ: Lạnh
  
  
  
  