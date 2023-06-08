import express from "express";
import { getCategoriesAndDocuments } from "./firebase.utils.js";
import cors from "cors";

const app = express();

const port = 5000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const getMovies = async () => {
    const categories = await getCategoriesAndDocuments();
    const moviesList = categories.all_movies;
    return moviesList;
}

app.get("/movies", async (req, res) => {
    try {
        const movies = await getMovies();
        res.status(200).json(movies);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
});

app.get("/projections", async (req, res) => {
  try {
      res.json({example: "example"});
      }
  catch(error) {
    console.error(error);
    res.status(500).json({error: "Internal Server Error"});
  }
});

app.listen(port, () => {
    console.log(`App is active on port: http://localhost:${port}`);
});