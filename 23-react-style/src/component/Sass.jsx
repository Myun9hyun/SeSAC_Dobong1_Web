import "../styles/SassComponent.scss";
import banana from "../assets/bananas.jpg";

export default function Sass() {
  return (
    <>
      <h4>sass 사용</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">btn1</button>
        <button className="btn btn--opacity">btn2</button>
        <button className="btn btn--blue">btn3</button>
      </div>

      {/* .container>.box1*3+p.circle*3+.box2{hi$}*4 */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
        <div className="box2">hi1</div>
        <div className="box2">hi2</div>
        <div className="box2">hi3</div>
        <div className="box2">hi4</div>
      </div>

      <h2>이미지 가지고 오기</h2>
      <h4>1. src폴더 내부에 이미지 저장</h4>
      <h5>상대 경로로 불러오기</h5>

      <img
        src="'../assets/bananas.jpg"
        alt="src 내부에 이미지가 있을때는 경로명으로 접근할수 없습니다."
      />
      <h5>이미지 import 해서 가지고 오기</h5>
      <img src={banana} alt="import후 가지고 오기" width="200px" />
      <h5>css파일에서 이미지 접근(background-image 속성)</h5>
      <div className="src-img img-test"></div>
      <h4>2. public폴더에 이미지 저장</h4>

      <h4>2.public 폴더에 이미지 저장</h4>
      <h5>img 태그 사용하기</h5>
      <img
        src="/assets/bananas.jpg"
        alt="경로명으로 접근 가능, public폴더는 static 폴더이기 떄문에 /로 접근"
        width="200px"
      />
      <img
        src={process.env.PUBLIC_URL + "/assets/bananas.jpg"}
        alt="경로명으로 접근 가능, public폴더는 static 폴더이기 떄문에 /로 접근"
        width="200px"
      />
      <h5>css파일에서 이미지 접근(background-image 속성)</h5>
      <div className="img-test public-img"></div>

      <h2>사진 넣기 실습 with sass</h2>
      <div className="practice">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
