const words = [['bas', '🚌'], ['beg', '🎒'], ['Kucing', '🐱'], ['jam', '⏰'], ['jus', '🧃'], ['pen', '🖊️'], ['rak', '🗄️'], ['tin', '🥫'], ['van', '🚐'], ['zip', '🤐'], ['bom', '💣'], ['bus', '🚌'], ['cam', '📷'], ['gam', '🖼️'], ['gas', '⛽'], ['lap', '💻'], ['lim', '🍋'], ['lot', '🎟️'], ['mal', '🏬'], ['pam', '⛲'], ['pin', '📌'], ['pod', '🎙️'], ['ros', '🌹'], ['sip', '🥤'], ['tali', '🪢'], ['top', '🔝'], ['wan', '👴'], ['yap', '🧑'], ['zon', '🗺️'], ['kad', '💳']];
const stories = [['Bas Ali', '🚌', ['Ali naik bas.', 'Bas itu besar.', 'Ali duduk di dalam bas.', 'Ali dan ibu pergi ke pekan.']], ['Jam Baru', '⏰', ['Ini jam baru.', 'Jam itu ada di rak.', 'Jam berbunyi tik tok.']], ['Cat Rumah', '🎨', ['Cat rumah.', 'Cat rumah warna merah.', 'Ahmad suka cat merah.']], ['Beg Merah', '🎒', ['Ini beg merah.', 'Beg ada di atas rak.', 'Pen dan buku ada dalam beg.']], ['Van Ibu', '🚐', ['Ibu ada van.', 'Van itu laju.', 'Ali naik van bersama ibu.']], ['Tin Susu', '🥫', ['Ini tin susu.', 'Tin ada di atas meja.', 'Ali minum susu.']], ['Pen Biru', '🖊️', ['Pen Ali warna biru.', 'Ali tulis di atas kad.', 'Tulisan Ali kemas.']], ['Bunga Ros', '🌹', ['Ini ros merah.', 'Ros ada di dalam pasu.', 'Ibu suka bunga ros.']], ['Jus Limau', '🧃', ['Ali buat jus limau.', 'Jus itu manis.', 'Ali minum jus dengan ibu.']], ['Zip Seluar', '🤐', ['Zip seluar Ali rosak.', 'Ibu tarik zip perlahan.', 'Zip sudah baik!']]];
const moreStories = [
  ['Rak Buku', '📚', ['Ada rak buku.', 'Buku Ali ada di rak.', 'Ali baca buku.']], ['Bas Ke Taman', '🌳', ['Ali naik bas.', 'Bas pergi ke taman.', 'Ali main di taman.']], ['Kasut Baru', '👟', ['Ini kasut Baru.', 'Kasut itu biru.', 'Ali pakai kasut.']], ['Bola Ali', '⚽', ['Ali ada bola.', 'Ali sepak bola.', 'Bola masuk gol!']], ['Topi Merah', '🧢', ['Ini topi merah.', 'Topi ada di atas rak.', 'Ali pakai topi.']], ['Kad Untuk Ibu', '💌', ['Ali buat kad.', 'Kad itu untuk ibu.', 'Ibu suka kad Ali.']], ['Pasu Ros', '🏺', ['Ada pasu.', 'Ros ada dalam pasu.', 'Pasu itu cantik.']], ['Jam Pagi', '🌞', ['Jam berbunyi.', 'Hari sudah pagi.', 'Ali bangun dan mandi.']], ['Buku Ali', '📖', ['Ali ada buku.', 'Buku ada gambar.', 'Ali baca dengan ibu.']], ['Kucing Tidur', '🐱', ['Kucing sudah kenyang.', 'Kucing tidur di atas tikar.', 'Kucing tidur lena.']],
  ['Jus Manis', '🧃', ['Ini jus.', 'Jus itu manis.', 'Ali minum jus.']], ['Tin Biskut', '🍪', ['Ada tin biskut.', 'Tin itu bulat.', 'Ali ambil biskut.']], ['Van Biru', '🚐', ['Van itu biru.', 'Van ada di luar.', 'Ayah bawa van.']], ['Pen Hilang', '🖊️', ['Pen Ali hilang.', 'Pen ada di bawah rak.', 'Ali jumpa pen.']], ['Beg Sekolah', '🎒', ['Beg sekolah Ali berat.', 'Buku masuk dalam beg.', 'Ali angkat beg.']], ['Bas Besar', '🚌', ['Bas itu besar.', 'Bas ada banyak kerusi.', 'Ali duduk dalam bas.']], ['Kucing Makan', '🐱', ['Kucing makan ikan.', 'Kucing minum air.', 'Kucing sudah kenyang.']], ['Ros Ibu', '🌹', ['Ibu beli ros.', 'Ros warna merah.', 'Ros ada dalam pasu.']], ['Zip Beg', '🤐', ['Zip beg terbuka.', 'Ali tarik zip.', 'Zip beg sudah tutup.']], ['Rak Mainan', '🧸', ['Mainan ada di rak.', 'Ali susun mainan.', 'Rak sudah kemas.']],
  ['Lari Pagi', '🏃', ['Ali lari pagi.', 'Ali lari di taman.', 'Ali rasa sihat.']], ['Air Limau', '🍋', ['Ibu buat air limau.', 'Air itu masam.', 'Ali minum air.']], ['Bola Dalam Bakul', '🏀', ['Bola ada dalam bakul.', 'Ali ambil bola.', 'Ali main bola.']], ['Kapal Kertas', '⛵', ['Ali buat kapal.', 'Kapal itu daripada kertas.', 'Kapal terapung di air.']], ['Lukis Gambar', '🎨', ['Ali lukis gambar.', 'Ali guna pen.', 'Gambar itu cantik.']], ['Kampung Nenek', '🏘️', ['Hari ini baik.', 'Ali baca KVK.', 'Ali rasa hebat!']],
];
stories.push(...moreStories);
let s = JSON.parse(localStorage.kvk || 'null') || {
    learned: [],
    score: 0,
    stories: [],
    wrong: {}
};
let wi = 0, si = 0;
function go(id) {
    document.querySelectorAll('.screen').forEach(x => x.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'learn')
        renderWord();
    if (id === 'stories')
        renderStory();
    if (id === 'quiz')
        newQuiz();
    if (id === 'progress' || id === 'parent')
        renderProgress()
}
function save() {
    localStorage.kvk = JSON.stringify(s)
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
    ali: ['A', 'li'], naik: ['na', 'ik'], duduk: ['du', 'duk'], dalam: ['da', 'lam'], pergi: ['per', 'gi'], pekan: ['pe', 'kan'], bas: ['bas'], itu: ['i', 'tu'], besar: ['be', 'sar'], dan: ['dan'], ibu: ['I', 'bu'], baru: ['ba', 'ru'], ini: ['i', 'ni'], rumah: ['ru', 'mah'], warna: ['war', 'na'], merah: ['me', 'rah'], ahmad: ['Ah', 'mad'], suka: ['su', 'ka'], cat: ['cat'], beg: ['beg'], ada: ['a', 'da'], atas: ['a', 'tas'], rak: ['rak'], pen: ['pen'], buku: ['bu', 'ku'], van: ['van'], laju: ['la', 'ju'], bersama: ['ber', 'sa', 'ma'], tin: ['tin'], susu: ['su', 'su'], meja: ['me', 'ja'], minum: ['mi', 'num'], biru: ['bi', 'ru'], tulis: ['tu', 'lis'], kad: ['kad'], tulisan: ['tu', 'li', 'san'], kemas: ['ke', 'mas'], bunga: ['bu', 'nga'], ros: ['ros'], pasu: ['pa', 'su'], limau: ['li', 'mau'], jus: ['jus'], manis: ['ma', 'nis'], seluar: ['se', 'lu', 'ar'], rosak: ['ro', 'sak'], tarik: ['ta', 'rik'], perlahan: ['per', 'la', 'han'], sudah: ['su', 'dah'], baik: ['ba', 'ik'], buku: ['bu', 'ku'], kucing: ['ku', 'cing'], kasut: ['ka', 'sut'], bola: ['bo', 'la'], topi: ['to', 'pi'], untuk: ['un', 'tuk'], pasu: ['pa', 'su'], pagi: ['pa', 'gi'], hari: ['ha', 'ri'], bangun: ['ba', 'ngun'], mandi: ['man', 'di'], biskut: ['bis', 'kut'], bulat: ['bu', 'lat'], ambil: ['am', 'bil'], sekolah: ['se', 'ko', 'lah'], berat: ['be', 'rat'], banyak: ['ba', 'nyak'], kerusi: ['ke', 'ru', 'si'], makan: ['ma', 'kan'], ikan: ['i', 'kan'], air: ['air'], luar: ['lu', 'ar'], ayah: ['A', 'yah'], bawa: ['ba', 'wa'], hilang: ['hi', 'lang'], bawah: ['ba', 'wah'], jumpa: ['jum', 'pa'], terbuka: ['ter', 'bu', 'ka'], tutup: ['tu', 'tup'], mainan: ['ma', 'in', 'an'], susun: ['su', 'sun'], lari: ['la', 'ri'], taman: ['ta', 'man'], rasa: ['ra', 'sa'], sihat: ['si', 'hat'], kapal: ['ka', 'pal'], kertas: ['ker', 'tas'], daripada: ['da', 'ri', 'pa', 'da'], terapung: ['te', 'ra', 'pung'], lukis: ['lu', 'kis'], gambar: ['gam', 'bar'], guna: ['gu', 'na'], kampung: ['kam', 'pung'], nenek: ['ne', 'nek'], hebat: ['he', 'bat'], roti: ['ro', 'ti'], sedap: ['se', 'dap'], bilik: ['bi', 'lik'], sisi: ['si', 'si'], katil: ['ka', 'til'], lambai: ['lam', 'bai'], dinding: ['din', 'ding'], tunjuk: ['tun', 'juk'], pukul: ['pu', 'kul'], pilih: ['pi', 'lih'], makan: ['ma', 'kan'], terapung: ['te', 'ra', 'pung'], panggil: ['pang', 'gil'], kenyang: ['ke', 'nyang'], lena: ['le', 'na'], senyum: ['se', 'nyum'], sekolah: ['se', 'ko', 'lah']
};
function colourSyllables(sentence) {
    return sentence.split(/(\p{L}+|[^\p{L}]+)/u).filter(Boolean).map(part => {
        if (!/^\p{L}+$/u.test(part)) return `<span class="punctuation">${part}</span>`;
        const syllables = syllableMap[part.toLowerCase()] || [part];
        return syllables.map((syllable, i) => `<span class="syllable ${i % 2 ? 'syllable-red' : 'syllable-black'}">${syllable}</span>`).join('');
    }).join('');
}
function renderStory() {
    let x = stories[si];
    storyCount.textContent = (si + 1) + '/50';
    storyEmoji.textContent = x[1];
    storyTitle.textContent = x[0];
    storyText.innerHTML = x[2].map((t, i) => `<div class="story-line"><span>${colourSyllables(t)}</span><button class="mini" onclick="voice('${t.replaceAll("'", '')}')">🔊</button></div>`).join('')
}
function readStory() {
    stories[si][2].forEach((x, i) => setTimeout(() => voice(x), i * 1700));
    if (!s.stories.includes(si))
        s.stories.push(si);
    save()
}
function changeStory(n) {
  si = (si + n + stories.length) % stories.length;
    renderStory()
}
function newQuiz() {
    let type = Math.floor(Math.random() * 3),
    w = words[Math.floor(Math.random() * 10)][0];
    feedback.textContent = '';
    quizVisual.textContent = words.find(x => x[0] === w)[1];
    if (type === 0) {
        quizPrompt.textContent = 'Apakah ini?';
        let opts = [w, ...words.filter(x => x[0] !== w).sort(() => Math.random() - .5).slice(0, 2).map(x => x[0])].sort(() => Math.random() - .5);
        quizArea.innerHTML = '<div class="choices">' + opts.map(x => `<button class="choice" onclick="answer('${x}','${w}')">${x.toUpperCase()}</button>`).join('') + '</div>'
    } else if (type === 1) {
        quizPrompt.textContent = 'Susun huruf menjadi perkataan yang betul.';
        quizVisual.textContent = '🔤';
        quizArea.innerHTML = '<div class="letters-pool">' + w.split('').sort(() => Math.random() - .5).map((x, i) => `<button class="tile" onclick="pickTile(this,'${x}','${w}')">${x.toUpperCase()}</button>`).join('') + '</div><p id="built"></p>'
    } else {
        quizPrompt.textContent = 'Dengar dan pilih perkataan.';
        quizVisual.textContent = '🔊';
        quizArea.innerHTML = '<button class="primary" onclick="voice(\'' + w + '\')">🔊 Dengar</button><div class="choices">' + [w, ...words.filter(x => x[0] !== w).sort(() => Math.random() - .5).slice(0, 2).map(x => x[0])].sort(() => Math.random() - .5).map(x => `<button class="choice" onclick="answer('${x}','${w}')">${x.toUpperCase()}</button>`).join('') + '</div>'
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
