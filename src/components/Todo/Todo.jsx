import "./index.css";
import { memo } from "react";

const Todo = ({ todoData, onClick }) => {
  let { id, activity, date, time } = todoData;
  console.log(Todo);
  return (
    <div className="todoData__container" key={id}>
      <div className="todo">
        <h3>Attività: {activity}</h3>
        <h3>Giorno: {date}</h3>
        <h3>Ora: {time} </h3>

        <button className="btn" id={id} onClick={(e) => onClick(e)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default memo(Todo);
