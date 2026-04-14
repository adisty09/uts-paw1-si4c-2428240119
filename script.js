let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let imageUrl = document.getElementById("imageUrl");

function simpan() {
    console.log(npm.value)
    console.log(nama.value)
    console.log(imageUrl.value)

    localStorage.setItem("npm", npm.value)
    localStorage.setItem("nama", nama.value)
    localStorage.setItem("imageUrl", imageUrl.value)

    // jika localstorage bellum ada isi/value
    if(localStorage.getItem("mahasiswa")===null){
        //simpan array kosong[]
        localStorage.setItem("mahasiswa", "[]")
    }
    //panggil local storage
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm dan nama ke dalam Object data
    data.push({
        npm: npm.value,
        nama: nama.value,
        imageUrl: imageUrl.value
    })
    console.log(data)

    // simpan data terbaru ke dalam loval storage 
    // konversi data ke string 
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    // clear input
    npm.value = "";
    nama.value = "";
    imageUrl.value = "";

    // panggil tampil
    tampil()

}

function tampil(){
    // panggil dulu  local storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    // clear element ul id=list-mhs
    document.getElementById("list-mhs").innerHTML = ""

    // lakukan perulangan (foreach)
    hasil.forEach(element => {
        document.getElementById("list-mhs").innerHTML += `<div class="col-lg-4 col-md-6 mb-3">
        <div class="card">
            <img src="${element.imageUrl}" alt="Foto Mahasiswa" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h4 class="card-title text-dark">${element.npm}</h4>
                <h6 class="card-subtitle mb-2 text-secondary">${element.nama}</h6>
            </div>
        </div>
        </div>`
    });
   
    
}
// jalankan function tampil ()
tampil ()
