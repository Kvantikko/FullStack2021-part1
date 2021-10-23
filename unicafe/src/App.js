import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.sum === 0) {
    return("No feedback has been given yet")
  }
  return (
    <table>
      <tbody>   
          <StatisticLine text="good" value ={props.good}/>
          <StatisticLine text="neutral" value ={props.neutral}/>
          <StatisticLine text="bad" value ={props.bad}/>
          <StatisticLine text="all" value ={props.sum}/>
          <StatisticLine text="average" value ={props.average}/>
          <StatisticLine text="positive" value ={props.positivePercentage} text2="%"/>      
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value} {props.text2}</td>  
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const sum = good+neutral+bad 
  const average = (good-bad)/sum
  const positivePercentage = (good/(good+neutral+bad))*100

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>GIVE FEEDBACK HERE</h1>
      <Button handleClick={handleGoodClick} text={"good :)"}/>
      <Button handleClick={handleNeutralClick} text={"neutral :|"}/>
      <Button handleClick={handleBadClick} text={"bad :("}/>   
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} average={average} positivePercentage={positivePercentage}/>
    </div>
  )
}

export default App
