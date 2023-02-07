import reactLogo from './assets/react.svg'
import './App.css'
import { React, useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from 'react'
import CodeContext from './main';
import useLocalStrage from './useLocalStrage';


const reducer = (state, action) => {
  console.log("actionは" , action, "です")
  console.log("stateは" , state, "です")
  switch (action.type) {
    case 'increment': {
      return state + 1;
    }
    case 'decrement': {
      return state - 1;
    }
    default: state;
  }
};
function App() {
  const [count, setCounter] = useState(0);
  const codeinfo = useContext(CodeContext);
  // useRef とは、書き換え可能な値を .current プロパティ内に保持することができる「箱」のようなものです。
  // https://ja.reactjs.org/docs/hooks-reference.html#useref
  // 文字列を取得する際などに使用する
  const ref = useRef();

  // (state, action) => newState という型のリデューサ (reducer) を受け取り、現在の state を dispatch メソッドとペアにして返します
  // https://beta.reactjs.org/reference/react/useReducer#usage
  const [state, dispatch] = useReducer(reducer, 0);

  // メモ化された値を返します。
  // “作成用” 関数とそれが依存する値の配列を渡してください。useMemo は依存配列の要素のいずれかが変化した場合にのみメモ化された値を再計算し
  // 最適化によりレンダー毎に高価な計算が実行されるのを避けることができます。
  const [count01, setcount01] = useState(0);
  const [count02, setcount02] = useState(0); 


  // const square = () => {
  //   let i = 0;
  //   while(i < 20000000000000000000) {
  //     i++;
  //   }
  //   return count02 + count02;
  // };

  // count02が更新された時のみメモ化された値を再計算します。
  // count02が更新されていない場合はメモに保存させれいるのもをreturnする。（高速化のため）
  const square = useMemo(() => {
    // let i = 0;
    // while(i < 2) {
    //   i++;
    // }
    return count02 + count02;
  }, [count02]);
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

  // useCallbackは飛ばす
  const [age, setAge] = useLocalStrage("age", 23);
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
      <hr />
      <h1>useRef</h1>
      <input class="yamada" id="refrefref" ref={ref} type="text" />
      <button onClick={handleRef}>UseRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>Count : {state}</p>
      <button onClick={() => { dispatch({ type: 'increment' })}}> + </button>
      <button onClick={() => { dispatch({ type: 'decrement' })}}> - </button>

      <hr />
      <h1>useMemo</h1>
      <div>count 1 = {count01}</div>
      <div>count 2 = {count02}</div>
      <div>result = {square}</div>
      {/* <div>result = {square()}</div> */}
      <button onClick={() => setcount01(count01 + 1)}> + </button>
      <button onClick={() => setcount02(count02 + 1)}> + </button>
      {/* <hr />
      <h1>useCallback</h1> */}
      <hr />
      <h1>customHooks</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}></button>
    </div>
  )
}

export default App
