import { useState } from 'react';

const StatisticLine  = ({text,value}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  );
}
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () =>setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = (good - bad) / (total || 1);
  const positivePercentage = ((good) / (total || 1)) * 100;

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h2>statistics</h2>
      {total !== 0 ? (
       <table>
       <tbody>
         <StatisticLine text="good" value={good} />
         <StatisticLine text="neutral" value={neutral} />
         <StatisticLine text="bad" value={bad} />
         <StatisticLine text="all" value={total} />
         <StatisticLine text="average" value={average} />
         <StatisticLine text="positive" value={`${positivePercentage} %`} />
       </tbody>
     </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
