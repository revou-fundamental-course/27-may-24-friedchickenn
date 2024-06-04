document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai input dari form
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var message = document.getElementById('message').value;

    // Mendapatkan waktu saat formulir diisi
    var currentTime = new Date();
    var formattedTime = currentTime.toLocaleString();

    // Membuat string dengan hasil input baru dan waktu input
    var newResult = "Waktu Input: " + formattedTime + "<br>" +
                    "Nama: " + name + "<br>" +
                    "Tanggal Lahir: " + dob + "<br>" +
                    "Jenis Kelamin: " + gender + "<br>" +
                    "Pesan: " + message + "<br><br>";

    // Menampilkan hasil input baru dan hasil sebelumnya pada div hasil
    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = newResult + resultContainer.innerHTML;

    // Membersihkan form untuk pengisian berikutnya
    document.getElementById('messageForm').reset();
});
