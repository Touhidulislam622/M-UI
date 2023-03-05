import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Container, Paper, InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "at", headerName: "AT", width: 200 },
  { field: "by", headerName: "BY", width: 180 },
  { field: "operationType", headerName: "OPERATION TYPE", width: 320 },
  {
    field: "tableName",
    headerName: "TABLE NAME",
    type: "name",
    width: 190,
  },
  
{ field: "version", headerName: "VERSION", width: 90 },

];

const rows = [
  { id: 1, at:"0985485557" , by: "Hotels Owner", operationType: "created",  version: 0 },
  { id: 2, at:"0985485557" , by: "Hotels Owner", operationType: "created",  version: 0 },
  { id: 3, at:"0985485557" , by: "Hotels Owner", operationType: "created",  version: 0 },
  { id: 4, at:"0985485557" , by: "Hotels Owner", operationType: "created",  version: 0 },
  { id: 5, at:"0985485557" , by: "Hotels Owner", operationType: "created",  version: 0 },
  { id: 6, at:"0985485557" , by: "Hotels Owner", operationType: "created",  version: 0 },
  { id: 7, at:"0985485557" , by: "Hotels Owner", operationType: "created",  version: 0 },
  { id: 8, at:"0985485557" , by: "Hotels Owner", operationType: "created",  version: 0 },
  { id: 9, at:"0985485557" , by: "Hotels Owner", operationType: "created",  version: 0 },
];

const Tabledata = () => {
  return (
    <Container sx={{ paddingTop: 2 }}>
      <Box marginBottom={2}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 270,
          borderRadius: 10,
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search by name" />
        <IconButton
          type="button"
          sx={{ p: "10px", backgroundColor: "skyblue" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      </Box>

      <Box height={600} width="100%">
        <DataGrid columns={columns} rows={rows} pageSize={5}
        rowsPerPageOptions={[7]}
        checkboxSelection>

        </DataGrid>
      </Box>
    </Container>
  );
};

export default Tabledata;
