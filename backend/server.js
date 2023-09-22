import express from "express";
import { getCategoriesAndDocuments } from "./firebase.utils.js";
import cors from "cors";

const app = express();

const port = 3005;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const getMovies = async () => {
  const { all_movies } = await getCategoriesAndDocuments("movies");
  return all_movies;
};

const getHalls = async () => {
  const { all_halls } = await getCategoriesAndDocuments("halls");
  return all_halls;
};

const getProjections = async () => {
  const { all_projections } = await getCategoriesAndDocuments("projections");
  return all_projections;
};

const getReservations = async () => {
  const { all_reservations } = await getCategoriesAndDocuments("reservations");
  return all_reservations;
};

app.get("/movies", async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/halls", async (req, res) => {
  try {
    const halls = await getHalls();
    res.status(200).json(halls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/projections", async (req, res) => {
  try {
    const projections = await getProjections();
    res.status(200).json(projections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/reservations", async (req, res) => {
  try {
    const reservations = await getReservations();
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.PORT || port);
