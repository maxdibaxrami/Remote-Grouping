import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { useStyles } from "./style";
import FirstStep from "./FirstStep";

export default function TableBodyC(props) {
  const classes = useStyles();
  const { Data, tableTitle, selectedItems } = props;
  const [defualtSize, setDefualtSize] = useState(0);
  const [ItemsWithFilter, setItemsWithFilter] = useState([]);

  useEffect(() => {
    if (selectedItems.length === 0) {
      setItemsWithFilter(Data);
    }

    if (selectedItems.length === 1) {
      setItemsWithFilter([
        ...new Map(Data.map((item) => [item[selectedItems[0]], item])).values(),
      ]);
    }
  }, [selectedItems]);
  
  useEffect(() => {
    setDefualtSize(tableTitle.length);
  }, []);

  return (
    <TableContainer className={classes.root}>
      <Table aria-label="collapsible table">
        <TableBody>
          {ItemsWithFilter.map((row, index) => (
            <FirstStep
              key={index}
              fulldata={Data}
              row={row}
              tableTitle={tableTitle}
              defualtSize={defualtSize}
              selectedItems={selectedItems}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
