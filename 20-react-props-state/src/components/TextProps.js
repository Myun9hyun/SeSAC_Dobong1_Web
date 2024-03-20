import React, { Component } from "react";

class TextProps extends Component {
  valid = () => {
    console.log("콘솔 띄우기 성공!!");
  };

  render() {
    const { text } = this.props;

    return (
      <div>
        <h2>텍스트 : {text}</h2>
        <div onClick={this.valid}>
          <button>콘솔 누르기</button>
        </div>
      </div>
    );
  }
}

TextProps.defaultProps = {
  text: "이건 기본 textProps입니다",
};

export { TextProps };
