const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
// MENAMBAHKAN TUGAS
function addTask() {
    // Kalau input kosong
    if (inputbox.value.trim() === "") {
        alert("Kamu harus menulis sesuatu!");
        return;
    }
    // Membuat LI
    const li = document.createElement("li");
    // Memasukkan teks tugas
    li.textContent = inputbox.value.trim();
    // Membuat tombol edit
    
    const edit = document.createElement("button");
    edit.textContent = "✏️";
    edit.className = "edit-btn";
// Memasukkan tombol edit ke LI
    li.appendChild(edit);
    // Membuat tombol hapus
    const span = document.createElement("span");
    span.textContent = "×";
    // Memasukkan tombol hapus ke LI
    li.appendChild(span);
    // Memasukkan LI ke UL
    listcontainer.appendChild(li);
    // Mengosongkan input
    inputbox.value = "";
    // Menyimpan data
    saveData();
}
// KLIK TUGAS / HAPUS TUGAS
//     listcontainer.addEventListener("click", function(event) {
//     // Kalau yang diklik adalah tugas
//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle("checked");
//         saveData();
//     }
//     // Kalau yang diklik adalah tombol X
//     else if (event.target.tagName === "SPAN") {
//         event.target.parentElement.remove();
//         saveData();
//     }
// });
listcontainer.addEventListener("click", function(event) {

    // Kalau yang diklik adalah tugas
if (event.target.tagName === "LI") {

 event.target.classList.toggle("checked");
        saveData();
}
    // Kalau yang diklik tombol EDIT
    else if (event.target.classList.contains("edit-btn")) {
    const li = event.target.parentElement;
     const namaBaru = prompt("Edit tugas:", li.firstChild.textContent);
     if (namaBaru !== null && namaBaru.trim() !== "") {
     li.firstChild.textContent = namaBaru.trim();
     saveData();
}
}
    // Kalau yang diklik tombol X
    else if (event.target.tagName === "SPAN") {
  event.target.parentElement.remove();
    saveData();
}
});
// MENYIMPAN DATA
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
// MENAMPILKAN DATA
function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
   listcontainer.innerHTML = savedData;
    } else {
     listcontainer.innerHTML = "";
    }
}
// ENTER UNTUK MENAMBAHKAN
inputbox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
     addTask();
    }
});
// Jalankan saat halaman dibuka
showTask();
    document.getElementById("hapus-semua").addEventListener("click", function() {
    if (confirm("Yakin ingin menghapus semua tugas?")) {
    listcontainer.innerHTML = "";        saveData();
    }
});