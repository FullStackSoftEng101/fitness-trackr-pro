import { ActivityListItem } from "./ActivityListItem";

export default function ActivityList({ activities, syncActivities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
          //syncActivities={syncActivities}
        />
      ))}
    </ul>
  );
}
