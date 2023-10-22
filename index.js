var productContainer = document.querySelector('.item');

// trái
function scrollLeftFunction() {
    productContainer.scrollLeft -= 222;
}

// phải 
function scrollRight() {
    productContainer.scrollLeft += 222;
}



///////////////////
var productItem = document.querySelector('.product-item');

// trái
function scrollLeftFunction1() {
    productItem.scrollLeft -= 222;
}

// phải 
function scrollRight1() {
    productItem.scrollLeft += 222;
}



//////

var iphoneProduct = document.querySelector('.iphone-product');

// trái
function scrollLeftFunction2() {
    iphoneProduct.scrollLeft -= 222;
}

// phải 
function scrollRight2() {
    iphoneProduct.scrollLeft += 222;
}



  // Lấy icon và box chat
  const chatIcon = document.querySelector('.chat-icon'); // Use .chat-icon instead of #chat-icon
  const chatBox = document.querySelector('.chat-border'); // Use .chat-border instead of #chat-border

  let isOpen = false;

  // Xử lý click icon
  chatIcon.addEventListener('click', function (event) {
      event.preventDefault();

      if (!isOpen) {
          // nếu đóng thì mở box chat
          chatBox.style.display = 'flex';
          isOpen = true;
      } else {
          // nếu mở thì đóng box chat
          chatBox.style.display = 'none';
          isOpen = false;
      }
  });




  const backToTopButton = document.getElementById('backToTop');

// Hiển thị nút "Back to Top" khi cuộn trang xuống
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Cuộn lên đầu trang khi nút được click
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
