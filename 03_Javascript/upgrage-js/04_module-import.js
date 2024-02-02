// 모듈만들기 export 이용
// 한 번에 내보내기
import { showAnimals, animals } from './04_exports2.js'
import * as flowers from './04_exports1.js'
import sayHi from './05_exportdefault.js';
// import {flr, getFlr} from './04_exports1.js'
// console.log(flr);
// console.log(getFlr(2))
// console.log(getFlr(3))

console.log(flowers)

console.log(animals);
showAnimals();

sayHi();