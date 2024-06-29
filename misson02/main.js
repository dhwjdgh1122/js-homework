// mission02 문제 설명
// 썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성하라.

// 요구사항
// 1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어라.
// a. 이벤트 위임
// b. 반복문

// 2. 이미지와 색상의 데이터는 data.js에서 불러오기
// 3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경하기

// a. 배경색 변경(colorB의 기본값은 #000으로 한다)

// elem.style.background = 'linear-gradient(to bottom, 'colorA', 'colorB')';

// b. 이미지 변경
// target.src = `./assets/${data.name}.jpeg`;
// target.alt = data.alt;

// 4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경하라
// target.textContent = data.name;

// 5. 함수 분리

// a. setBgColor 함수
// b. setImage 함수
// c. setNameText 함수

// 6. 가독성이 좋은 코드로 리팩토링 하라 
