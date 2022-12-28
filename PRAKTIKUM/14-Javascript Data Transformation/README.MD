## Data Transformation

## Hasil Praktikum :

pada pertemuan pertama belajar mengenai bagaimana membuat

- form
- button
- tabel
- menginput dan menampilkan data di local storage
- event handling

#### Screenshoot Hasil Praktik :

![image](https://user-images.githubusercontent.com/71611488/189493974-5b874bad-5bcb-492e-9eeb-40c10ec97eee.png)

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, intial-scale=1.0">
    <title>Tugas 1 | Event Handling</title>
</head>
    <body>
        <h2>PENDAFTARAN MAGANG</h2>
        <form>
        <div>
              <a>Nama : </a>
            <input type="text" id="nama" name="nama" >
            <br>
        </div>
        <div>
            <a>Kelas : </a>
            <input type="text" id="kelas" name="kelas" >
        </div>
        <div>
            <a>Jurusan : </a>
            <select name="jurusan" id="jurusan">
                <option value="informatika">INFORMATIKA</option>
                <option value="humaniora">HUMANIORA</option>
                <option value="teknik-mesin">TEKNIK MESIN</option>
              </select>
        </div>
        <div>
            <a>Angkatan : </a>
            <select name="angkatan" id="angkatan">
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
          </div>
          <div>
            <input type="submit" value="Daftar" name="submit" id="submit">

          </form>

          <table>
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Kelas</th>
                    <th scope="col">Jurusan</th>
                    <th scope="col">Angkatan</th>
                </tr>
            </thead>
            <tbody id="list">

            </tbody>
        </table>
    </body>
    <script>
        function ggwp() {
           const dataTersimpan = localStorage.getItem("dataTersimpan");
           var dataTersimpanObjectArray = JSON.parse(dataTersimpan);
           if(dataTersimpanObjectArray === null) {
               dataTersimpanObjectArray = [];
           }

           const pendaftar = document.getElementById("list");

           var ListPendaftar = ``;

           dataTersimpanObjectArray.forEach(function(dataTersimpanObject, index) {
               ListPendaftar += `
               <tr>
                           <th scope="row">${index + 1}</th>
                           <td>${dataTersimpanObject.nama}</td>
                           <td>${dataTersimpanObject.kelas}</td>
                           <td>${dataTersimpanObject.jurusan}</td>
                           <td>${dataTersimpanObject.angkatan}</td>
                       </tr>
               `;
           });
           pendaftar.innerHTML = ListPendaftar;
       }
       ggwp();

var inputNama = document.getElementById("nama");
var inputkelas = document.getElementById("kelas");
var inputJurusan = document.getElementById("jurusan");
var inputAngkatan = document.getElementById("angkatan");
var inputButton = document.getElementById("submit");

inputButton.onclick = function (perwakilanEvent) {
   const nama = inputNama.value;
   const kelas = inputkelas.value;
   const jurusan = inputJurusan.value;
   const angkatan = inputAngkatan.value;
   const pesan = `Data dari ${nama} dengan kelas ${kelas} serta jurusan ${jurusan}, angkatan ${angkatan}`;
           const data = {
               nama,
               kelas,
               jurusan,
               angkatan,
           };

   console.log(data);

   const dataTersimpan = localStorage.getItem("dataTersimpan");
           const dataTersimpanObjectArray = JSON.parse(dataTersimpan)

           if(dataTersimpan === null) {
               localStorage.setItem("dataTersimpan", JSON.stringify([data]));
           } else {
               dataTersimpanObjectArray.push(data);
               localStorage.setItem("dataTersimpan", JSON.stringify(dataTersimpanObjectArray));
           }

           ggwp();
       };
   </script>
</html>

```
