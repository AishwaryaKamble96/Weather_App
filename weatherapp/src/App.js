import Form from "./components/Form";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState({});
console.log(activities);

  function handleAddActivity(newActivities) {
    setActivities({ id: uid(), ...newActivities });
  }

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
