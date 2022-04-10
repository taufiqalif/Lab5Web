function validasi() {
  var nama = document.getElementById('nama').value;
  var nim = document.getElementById('nim').value;
  var email = document.getElementById('email').value;

  if (nama == "") {
    alert('Nama tidak boleh kosong');
    return false;
  } else if (nim == "") { 
    alert('NIM tidak boleh kosong');
    return false;
  } else if (email == "") {
    alert('Email tidak boleh kosong');
    return false;
  } else {
    alert('Data berhasil disimpan');
    return true;
  }
}
