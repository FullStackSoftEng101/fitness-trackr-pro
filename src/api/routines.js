const API = import.meta.env.VITE_API;

export async function getRoutines() {
  try {
    const response = await fetch(API + "/routines");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getRoutine(id) {
  try {
    const response = await fetch(API + "/routines/" + id);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}

/**
 * Sends a new activity to the API to be created.
 * A valid token is required.
 */
export async function createRoutine(token, routine) {
  if (!token) {
    throw Error("You must be signed in to create an routine.");
  }

  const response = await fetch(API + "/routines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(activity),
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}

/**
 * Requests the API to delete the activity with the given ID.
 * A valid token is required.
 */
export async function deleteRoutine(token, id) {
  if (!token) {
    throw Error("You must be signed in to delete an routine.");
  }

  const response = await fetch(API + "/routines/" + id, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  });

  if (!response.ok) {
    const message = await response.text();

    throw Error(message);
  }
  return null;
}
