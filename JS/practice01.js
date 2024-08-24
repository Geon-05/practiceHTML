window.addEventListener("load", function () {
  box1_btn1.addEventListener("click", blackBox);
  box1_btn2.addEventListener("click", whtieBox);

  id_btn1.addEventListener("click", validation);

  validation_password.addEventListener("keyup",function(){
    let password = document.querySelector('#password').value;
    let validation_password = document.querySelector('#validation_password').value;
    let password_box = document.querySelector('#password_box');
    let regExp = /^[a-zA-Z0-9]{5,12}$/;

    if(!regExp.test(password)){
        password_box.innerHTML = '비밀번호는 문자와 숫자만 입력 가능합니다. \n 길이는 5~12자리만 입력하세요.';
    } else if(password !=validation_password){
        password_box.innerHTML = '비밀번호가 다르네요?';
    } else if (password ==validation_password){
        password_box.innerHTML = '비밀번호 확인!';
    }
  })
});

let blackBox = function () {
  let box1 = document.querySelector("#box1");
  box1.style.backgroundColor = "black";
  box1.style.color = "white";
  box1.innerHTML = "검은색";
};

let whtieBox = function () {
  let box1 = document.querySelector("#box1");
  box1.style.backgroundColor = "white";
  box1.style.color = "black";
  box1.innerHTML = "흰색";
};

let validation = function(){
    let id = document.querySelector("#id");

    if(id.value.length == 0){
        alert('아이디를 입력하세요.')
    }
}