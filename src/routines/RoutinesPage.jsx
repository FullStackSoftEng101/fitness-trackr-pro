import { useEffect, useState } from "react";
import { getRoutines } from "../api/routines";
import { Link, Navigate } from "react-router";
import RoutinesList from "./RoutinesList";
import RoutineForm from "./RoutineForm";

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
        <RoutinesList routines={routines} />
        <RoutineForm syncRoutines={syncRoutines} />
      </div>
    </>
  );
}
