document.addEventListener('DOMContentLoaded', () => {
    const cameraMovements = [
        { en: "Select Camera Movement", id: "Pilih Gerakan Kamera" },
        // Common movements
        { en: "Static Shot", id: "Gambar Diam" },
        { en: "Pan Left", id: "Geser Kiri" },
        { en: "Pan Right", id: "Geser Kanan" },
        { en: "Tilt Up", id: "Miring ke Atas" },
        { en: "Tilt Down", id: "Miring ke Bawah" },
        { en: "Dolly In", id: "Maju Perlahan" },
        { en: "Dolly Out", id: "Mundur Perlahan" },
        { en: "Zoom In", id: "Perbesar" },
        { en: "Zoom Out", id: "Perkecil" },
        { en: "Tracking Shot", id: "Tembakan Mengikuti" },
        { en: "Handheld", id: "Kamera Genggam" },
        // Higgsfield.ai movements
        { en: "360 Orbit", id: "Orbit 360" },
        { en: "3D Rotation", id: "Rotasi 3D" },
        { en: "Action Run", id: "Lari Aksi" },
        { en: "Agent Reveal", id: "Kemunculan Agen" },
        { en: "Angel Wings", id: "Sayap Malaikat" },
        { en: "Arc Left", id: "Busur Kiri" },
        { en: "Arc Right", id: "Busur Kanan" },
        { en: "Bloom Mouth", id: "Mulut Mekar" },
        { en: "Buckle Up", id: "Kencangkan Sabuk" },
        { en: "Building Explosion", id: "Ledakan Gedung" },
        { en: "Bullet Time", id: "Waktu Peluru" },
        { en: "Car Chasing", id: "Pengejaran Mobil" },
        { en: "Car Explosion", id: "Ledakan Mobil" },
        { en: "Car Grip", id: "Pegangan Mobil" },
        { en: "Crane Down", id: "Derek Turun" },
        { en: "Crane Up", id: "Derek Naik" },
        { en: "Crane Over The Head", id: "Derek di Atas Kepala" },
        { en: "Crash Zoom In", id: "Zoom Cepat Masuk" },
        { en: "Crash Zoom Out", id: "Zoom Cepat Keluar" },
        { en: "Datamosh", id: "Datamosh" },
        { en: "Dirty Lens", id: "Lensa Kotor" },
        { en: "Disintegration", id: "Disintegrasi" },
        { en: "Dolly Zoom In", id: "Dolly Zoom Masuk" },
        { en: "Dolly Zoom Out", id: "Dolly Zoom Keluar" },
        { en: "Double Dolly", id: "Dolly Ganda" },
        { en: "Dutch Angle", id: "Sudut Belanda" },
        { en: "Eyes In", id: "Mata Masuk" },
        { en: "Face Punch", id: "Pukulan Wajah" },
        { en: "Fisheye", id: "Mata Ikan" },
        { en: "Floating Fish", id: "Ikan Mengambang" },
        { en: "Flood", id: "Banjir" },
        { en: "Floral Eyes", id: "Mata Bunga" },
        { en: "Flying", id: "Terbang" },
        { en: "Focus Change", id: "Perubahan Fokus" },
        { en: "FPV Drone", id: "Drone FPV" },
        { en: "Garden Bloom", id: "Taman Mekar" },
        { en: "Glam", id: "Glamor" },
        { en: "Glowshift", id: "Pergeseran Cahaya" },
        { en: "Head Explosion", id: "Ledakan Kepala" },
        { en: "Head Tracking", id: "Pelacakan Kepala" },
        { en: "Hyperlapse", id: "Hyperlapse" },
        { en: "Jelly Drift", id: "Drift Kenyal" },
        { en: "Jib Down", id: "Jib Turun" },
        { en: "Jib Up", id: "Jib Naik" },
        { en: "Lazy Susan", id: "Lazy Susan" },
        { en: "Lens Crack", id: "Retak Lensa" },
        { en: "Lens Flare", id: "Suar Lensa" },
        { en: "Levitation", id: "Levitasi" },
        { en: "Low Shutter", id: "Rana Lambat" },
        { en: "Medusa Gorgona", id: "Medusa Gorgona" },
        { en: "Melting", id: "Mencair" },
        { en: "Morphskin", id: "Kulit Berubah" },
        { en: "Mouth In", id: "Mulut Masuk" },
        { en: "Push To Glass", id: "Dorong ke Kaca" },
        { en: "Robo Arm", id: "Lengan Robot" },
        { en: "Snorricam", id: "Snorricam" },
        { en: "Soul Jump", id: "Lompatan Jiwa" },
        { en: "Super Dolly In", id: "Super Dolly Masuk" },
        { en: "Super Dolly Out", id: "Super Dolly Keluar" },
        { en: "Symbiote", id: "Simbiosis" },
        { en: "Tentacles", id: "Tentakel" },
        { en: "Thunder God", id: "Dewa Petir" },
        { en: "Timelapse Human", id: "Selang Waktu Manusia" },
        { en: "Timelapse Landscape", id: "Selang Waktu Pemandangan" },
        { en: "Turning Metal", id: "Logam Berputar" },
        { en: "Whip Pan", id: "Geser Cepat" },
        { en: "Wind to Face", id: "Angin ke Wajah" },
        { en: "YoYo Zoom", id: "Zoom YoYo" }
    ];

    const cameraSelect = document.getElementById('gerakan_kamera');
    cameraMovements.forEach(move => {
        const option = document.createElement('option');
        option.value = move.en;
        option.textContent = `${move.en} (${move.id})`;
        cameraSelect.appendChild(option);
    });

    const form = document.getElementById('prompt-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generatePrompts();
    });

    // --- Fill form with example data ---
    function fillExampleData() {
        document.getElementById('judul_scene').value = 'Terminal bus malam';
        document.getElementById('deskripsi_karakter').value = 'Seorang vlogger wanita muda asal Minang berusia 27 tahun.\nPerawakan/Bentuk Tubuh: tubuh mungil, tinggi 158cm, bentuk badan proporsional.\nwarna kulit: sawo matang cerah.\nRambut: ikal sebahu, hitam kecokelatan, diikat setengah ke belakang.\nWajah: wajah oval, alis tebal alami, mata hitam besar, senyum ramah, pipi merona, bibir natural dengan sentuhan lip tint.\nPakaian: mengenakan jaket parasut warna kuning mustard dan celana panjang hitam, membawa ransel kecil.';
        document.getElementById('detail_suara').value = 'Dia berbicara dengan suara wanita muda yang hangat dan penuh semangat.\nNada: mezzo-soprano.\nTimbre: bersahabat dan enerjik.\nAksen/Logat: logat Indonesia dengan sentuhan khas Minang halus, berbicara murni dalam Bahasa Indonesia.\nCara Berbicara: tempo sedang-cepat, gaya bicara lincah dan ekspresif.\nPENTING: Seluruh dialog harus dalam Bahasa Indonesia dengan pengucapan natural dan jelas. Pastikan suara karakter ini konsisten di seluruh video.';
        document.getElementById('aksi_karakter').value = 'berjalan di sekitar terminal bus malam sambil melihat-lihat aktivitas penumpang dan pedagang.';
        document.getElementById('ekspresi_karakter').value = 'Karakter menunjukkan ekspresi kagum dan antusias, sering tersenyum sambil melirik kamera.';
        document.getElementById('latar').value = 'latar tempat: di terminal bus antar kota malam hari, terdapat pedagang kaki lima di pinggir jalur keberangkatan, beberapa bus berjajar dengan lampu menyala.\nWaktu: malam hari, hujan rintik-rintik.';
        cameraSelect.value = 'Tracking Shot';
        document.getElementById('detail_visual').value = 'Pencahayaan: natural dari lampu jalan dan lampu bus, pantulan cahaya pada aspal basah.\nGaya Video/Art Style: cinematic realistis.\nKualitas Visual: Resolusi 4K.';
        document.getElementById('suasana').value = 'Suasana sibuk, ramai, dengan kesan perjalanan malam yang hidup dan dinamis meskipun hujan.';
        document.getElementById('suara_lingkungan').value = 'SOUND: suara mesin bus menyala, pengumuman dari pengeras suara, derai hujan ringan, dan percakapan samar antar penumpang dan pedagang.';
        document.getElementById('dialog').value = 'DIALOG dalam Bahasa Indonesia: Karakter berkata: "Tiap kota punya terminal kayak gini, dan aku suka banget suasana malamnya… hangat walau gerimis begini. Rasanya kayak perjalanan baru mau dimulai."';
        document.getElementById('negative_prompt').value = 'Hindari: teks di layar, subtitle, tulisan di video, font, logo, distorsi, artefak, anomali, wajah ganda, anggota badan cacat, tangan tidak normal, orang tambahan, objek mengganggu, kualitas rendah, buram, glitch, suara robotik, suara pecah.';
    }
    
    fillExampleData();
    // --- End of example data ---

    function generatePrompts() {
        const getVal = (id) => document.getElementById(id).value.trim();

        const judul_scene = getVal('judul_scene');
        const deskripsi_karakter = getVal('deskripsi_karakter');
        const detail_suara = getVal('detail_suara');
        const aksi_karakter = getVal('aksi_karakter');
        const ekspresi_karakter = getVal('ekspresi_karakter');
        const latar = getVal('latar');
        const gerakan_kamera = getVal('gerakan_kamera');
        const detail_visual_lainnya = getVal('detail_visual');
        const suasana = getVal('suasana');
        const suara_lingkungan = getVal('suara_lingkungan');
        const dialog = getVal('dialog');
        const negative_prompt = getVal('negative_prompt');

        const detail_visual_full = `Gerakan Kamera: ${gerakan_kamera}, mengikuti langkahnya secara sinematik.\n${detail_visual_lainnya}`;

        // --- Indonesian Prompt ---
        const promptIndonesia = `PROMPT KARAKTER KONSISTEN VEO3

[JUDUL SCENE: ${judul_scene}]
[DESKRIPSI KARAKTER INTI]
${deskripsi_karakter}
[DETAIL SUARA KARAKTER]
${detail_suara}
[AKSI KARAKTER]
${aksi_karakter}
[EKSPRESI KARAKTER]
${ekspresi_karakter}
[LATAR TEMPAT & WAKTU]
${latar}
[DETAIL VISUAL TAMBAHAN]
${detail_visual_full}
[SUASANA KESELURUHAN]
${suasana}
[SUARA LINGKUNGAN (AMBIENCE)]
${suara_lingkungan}
[DIALOG KARAKTER]
${dialog}
[NEGATIVE PROMPT]
${negative_prompt}`;

        document.getElementById('output-indonesia').value = promptIndonesia;

        // --- English "Translation" ---
        // This is a direct mapping, not a real translation service.
        const promptEnglish = `CONSISTENT CHARACTER PROMPT VEO3

[SCENE TITLE: ${judul_scene}]
[CORE CHARACTER DESCRIPTION]
${deskripsi_karakter}
[CHARACTER VOICE DETAILS]
${detail_suara}
[CHARACTER ACTION]
${aksi_karakter}
[CHARACTER EXPRESSION]
${ekspresi_karakter}
[SETTING & TIME]
${latar}
[ADDITIONAL VISUAL DETAILS]
${detail_visual_full.replace('Gerakan Kamera:', 'Camera Movement:')}
[OVERALL ATMOSPHERE]
${suasana}
[ENVIRONMENTAL SOUND (AMBIENCE)]
${suara_lingkungan.replace('SOUND:', 'SOUND:')}
[CHARACTER DIALOGUE]
${dialog.replace('DIALOG dalam Bahasa Indonesia: Karakter berkata:', 'DIALOGUE in Indonesian: Character says:')}
[NEGATIVE PROMPT]
${negative_prompt.replace('Hindari:', 'Avoid:')}`;

        document.getElementById('output-english').value = promptEnglish;
    }

    // --- Page Controls ---
    document.getElementById('change-title-btn').addEventListener('click', () => {
        const newTitle = prompt("Masukkan judul baru:", document.getElementById('main-title').textContent);
        if (newTitle) {
            document.getElementById('main-title').textContent = newTitle;
        }
    });

    document.getElementById('change-style-btn').addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // --- Copy Buttons ---
    document.getElementById('copy-indonesia-btn').addEventListener('click', () => {
        copyToClipboard('output-indonesia', 'copy-indonesia-btn');
    });

    document.getElementById('copy-english-btn').addEventListener('click', () => {
        copyToClipboard('output-english', 'copy-english-btn');
    });

    function copyToClipboard(elementId, btnId) {
        const textArea = document.getElementById(elementId);
        textArea.select();
        document.execCommand('copy');
        const btn = document.getElementById(btnId);
        const originalText = btn.textContent;
        btn.textContent = 'Disalin!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }
}); 