export default function Result(props) {
  const { fruit, background, color, content } = props.data;
  return (
    <div>
      <img src={`/${fruit}.jpg`} alt="과일사진" width={100} height={100}></img>
      <div
        style={{
          backgroundColor: background,
          color: color,
          padding: "10px",
          margin: "10px",
        }}
      >
        text
      </div>
    </div>
  );
}
