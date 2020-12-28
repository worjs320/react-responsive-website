import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Footer from "../Footer";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 140 },
  { field: "lastName", headerName: "Last name", width: 140 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 80,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxieasdasdasdasdasda", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Roxiee", firstName: "Harvey", age: 65 },
  { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const useStyles = makeStyles((theme) => ({
  mainContent: {
    minHeight: "100vh",
    marginTop: "20px;",
  },
  titleContent: {
    marginBottom: "30px;",
  },
}));

export default function DataTable() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.mainContent}>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.titleContent}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Product
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Product List
          </Typography>
        </Container>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          autoHeight
          checkboxSelection
          showToolbar
        />
      </Container>
      <Footer />
    </>
  );
}
