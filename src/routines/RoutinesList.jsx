import { Link } from "react-router";

export default function RoutinesList({ routines }) {
  return (
    <>
      {routines.lenght === 0 && <p>No routines found</p>}
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            <Link to={`/routines/${routine.id}`}>{routine.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
