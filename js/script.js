'use strict'
// Khởi tạo biến
const info = document.querySelector('.info');
const form = document.querySelector('.form-control');
const btnSubmit = document.querySelector('.btn-primary');
const showInfo = document.getElementById('info-hidden');
const btnShow = document.getElementById('btnviewmore');

// Tạo biến để thông báo lỗi
 const displayMessage = function (message) {
   document.querySelector('#nameErrorMessage').textContent = message;
 }

// Tạo các ID để ẩn và hiện table
function openInfo() {
  $('#info').show(3000);
}
function hideInfo() {
  $('#info').hide();
}
function openForm() {
  $('#form-input').show();
}
function hideForm() {
  $('#form-input').hide();
}

//Tạo biến để check điều kiện của email khi nhập vào
  const email = document.getElementById('txtEmail');
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Băt sự kiện với nút btn
btnSubmit.addEventListener('click', function(){
  if(email.value.match(regex) &&  email.value.length !== 0){
    openInfo();
    hideForm();
  }else if(email.value.length == 0){
    displayMessage('Vui lòng nhập lại email để kiểm tra thông tin !!!')  
  }else{   
    displayMessage('Vui lòng nhập email đúng với định dạng !!!') 
   }
  });
  // Hiện thông tin khi ấn vào nút ViewMore

  function clickBtnViewMore(e){
    //Sau khi xem thông tin ở bảng khác thì bảng vừa xem từ reset về ban đầu
     $('.info-hidden').hide();
     $('.btnviewmore' + e).show();
     // Hiện thông tin , ẩn ViewMore, hiện ViewLess
     $('#info-hidden'+ e).show(500);
     $('#btnviewless'+ e).show(500);
     $('#btnviewmore'+ e).hide();
  };
// Ẩn thông tin ,ẩn nút ViewLess và hiện thị  ViewMore
  function clickBtnViewLess(e){
     $('#btnviewless'+ e).hide();
     $('#info-hidden'+ e).hide(); 
     $("#content-panel" + e ).hover(() => {
        // over
        $('#btnviewmore'+e).css("display", "block");
      }, ()=> {
        // out
        $('#btnviewmore'+e).css("display", "none");
      }
    );
     }
  



 