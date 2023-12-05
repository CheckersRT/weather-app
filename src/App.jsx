import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import ActivityList from "./components/ActivityList";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });
  const [isGoodWeather, setIsGoodWeather] = useState(true);
  const [conditionEmoji, setConditionEmoji] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log(activities);
  }


  
  async function fetchWeather() {
    const response = await fetch("https://example-apis.vercel.app/api/weather")
    const answer = await response.json();
    console.log(answer.isGoodWeather);
    console.log(answer);
    setIsGoodWeather(answer.isGoodWeather);
    setConditionEmoji(answer.condition);
    setTemperature(answer.temperature);
  }
  fetchWeather();

  const filteredActivities = activities.filter((activity) => activity.isForGoodWeather === isGoodWeather);

  function handleDeleteActivity(id) {
    setActivities(
      activities.filter((activity) => 
        activity.id !== id)
    )
    console.log(activities)
  }

  return (
    <>
      <h1>Weather Activity Checker</h1>
      <h2>{conditionEmoji}</h2>
      <h2>{temperature}&#176;C</h2>
      <ActivityList 
        filter={isGoodWeather} 
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
        ></ActivityList>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
