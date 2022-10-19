function validasi(){
    nama = form.nama.value;
    email = form.email.value;
    message = form.message.value;

    if(Nama == "" || Email == "" || Message == ""){
        alert("Kolom tidak boleh kosong");
    } else {
        alert("Pesan telah terkirim");
        location.replace("index.html");
    }
}

function alarm() {
    alert('Pesan berhasil terkirim')
}