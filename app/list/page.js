'use client';

import { useState } from 'react';

export default function List() {
  let arr = [1, 2, 3];

  const [num, setNum] = useState([0, 0, 0]);

  const Add = (idx) => {
    let newNum = [...num];
    newNum[idx]++;
    setNum(newNum);
  };

  return (
    <div>
      <h4 className="title">상품목록</h4>

      {arr.map((a, idx) => {
        console.log(idx);
        return (
          <div className="food" key={idx}>
            <h4>상품 이름</h4>
            <img src={`food${idx}.png`} alt="" className="food-img" />
            <h4>$40</h4>
            <span>{num[idx]}</span>
            <button onClick={() => Add(idx)}>+</button>
          </div>
        );
      })}
    </div>
  );
}
