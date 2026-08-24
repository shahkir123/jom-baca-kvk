const words = [['bas', '🚌'], ['beg', '🎒'], ['Kucing', '🐱'], ['jam', '⏰'], ['jus', '🧃'], ['pen', '🖊️'], ['rak', '🗄️'], ['tin', '🥫'], ['van', '🚐'], ['zip', '🤐'], ['bom', '💣'], ['bus', '🚌'], ['cam', '📷'], ['gam', '🖼️'], ['gas', '⛽'], ['lap', '💻'], ['lim', '🍋'], ['lot', '🎟️'], ['mal', '🏬'], ['pam', '⛲'], ['pin', '📌'], ['pod', '🎙️'], ['ros', '🌹'], ['sip', '🥤'], ['tali', '🪢'], ['top', '🔝'], ['wan', '👴'], ['yap', '🧑'], ['zon', '🗺️'], ['kad', '💳']];
const stories = [['Bas Ali', '🚌', ['Ali naik bas.', 'Bas itu besar.', 'Ali duduk di dalam bas.', 'Ali dan ibu pergi ke pekan.']], ['Jam Baru', '⏰', ['Ini jam baru.', 'Jam itu ada di rak.', 'Jam berbunyi tik tok.']], ['Cat Rumah', '🎨', ['Cat rumah.', 'Cat rumah warna merah.', 'Ahmad suka cat merah.']], ['Beg Merah', '🎒', ['Ini beg merah.', 'Beg ada di atas rak.', 'Pen dan buku ada dalam beg.']], ['Van Ibu', '🚐', ['Ibu ada van.', 'Van itu laju.', 'Ali naik van bersama ibu.', 'Ali bersama ibu pergi ke pasar.']], ['Tin Susu', '🥫', ['Ini tin susu.', 'Tin ada di atas meja.', 'Ali minum susu campur Coklat.', 'Ali minum sambil duduk.']], ['Pen Biru', '🖊️', ['Pen Ali warna biru.', 'Ali tulis di atas kad.', 'Tulisan Ali kemas.', 'Ali suka tulis cerita seram.']], ['Bunga Ros', '🌹', ['Ini ros merah.', 'Ros ada di dalam pasu.', 'Ibu suka bunga ros.', 'Ibu suka petik bunga ros.']], ['Jus Limau', '🧃', ['Ali buat jus limau.', 'Jus itu manis dan sedap.', 'Ali minum jus dengan ibu.','Ali minum jus dengan ibu sampai habis.']], ['Zip Seluar', '🤐', ['Zip baju sejuk Ali rosak.', 'Ibu tarik zip perlahan.', 'Zip sudah dibaiki!', 'Ali boleh zip baju semula']]];
const moreStories = [
  ['Rak Buku', '📚', ['Ada rak buku.', 'Buku Ali ada di rak.', 'Ali baca buku.']], 
  ['Bas Ke Taman', '🌳', ['Ali naik bas.', 'Bas pergi ke taman.', 'Ali main di taman.']], 
  ['Kasut Baru', '👟', ['Ini kasut Baru.', 'Kasut itu biru.', 'Ali pakai kasut.']], 
  ['Bola Ali', '⚽', ['Ali ada bola.', 'Ali sepak bola.', 'Bola masuk gol!']], 
  ['Topi Merah', '🧢', ['Ini topi merah.', 'Topi ada di atas rak.', 'Ali pakai topi.']], 
  ['Kad Untuk Ibu', '💌', ['Ali buat kad.', 'Kad itu untuk ibu.', 'Ibu suka kad Ali.']], 
  ['Pasu Ros', '🏺', ['Ada pasu.', 'Ros ada dalam pasu.', 'Pasu itu cantik.']], 
  ['Jam Pagi', '🌞', ['Jam berbunyi.', 'Hari sudah pagi.', 'Ali bangun dan mandi.']], 
  ['Buku Ali', '📖', ['Ali ada buku.', 'Buku ada gambar.', 'Ali baca dengan ibu.']], 
  ['Kucing Tidur', '🐱', ['Kucing sudah kenyang.', 'Kucing tidur di atas tikar.', 'Kucing tidur lena.']],
  ['Jus Manis', '🧃', ['Ini jus.', 'Jus itu manis.', 'Ali minum jus.']], 
  ['Tin Biskut', '🍪', ['Ada tin biskut.', 'Tin itu bulat.', 'Ali ambil biskut.']], 
  ['Van Biru', '🚐', ['Van itu biru.', 'Van ada di luar.', 'Ayah bawa van.']], 
  ['Pen Hilang', '🖊️', ['Pen Ali hilang.', 'Pen ada di bawah rak.', 'Ali jumpa pen.']], 
  ['Beg Sekolah', '🎒', ['Beg sekolah Ali berat.', 'Buku masuk dalam beg.', 'Ali angkat beg.']], 
  ['Bas Besar', '🚌', ['Bas itu besar.', 'Bas ada banyak kerusi.', 'Ali duduk dalam bas.']], 
  ['Kucing Makan', '🐱', ['Kucing makan ikan.', 'Kucing minum air.', 'Kucing sudah kenyang.']], 
  ['Ros Ibu', '🌹', ['Ibu beli ros.', 'Ros warna merah.', 'Ros ada dalam pasu.']], 
  ['Zip Beg', '🤐', ['Zip beg terbuka.', 'Ali tarik zip.', 'Zip beg sudah tutup.']], 
  ['Rak Mainan', '🧸', ['Mainan ada di rak.', 'Ali susun mainan.', 'Rak sudah kemas.']],
  ['Lari Pagi', '🏃', ['Ali lari pagi.', 'Ali lari di taman.', 'Ali rasa sihat.']], 
  ['Air Limau', '🍋', ['Ibu buat air limau.', 'Air itu masam.', 'Ali minum air.']], 
  ['Bola Dalam Bakul', '🏀', ['Bola ada dalam bakul.', 'Ali ambil bola.', 'Ali main bola.']], 
  ['Kapal Kertas', '⛵', ['Ali buat kapal.', 'Kapal itu daripada kertas.', 'Kapal terapung di air.']], 
  ['Lukis Gambar', '🎨', ['Ali lukis gambar.', 'Ali guna pen.', 'Gambar itu cantik.']], 
  ['Kampung Nenek', '🏘️', ['Hari ini baik.', 'Ali balik kampung.', 'Ali rasa hebat!']],
];
stories.push(...moreStories);
const extraKVKStories = [
  ['Lencana Ali', '🏅', ['Ali ada lencana.', 'Lencana itu emas.', 'Ali simpan lencana.']],
  ['Kawan Baharu', '🤝', ['Ali ada kawan.', 'Kawan Ali baik.', 'Mereka main bersama.']],
  ['Pagi Di Taman', '🌳', ['Ali pergi ke taman.', 'Ali nampak bas.', 'Ali duduk di bangku.']],
  ['Buku Di Rak', '📚', ['Buku ada di rak.', 'Rak itu tinggi.', 'Ali ambil buku.']],
  ['Kad Merah', '🟥', ['Ini kad merah.', 'Kad ada di meja.', 'Ali beri kad kepada ibu.']],
  ['Jus Untuk Siti', '🧃', ['Siti suka jus.', 'Jus ada dalam tin.', 'Siti minum jus.']],
  ['Bas Pagi', '🚌', ['Bas tiba pagi.', 'Ali naik bas.', 'Bas bawa Ali ke sekolah.']],
  ['Pen Dan Kad', '🖊️', ['Ali ada pen.', 'Ali tulis atas kad.', 'Kad itu untuk ayah.']],
  ['Ros Di Pasu', '🌹', ['Ros ada di pasu.', 'Pasu itu cantik.', 'Ibu letak pasu di meja.']],
  ['Van Ayah', '🚐', ['Ayah ada van.', 'Van warna biru.', 'Ali duduk dalam van.']],
  ['Jam Berbunyi', '⏰', ['Jam berbunyi tik tok.', 'Ali lihat jam.', 'Sudah masa untuk tidur.']],
  ['Beg Ali', '🎒', ['Beg Ali berat.', 'Ada buku dalam beg.', 'Ali bawa beg ke sekolah.']],
  ['Cat Comel', '🐱', ['Cat itu comel.', 'Cat duduk di rak.', 'Ali belai Cat.']],
  ['Hari Ceria', '🌈', ['Hari ini ceria.', 'Ali baca banyak kata.', 'Ali rasa hebat!']]
];
stories.push(...extraKVKStories);
const storyLevels = {
    1: [['Kuda', '🐎', ['Ini Kuda.', 'Bapa suka kuda.', 'Bapa suka bela kuda.', 'Kuda suka lari laju']],
     ['Kera', '🐒', ['Ini Kera.', 'Mama suka bela kera.', 'Kera suka cari kutu.','Kaki Kera ada kutu']], 
     ['Mimi', '🐱', ['Ini Mimi.', 'Mimi suka lari.', 'Ibu suka riba Mimi.', 'Ibu cuci mata Mimi']], 
     ['Guli', '🔴 🟢 🟡', ['Ini Guli.', 'Guli ada lima biji.', 'Saya suka beli guli.', 'Tiga guli Biru', 'Dua guli ungu']], 
     ['Ceri', '🍒', ['Ini Ceri.', 'Nini suka ceri.', 'Nini suka beli ceri.', 'Nini beli ceri di desa.']], 
     ['Bola', '⚽', ['Ini Bola.', 'Nana ada bola.', 'Nana suka main bola.', 'Nana bagi bola kepada Papa.']], 
     ['Kaki', '🦶', ['Ini Kaki.','Kaki kiri.', 'Kaki ada lima jari.', 'Kaki ada kuku.']], 
     ['Mata', '👀', ['Ini Mata.','Mata ada dua.', 'Mata ada bulu.', 'Mata ada bulu mata.']], 
     ['Buku', '📚', ['Ini Buku.', 'Bibi suka baca buku.', 'Bibi suka baca buku cerita.', 'Bibi ada tiga buku cerita.']], 
     ['Pipi', '😊', ['Ini Pipi.', 'Pipi saya ada nasi.', 'Ibu cuci pipi saya.', 'Saya suka pipi saya.']],
     ['Bayi', '👶', ['Ini Bayi.', 'Bayi itu nama Mina.', 'Ibu suka riba Mina.', 'Ibu beri Mina susu.']]],

    2: [['Bas Ali', '🚌', ['Ali suka bas.', 'Bas itu besar.', 'Ali duduk di dalam bas.']], 
    ['Jam Baru', '⏰', ['Ini jam baru.', 'Jam itu ada di rak.', 'Jam berbunyi.']], 
    ['Cat Rumah', '🎨', ['Cat rumah.', 'Cat rumah warna merah.', 'Ahmad suka cat.']], 
    ['Beg Merah', '🎒', ['Ini beg merah.', 'Beg ada di atas rak.', 'Pen ada dalam beg.']], 
    ['Van Ibu', '🚐', ['Ibu ada van.', 'Van itu laju.', 'Ali naik van.']], 
    ['Tin Susu', '🥫', ['Ini tin susu.', 'Tin ada di meja.', 'Ali minum susu.']], 
    ['Pen Biru', '🖊️', ['Pen Ali biru.', 'Ali tulis kad.', 'Kad itu kemas.']], 
    ['Bunga Ros', '🌹', ['Ini ros merah.', 'Ros ada dalam pasu.', 'Ibu suka ros.']], 
    ['Jus Limau', '🧃', ['Ali buat jus.', 'Jus itu manis.', 'Ali minum jus.']], 
    ['Zip Seluar', '🤐', ['Zip seluar rosak.', 'Ibu tarik zip.', 'Zip sudah baik.']]],

    3: [['Baju Ali', '👕', ['Ali pakai baju.', 'Baju itu biru.', 'Ali suka baju.']], 
    ['Bola Biru', '⚽', ['Bola itu biru.', 'Ali sepak bola.', 'Bola masuk gol.']], 
    ['Buku Baru', '📚', ['Ini buku baru.', 'Buku ada di meja.', 'Ali baca buku.']], 
    ['Kaki Ali', '🦶', ['Kaki Ali luka.', 'Ibu ubat kaki.', 'Kaki Ali baik.']], 
    ['Mata Siti', '👀', ['Mata Siti cantik.', 'Siti cuci mata.', 'Mata Siti bersih.']], 
    ['Meja Kami', '🪑', ['Ini meja kami.', 'Buku ada di meja.', 'Meja itu kemas.']], 
    ['Nasi Ibu', '🍚', ['Ibu masak nasi.', 'Nasi itu panas.', 'Ali makan nasi.']], 
    ['Roda Bas', '🛞', ['Roda bas besar.', 'Roda bas bulat.', 'Bas boleh jalan.']], 
    ['Susu Ali', '🥛', ['Ali minum susu.', 'Susu itu sedap.', 'Ali suka susu.']], 
    ['Topi Merah', '🧢', ['Ini topi merah.', 'Topi ada di kepala.', 'Ali pakai topi.']]]

};
let activeStories = stories, storyLevel = null, quizLevel = null;
let shortStoryPage = 0;
const shortStories = [{ title: 'Kuda dan Rusa Berlumba', cover: '🐎🦌', pages: [
    { emoji: '🌳', text: ['Pada suatu pagi, Kuda bertemu Rusa di tepi hutan.', 'Kuda suka berlari dengan pantas.', 'Rusa juga yakin dia boleh menang.'] },
    { emoji: '🏁', text: ['Kuda dan Rusa bersetuju untuk berlumba.', 'Mereka memilih pokok besar sebagai garisan penamat.', 'Haiwan lain datang untuk melihat perlumbaan.'] },
    { emoji: '🏃‍♂️💨', text: ['Perlumbaan pun bermula.', 'Kuda berlari laju di jalan yang rata.', 'Rusa berhenti seketika kerana jalan itu berbatu.'] },
    { emoji: '🤝', text: ['Kuda nampak Rusa dalam kesusahan.', 'Kuda berhenti dan membantu Rusa mencari jalan yang selamat.', 'Mereka tiba di garisan penamat bersama-sama.'] },
    { emoji: '🌟', text: ['Haiwan lain bertepuk tangan untuk Kuda dan Rusa.', 'Kuda dan Rusa belajar bahawa membantu kawan lebih penting daripada menang.', 'Pengajaran: Kita hendaklah saling membantu dan tidak sombong.'], lesson: true }
] }];
shortStories[0] = { title: 'Kuda dan Rusa', cover: '🐎🦌', pages: [
    { emoji: '', text: ['Kuda suka berlari.', 'Kuda lari sangat laju.', '“Aku paling laju!” kata Kuda.', 'Rusa hanya diam.'] },
    { emoji: '', text: ['Pada pagi itu, Rusa berkata,', '“Jom kita berlumba!”', 'Kuda ketawa.', 'Kuda yakin dia akan menang. Mereka pun mula berlumba.'] },
    { emoji: '', text: ['Kuda lari dengan laju.', 'Rusa sudah jauh di belakang.', '“Aku boleh rehat dulu,” kata Kuda.', 'Kuda berhenti di bawah pokok. Tidak lama kemudian, Kuda tertidur.'] },
    { emoji: '', text: ['Rusa nampak Kuda sedang tidur.', 'Rusa tidak berhenti.', 'Rusa terus berlari.', 'Sedikit demi sedikit, Rusa semakin dekat dengan garisan penamat.'] },
    { emoji: '🏆', text: ['Kuda bangun lalu terus berlari.', 'Tetapi sudah terlambat!', 'Rusa sudah sampai dahulu.', '“Syabas, Rusa!” kata Kuda. Kuda sedar bahawa dia tidak patut sombong.'], lesson: true, lessonText: 'Jangan sombong dan jangan mudah memandang rendah orang lain.' }
] };
shortStories[0] = { title: 'Arnab dan Kura-kura', cover: '🐰🐢', pages: [
    { emoji: '🐰', text: ['Arnab suka berlari.', 'Arnab lari sangat laju.', '“Aku paling laju!” kata Arnab.', 'Kura-kura hanya diam.'] },
    { emoji: '🏁', text: ['Pada pagi itu, Kura-kura berkata,', '“Jom kita berlumba!”', 'Arnab ketawa.', 'Arnab yakin dia akan menang. Mereka pun mula berlumba.'] },
    { emoji: '🌳😴', text: ['Arnab lari dengan laju.', 'Kura-kura sudah jauh di belakang.', '“Aku boleh rehat dulu,” kata Arnab.', 'Arnab berhenti di bawah pokok. Tidak lama kemudian, Arnab tertidur.'] },
    { emoji: '🐢💨', text: ['Kura-kura nampak Arnab sedang tidur.', 'Kura-kura tidak berhenti.', 'Kura-kura terus berjalan.', 'Sedikit demi sedikit, Kura-kura semakin dekat dengan garisan penamat.'] },
    { emoji: '🏆', text: ['Arnab bangun lalu terus berlari.', 'Tetapi sudah terlambat!', 'Kura-kura sudah sampai dahulu.', '“Syabas, Kura-kura!” kata Arnab. Arnab sedar bahawa dia tidak patut sombong.'], lesson: true, lessonText: 'Jangan sombong dan jangan mudah memandang rendah orang lain.' }
] };
const levelWords = { 1: ['ba','bi','bu','ca','da','di','ka','la','ma','na','pa','sa'], 2: ['bas','bom','cat','jam','jus','kad','pen','rak','tin','van'], 3: ['baju','bola','buku','kaki','mata','meja','nasi','roda','susu','topi'] };
const levelEmojis = { 1: '🌱', 2: '⭐', 3: '🏆' };
storyLevels[2] = stories;
storyLevels[23] = [...storyLevels[2], ...storyLevels[3]];
const storyEndings = {
    'Rak Buku': 'Ali susun buku dengan kemas.', 'Bas Ke Taman': 'Ali bermain bersama kawan.', 'Kasut Baru': 'Ali berjalan dengan gembira.', 'Bola Ali': 'Ali dan kawan bersorak.', 'Topi Merah': 'Topi itu lindung kepala Ali.', 'Kad Untuk Ibu': 'Ibu peluk Ali dengan kasih.', 'Pasu Ros': 'Ros itu harum dan cantik.', 'Jam Pagi': 'Ali bersedia ke sekolah.', 'Buku Ali': 'Ali belajar kata baharu.', 'Kucing Tidur': 'Ali biar Kucing tidur lena.', 'Jus Manis': 'Ali beri sedikit jus kepada ibu.', 'Tin Biskut': 'Ali kongsi biskut dengan adik.', 'Van Biru': 'Van itu sampai dengan selamat.', 'Pen Hilang': 'Ali simpan pen di dalam beg.', 'Beg Sekolah': 'Ali sedia untuk belajar.', 'Bas Besar': 'Bas berhenti di depan sekolah.', 'Kucing Makan': 'Kucing kenyang dan tidur.', 'Ros Ibu': 'Ibu letak ros dekat tingkap.', 'Zip Beg': 'Ali senyum kerana beg sudah kemas.', 'Rak Mainan': 'Ali gembira melihat raknya.', 'Lari Pagi': 'Ali pulang dengan badan sihat.', 'Air Limau': 'Ibu dan Ali minum bersama.', 'Bola Dalam Bakul': 'Ali letak bola semula.', 'Kapal Kertas': 'Ali tepuk tangan dengan gembira.', 'Lukis Gambar': 'Ali tunjuk gambar kepada ibu.', 'Kampung Nenek': 'Ali suka melawat nenek.', 'Lencana Ali': 'Ali tunjuk lencana kepada ibu.', 'Kawan Baharu': 'Ali dan kawan bermain bola.', 'Pagi Di Taman': 'Mereka duduk rehat bersama.', 'Buku Di Rak': 'Rak itu nampak kemas.', 'Kad Merah': 'Ibu simpan kad itu.', 'Jus Untuk Siti': 'Siti ucap terima kasih.', 'Bas Pagi': 'Ali sampai ke sekolah.', 'Pen Dan Kad': 'Ayah suka kad buatan Ali.', 'Ros Di Pasu': 'Bilik itu harum.', 'Van Ayah': 'Mereka tiba di rumah.', 'Jam Berbunyi': 'Ali tidur pada waktunya.', 'Beg Ali': 'Ali jaga beg dengan baik.', 'Cat Comel': 'Cat mengiau dengan manja.', 'Hari Ceria': 'Ali belajar dengan yakin.', 'Baju Ali': 'Ali nampak kemas.', 'Bola Biru': 'Ali simpan bola di bakul.', 'Buku Baru': 'Ali baca buku itu lagi.', 'Kaki Ali': 'Ali boleh berjalan semula.', 'Mata Siti': 'Siti dapat melihat dengan jelas.', 'Meja Kami': 'Kami duduk belajar bersama.', 'Nasi Ibu': 'Ibu dan Ali makan bersama.', 'Roda Bas': 'Bas bergerak perlahan.', 'Susu Ali': 'Ali ucap terima kasih.', 'Topi Merah': 'Ali simpan topi di rak.'
};
storyLevels[23].slice(10).forEach(story => {
    if (story[2].length < 4) story[2].push(storyEndings[story[0]] || 'Mereka pulang dengan gembira.');
});
storyLevels[3] = [
  ['Baju Biru', '👕', ['Ali pakai baju biru.', 'Baju itu ada poket.', 'Ali simpan sapu tangan dalam poket.', 'Ali nampak kemas dan ceria.']],
  ['Bola Masuk Gol', '⚽', ['Bola Ali warna merah.', 'Ali bawa bola ke padang.', 'Ali sepak bola dengan kuat.', 'Bola masuk gol dan semua bersorak!']],
  ['Buku Bergambar', '📚', ['Siti dapat buku baharu.', 'Buku itu ada banyak gambar.', 'Siti baca bersama ibu.', 'Siti suka membaca setiap hari.']],
  ['Kaki Yang Luka', '🦶', ['Kaki Ali luka sedikit.', 'Ibu cuci kaki Ali.', 'Ibu letak ubat pada luka.', 'Kaki Ali sudah baik.']],
  ['Mata Siti', '👀', ['Mata Siti sangat cantik.', 'Siti cuci mata dengan air.', 'Siti lihat bunga di taman.', 'Siti tersenyum melihat bunga itu.']],
  ['Meja Kemas', '🪑', ['Ini meja belajar kami.', 'Buku dan pensel ada di atas meja.', 'Kami susun semua barang.', 'Meja kami kelihatan sangat kemas.']],
  ['Nasi Ibu', '🍚', ['Ibu masak nasi untuk makan malam.', 'Nasi itu masih panas.', 'Ali makan nasi bersama keluarga.', 'Semua orang suka masakan ibu.']],
  ['Roda Bas', '🚌', ['Bas sekolah ada empat roda.', 'Roda bas itu besar dan bulat.', 'Bas bergerak di atas jalan.', 'Ali melambai kepada kawan.']],
  ['Susu Untuk Ali', '🥛', ['Ali minum susu setiap pagi.', 'Susu itu sedap dan berkhasiat.', 'Ibu tuang susu ke dalam cawan.', 'Ali ucap terima kasih kepada ibu.']],
  ['Topi Merah', '🧢', ['Ini topi merah kepunyaan Ali.', 'Ali pakai topi ketika bermain.', 'Topi itu lindung kepala Ali.', 'Ali simpan topi di atas rak.']]
];
const storage = { get: key => { try { return localStorage.getItem(key) } catch (e) { return null } }, set: (key, value) => { try { localStorage.setItem(key, value) } catch (e) {} } };
const savedStoryLevel = Number(storage.get('kvkStoryLevel')) || null;
const savedStoryIndex = Number(storage.get('kvkStoryIndex')) || 0;
if (savedStoryLevel && storyLevels[savedStoryLevel]) {
    storyLevel = savedStoryLevel;
    activeStories = storyLevels[savedStoryLevel];
}
let s = JSON.parse(storage.get('kvk') || 'null') || {
    learned: [],
    score: 0,
    stories: [],
    wrong: {}
};
let wi = 0, si = Math.min(savedStoryIndex, activeStories.length - 1);
function go(id) {
    if (id === 'home') { storyLevel = null; activeStories = stories; id = 'stories'; }
    document.querySelectorAll('.screen').forEach(x => x.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'learn')
        renderWord();
    if (id === 'stories') {
        if (storyLevel === null) renderStoryLevels();
        else { document.getElementById('storyLevelArea').innerHTML = ''; storyLevel === 3 ? renderShortStory() : (document.getElementById('shortStoryContent').style.display = 'none', document.getElementById('storyContent').style.display = 'block', renderStory()); }
    }
    if (id === 'quiz') {
        if (quizLevel === null) renderQuizLevels();
        else { document.getElementById('quizLevelArea').innerHTML = ''; document.getElementById('quizContent').style.display = 'block'; newQuiz(); }
    }
    if (id === 'progress' || id === 'parent')
        renderProgress()
}
function save() {
    storage.set('kvk', JSON.stringify(s))
}
function voice(text, rate = 0.85) {
    speechSynthesis.cancel();
    let u = new SpeechSynthesisUtterance(text);
    u.lang = 'ms-MY';
    u.rate = rate;
    let vs = speechSynthesis.getVoices();
    u.voice = vs.find(v => v.lang.toLowerCase().startsWith('ms')) || vs.find(v => v.lang.toLowerCase().startsWith('id')) || null;
    speechSynthesis.speak(u)
}
function speakWord() {
    let w = words[wi][0];
    voice(w);
    s.learned.includes(w) || s.learned.push(w);
    save()
}
function speakSlowly() {
    let w = words[wi][0].toUpperCase();
    voice(w.split('').join('... ') + '... ' + w, 0.55);
    s.learned.includes(w.toLowerCase()) || s.learned.push(w.toLowerCase());
    save()
}
function renderWord() {
    let [w, e] = words[wi];
    w = w.toUpperCase();
    word.textContent = w;
    learnImg.textContent = e;
    formula.textContent = w.split('').join(' + ') + ' = ' + w;
    c1.textContent = w[0];
    v.textContent = w[1];
    c2.textContent = w[2];
    count.textContent = (wi + 1) + ' / 30'
}
function changeWord(n) {
    wi = (wi + n + words.length) % words.length;
    renderWord()
}
const syllableMap = {
    ali: ['A', 'li'], naik: ['na', 'ik'], duduk: ['du', 'duk'], dalam: ['da', 'lam'], pergi: ['per', 'gi'], pekan: ['pe', 'kan'], bas: ['bas'], itu: ['i', 'tu'], besar: ['be', 'sar'], dan: ['dan'], ibu: ['I', 'bu'], baru: ['ba', 'ru'], ini: ['i', 'ni'], rumah: ['ru', 'mah'], warna: ['war', 'na'], merah: ['me', 'rah'], ahmad: ['Ah', 'mad'], suka: ['su', 'ka'], cat: ['cat'], beg: ['beg'], ada: ['a', 'da'], atas: ['a', 'tas'], rak: ['rak'], pen: ['pen'], buku: ['bu', 'ku'], van: ['van'], laju: ['la', 'ju'], bersama: ['ber', 'sa', 'ma'], tin: ['tin'], susu: ['su', 'su'], meja: ['me', 'ja'], minum: ['mi', 'num'], 
    biru: ['bi', 'ru'], tulis: ['tu', 'lis'], kad: ['kad'], tulisan: ['tu', 'li', 'san'], kemas: ['ke', 'mas'], bunga: ['bu', 'nga'], ros: ['ros'], pasu: ['pa', 'su'], limau: ['li', 'mau'], jus: ['jus'], manis: ['ma', 'nis'], seluar: ['se', 'lu', 'ar'], rosak: ['ro', 'sak'], tarik: ['ta', 'rik'], perlahan: ['per', 'la', 'han'], sudah: ['su', 'dah'], baik: ['ba', 'ik'], kucing: ['ku', 'cing'], kasut: ['ka', 'sut'], bola: ['bo', 'la'], topi: ['to', 'pi'], untuk: ['un', 'tuk'], pagi: ['pa', 'gi'], hari: ['ha', 'ri'], bangun: ['ba', 'ngun'], mandi: ['man', 'di'], biskut: ['bis', 'kut'], bulat: ['bu', 'lat'], 
    ambil: ['am', 'bil'], sekolah: ['se', 'ko', 'lah'], berat: ['be', 'rat'], banyak: ['ba', 'nyak'], kerusi: ['ke', 'ru', 'si'], makan: ['ma', 'kan'], ikan: ['i', 'kan'], air: ['air'], luar: ['lu', 'ar'], ayah: ['A', 'yah'], bawa: ['ba', 'wa'], hilang: ['hi', 'lang'], bawah: ['ba', 'wah'], jumpa: ['jum', 'pa'], terbuka: ['ter', 'bu', 'ka'], tutup: ['tu', 'tup'], mainan: ['ma', 'in', 'an'], susun: ['su', 'sun'], lari: ['la', 'ri'], taman: ['ta', 'man'], rasa: ['ra', 'sa'], sihat: ['si', 'hat'], kapal: ['ka', 'pal'], kertas: ['ker', 'tas'], daripada: ['da', 'ri', 'pa', 'da'], terapung: ['te', 'ra', 'pung'], lukis: ['lu', 'kis'], 
    gambar: ['gam', 'bar'], guna: ['gu', 'na'], kampung: ['kam', 'pung'], nenek: ['ne', 'nek'], hebat: ['he', 'bat'], roti: ['ro', 'ti'], sedap: ['se', 'dap'], bilik: ['bi', 'lik'], sisi: ['si', 'si'], katil: ['ka', 'til'], lambai: ['lam', 'bai'], dinding: ['din', 'ding'], tunjuk: ['tun', 'juk'], pukul: ['pu', 'kul'], pilih: ['pi', 'lih'], panggil: ['pang', 'gil'], kenyang: ['ke', 'nyang'], lena: ['le', 'na'], senyum: ['se', 'nyum'], 
    berbunyi: ['ber', 'bu', 'nyi'], tik: ['tik'], tok: ['tok'], lencana: ['len', 'ca', 'na'], emas: ['e', 'mas'], kawan: ['ka', 'wan'], baharu: ['ba', 'ha', 'ru'], main: ['main'], ceria: ['ce', 'ria'], kata: ['ka', 'ta'], mereka: ['me', 're', 'ka'], cantik: ['can', 'tik'], cuci: ['cu', 'ci'], bersih: ['ber', 'sih'], comel: ['co', 'mel'], belai: ['be', 'lai'], ubat: ['u', 'bat'], luka: ['lu', 'ka'], kepala: ['ke', 'pa', 'la'], beli: ['be', 'li'], beri: ['be', 'ri'], buat: ['bu', 'at'], tiba: ['ti', 'ba'], bangku: ['bang', 'ku'], tinggi: ['ting', 'gi'], simpan: ['sim', 'pan'],
    bapa: ['ba','pa'], mama: ['ma','ma'], mimi: ['mi','mi'], sasa: ['sa','sa'], dada: ['da','da'], nana: ['na','na'], kaki: ['ka','ki'], mata: ['ma','ta'], bibi: ['bi','bi'], pipi: ['pi','pi'], guli: ['gu','li'], kuda: ['ku','da'], kera: ['ke','ra'], kutu: ['ku','tu'], tikar: ['ti','kar'], riba: ['ri','ba'], ungu: ['un','gu'], bagi: ['ba','gi'], tiga: ['ti','ga'], dua: ['du','a'], lima: ['li','ma'], empat: ['em','pat'], enam: ['e','nam'], tujuh: ['tu','juh'], lapan: ['la','pan'], sembilan: ['sem','bi','lan'], sepuluh: ['se','pu','luh'], kepada: ['ke','pa','da'], papa: ['pa','pa'], teman: ['te','man'],pasar: ['pa','sar'], desa: ['de','sa'],
    sambil: ['sam','bil'],seram: ['se','ram'],cerita: ['ce','ri','ta'],ceri: ['ce','ri'], petik : ['pe','tik'], sampai: ['sam','pai'], habis: ['ha','bis'], campur: ['cam','pur'], coklat: ['cok','lat'], cawan: ['ca','wan'], arnab: ['ar','nab'], kura: ['ku','ra'], berlumba: ['ber','lum','ba'], pokok: ['po','kok'], garisan: ['ga','ri','san'], penamat: ['pe','na','mat'], hutan: ['hu','tan'], yakin: ['ya','kin'], berhenti: ['ber','hen','ti'], seketika: ['se','ke','ti','ka'], berbatu: ['ber','ba','tu'], kesusahan: ['ke','su','sa','han'], selamat: ['se','la','mat'], tepuk: ['te','puk'], sombong: ['som','bong'], rendah: ['ren','dah'], membantu: ['mem','ban','tu'],
    hanya: ['ha','nya'], penting: ['pen','ting'], belajar: ['be','la','jar'], saling: ['sa','ling'], mudah: ['mu','dah'], diam: ['di','am'], terus: ['ter','us'], dekat: ['de','kat'], pengajaran: ['pen','ga','jar','an'], orang: ['o','rang'], lain: ['la','in'], memandang: ['mem','an','dang'],aku: ['a','ku'], rehat: ['re','hat'], tertidur: ['ter','ti','dur'], kesalahan: ['ke','sa','lah','an'], menolong: ['me','no','long'], lebih: ['le','bih'], menang: ['me','nang'], paling: ['pa','ling'],berlari: ['ber','la','ri'], sangat: ['sa','ngat'], pada: ['pa','da'], berkata: ['ber','kata'], ketawa: ['ke','ta','wa'], mula: ['mu','la'], akan: ['a','kan'], dengan: ['de','ngan'], belakang: ['be','la','kang'], 
    tidak: ['ti','dak'], lama: ['la','ma'], kemudian: ['ke','mu','di','an'], nampak: ['nam','pak'], sedang: ['se','dang'], tidur: ['ti','dur'], sedikit: ['se','di','kit'], demi: ['de','mi'], semakin: ['se','ma','kin'], kita: ['ki','ta'], berjalan: ['ber','ja','lan'], tetapi: ['te','ta','pi'], terlambat: ['ter','lam','bat'], dahulu: ['da','hu','lu'], syabas: ['sya','bas'], sedar: ['se','dar'], bahawa: ['ba','ha','wa'], patut: ['pa','tut'], lalu: ['la','lu'], 
};
function colourSyllables(sentence) {
    return sentence.split(/(\p{L}+|[^\p{L}]+)/u).filter(Boolean).map(part => {
        if (!/^\p{L}+$/u.test(part)) return `<span class="punctuation">${part}</span>`;
        const syllables = [...(syllableMap[part.toLowerCase()] || [part])];
        if (part[0] === part[0].toUpperCase() && part[0] !== part[0].toLowerCase()) {
            syllables[0] = syllables[0][0].toUpperCase() + syllables[0].slice(1);
        }
        return syllables.map((syllable, i) => `<span class="syllable ${i % 2 ? 'syllable-red' : 'syllable-black'}">${syllable}</span>`).join('');
    }).join('');
}
function sentenceWithCapitalStart(sentence) {
    return sentence.replace(/^(\s*)(\p{L})/u, (_, space, firstLetter) => space + firstLetter.toUpperCase());
}
function replaceCatWithKucing(text) {
    return text.replace(/\bCat\b/g, 'Kucing').replace(/\bcat\b/g, 'kucing');
}
function levelButtons(type) { const labels = type === 'story' ? [['🌱 Tahap 1 – KV Mudah', 1], ['⭐ Tahap 2 – KVK Sederhana', 2], ['🏆 Tahap 3 – Cerita Pendek', 3]] : [['🌱 Tahap 1 – KV', 1], ['⭐ Tahap 2 – KVK', 2], ['🏆 Tahap 3 – KVKV', 3]]; return '<div class="level-options">' + labels.map(item => `<button class="level-card" onclick="select${type === 'story' ? 'Story' : 'Quiz'}Level(${item[1]})">${item[0]}</button>`).join('') + '</div>' }
function renderStoryLevels() { document.getElementById('storyContent').style.display = 'none'; document.getElementById('storyLevelArea').innerHTML = '<div class="storybook-animals" aria-hidden="true"><span>🦊</span><span>🐰</span><span>🦉</span><span>🐻</span></div><h3>Pilih tahap cerita</h3><p class="storybook-subtitle">Jom buka buku dan baca bersama!</p>' + levelButtons('story') }
function selectStoryLevel(level) { storyLevel = level; activeStories = storyLevels[level]; si = 0; storage.set('kvkStoryLevel', level); storage.set('kvkStoryIndex', si); document.getElementById('storyLevelArea').innerHTML = ''; if (level === 3) renderShortStory(); else { document.getElementById('shortStoryContent').style.display = 'none'; document.getElementById('storyContent').style.display = 'block'; renderStory(); } }
function chooseStoryLevel() { storyLevel = null; activeStories = stories; document.getElementById('storyContent').style.display = 'none'; document.getElementById('shortStoryContent').style.display = 'none'; renderStoryLevels() }
function renderShortStory() { const box = document.getElementById('shortStoryContent'); const story = shortStories[0]; const page = story.pages[shortStoryPage]; box.style.display = 'block'; document.getElementById('storyContent').style.display = 'none'; box.innerHTML = `<div class="short-story-cover">${story.cover}</div><h2>${story.title}</h2><div class="short-story-emoji">${page.emoji}</div><div class="short-story-text">${page.text.map(t => { const sentence = sentenceWithCapitalStart(t); return `<div class="story-line"><span>${colourSyllables(sentence)}</span><button class="mini" onclick="voice('${sentence.replaceAll("'", '')}')">🔊</button></div>` }).join('')}</div>${page.lesson ? `<div class="lesson-box">🌟 <b>Pengajaran</b><br>${page.lessonText}</div>` : ''}<div class="short-story-nav"><button class="secondary" onclick="changeShortStoryPage(-1)" ${shortStoryPage === 0 ? 'disabled' : ''}>⬅</button><span class="pill"> ${shortStoryPage + 1}/5</span><button class="primary" onclick="changeShortStoryPage(1)" ${shortStoryPage === 4 ? 'disabled' : ''}>➡</button></div>` }
function changeShortStoryPage(n) { shortStoryPage = (shortStoryPage + n + 5) % 5; renderShortStory() }
const renderShortStoryWithEnabledNavigation = renderShortStory;
renderShortStory = function () { renderShortStoryWithEnabledNavigation(); document.querySelectorAll('#shortStoryContent .short-story-nav button').forEach(button => button.disabled = false); }
function renderQuizLevels() { document.getElementById('quizContent').style.display = 'none'; document.getElementById('quizLevelArea').innerHTML = '<h3>Pilih tahap kuiz</h3>' + levelButtons('quiz') }
function selectQuizLevel(level) { quizLevel = level; storage.set('kvkQuizLevel', level); document.getElementById('quizLevelArea').innerHTML = ''; document.getElementById('quizContent').style.display = 'block'; newQuiz() }
function chooseQuizLevel() { quizLevel = null; document.getElementById('quizContent').style.display = 'none'; renderQuizLevels() }
function renderStory() {
    let x = activeStories[si];
    document.getElementById('storyCount').textContent = (si + 1) + '/' + activeStories.length;
    storyEmoji.textContent = x[1];
    storyTitle.textContent = replaceCatWithKucing(x[0]);
    storyText.innerHTML = x[2].map((t, i) => { const sentence = sentenceWithCapitalStart(replaceCatWithKucing(t)); return `<div class="story-line"><span>${colourSyllables(sentence)}</span><button class="mini" onclick="voice('${sentence.replaceAll("'", '')}')">🔊</button></div>` }).join('')
}
function readStory() {
    activeStories[si][2].map(replaceCatWithKucing).map(sentenceWithCapitalStart).forEach((x, i) => setTimeout(() => voice(x), i * 1700));
    if (!s.stories.includes(si))
        s.stories.push(si);
    save()
}
function changeStory(n) {
  si = (si + n + activeStories.length) % activeStories.length;
    storage.set('kvkStoryIndex', si);
    renderStory()
}
function newQuiz() {
    if (quizLevel === null) return renderQuizLevels();
    const choices = levelWords[quizLevel];
    let type = Math.floor(Math.random() * 3),
    w = choices[Math.floor(Math.random() * choices.length)];
    feedback.textContent = '';
    const picture = quizLevel === 1 ? '🔤' : quizLevel === 2 ? (words.find(x => x[0] === w)?.[1] || '🔤') : ({baju:'👕', bola:'⚽', buku:'📚', kaki:'🦶', mata:'👀', meja:'🪑', nasi:'🍚', roda:'🛞', susu:'🥛', topi:'🧢'}[w] || '🔤');
    quizVisual.textContent = picture;
    if (type === 0) {
        quizPrompt.textContent = 'Apakah ini?';
        let opts = [w, ...choices.filter(x => x !== w).sort(() => Math.random() - .5).slice(0, 2)].sort(() => Math.random() - .5);
        quizArea.innerHTML = '<div class="choices">' + opts.map(x => `<button class="choice" onclick="answer('${x}','${w}')">${x.toUpperCase()}</button>`).join('') + '</div>'
    } else if (type === 1) {
        quizPrompt.textContent = 'Susun huruf menjadi perkataan yang betul.';
        quizVisual.textContent = '🔤';
        quizArea.innerHTML = '<div class="letters-pool">' + w.split('').sort(() => Math.random() - .5).map((x, i) => `<button class="tile" onclick="pickTile(this,'${x}','${w}')">${x.toUpperCase()}</button>`).join('') + '</div><p id="built"></p>'
    } else {
        quizPrompt.textContent = 'Dengar dan pilih perkataan.';
        quizVisual.textContent = '🔊';
        quizArea.innerHTML = '<button class="primary" onclick="voice(\'' + w + '\')">🔊 Dengar</button><div class="choices">' + [w, ...choices.filter(x => x !== w).sort(() => Math.random() - .5).slice(0, 2)].sort(() => Math.random() - .5).map(x => `<button class="choice" onclick="answer('${x}','${w}')">${x.toUpperCase()}</button>`).join('') + '</div>'
    }
}
function answer(a, w) {
    if (a === w) {
        s.score++;
        feedback.textContent = '🎉 Betul! Hebat!';
        feedback.className = 'feedback pop';
        voice(w);
        save()
    } else {
        feedback.textContent = 'Cuba lagi 😊';
        s.wrong[a] = (s.wrong[a] || 0) + 1;
        save()
    }
}
function pickTile(b, x, w) {
    b.disabled = true;
    built.textContent = (built.textContent || '') + x.toUpperCase();
    if (built.textContent.toLowerCase() === w) {
        feedback.textContent = '🎉 ' + w.toUpperCase() + '!';
        voice(w);
        s.score++;
        save()
    }
}
function renderProgress() {
    let n = s.learned.length,
    p = Math.round((n / 30) * 100);
    learned.textContent = n + '/30';
    score.textContent = s.score;
    read.textContent = s.stories.length + '/50';
    bar.style.width = p + '%';
    percent.textContent = p + '% kemajuan';
    stars.textContent = n >= 20 ? '⭐ ⭐ ⭐' : n >= 10 ? '⭐ ⭐ ☆' : n >= 5 ? '⭐ ☆ ☆' : '☆ ☆ ☆';
    pWords.textContent = n + '/30';
    pScore.textContent = s.score;
    pStories.textContent = s.stories.length + '/50';
    pWrong.textContent = Object.keys(s.wrong).length ? Object.entries(s.wrong).sort((a, b) => b[1] - a[1]).map(x => x[0].toUpperCase()).join(', ') : 'Tiada lagi';
    parentSummary.textContent = 'Kemajuan keseluruhan: ' + p + '%'
}
function resetProgress() {
    if (confirm('Padam semua kemajuan?')) {
        s = {
            learned: [],
            score: 0,
            stories: [],
            wrong: {}
        };
        save();
        renderProgress();
        toast.textContent = 'Kemajuan telah direset.';
        toast.style.display = 'block';
        setTimeout(() => toast.style.display = 'none', 1800)
    }
}
speechSynthesis.onvoiceschanged = () => {};
// Cerita KVK ialah halaman utama: sentiasa bermula dengan pemilihan tahap.
storyLevel = null;
activeStories = stories;
renderStoryLevels();
