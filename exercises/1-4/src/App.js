import React, { useState } from 'react'
const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)
const App = () => {
  const anecdotes = [
    '一日は２４時間ある。今日中という意味は明日の朝までという意味である。',
    'プログラムは思った通りに動かない。書いた通りに動く。',
    '要求仕様はプログラム完成後に完結する。基本仕様は完成品を顧客が見てから決定される。詳細仕様は使用者がプログラムを動かしてから固まる。',
    '私は、ソフトウェア設計には 二つの方法があるという結論に達した。一つは、欠陥がないことが明らかなほど単純にする方法である。もう一つは、明らかな欠陥がないほど複雑にする方法である。',
    'コードは開発現場で書くんじゃない！　納品先で書くんだ！デバグは納期前にするんじゃない！　運用後にするんだ！！',
    '画面は青かった 。',
    '「無理です！」は言ったもん勝ち',
    '顧客は最悪を考えず、最悪に対応しようとするのを悪質な費用のぼったくりだと思う。ＳＥは最悪に備え、最悪に対応しようとする。ＰＧは最悪を誰よりも予想し、最悪を無視する。'
  , 'バグを起こさない唯一の方法は プログラムをくまないことだ。次善の方法は、スケジュールと人員を定めた後は仕様の変更や追加の度にプロジェクトを見直すことだ。'
  , '設計者が、設計以上のものを 製造者に求める分野なんてあるはずがないじゃないか。'
  , '仕様書に書かれていないことをしても、また、仕様書に書かれていることだけしてもＳＥはプログラマーに文句を言うものだ。だからプログラマーは仕様書に書かれていることだけしかしない。'
  , 'ＳＥがプログラマーに言う「常識」は、三時間毎に変化する。'
  , '自分の仕様書を読んでください。動かないのが仕様です。'
  , '無理ですというのは一日を何時間で計算しているんだ。一日は ３人日、一ヶ月は４．５人月あるんだぞ。'
  , '綺麗な仕様では、バグが出ないとわかったの。汚れているのは、 設計なんです。何故こんなことに・・・'
  , '問題に対してすぐさま解決法を決めつけるプログラマが多すぎる。彼らは 1分考えて、1日をコーディングに費やす。1時間考えて 1時間でコーディングする代わりに。Jon Bentley'
  
  ]
  
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const createRandom = () => () => {
    const value = Math.floor( Math.random() * anecdotes.length )
    setSelected(value)
  }
  const createVotes = () => () => {
    const copy = [...votes]
    copy[selected] += 1
    console.log(copy)
    setVotes(copy)
  }
  const aryMax = function (a, b) {return Math.max(a, b);}
  const max = votes.reduce(aryMax);
  const maxidx = votes.indexOf(max);
  return (
    <div>
      <h3>今日の格言</h3>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
         {votes[selected]} 票
      </div>
      <div>
        <Button  handleClick={createVotes()} text="投票"></Button>
        <Button  handleClick={createRandom()} text="次の格言"></Button>
      </div>
      <h3>最も人気のある格言</h3>
      <div>
        {anecdotes[maxidx]}
      </div>
    </div>
  )
}

export default App