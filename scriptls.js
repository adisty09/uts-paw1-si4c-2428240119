// simpan ke local storage
localStorage.setItem("barang", "sepatu");

// baca data local storage
// tampilkan di console
console.log(localStorage.getItem("barang"))
    
// tam[pilkan di paragraf id=barang]
document.getElementById("barang").innerHTML= localStorage.getItem("barang")