// Lấy các input cần kiểm tra 
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const emailInput = document.getElementById('email');

// Lấy nút Đăng ký
const btn = document.querySelector('.btn'); 

// Hàm kiểm tra lỗi
function validateInput() {

  // Kiểm tra từng input
  if(nameInput.value === '') {
    showError('Vui lòng nhập họ tên');
    return false;
  }

  if(numberInput.value === '') {
    showError('Vui lòng nhập số điện thoại');
    return false;
  }
  
  // Kiểm tra các input còn lại

  return true;

}

// Hàm hiển thị lỗi 
function showError(mess) {
  document.getElementById('nameError').innerText = mess;
}

// Xử lý sự kiện click Đăng ký
btn.addEventListener('click', function() {

  // Gọi hàm kiểm tra
  if(!validateInput()) {
    return; 
  }

  // Submit form nếu hợp lệ
  document.getElementById('form').submit(); 

});