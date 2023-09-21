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
    res.json({ example: "example" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(process.env.PORT || port);
