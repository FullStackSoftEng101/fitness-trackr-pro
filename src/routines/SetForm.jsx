import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { addSets } from "../api/routines";
import { getActivities } from "../api/activities";

/** Form for a user to create a new Sets with a name and description. */
export default function SetForm({ routineId, syncRoutine }) {
  const { token } = useAuth();

  const [error, setError] = useState(null);
  const [activities, setActivities] = useState([]); //null or undefined

  const syncActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  useEffect(() => {
    syncActivities();
  }, []);

  const tryAddSets = async (formData) => {
    setError(null);

    const activityId = formData.get("activity");
    // const routineId = formData.get("routineId");
    const count = formData.get("count");

    try {
      await addSets(token, { activityId, routineId, count });
      syncRoutine(routineId);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h2>Add a new Sets</h2>
      <form action={tryAddSets}>
        <label>
          Activity
          <select name="activity">
            {activities.map((activity) => (
              <option key={activity.id} value={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        </label>
        {/* <label>
          Routine Id
          <input type="text" name="routineId" />
        </label> */}
        <label>
          Count
          <input type="text" name="count" />
        </label>
        <button>Add Sets</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
}
