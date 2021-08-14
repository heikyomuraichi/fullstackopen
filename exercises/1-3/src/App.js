import React, { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine  = props => <tr><td>{props.text}</td><td>{props.value}</td></tr>
const Display = props => <div>{props.value}</div>
const Statistics = (props) => {
  if(props.all !== 0){
    return (
      <table>
        <tbody>
          <StatisticLine text={"statistics"} />
          <StatisticLine text="good" value ={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="all " value ={props.all} />
          <StatisticLine text="average " value = {props.average} />
          <StatisticLine text="positive " value ={props.positive +" %"} />
        </tbody>
      </table>
    )
  }
  return (
    <table>
        <tbody>
      <tr><td>NO feedback given</td></tr>
      </tbody>
      </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
  const average = (good + bad * -1  )  / all;
  const positive = good / all * 100;
  return (
    <div>
      <Display value={"give feedback"} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral}  bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App