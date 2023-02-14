import "./Form.css"

export default function Form({ onAddActivity }) {
  return (
    <form className="weather-form">
      <h1>Weather App</h1>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' name='name' />
      <label htmlFor='checkbox'>Good Weather Activity</label>
      <input type='checkbox' />
      <button type='submit'>Submit</button>
    </form>
  );
}
