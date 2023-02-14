import Form from "./components/Form";
import "./App.css";
import { usestate } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = usestate[""];

  function handleAddActivity(activities) {
    setActivities([{ id: uid(), ...activities }]);
  }

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
