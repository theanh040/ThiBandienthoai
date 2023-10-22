
// Lấy các phần tử input radio
const payOnline = document.querySelector('.payfor1 input');
const payCOD = document.querySelector('.payfor2 input');

// Sự kiện khi click vào radio button
payOnline.addEventListener('click', () => {
  payCOD.checked = false; 
});

payCOD.addEventListener('click', () => {
  payOnline.checked = false;
});

// Lấy giá sản phẩm
const priceElement = document.querySelector('.gia');
const price = parseInt(priceElement.innerText);

// Lấy phần tử input lưu số lượng
const qtyInput = document.querySelector('.quantity input');

// Xử lý nút plus
document.querySelector('.plus').addEventListener('click', function(){

  // Tăng số lượng
  qtyInput.value = parseInt(qtyInput.value) + 1;
  
  // Tính và cập nhật giá tổng
  const total = price * parseInt(qtyInput.value);
  document.querySelector('.last-pri').innerText = total;

});

// Xử lý nút minus
document.querySelector('.minus').addEventListener('click', function(){

  if(parseInt(qtyInput.value) > 0) {

    qtyInput.value = parseInt(qtyInput.value) - 1;

        // Tính và cập nhật giá tổng
        const total = price * parseInt(qtyInput.value);
        document.querySelector('.last-pri').innerText = total;

  }

  // Tính và cập nhật giá tổng
  const total = price * parseInt(qtyInput.value);
  document.querySelector('.last-pri').innerText = total; 

});