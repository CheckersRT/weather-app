import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import ActivityList from "./components/ActivityList";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      {
        id: uid(),
        name: "Have a picnic",
        isForGoodWeather: true,
     }, {
        id: uid(),
        name: "Cook something nice",
        isForGoodWeather: false,
     }, {
        id: uid(),
        name: "Explore the neighbourhood",
        isForGoodWeather: true,
     }, {
        id: uid(),
        name: "Learn to code",
        isForGoodWeather: false,
     }, {
        id: uid(),
        name: "Do an ironman",
        isForGoodWeather: true,
     }, {
        id: uid(),
        name: "Read some Virginia Woolf",
        isForGoodWeather: false,
     }
    ],
  });
  const [isGoodWeather, setIsGoodWeather] = useState(true);
  const [conditionEmoji, setConditionEmoji] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  useEffect(() => {
    const intervalID = setInterval(fetchWeather, 5000);
    fetchWeather();
    return () => clearInterval(intervalID)
  })
  
  async function fetchWeather() {
    const response = await fetch("https://example-apis.vercel.app/api/weather")
    const answer = await response.json();
    setIsGoodWeather(answer.isGoodWeather);
    setConditionEmoji(answer.condition);
    setTemperature(answer.temperature);
  }

  const filteredActivities = activities.filter((activity) => activity.isForGoodWeather === isGoodWeather);

  function handleDeleteActivity(id) {
    setActivities(
      activities.filter((activity) => 
        activity.id !== id)
    );

  }

  return (
    <>
      <h1>Weather/Activity Checker</h1>
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
