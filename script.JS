document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Mengambil inputan dari form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Cek jika login berhasil (untuk contoh ini, username dan password harus "admin")
  if (username === "admin1" && password === "adminku") {
      // Redirect ke halaman portofolio jika login berhasil
      window.location.href = "portofolio.html";
  } else {
      alert("Invalid username or password!");
  }
});
