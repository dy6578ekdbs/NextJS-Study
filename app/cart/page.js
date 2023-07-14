import { age, name } from './data.js';

export default function Cart() {
  let cart = ['오호라', '여름옷', '체력'];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <p>
        {age} {name}
      </p>
      {cart.map((a) => (
        <CartItem item={a} />
      ))}

      <Banner content="현대카드" />

      <Btn color="red" />
    </div>
  );
}

function Btn(props) {
  return <button style={{ background: props.color }}>버튼임</button>;
}

function Banner({ content }) {
  return <h5>{content} 결제 행사 중</h5>;
}

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
