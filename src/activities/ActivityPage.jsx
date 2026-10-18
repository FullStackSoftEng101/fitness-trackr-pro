import { useEffect, useState } from "react";
import { deleteActivity, getActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { useNavigate, useParams } from "react-router";

export default function ActiviyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  async function syncActivity(id) {
    try {
      const data = await getActivity(id);
      setActivity(data);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    syncActivity(id);
  }, [id]);

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!activity) return <p>Loading...</p>;
  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>Created by : {activity.creatorName}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </>
  );
}
