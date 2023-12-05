import Activity from "../Activity";
import "./ActivityList.css"

export default function ActivityList({ activities }) {
  console.log(activities);

  return (
    <ul className="listContainer">
        {activities.map((activity) => (
          <li className="listItems" key={activity.id}>
            <Activity 
              name={activity.name}
          ></Activity>
          </li>))}
    </ul>     
  );
}
