// 문제 1
function getValueAtObject(obj, key) {
  if(Object.hasOwn(obj,key)) {
    return obj[key];
  }
  else {
    return "Error !";
  }
}
  
 

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

console.log(getValueAtObject(person, "name"));    // 'Alice'
console.log(getValueAtObject(person, "age"));     // 25
console.log(getValueAtObject(person, "city"));    // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !





// 문제 2
// 배열과 인덱스를 인수로 받는다면, 입력값은 배열일때와 배열이 아닐때 2가지
function getNumberAtArray(arr, index) {
  // 입력이 배열인지 확인
  if (!Array.isArray(arr)) {
    return "Error !";
  }

  // 인덱스가 유효한지 확인
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    return "Error !";
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2));  // 30
console.log(getNumberAtArray(numbers, 4));  // 50
console.log(getNumberAtArray(numbers, 5));  // Error !
console.log(getNumberAtArray(numbers, -1)); // Error !

// 배열이 아니라면?
console.log(getNumberAtArray(123, 2)); // Error !
console.log(getNumberAtArray("hello", 2)); // Error !
//배열이라면?
console.log(getNumberAtArray([{ 1: "2" }], 0)); // {1: '2'}