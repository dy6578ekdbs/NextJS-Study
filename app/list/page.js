export default function List() {
  let arr = [1, 2, 3];

  return (
    <div>
      <h4 className="title">상품목록</h4>

      {arr.map((a, i) => (
        <div className="food">
          <h4>상품 이름</h4>
          <img src={`food${i}.png`} alt="" className="food-img" />
        </div>
      ))}
    </div>
  );
}
