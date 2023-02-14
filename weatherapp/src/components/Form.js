import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // const activityName = data.name;
    // const goodWeathercheckBox = data.good_weather.checked;
    onAddActivity(data );

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <h1>Weather App</h1>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="checkbox">Good Weather Activity</label>
      <input type="checkbox" id="good_weather" name="good-weather" />
      <button type="submit">Submit</button>
    </form>
  );
}
