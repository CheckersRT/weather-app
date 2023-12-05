import Activity from "../Activity";
import "./ActivityList.css"

export default function ActivityList({ 
    filter, 
    activities,
    onDeleteActivity
   }) {
  console.log(activities);

  const headlineForGoodWeather = "The weather is awesome! Go outside and:"
  const headlineForBadWeather = "Bad weather outside! Here's what you can do:"

  return (<>
    <h3>{filter ? headlineForGoodWeather : headlineForBadWeather}</h3>
    <ul className="listContainer">
        {activities.map((activity) => (
          <li className="listItems" key={activity.id}>
            <Activity 
              id={activity.id}
              name={activity.name}
              onDeleteActivity={onDeleteActivity}
          ></Activity>
          </li>))}
    </ul>     
    </>
  );
}
