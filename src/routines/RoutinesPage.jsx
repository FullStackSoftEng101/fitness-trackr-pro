import { useEffect, useState } from "react";
import { getRoutines } from "../api/routines";
import { Link } from "react-router";

export default function RoutinesPage() {
  const [routines, setRoutines] = useState([]);

  const syncRoutines = async () => {
    const data = await getRoutines();
    setRoutines(data);
  };

  useEffect(() => {
    syncRoutines();
  }, []);
  return (
    <>
      <div>
        <h1>Routines</h1>

        {routines.lenght === 0 && <p>No routines found</p>}
        <ul>
          {routines.map((routine) => (
            <li key={routine.id}>
              <Link to={`/routines/${routine.id}`}>{routine.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
