import React from "react";
import { useStyles } from "./style";
import Chip from "@mui/material/Chip";

const TableHeader = ({
  onDragItem,
  SetSelectedItems,
  selectedItems,
  SetActiveonDragItem,
}) => {
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    SetSelectedItems([...selectedItems, onDragItem], onDragItem);
  };
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      {selectedItems.length === 0
        ? "Drag a column header here to group by that column"
        : selectedItems.map((value, index) => {
            return (
              <Chip
                key={index}
                className={classes.tag}
                draggable
                label={value}
                onDelete={null}
                onDragStart={(e) => SetActiveonDragItem(value)}
              />
            );
          })}
    </div>
  );
};
export default TableHeader;
