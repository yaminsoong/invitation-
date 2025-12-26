document.getElementById('ucapanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const ucapan = document.getElementById('ucapan').value;
    
    const pesan = `Assalamualaikum Wr. Wb.\n\nSelamat menempuh hidup baru untuk Ahmad Askhabul Yamin & Anisah Permata Sari.\n\n${ucapan}\n\nDari: ${nama}`;
    
    // Encode pesan untuk URL
    const encodedPesan = encodeURIComponent(pesan);
    
    // Buka WhatsApp dengan pesan (tanpa nomor spesifik, user bisa pilih kontak)
    const waUrl = `whatsapp://send?text=${encodedPesan}`;
    
    // Untuk browser, gunakan https://wa.me/ jika perlu, tapi whatsapp:// untuk app
    // Jika di browser, mungkin perlu https://wa.me/?text=
    // Deteksi jika mobile atau desktop
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = waUrl;
    } else {
        // Untuk desktop, buka web WhatsApp
        window.open(`https://wa.me/?text=${encodedPesan}`, '_blank');
    }
    
    // Reset form
    this.reset();
});