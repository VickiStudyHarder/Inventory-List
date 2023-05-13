// ListItem.js
import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function ListItem({ name, isActive, onClick, onDelete }) {
  return (
    <div className={`list-item ${isActive ? "active" : ""}`} onClick={onClick}>
      {name}
      <IconButton onClick={onDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}

export default ListItem;
