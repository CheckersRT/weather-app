// import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log(activities);
  }

  return (
    <>
      <h1>HIHIHI</h1>
      <ActivityList activities={activities}></ActivityList>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
