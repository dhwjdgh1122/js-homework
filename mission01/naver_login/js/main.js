// 사용자 정보
const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@'
};

// 이메일 정규 표현식
function emailReg(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// 비밀번호 정규 표현식
function pwReg(password) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(password).toLowerCase());
}

// 폼 제출 이벤트 핸들러
document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('userEmail');
  const passwordInput = document.getElementById('userPassword');
  const email = emailInput.value;
  const password = passwordInput.value;
  
  let isValid = true;

  // 이메일 유효성 검사
  if (!emailReg(email)) {
    emailInput.classList.add('is--invalid');
    document.getElementById('userEmailError').innerText = '아이디는 이메일 형식으로 입력해 주세요.';
    isValid = false;
  } else {
    emailInput.classList.remove('is--invalid');
    document.getElementById('userEmailError').innerText = '';
  }

  // 비밀번호 유효성 검사
  if (!pwReg(password)) {
    passwordInput.classList.add('is--invalid');
    document.getElementById('userPasswordError').innerText = '비밀번호는 특수문자 포함 6자리 이상 입력해 주세요.';
    isValid = false;
  } else {
    passwordInput.classList.remove('is--invalid');
    document.getElementById('userPasswordError').innerText = '';
  }

  // 유효성 검사 통과 시
  if (isValid) {
    if (email === user.id && password === user.pw) {
      window.location.href = 'welcome.html';
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  }
});

// 초기 상태에서 에러 메시지 숨기기
document.getElementById('userEmailError').innerText = '';
document.getElementById('userPasswordError').innerText = '';
