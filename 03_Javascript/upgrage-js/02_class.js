// class : 오브젝트를 만들 수 있는 틀

// 속성
// - 만들어진 연도
// - 집의 이름
// - 창문의 갯수
// 메소드
// - 창문의 개수 출력

class House{
    constructor(year, name, window){
        this.year = year;
        this.name = name;
        this.window = window;
    }
    // 메소드
    getAge(){
        console.log(`${this.name}은(는) 지은 지 ${2024-this.year}년 됐어요.`);
    }
    
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }

}

const h1={
    name: 'old',
    year: '1789',
    window: 1,
}

const house1 = new House(1789, 'old', 1);

house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, '자이', 10);

house2.getAge();
house2.getWindow();
console.log(house2.name);

console.log("-----상속-----");
// extends 키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment

class Apartment extends House{
    constructor(year, name, window, floor, windowMaker){
        super(year, name, window);
        this.floor= floor;
        this.windowMaker = windowMaker;

    }

    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
    }


    // overriding
    // 부모 클래스의 메소드를 이름은 똑같이 쓰고 싶지만
    // 내용은 다르게 만들고 싶을 떄, 메소드 재선언

    getWindow(){
        return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개 입니다.`

    }

    // getAge() << 상속받아서 사용 가능
}

const ap1 = new Apartment(2022, 'raemian', 19, 50, 'kcc')

console.log(ap1.getWindow())

class Shape{
    constructor(width, height){
    this.width = width;
    this.height = height;
    this.area = Number(width * height);
    }
    getArea(){
        console.log(`가로는 ${this.width}고, 세로는 ${this.height}입니다. 넓이는 ${this.area}입니다.`)
    }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

