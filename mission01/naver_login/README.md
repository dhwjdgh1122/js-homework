# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.



      const user = {
      id: 'asd@naver.com',
      pw: 'spdlqj123!@'
      };
- 사용자 정보는 `user` 객체에 저장되고 이 객체는 유효한 이메일과 비밀번호를 포함한다.

### 이메일 정규 표현식

      function emailReg(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

- 이메일의 유효성 검사
- 정규 표현식 `re`는 이메일의 형식을 확인하는 패턴.

### 비밀번호 정규 표현식

    function pwReg(password) {
      const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
      return re.test(String(password).toLowerCase());
    }

- 비밀번호의 유효성 검사
- 정규 표현식 `re`는 비밀번호가 적어도 하나의 문자, 하나의 숫자, 하나의 특수 문자를 포함해야 하며, 길이가 6자 이상 16자 이하이어야 한다.


### 폼 제출 이벤트 핸들러

    document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

- 로그인 폼이 제출 되었을 때 실행될 이벤트 핸들러 추가.
- `event.preventDefault()`를 통해 폼의 기본 제출 동작을 막는다. 필요성이 엄청난지는 잘 모르겠다.



### 기능 구현 아쉬운 점


1. 아이디(이메일)입력 칸에 입력을 했을 때 벨리데이션이 나와야 하는데 나오지 않고 로그인 버튼을 누르면 경고 문구 이메일 주소에 `@`을 포함하세요가 뜸

2. 비밀번호 입력 후 로그인 버튼을 누르면 해당되는 오류의 벨리데이션이 보임 







