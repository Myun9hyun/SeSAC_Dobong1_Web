// export function FunctionProps(props) {
//   return (
//     // const
//     <div>
//       <h5>과일이름 : {props.name}</h5>
//       <p>
//         {props.number}개에 {props.price}원
//       </p>
//     </div>
//   );
// }

export function FunctionProps(props) {
  const { name, number, price } = props;
  return (
    // const
    <div>
      <h5>과일이름 : {name}</h5>
      <p>
        {number}개에 {price}원
      </p>
    </div>
  );
}

export function FunctionProps2(props) {
  const { name, number, price } = props;
  return (
    <div>
      <h5>과일이름 : {name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <div>{props.children}</div>
    </div>
  );
}

FunctionProps2.defaultProps = {
  number: 3,
  name: "샤인머스캣",
  price: 10000,
};
