import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

import { MdDeleteForever } from "react-icons/md";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong> {workout.load}
      </p>
      <p>
        <strong>Reps: </strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>
        <MdDeleteForever size={20} />
      </span>
    </div>
  );
};

export default WorkoutDetails;
