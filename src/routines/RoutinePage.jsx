import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteRoutine, deleteSets, getRoutine } from "../api/routines";
import { useAuth } from "../auth/AuthContext";
import SetForm from "./SetForm";

export default function RoutinePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [routine, setRoutine] = useState(null);
  const [error, setError] = useState(null);

  async function syncRoutine(id) {
    try {
      const data = await getRoutine(id);
      setRoutine(data);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    syncRoutine(id);
  }, [id]);

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteRoutine(token, routine.id);
      navigate("/routines");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!routine) return <p>Loading...</p>;
  return (
    <>
      <h1>{routine.name}</h1>
      <p>{routine.goal}</p>
      <p>Created by : {routine.creatorName}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}

      <h2>Sets</h2>
      {routine.sets.length === 0 ? (
        <p>No sets -add one below!</p>
      ) : (
        <ul>
          {routine.sets.map((set) => (
            <li key={set.id}>
              {set.name} x {set.count} reps
              {token && <button onClick={tryDeleteSet}> Delete </button>}
            </li>
          ))}
        </ul>
      )}

      <SetForm routineId={id} syncRoutine={syncRoutine} />
    </>
  );
}
