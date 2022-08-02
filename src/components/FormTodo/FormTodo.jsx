import "./index.css";

const FormTodo = ({ state, onChange, children }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="todo-input">
      <h2>Attività</h2>
      <label>Cosa Farai?</label>
      <input
        type="text"
        name="activity"
        placeholder=""
        onChange={handleChange}
      />
      {/* activity */}
      <br />
      <label>Giorno:</label>
      <input type="text" name="date" placeholder="" onChange={handleChange} />
      {/* date */}
      <br />
      <label>Ora:</label>
      <input type="text" name="time" placeholder="" onChange={handleChange} />
      {/* time */}
      <br />

      {state.isError ? (
        <p className="message message--error">
          <strong>ERRORE</strong> : Non hai riempito alcuni campi!
        </p>
      ) : null}
      <br />

      {children}
    </div>
  );
};

export default FormTodo;
