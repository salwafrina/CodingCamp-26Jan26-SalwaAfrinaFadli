let userName = "Salwa! ";
document.getElementById("name").innerText = userName;

const form = document.getElementById("messageForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pesan = document.getElementById("pesan").value;

  const currentTime = new Date().toLocaleString();

  result.innerHTML = `
    <p><strong>Current time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${pesan}</p>
  `;
});