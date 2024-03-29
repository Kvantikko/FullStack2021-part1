import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  /*
  // tulostetaan konsoliin jokaisen anekdootin äänimäärä
  console.clear()
  for (let i = 0; i < anecdotes.length; i++) {
    console.log(anecdotes[i])
    console.log('THIS HAS:', votes[i])
  }
  */

  const handleClickNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleClickVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const indexOfMaxValue = () => {
    const max = Math.max(...votes)
    for(let i=0; i<votes.length; i++){ 
      if(votes[i] === max){
        return(i)
       }
     }
  }

  return (
    <div>    
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>{votes[selected]} people found this helpfull{}</div>
      <Button onClick={handleClickVote} text="Vote"/>
      <Button onClick={handleClickNext} text ="Next piece of wisdom"/>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[indexOfMaxValue()]}</div>
      <div>has {votes[indexOfMaxValue()]} votes</div>
    </div>
  )
}

export default App
