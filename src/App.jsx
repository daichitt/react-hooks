import reactLogo from './assets/react.svg'
import './App.css'
import { React, useEffect, useState, useContext, useRef } from 'react'
import CodeContext from './main';


function App() {
  const [count, setCounter] = useState(0);
  const codeinfo = useContext(CodeContext);
  // useRef とは、書き換え可能な値を .current プロパティ内に保持することができる「箱」のようなものです。
  // https://ja.reactjs.org/docs/hooks-reference.html#useref
  // 文字列を取得する際などに使用する
  const ref = useRef();

  const increase = () => {
    if(count == 10) return;
    setCounter(count + 1);
  };

  const decrease = () => {
    if(count == 0) return;
    setCounter(count - 1);
  };

  useEffect(() => {
    console.log("hello")
    // Dont use set function in useEffect
  }, [count]);// 第2引数には副作用関数の実行タイミングを制御する依存データを記述

  // 
  const handleRef = () => {
    console.log(ref.current.value);
  };
  return (
    <div className="App">
      <h1>UseState, useEffect</h1>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
      <p>{count}</p>
      <hr />
      <h1>useContext</h1>
      <p>{codeinfo.name}</p>
      <p>{codeinfo.age}</p>

      <h1>useRef</h1>
      <input class="yamada" id="refrefref" ref={ref} type="text" />
      <button onClick={handleRef}>UseRef</button>
    </div>
  )
}

export default App
