function validasi() {
    var nama = document.getElementById("nama").value;
    var password = document.getElementById("password").value;
    if (nama == "rezky" && password=="12345" ) {
      return true;
    }else{
      alert('Nama dan password anda salah !');
      return false;
    }
  }