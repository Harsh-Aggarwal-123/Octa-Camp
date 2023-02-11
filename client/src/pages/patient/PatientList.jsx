import * as React from "react";
import {useState, useEffect} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { useAppStore } from "../../appStore";
import { CardContent } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "patients");
  const [open, setOpen] = useState(false);
  const [formid, setFormid] = useState("");
  const [editopen, setEditOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleEditOpen = () => setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);
  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);
  


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "patients", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows([]);
      getUsers();
    }
  };

  const editData = (id, Name, Number, Email, Age, Gender, Address, Symptoms) => {
    const data = {
        id: id,
        Name: Name,
        Number: Number,
        Email: Email,
        Age: Age,
        Gender: Gender,
        Address: Address,
        Symptoms: Symptoms,
    };
    setFormid(data);
    handleEditOpen();
  };

  return (
    <>
    <div>
      <Modal
        open={open}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddForm closeEvent={handleClose}/>
        </Box>
      </Modal>
      <Modal
        open={editopen}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditForm closeEvent={handleEditClose} fid={formid}/>
        </Box>
      </Modal>
    </div>
       {rows.length > 0 && (
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ padding: "20px" }}
                >
                  Patients List
                </Typography>
                <Divider />
                
                <Box height={10} />
                    <Stack direction="row" spacing={2} className="my-2 mb-2">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={rows}
                        sx={{ width: 300 }}
                        onChange={(e, v) => filterData(v)}
                        getOptionLabel={(rows) => rows.Name || ""}
                        renderInput={(params) => (
                          <TextField {...params} size="small" label="Search Patients" />
                        )}
                      />
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                      ></Typography>
                      <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>
                        Add
                      </Button>
                    </Stack>
                    <Box height={10} />
                    
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="0sticky table">
                    <TableHead>
                      <TableRow>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              FirstName
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              LastName
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              ContactNumber
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              Email
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              Age
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              Gender
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                                House No.
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              City
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              State
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              Pin Code
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              Symptoms
                          </TableCell>
                          <TableCell align="left" style={{ minWidth: "100px" }}>
                              Action
                          </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                  <TableCell key={row.id} align="left">
                                    {row.FirstName}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.LastName}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.ContactNumber}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.Email}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.Age}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.Gender}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.House}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.City}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.State}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.PinCode}
                                  </TableCell>
                                  <TableCell key={row.id} align="left">
                                    {row.Symptoms}
                                  </TableCell>
                                  <TableCell align="left">
                                    <Stack spacing={2} direction="row">
                                      <EditIcon
                                        style={{
                                          fontSize: "20px",
                                          color: "blue",
                                          cursor: "pointer",
                                        }}
                                        className="cursor-pointer"
                                        onClick={() => {
                                            editData(row.id, row.Name, row.Number, row.Email, row.Age, row.Gender, row.Address, row.Symptoms);
                                        }}
                                      />
                                      <DeleteIcon
                                        style={{
                                          fontSize: "20px",
                                          color: "darkred",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          deleteUser(row.id);
                                        }}
                                      />
                                    </Stack>
                                  </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
        )}
    </>

  );
}
