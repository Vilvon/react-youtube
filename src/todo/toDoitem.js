import React, { useContext } from "react";
import PropTypes from "prop-types";
import MyContext from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    padding: "0.5em 1em",
    border: "0.0625em solid #ccc",
    borderRadius: "0.25em",
    marginBottom: ".5em",
  },
  input: {
    marginRight: "1em",
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(MyContext);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>

      <button className="rm"  onClick = {removeTodo.bind(null,todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
