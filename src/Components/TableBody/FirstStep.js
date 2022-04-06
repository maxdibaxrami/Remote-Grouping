import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SecondStep from "./SecondStep";

const FirstStep=(props)=> {
    const { row, tableTitle, defualtSize, selectedItems, fulldata } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          {tableTitle.length !== defualtSize && (
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
          )}
          {tableTitle.length === defualtSize &&
            tableTitle.map((value, index) => {
              return (
                <TableCell
                  style={{ width: `${100 / tableTitle.length}%` }}
                  align="left"
                >
                  {row[value]}
                </TableCell>
              );
            })}
          {selectedItems.length >= 1 && (
            <TableCell style={{ width: `100%` }} align="left">
              <strong>{selectedItems[0]}:</strong>
              {row[selectedItems[0]]}
            </TableCell>
          )}
        </TableRow>
        {selectedItems.length >= 1 && (
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  {selectedItems.length >= 2 ? (
                    [
                      ...new Map(
                        fulldata
                          .filter(
                            (value) =>
                              value[selectedItems[0]] === row[selectedItems[0]]
                          )
                          .map((item) => [item[selectedItems[1]], item])
                      ).values(),
                    ].map((value, index) => {
                      return (
                        <SecondStep
                          data={value}
                          selectedItems={selectedItems}
                          fulldata={fulldata}
                          tableTitle={tableTitle}
                        />
                      );
                    })
                  ) : (
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          {tableTitle.map((value, index) => {
                            return <TableCell align="left">{value}</TableCell>;
                          })}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {fulldata
                          .filter(
                            (value) =>
                              value[selectedItems[0]] === row[selectedItems[0]]
                          )
                          .map((row, index) => {
                            return (
                              <TableRow key={index}>
                                {tableTitle.map((value, index) => {
                                  return (
                                    <TableCell component="th" scope="row">
                                      {row[value]}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  )}
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        )}
      </React.Fragment>
    );
}
export default FirstStep