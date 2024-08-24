let validation_id;
let validation_pw;

window.addEventListener("load", function () {
  box1_btn1.addEventListener("click", blackBox);
  box1_btn2.addEventListener("click", whtieBox);

  id_btn1.addEventListener("click", id_validation);

  validation_password.addEventListener("keyup", pw_validation);

  regist.addEventListener("click", function () {
    if (!validation_id) {
      alert("아이디 중복체크를 하셨나요?");
    } else if (!validation_pw) {
      alert("비밀번호를 확인하셔야죠!");
    } else {
      alert("회원가입을 환영합니다!");
    }
  });
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

let id_validation = function () {
  let id = document.querySelector("#id");

  if (id.value.length == 0) {
    alert("아이디를 입력하세요.");
    validation_id = false;
  } else if (id.value.length != 0) {
    alert("확인되었습니다!");
    validation_id = true;
  }
};

let pw_validation = function () {
  let password = document.querySelector("#password").value;
  let validation_password = document.querySelector(
    "#validation_password"
  ).value;
  let password_box = document.querySelector("#password_box");
  let regExp = /^[a-zA-Z0-9]{5,12}$/;

  if (!regExp.test(password)) {
    password_box.innerHTML =
      "비밀번호는 문자와 숫자만 입력 가능합니다. \n 길이는 5~12자리만 입력하세요.";
    validation_pw = false;
  } else if (password != validation_password) {
    password_box.innerHTML = "비밀번호가 다르네요?";
    validation_pw = false;
  } else if (password == validation_password) {
    password_box.innerHTML = "비밀번호 확인!";
    validation_pw = true;
  }
};
