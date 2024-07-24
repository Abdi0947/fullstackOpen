import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  // State for the selected anecdote index and votes
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Function to handle voting for the current anecdote
  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  // Function to find index of anecdote with the most votes
  const indexOfMax = votes.indexOf(Math.max(...votes));

  // Function to select a random anecdote
  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <div>
      <h2>Anecdotes of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleRandomAnecdote}>Next Anecdote</button>
      <h2>Anecdote with the most votes</h2>
      {Math.max(...votes) > 0 && (
        <div>
          <p>{anecdotes[indexOfMax]}</p>
          <p>Has {Math.max(...votes)} votes</p>
        </div>
      )}
    </div>
  );
};

export default App;
