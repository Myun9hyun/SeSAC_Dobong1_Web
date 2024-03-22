import React from "react";

export class RefClass1 extends React.Component {
  render() {
    const handleFocus = () => {
      this.myInput.focus();
    };
    return (
      <>
        <p>버튼 클릭시 input창에 focus처리</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
