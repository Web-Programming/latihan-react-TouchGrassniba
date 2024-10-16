1 .Fitur

- Menampilkan Daftar Pengguna**: Menampilkan daftar pengguna yang diambil dari API.
- Menambahkan Pengguna**: Memungkinkan pengguna untuk menambahkan pengguna baru dengan nama, email, dan role acak.
- Memperbarui Pengguna**: Memungkinkan pengguna untuk memperbarui informasi pengguna yang ada.
- Menghapus Pengguna**: Memungkinkan pengguna untuk menghapus pengguna setelah konfirmasi.
- Validasi Formulir**: Memastikan semua field terisi sebelum menambahkan atau memperbarui pengguna.
- Role Acak**: Setiap pengguna akan mendapatkan role acak dari daftar yang telah ditentukan.

2. Api yang digunakan
  
- https://reqres.in/api/users

3. Penggunakan metode untuk api 
 - GET 
   - Mengambil daftar pengguna yang tersedia di api.
   - Response: Mengembalikan daftar pengguna dengan detail , first_name, email, dan role (role diisi secara acak khusus untuk data yang sudah ada di api).

2. POST 
   - Menambahkan pengguna baru.
   - name , email , dan role
   - Response: Mengembalikan detail pengguna yang baru ditambahkan.

3. PUT 
   - Memperbarui detail pengguna berdasarkan ID.
   - name , email , role
   - mereturn detail pengguna yang telah diperbarui.

4. DELETE 
   - Menghapus pengguna berdasarkan ID.
   - Mengkonfirmasi penghapusan pengguna.