import React, { useState } from "react";
import { useStyles } from "./style";
import Paper from "@mui/material/Paper";
import TableTitle from "../TableTitle";
import TableHeader from "../TableHeader";
import TableBodyC from "../TableBody";
import { Data } from "../../Data/Data";
const App = () => {
  const Classes = useStyles();
  const [selectedItems, setSelectedItems] = useState([]);
  const [tableTitle, setTableTitle] = useState(Object.keys(Data[0]).sort());
  const [onDragItem, setOnDragItem] = useState("");

  const SetActiveonDragItem = (value) => {
    setOnDragItem(value);
  };
  const SetTableTitle = (value, tag) => {
    setTableTitle([...new Set(value.sort())]);
    setSelectedItems((value) => value.filter((item) => item !== tag));
  };
  const SetSelectedItems = (value, tag) => {
    setSelectedItems([...new Set(value)]);
    setTableTitle((value) => value.filter((item) => item !== tag).sort());
  };

  return (
    <div className={Classes.root}>
      <Paper className={Classes.paper} elevation={0}>
        <TableHeader
          onDragItem={onDragItem}
          SetSelectedItems={SetSelectedItems}
          selectedItems={selectedItems}
          SetActiveonDragItem={SetActiveonDragItem}
        />
        <TableTitle
          onDragItem={onDragItem}
          tableTitle={tableTitle}
          SetActiveonDragItem={SetActiveonDragItem}
          SetTableTitle={SetTableTitle}
          selectedItems={selectedItems}
        />
        <TableBodyC
          Data={Data}
          tableTitle={tableTitle}
          selectedItems={selectedItems}
        />
      </Paper>
    </div>
  );
};
export default App;
