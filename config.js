/* =====================================================================
   PENGATURAN WEBSITE  —  edit file ini saja, tidak perlu buka index.html
   ===================================================================== */
window.SITE_CONFIG = {

  /* ---------------- FOTO PROFIL ----------------
     Cara ganti foto:
     1) Taruh foto baru di folder  image/
     2) Ubah "photo" di bawah sesuai nama file (jpg / png / webp)
        atau cukup timpa file image/profile.jpg dengan foto baru.
     Foto dipakai di: menu akun (pojok kanan atas), jendela Profil Saya,
     dan sorotan "Pembuat Website".
     Kalau foto tidak ditemukan, otomatis tampil inisial nama. */
  profile: {
    photo: "image/profile.jpeg",

    /* Pengaturan potongan foto bulat kecil (menu akun & Profil Saya).
       avatarZoom     : 1 = tanpa zoom, 1.9 = zoom ke wajah (foto sekarang)
       avatarPosition : titik fokus "kiri% atas%", mis. "50% 22%" = tengah, agak ke atas
       Kalau foto baru terlihat terlalu zoom / wajah terpotong, coba:
       avatarZoom: 1  dan  avatarPosition: "50% 30%"  */
    avatarZoom: 1.9,
    avatarPosition: "50% 22%"
  },

  /* ---------------- MUSIK ----------------
     Cara tambah / ganti lagu:
     1) Taruh file mp3 di folder  music/
     2) Tambah / ubah baris di "tracks" (title, artist, file)
     Urutan di bawah = urutan putar. Hapus baris untuk membuang lagu.
     cover (opsional): "image/cover-closer.jpg" — kalau kosong dipakai warna otomatis. */
  music: {
    enabled: true,          // false = pemutar musik disembunyikan
    folder: "music/",       // folder tempat file mp3
    volume: 0.6,            // volume awal 0 – 1
    playlistName: "Top Hits Dunia",

    tracks: [
      { title: "Let Me Love You",   artist: "DJ Snake ft. Justin Bieber",        file: "let-me-love-you.mp3" },
      { title: "Closer",            artist: "The Chainsmokers ft. Halsey",       file: "closer.mp3" },
      { title: "Shape of You",      artist: "Ed Sheeran",                        file: "shape-of-you.mp3" },
      { title: "Despacito",         artist: "Luis Fonsi ft. Daddy Yankee",       file: "despacito.mp3" },
      { title: "See You Again",     artist: "Wiz Khalifa ft. Charlie Puth",      file: "see-you-again.mp3" },
      { title: "Uptown Funk",       artist: "Mark Ronson ft. Bruno Mars",        file: "uptown-funk.mp3" },
      { title: "Blinding Lights",   artist: "The Weeknd",                        file: "blinding-lights.mp3" },
      { title: "Faded",             artist: "Alan Walker",                       file: "faded.mp3" },
      { title: "Someone You Loved", artist: "Lewis Capaldi",                     file: "someone-you-loved.mp3" },
      { title: "Kok Masih Rindu?",  artist: "Akbar Chalay, Mingse",              file: "kok-masih-rindu.mp3" }
    ]
  }
};
