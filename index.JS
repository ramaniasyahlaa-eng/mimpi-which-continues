let halamanAktif = 1;
const totalHalaman = 15;

function perbaruiTampilan() {
    // Sembunyikan/tampilkan elemen halaman berdasarkan nomor
    const semuaHalaman = document.querySelectorAll('.page');
    semuaHalaman.forEach(page => {
        if (parseInt(page.getAttribute('data-page')) === halamanAktif) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    // Perbarui teks nomor halaman di tengah
    document.getElementById('current-page').innerText = halamanAktif;

    // Atur tombol aktif/mati (disabled) di ujung awal atau akhir
    document.getElementById('prev-btn').disabled = halamanAktif === 1;
    document.getElementById('next-btn').disabled = halamanAktif === totalHalaman;
}

function ubahHalaman(arah) {
    halamanAktif += arah;
    if (halamanAktif < 1) halamanAktif = 1;
    if (halamanAktif > totalHalaman) halamanAktif = totalHalaman;
    
    perbaruiTampilan();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Geser ke atas saat pindah halaman
}

// Jalankan saat pertama kali dibuka
perbaruiTampilan();
