// รับฟอร์มโดยใช้ ID
var myForm = document.getElementById("myForm");

// เพิ่มการฟังก์ชัน submit
myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // ป้องกันการส่งฟอร์มในวิธีเริ่มต้น

  // รับค่าจากฟิลด์ข้อมูล
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;

  var Name = document.getElementById("firstName").value;
  // ทำสิ่งที่คุณต้องการกับข้อมูล (เช่น ส่งไปยังเซิร์ฟเวอร์หรือแสดงผลในคอนโซล)
  console.log("ชื่อ:", firstName);
  console.log("นามสกุล:", lastName);
  console.log("อีเมล:", email);
  console.log("เบอร์โทรศัพท์:", phoneNumber);

  // เพิ่มโค้ดเพื่อจัดการข้อมูลอื่น ๆ ตามที่คุณต้องการ
});