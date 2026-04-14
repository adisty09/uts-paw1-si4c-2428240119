let barang = document.getElementById("barang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
    console.log(barang.value)
    console.log(jumlah.value)
    console.log(keterangan.value)

    localStorage.setItem("barang", barang.value)
    localStorage.setItem("jumlah", jumlah.value)
    localStorage.setItem("keterangan", keterangan.value)

    // jika localstorage bellum ada isi/value
    if(localStorage.getItem("daftar_belanja")===null){
        //simpan array kosong[]
        localStorage.setItem("daftar_belanja", "[]")
    }
    //panggil local storage
    let data = JSON.parse(localStorage.getItem("daftar_belanja"))
    console.log(data)

    //simpan value npm dan nama ke dalam Object data
    data.push({
        barang: barang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    })
    console.log(data)

    // simpan data terbaru ke dalam loval storage 
    // konversi data ke string 
    localStorage.setItem("daftar_belanja", JSON.stringify(data))

    // clear input
    barang.value = "";
    jumlah.value = "";
    keterangan.value = "";
    imageUrl,value = "";

    // panggil tampil
    tampil()

}

function tampil(){
    // panggil dulu  local storage
    let hasil = JSON.parse(localStorage.getItem("daftar_belanja"))

    // clear element ul id=list-mhs
    document.getElementById("list-blnj").innerHTML = ""

    // lakukan perulangan (foreach)
    hasil.forEach(element => {
        document.getElementById("list-blnj").innerHTML += `<div class="col-lg-4 col-md-2 mb-3">
        <div class="card">
            <img src="${element.imageUrl}" alt="Daftar Belanja" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h4 class="card-title text-dark">${element.barang}</h4>
                <h6 class="card-subtitle mb-2 text-secondary">${element.jumlah}</h6>
                <p class="card-text">${element.keterangan}</p>
            </div>
        </div>
        </div>`
    });
   
    
}
// jalankan function tampil ()
tampil ()
