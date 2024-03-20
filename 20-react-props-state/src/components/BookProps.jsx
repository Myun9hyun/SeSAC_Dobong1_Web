export function BookProps(props) {
  const { title, author, price, type } = props;
  return (
    <div>
      <h3>이번주 베스트셀러!</h3>
      <img
        src="https://i.imgur.com/72Wdbq2.jpeg"
        alt="나미야"
        className="bookCover"
      />
      <h4>{title}</h4>
      <p>저자 : {author}</p>
      <p>판매가 : {price}</p>
      <p>구분 : {type}</p>
      {/* <div>{props.children}</div> */}
    </div>
  );
}
