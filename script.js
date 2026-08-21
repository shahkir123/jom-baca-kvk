const words = [['bas', '🚌'], ['beg', '🎒'], ['cat', '🐱'], ['jam', '⏰'], ['jus', '🧃'], ['pen', '🖊️'], ['rak', '🗄️'], ['tin', '🥫'], ['van', '🚐'], ['zip', '🤐'], ['bom', '💣'], ['bus', '🚌'], ['cam', '📷'], ['gam', '🖼️'], ['gas', '⛽'], ['lap', '💻'], ['lim', '🍋'], ['lot', '🎟️'], ['mal', '🏬'], ['pam', '⛲'], ['pin', '📌'], ['pod', '🎙️'], ['ros', '🌹'], ['sip', '🥤'], ['tali', '🪢'], ['top', '🔝'], ['wan', '👴'], ['yap', '🧑'], ['zon', '🗺️'], ['kad', '💳']];
const stories = [['Bas Ali', '🚌', ['Ali naik bas.', 'Bas itu besar.', 'Ali duduk di dalam bas.', 'Ali dan ibu pergi ke pekan.']], ['Jam Baharu', '⏰', ['Ini jam baharu.', 'Jam itu ada di rak.', 'Jam berbunyi tik tok.']], ['Kucing Comel', '🐱', ['Cat rumah.', 'Cat rumah warna merah.', 'Ahmad suka cat merah.']], ['Beg Merah', '🎒', ['Ini beg merah.', 'Beg ada di atas rak.', 'Pen dan buku ada dalam beg.']], ['Van Ibu', '🚐', ['Ibu ada van.', 'Van itu laju.', 'Ali naik van bersama ibu.']], ['Tin Susu', '🥫', ['Ini tin susu.', 'Tin ada di atas meja.', 'Ali minum susu.']], ['Pen Biru', '🖊️', ['Pen Ali warna biru.', 'Ali tulis di atas kad.', 'Tulisan Ali kemas.']], ['Bunga Ros', '🌹', ['Ini ros merah.', 'Ros ada di dalam pasu.', 'Ibu suka bunga ros.']], ['Jus Limau', '🧃', ['Ali buat jus limau.', 'Jus itu manis.', 'Ali minum jus dengan ibu.']], ['Zip Seluar', '🤐', ['Zip seluar Ali rosak.', 'Ibu tarik zip perlahan.', 'Zip sudah baik!']]];
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
function renderStory() {
    let x = stories[si];
    storyEmoji.textContent = x[1];
    storyTitle.textContent = x[0];
    storyText.innerHTML = x[2].map((t, i) => `<div class="story-line"><span>${t.replace(/\b(bas|beg|cat|jam|jus|pen|rak|tin|van|zip)\b/gi, '<b>$1</b>')}</span><button class="mini" onclick="voice('${t.replaceAll("'", '')}')">🔊</button></div>`).join('')
}
function readStory() {
    stories[si][2].forEach((x, i) => setTimeout(() => voice(x), i * 1700));
    if (!s.stories.includes(si))
        s.stories.push(si);
    save()
}
function changeStory(n) {
    si = (si + n + 10) % 10;
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
    read.textContent = s.stories.length + '/10';
    bar.style.width = p + '%';
    percent.textContent = p + '% kemajuan';
    stars.textContent = n >= 20 ? '⭐ ⭐ ⭐' : n >= 10 ? '⭐ ⭐ ☆' : n >= 5 ? '⭐ ☆ ☆' : '☆ ☆ ☆';
    pWords.textContent = n + '/30';
    pScore.textContent = s.score;
    pStories.textContent = s.stories.length + '/10';
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
