export default function Form({ onAddActivity }) {
  
  
    function handleSubmit(event) {
    event.preventDefault();

    const data = {
        name: event.target.activity.value,
        isForGoodWeather: event.target.goodWeather.checked
    }
    console.log(data)
    onAddActivity(data);
    event.target.reset();
    event.target.activity.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add new activity:</h2>
        <label htmlFor="activity">Activity:</label>
        <input type="text" name="activity" id="activity" />
        <br />
        <label htmlFor="good-weather">Good-weather activity:</label>
        <input type="checkbox" name="goodWeather" id="good-weather" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
