import React, { useEffect, useState } from "react";
import { useStyles } from "./style";

const TableTitle = (props) => {
  const {
    tableTitle,
    SetActiveonDragItem,
    SetTableTitle,
    selectedItems,
    onDragItem,
  } = props;
  const Classes = useStyles();
  const [defualtSize, setDefualtSize] = useState(0);

  useEffect(() => {
    setDefualtSize(tableTitle.length);
  }, []);

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
    SetTableTitle([...tableTitle, onDragItem], onDragItem);
  };

  return (
    <div
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      className={Classes.root}
      style={
        tableTitle.length !== defualtSize
          ? { paddingLeft: "80px" }
          : { paddingLeft: "10px" }
      }
    >
      {tableTitle.map((value, index) => {
        return (
          <div
            key={index}
            id={value}
            draggable={tableTitle.length !== 1}
            className={Classes.items}
            onDragStart={(e) => SetActiveonDragItem(value)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default TableTitle;
