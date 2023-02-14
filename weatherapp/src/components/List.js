

export default function List({ activities, weather, onDeleteActivity }) {
   
  return (
    <>
      <h1>{weather.isGoodWeather ? ' Great to be out' : 'Bad weather'}</h1>
      <h2>
        {weather.temperature} {weather.condition}{' '}
      </h2>
      <ul className='listOfActivities'>
        {activities.map((activity) => (
          <li key={activity.id} className='activities-list_name'>
            <button className='close_btn' onClick={() => { onDeleteActivity(activity.id); }}>
              x
            </button>
            <h3>{activity.activityName}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}



