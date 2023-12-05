import { useState } from 'react'
import { uid } from 'uid';
import './App.css'
import Form from './components/Form'

function App() {
  const [activities, setActivities] = useState("");

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity}, ...activities]);
  }

  return (
    <>
      <h1>HIHIHI</h1>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  )
}

export default App
