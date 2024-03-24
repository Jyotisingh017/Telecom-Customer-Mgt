import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { useHistory } from "react-router-dom";
import { PLAN_DETAILS } from "../constants";

function CustomerDetails() {
  const history = useHistory();
  const [rows, setRows] = useState([]);
  const getCustDetails = async () => {
    await axios
      .get("/Telecom-Customer-Mgt/customer-details.json")
      .then((res) => res.data && setRows([...res.data]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCustDetails();
  }, []);
  return (
    <div>
      <Button
        variant="contained"
        color="success"
        size="s"
        startIcon={<IconArrowLeft size="15" />}
        sx={{ position: "absolute", top: 0, left: 0, margin: "2vw" }}
        onClick={() => history.push(PLAN_DETAILS)}
      >
        Go to plan details
      </Button>
      <TableContainer component={Paper} className="page-wrapper">
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Plan name</TableCell>
              <TableCell align="left">Plan status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} role="row_cust">
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.plan}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomerDetails;
