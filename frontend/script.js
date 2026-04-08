// Backend URL (port 5000'e dikkat)
const BASE_URL = "http://localhost:5000/api";


// 🔥 Film ekleme fonksiyonu
async function addMovie() {
  // inputlardan değer alıyoruz
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const year = parseInt(document.getElementById("year").value);

  // basit validation (boş olmasın)
  if (!title || !year) {
    alert("Film adı ve yıl zorunlu!");
    return;
  }

  try {
    // backend'e POST isteği atıyoruz
    const response = await fetch(`${BASE_URL}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        year,
      }),
    });

    const data = await response.json();

    console.log("Eklenen film:", data);

    // 🔥 formu temizle
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("year").value = "";

    // listeyi yenile
    getMovies();

  } catch (error) {
    console.error("Hata:", error);
  }
}


// 🔥 Filmleri getirme
async function getMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movies`);
    const data = await response.json();

    console.log("Gelen filmler:", data);

    const list = document.getElementById("movieList");

    // listeyi temizle
    list.innerHTML = "";

    // güvenlik kontrolü
    if (!Array.isArray(data)) {
      console.error("Array gelmedi:", data);
      return;
    }

    // filmleri listele
    data.forEach((movie) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <span>${movie.title} (${movie.year})</span>
        <button onclick="deleteMovie(${movie.id})">Sil</button>
      `;

      list.appendChild(li);
    });

  } catch (error) {
    console.error(error);
  }
}


// 🔥 Film silme
async function deleteMovie(id) {
  try {
    await fetch(`${BASE_URL}/movies/${id}`, {
      method: "DELETE",
    });

    // listeyi güncelle
    getMovies();

  } catch (error) {
    console.error(error);
  }
}