// 1. Tạo object car

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
  };
  console.log("Năm sản xuất của xe là:", car.year);
  


// 2. Tạo object person với object lồng nhau

const person = {
    name: "Nguyễn Văn A",
    address: {
      street: "123 Đường ABC",
      city: "Hà Nội",
      country: "Việt Nam",
    },
  };
  console.log("Tên đường của người này là:", person.address.street);


// 3. Tạo object student và truy cập điểm toán

const student = {
    name: "Học Sinh A",
    grades: {
      math: 9.5,
      english: 8.0,
    },
  };
  console.log("Điểm môn toán là:", student["grades"]["math"]);


// 4. Dùng vòng lặp for...in với object product

const product = {
    laptop: 1500,
    phone: 700,
    tablet: 300,
  };
  
  for (let item in product) {
    console.log(`${item}: ${product[item]} USD`);
  }
  
 
// 5. Thay đổi thuộc tính object settings

const settings = {
    volume: 50,
    brightness: 70,
  };
  
  settings.volume = 69;
  console.log("Cài đặt mới:", settings);
  

// 6. Thêm thuộc tính color vào object bike

const bike = {
    brand: "Yamaha",
    type: "Sport",
  };
  
  bike.color = "Black";
  console.log("Xe đạp sau khi thêm thuộc tính:", bike);
  
  
// 7. Xóa thuộc tính age khỏi object employee

const employee = {
    name: "Nguyen Viet Dung",
    age: 26,
  };
  
  delete employee.age; // Xóa thuộc tính age
  console.log("Object sau khi xóa thuộc tính age:", employee);
  

// 8. Tạo object school với danh sách lớp học

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
  };
  
  console.log("Danh sách học sinh trong trường:", school);
  