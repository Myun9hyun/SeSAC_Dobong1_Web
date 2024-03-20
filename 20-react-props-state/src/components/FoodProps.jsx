export function FoodProps(props) {
  const { name } = props;
  return <div>제가 좋아하는 음식은 {name}입니다.</div>;
}

export function FoodProps2(props) {
  const { name } = props;
  return (
    <div>
      제가 좋아하는 음식은 {name}입니다.
      <div>{props.children}</div>;
    </div>
  );
}
FoodProps.defaultProps = {
  name: "소고기",
};
