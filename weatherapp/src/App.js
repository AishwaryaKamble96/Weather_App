import Form from './components/Form';

import { uid } from 'uid';
import List from './components/List';
import useLocalStorageState from 'use-local-storage-state';
import { useEffect, useState } from 'react';


function App() {
  const [activities, setActivities] = useLocalStorageState('activity', {
    defaultValue: [],
  });

  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        'https://example-apis.vercel.app/api/weather'
      );
      const weather = await response.json();

      setWeather(weather);
    }
    getWeather();
  }, []);

  const goodWeatherActivities = activities.filter((activity) => {
    return activity.goodWeathercheckBox === weather.isGoodWeather;
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  
  return (
    <>
      <List
        activities={goodWeatherActivities}
        weather={weather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
