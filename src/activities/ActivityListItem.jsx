import { Link } from "react-router";
export function ActivityListItem({ activity }) {
  return (
    <li>
      <Link to={`/activities/${activity.id}`}>{activity.name}</Link>
    </li>
  );
}
