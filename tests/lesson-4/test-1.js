// 1. Khởi động Tàu vũ trụ K11

let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K11"
let crew = ["Phong","Nga","Tuyet","Loi","Dung"]; // Em thấy nhóm K11 nhiều tên quá nên chỉ dùng tên các thầy cô, mentor và mình thôi ạ

function launchShip(crew) {
    return 'Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join("Phong","Nga","Tuyet","Loi","Dung")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu $(mission)!'
}

console.log(launchShip(crew));


// 2. Du hành đến hành tinh bí ẩn

function calculateDistance(speed, time) {
    return speed * time;
} 
let distance = calculateDistance(1000, 24);
  
console.log(`Khoảng cách đến hành tinh bí ẩn là: ${distance} km`);


// 3. Hành tinh kỳ lạ

function convertTimetoHex(time) {
    return time.toString(16);
}

let hexadecimalTime = convertTimetoHex(120);

console.log(hexadecimalTime);


// 4. Khám phá kho báu: Giải mã mật mã

function decryptCode(code) {
    let decryptedCode = "";
    for (let i = 0; i < code.length; i++) {
        let character = code[i];
        if (character === character.toLowerCase()) {
            decryptedCode += character.toUpperCase();
        }
        else {
            decryptedCode += character.toLowerCase();
        } 
    }
    return decryptedCode;
}

let result = decryptCode("K11 Challenge");

console.log(result);


// 5. Trở về Trái Đất

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();