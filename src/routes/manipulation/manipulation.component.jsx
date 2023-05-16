import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import { ContentContainer } from "./manipulation.styles";
import { Fragment, useContext, useState } from "react";
import { MoviesContext } from "../../contexts/movies-context/movies.context";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Manipulation = () => {
  const { moviesList, updateMovieInList, deleteMovieFromList } =
    useContext(MoviesContext);
  const { moviesList: movies } = moviesList;

  const [rowIndex, setRowIndex] = useState(-1);
  const [columnIndex, setColumnIndex] = useState(-1);

  // Set made to distinct different genres, then converted to genres array using Array.from
  let genresArray = [
    "Action",
    "Thriller",
    "Superhero",
    "Heist",
    "Comedy",
    "Romance",
    "Drama",
    "Mafia",
    "Sci-Fi",
    "Fantasy",
    "Crime",
    "Mystery",
    "Adventure",
    "Detective",
    "Prison",
    "Horror",
    "History",
    "War",
    "Neo-noir",
    "Indie",
  ];
  const [genresList, setGenresList] = useState([]);

  const handleExitEditMode = () => {
    setRowIndex(-1);
    setColumnIndex(-1);
  };

  const handleAddGenres = (event, row) => {
    const selectedGenres = event.target.value;
    setGenresList(selectedGenres);

    const updatedRow = { ...row, genres: selectedGenres };
    handleUpdateMovie(updatedRow);
  };

  const handleDoubleClickGenres = (row, index) => {
    setGenresList(row.genres);
    setRowIndex(index);
    setColumnIndex(6);
  };

  const handleExitMultipleSelect = (event) => {
    if (event.key === "Enter") handleExitEditMode();
  };

  const handleTextFieldChange = (row, fieldName, value) => {
    const updatedRow = { ...row, [fieldName]: value };
    updateMovieInList(updatedRow);
  };

  const handleDeleteMovie = (movieToDelete) => {
    deleteMovieFromList(movieToDelete);
  };

  const handleUpdateMovie = (movieToUpdate) => {
    updateMovieInList(movieToUpdate);
  };

  return (
    <ContentContainer>
      <TableContainer component={Paper} sx={{ maxHeight: "610px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Director</TableCell>
              <TableCell align="center">Rating</TableCell>
              <TableCell align="center">Year</TableCell>
              <TableCell align="center">Length</TableCell>
              <TableCell align="center">is3D</TableCell>
              <TableCell align="center">Genres</TableCell>
              <TableCell>Manipulation</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {movies && movies.length > 0 ? (
              movies.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell
                    align="center"
                    onDoubleClick={() => {
                      setRowIndex(index);
                      setColumnIndex(0);
                    }}
                  >
                    {rowIndex === index && columnIndex === 0 ? (
                      <TextField
                        label="Name"
                        variant="standard"
                        color="secondary"
                        helperText="Enter movie name"
                        value={row.nameOfMovie}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleExitEditMode();
                          }
                        }}
                        onChange={(e) =>
                          handleTextFieldChange(
                            row,
                            "nameOfMovie",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.nameOfMovie
                    )}
                  </TableCell>
                  <TableCell
                    align="center"
                    onDoubleClick={() => {
                      setRowIndex(index);
                      setColumnIndex(1);
                    }}
                  >
                    {rowIndex === index && columnIndex === 1 ? (
                      <TextField
                        label="Director"
                        variant="standard"
                        color="secondary"
                        helperText="Enter movie director"
                        value={row.director}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleExitEditMode();
                          }
                        }}
                        onChange={(e) =>
                          handleTextFieldChange(row, "director", e.target.value)
                        }
                      />
                    ) : (
                      row.director
                    )}
                  </TableCell>
                  <TableCell
                    align="center"
                    onDoubleClick={() => {
                      setRowIndex(index);
                      setColumnIndex(2);
                    }}
                  >
                    {rowIndex === index && columnIndex === 2 ? (
                      <TextField
                        label="Rating"
                        variant="standard"
                        color="secondary"
                        sx={{ width: "80px" }}
                        helperText="Enter movie rating"
                        value={row.rating}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleExitEditMode();
                          }
                        }}
                        onChange={(e) =>
                          handleTextFieldChange(row, "rating", e.target.value)
                        }
                      />
                    ) : (
                      Number(row.rating).toFixed(1)
                    )}
                  </TableCell>
                  <TableCell
                    align="center"
                    onDoubleClick={() => {
                      setRowIndex(index);
                      setColumnIndex(3);
                    }}
                  >
                    {rowIndex === index && columnIndex === 3 ? (
                      <TextField
                        label="Year"
                        variant="standard"
                        color="secondary"
                        helperText="Enter year of release"
                        sx={{ width: "80px" }}
                        value={row.yearOfRelease}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleExitEditMode();
                          }
                        }}
                        onChange={(e) =>
                          handleTextFieldChange(
                            row,
                            "yearOfRelease",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      Number(row.yearOfRelease)
                    )}
                  </TableCell>
                  <TableCell
                    align="center"
                    onDoubleClick={() => {
                      setRowIndex(index);
                      setColumnIndex(4);
                    }}
                  >
                    {rowIndex === index && columnIndex === 4 ? (
                      <TextField
                        label="Length"
                        variant="standard"
                        color="secondary"
                        helperText="Enter movie length"
                        sx={{ width: "100px" }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">mins</InputAdornment>
                          ),
                        }}
                        value={row.lengthOfMovie}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleExitEditMode();
                          }
                        }}
                        onChange={(e) =>
                          handleTextFieldChange(
                            row,
                            "lengthOfMovie",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      Number(row.lengthOfMovie)
                    )}
                  </TableCell>

                  <TableCell
                    align="center"
                    onDoubleClick={() => {
                      setRowIndex(index);
                      setColumnIndex(5);
                    }}
                  >
                    {rowIndex === index && columnIndex === 5 ? (
                      <Select
                        size="small"
                        color="secondary"
                        value={row.is3D ? "true" : "false"}
                        onChange={(e) => {
                          const parsedValue = e.target.value === "true";
                          handleTextFieldChange(row, "is3D", parsedValue);
                          setRowIndex(-1);
                          setColumnIndex(-1);
                        }}
                      >
                        <MenuItem value="true">Yes</MenuItem>
                        <MenuItem value="false">No</MenuItem>
                      </Select>
                    ) : (
                      <Fragment>{row.is3D ? "Yes" : "No"}</Fragment>
                    )}
                  </TableCell>

                  <TableCell
                    align="center"
                    onDoubleClick={() => {
                      handleDoubleClickGenres(row, index);
                    }}
                    onKeyDown={(event) => handleExitMultipleSelect(event)}
                  >
                    {rowIndex === index && columnIndex === 6 ? (
                      <TextField
                        label="Select genres"
                        color="secondary"
                        size="small"
                        select
                        fullWidth
                        sx={{ width: 200 }}
                        value={genresList}
                        onChange={(event) => handleAddGenres(event, row)}
                        SelectProps={{
                          multiple: true,
                          renderValue: (selected) => {
                            if (selected.length > 3) {
                              return selected.slice(0, 3).join(", ") + " ...";
                            }
                            return selected.join(", ");
                          },
                        }}
                      >
                        {genresArray.map((genre) => (
                          <MenuItem key={genre} value={genre}>
                            {genre}
                          </MenuItem>
                        ))}
                      </TextField>
                    ) : row.genres.length > 5 ? (
                      <Fragment>{`${row.genres.slice(0, 3).join(", ")}... +${
                        row.genres.length - 3
                      }`}</Fragment>
                    ) : (
                      row.genres.slice(0, 3).join(", ")
                    )}
                  </TableCell>

                  <TableCell>
                    <Tooltip
                      title="Edit row"
                      placement="top-start"
                      enterDelay={900}
                    >
                      <IconButton
                        variant="contained"
                        color="primary"
                        disableRipple
                        onClick={() => handleUpdateMovie(row)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip
                      title="Delete row"
                      placement="top-start"
                      enterDelay={900}
                    >
                      <IconButton
                        variant="contained"
                        color="error"
                        sx={{ ml: 1 }}
                        disableRipple
                        onClick={() => handleDeleteMovie(row)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>Loading movies...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentContainer>
  );
};

export default Manipulation;
