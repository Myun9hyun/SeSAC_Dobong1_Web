// 1. if문
// if(조건식) { 조건이 참일 때 실행할 문장}
if(5>3){
    console.log('5가 3보다 크다');
}

// let number = prompt('숫자 입력')
// number = Number(number);

// console.log(typeof number)

// if ~ else



let number = 88;

// if ~ else if ~ else

if(number > 10){
    console.log('10보다 큽니다');
}
else if(number == 10){
    console.log('10입니다');
}
else{
    console.log('10보다 작습니다');
}

if(number > 10){
    console.log('숫자가 10보다 큽니다!');
}
else{
    alert('10보다 작거나 같아요!');
}

// let age = prompt('나이 입력')

// if(age >= 20){
//     console.log('성인입니다');
// }
// else if(20 > age && age >= 17){
//     console.log('고등학생입니다');
// }
// else if(17 > age && age >= 14){
//     console.log('중학생입니다');
// }else if(14 > age && age >= 8){
//     console.log('초등학생입니다.');
// }
// else {
//     console.log('유아입니다');
// }


// 2. switch문
    // - switch 의 괄호안과 case의 조건에는 비교식이 들어가지 않는다 값 자체가 들어감.
    // - 자바 스크립트에선 조건이 많을때는 switch를 쓰는게 근소하게 성능에 유리함

let a = 5;
switch(a){
    case 3:
        console.log('3입니다.');
        break;
        // break를 써주지 않으면, case 4 를 출력하고 싶을때,
        // case5까지 모두 실행됨
    case 4:
        console.log('4입니다.');
        break;
    case 5:
        console.log('5입니다.');
        break;
    default:
        console.log('무슨 값인지 모르겠어요');
        break;
}

let score = 77;

// if문으로 90보다 크고 100보다 작으면 A
// 80보다 크고 90보다 작으면 B
// 70보다 크고 80보다 작으면 C
// 70보다 크고 60보다 작으면 D
// 그 이하는 F

if (score >= 90 && score <= 100){
    console.log('A등급');
}
else if (score >= 80 && score < 90){
    console.log('B등급');
}
else if (score >= 70 && score < 80){
    console.log('C등급');
}
else if (score >= 60 && score < 70){
    console.log('D등급');
}
else if (score < 60){
    console.log('F등급');
}
else{
    console.log ('다시 입력하세요')
}


// score를 10으로 나눈 몫으로 판단
// parseInt를 이용해 소수를 정수형으로 변환
switch(parseInt(score/10)){
    case 10:
        console.log('A등급');
        break;
    case 9:
        console.log('A등급');
        break;
    case 9:
        console.log('A등급');
        break;
    case 8:
        console.log('B등급');
        break;
    case 7:
        console.log('C등급');
        break;
    case 6:
        console.log('D등급');
        break;
    default:
        console.log('F등급')
}

// 삼항 연산자
// 조건식 ? 조건식이 true일 때 : 조건식이 false일 때
let num = 5;

if(num%2 == 1){
    console.log('홀수');
}
if(num%2 == 0){
    console.log('짝수');
}

let now = new Date().getHours();

now > 12 ? console.log('오후입니다') : console.log('오전입니다')

