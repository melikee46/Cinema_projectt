// service import
const movieService = require("../services/movie.service");

// film ekleme
const createMovie = async (req, res) => {
  try {
    const movie = await movieService.createMovie(req.body);
    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Film eklenemedi" });
  }
};

// film listeleme
const getMovies = async (req, res) => {
  try {
    const movies = await movieService.getMovies();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Filmler alınamadı" });
  }
};

// 🔥 film silme
const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await movieService.deleteMovie(id);

    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Film silinemedi" });
  }
};

// 🔥 film güncelleme
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await movieService.updateMovie(id, req.body);

    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Film güncellenemedi" });
  }
};

// export
module.exports = {
  createMovie,
  getMovies,
  deleteMovie,
  updateMovie,
};