// Lấy input username và password
const userInput = document.getElementById('username');
const passInput = document.getElementById('password');

// Lấy nút đăng nhập
const btn = document.querySelector('.btn');

// Xử lý sự kiện click nút đăng nhập
btn.addEventListener('click', function() {

  // Kiểm tra trống username
  if(userInput.value === '') {
    alert('Vui lòng nhập tên đăng nhập');
    return;
  }

  // Kiểm tra trống password
  if(passInput.value === '') {
    alert('Vui lòng nhập mật khẩu');
    return; 
  }

  // Nếu hợp lệ thì submit form
  document.getElementById('loginForm').submit();

});