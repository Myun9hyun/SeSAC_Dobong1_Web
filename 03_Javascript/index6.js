// 1. for 문
// 
// for(변수 선언과 초기값 할당;조건식(어디까지 증가?감소?); 증감식){
    // 반복할 코드;
// }


for(let i = 0 ; i < 10 ; i ++){
    console.log("인사를", i+1, "번 드립니다");
}

for(let i = 0; i < 10 ; i += 2){
    console.log('안녕하세요 나는 짝수', i);
}

for(let i = 1; i <= 5; i++){
    console.log(i)
}

// 감소
for(let i = 5; i > 0; i--){
    console.log('나는 감소중이야', i);
}

// 1부터 n까지의 덧셈
let n = 11;
let sum = 0;

for(let i = 1; i < n+1; i++){
    sum += i;
    
}
console.log('1부터' , n, '까지의 덧셈은 다음과 같아' ,sum);

// 배열과 함께 사용하는 for문
let fruits = ['사과','망고', '오렌지', '망고스틴'];
console.log(fruits.length);
for(i = 0; i < fruits.length; i++){
    console.log('나는', fruits[i],'(을)를 좋아해');
}

let numsArr = [99, 99, 98, 85, 77];
let sum2 = 0;

for(let i = 0; i < numsArr.length; i++){
    sum2 += numsArr[i];
}
console.log(sum2);

// 2. while문

/*
초기화식
while(조건식){
    조건이 참일 때 실행할 문장;
    증감식;
}
*/

let n2 = 1; // while의 초기화 식
while(n2 <= 5){ // 조건식
    console.log(n2); // 실행문
    n2++; // 증감식
}

n2 = 10;

while(n2 > 4){
    console.log(n2);
    n2 --;
}

// 1 ~ 10 짝수만 출력 while문 이용

n2 = 1;

while(n2 <= 10){
    if(n2%2 == 0){
        console.log(n2);

    }
    n2++;
}
n2 = 10;

while(n2 >= 1){
    if(n2%2 ===1){
        console.log(n2);
    }
    n2--;
}

let b = 0;
while(true){
    console.log(b);
    b++;

    if(b > 10){
        break;
    }
}

let sum3 = 0;

for(let i = 0; i < 10; i++){
    if(i%2===0){
        continue;
    }
    sum3 += i;
}
console.log(sum3)

// while 내부에 confirm을 넣을 수 있는데, 확인을 누르면 true, 취소를 누르면 false

let n3 = 0;
while(confirm('계속 진행할까요?')){
    n3++;
    alert(`${n3}번째 alert창`)
}

let quiz1 = prompt('13의 배수이면서 홀수이고 10000이하인 숫자인지 판독해드릴게요')

if(quiz1 % 13 == 0 && quiz1 <= 10000 && quiz1 % 2 == 1){
    console.log('13의 배수이면서 홀수이고 10000이하인 숫자입니다.');
}
else{
    console.log('그 조건에 해당하는 숫자가 아닙니다.');
}

let quiz2 = 0;

for(let i = 1; i <= 9; i++){
    console.log(`${i}단`)
    for(j = 1; j <= 9; j++){
        console.log(`${i}x${j} = ${i*j}`)
    }
    
}

let sum4 = 0;
let quiz3 = 0;

for(let i = 0; i <= 100; i++){
    if(i%2 == 0 && i%5 == 0){
        sum4 += i;
    }

}
console.log(sum4);