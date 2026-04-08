// prisma bağlantısını alıyoruz
const prisma = require("../prisma/prismaClient");

// film oluşturma
const createMovie = async (data) => {
  return await prisma.movie.create({
    data: data,
  });
};

// tüm filmleri getirme
const getMovies = async () => {
  return await prisma.movie.findMany();
};

// 🔥 film silme
const deleteMovie = async (id) => {
  return await prisma.movie.delete({
    where: {
      id: Number(id), // string → number çeviriyoruz
    },
  });
};

// 🔥 film güncelleme
const updateMovie = async (id, data) => {
  return await prisma.movie.update({
    where: {
      id: Number(id),
    },
    data: data,
  });
};

// dışarı açıyoruz
module.exports = {
  createMovie,
  getMovies,
  deleteMovie,
  updateMovie,
};