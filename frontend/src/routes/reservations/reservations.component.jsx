import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { ReservationsContainer } from "./reservations.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectProjections } from "../../store/projections/projections.selector";
import { selectReservations } from "../../store/reservations/reservations.selector";
import { setProjections } from "../../store/projections/projections.reducer";
import { setReservations } from "../../store/reservations/reservations.reducer";
import axios from "axios";

const Reservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProjectionsMap = async () => {
      const projectionsMap = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/projections`
      );

      const projectionsData = projectionsMap.data;

      dispatch(setProjections(projectionsData));
    };

    const getReservationsMap = async () => {
      const reservationsMap = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/reservations`
      );

      const reservationsData = reservationsMap.data;

      dispatch(setReservations(reservationsData));
    };

    getProjectionsMap();
    getReservationsMap();
  }, []);

  const projections = useSelector(selectProjections);
  const reservations = useSelector(selectReservations);

  const [selectedProjection, setSelectedProjection] = useState(null);
  const [seatsToReserve, setSeatsToReserve] = useState(1);

  const handleReservationSubmit = () => {};

  return (
    <ReservationsContainer>
      <Typography variant="h2" gutterBottom>
        Reservations
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {reservations.map((reservation) => {
            const reservationDate = new Date(reservation.dateTime);
            const reservationTime = reservationDate.toLocaleTimeString();

            return (
              <div key={reservation.movieName}>
                <Typography variant="h6">
                  {reservation.movieName} - {reservationDate.toDateString()}{" "}
                  {reservationTime}
                </Typography>
                <Typography>
                  Hall: {reservation.hallName} | 3D:{" "}
                  {reservation.hallType === "3D" ? "Yes" : "No"} | Selected
                  seats: {reservation.selectedSeat}
                </Typography>
              </div>
            );
          })}
        </Grid>

        <Grid item xs={6}>
          {selectedProjection && (
            <form onSubmit={handleReservationSubmit}>
              <Typography variant="h6">Reservation Details</Typography>
              <TextField label="Name" variant="outlined" fullWidth required />
              <TextField label="Email" variant="outlined" fullWidth required />
              <TextField
                label="Seats to Reserve"
                variant="outlined"
                fullWidth
                type="number"
                required
              />
              <Button variant="contained" color="primary" type="submit">
                Reserve
              </Button>
            </form>
          )}
        </Grid>
      </Grid>
    </ReservationsContainer>
  );
};

export default Reservations;
