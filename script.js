// Countdown dyal 2029
// T9der tbedel "Jan 1, 2029" l'ay ch'har w nhar bghiti (mtn: "Oct 15, 2029")
const targetDate = new Date("Jan 1, 2029 00:00:00").getTime();

const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // L7isab dyal l'ayyam, swaye3, dqayq, twani
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Nzidou '0' ila kan r9am sgher mn 10 (mtn 09 blasa 9)
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // Ila wslna l'2029, achno ghadi yban
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-container").innerHTML = "<h3 style='color: #10b981;'>Lyoum Hwa Nhar Lkbir! 🎉</h3>";
    }
}, 1000);
// L'code dyal Music Player
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', function () {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '🎵 Khdem Music';
        musicBtn.classList.remove('playing'); // Kan7iydo l'animation
    } else {
        bgMusic.play();
        musicBtn.innerHTML = '🎶 7bess Music';
        musicBtn.classList.add('playing'); // Kanzidou l'animation
    }
    isPlaying = !isPlaying;
});
// 1. L'code dyal Briya (Open Letter)
const envelopeBox = document.getElementById('envelope-box');
envelopeBox.addEventListener('click', function () {
    // Kanqelbo l'7ala: ila knt msouda t7el, w ila knt m7lola tsed
    envelopeBox.classList.toggle('open');
});

// 2. L'code dyal Qlouba mlli tekliqi (Click Magic)
document.addEventListener('click', function (e) {
    // Makanbghiwch ytla3 qelb ila cliqina 3la l'boutona dyal l'music wla l'bra
    if (e.target.closest('#music-btn') || e.target.closest('.envelope-container')) {
        return;
    }

    // Kansawbo element jdid fih qelb
    const heart = document.createElement('div');
    heart.classList.add('click-heart');
    heart.innerHTML = '❤️';

    // Kan7otouh blasa fin cliqina b dbt
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';

    // Kanzidouh f site
    document.body.appendChild(heart);

    // Kanms7ouh mn b3d 1 taniya (mlli tsali l'animation) bash mayt9lch site
    setTimeout(() => {
        heart.remove();
    }, 1000);
});
// 3. L'code dyal Wriqat Lward (Falling Petals)
const petalsContainer = document.getElementById('petals-container');
const totalPetals = 40; // Ch7al mn wriqa bghiti tti7

for (let i = 0; i < totalPetals; i++) {
    let petal = document.createElement('div');
    petal.classList.add('petal');

    // Blassa 3achwaiya f l'3erd dyal site
    petal.style.left = Math.random() * 100 + 'vw';

    // 7jm 3achwai (bin 10px w 25px)
    let size = Math.random() * 15 + 10;
    petal.style.width = size + 'px';
    petal.style.height = size * 1.2 + 'px'; // L'tol kber mn l'3erd chwiya

    // Sor3a dyal tyo7iya (bin 6 w 12 taniya)
    petal.style.animationDuration = Math.random() * 6 + 6 + 's';

    // Wa9t m3atel bash mayti7ouch f de9a we7da
    petal.style.animationDelay = Math.random() * 10 + 's';

    petalsContainer.appendChild(petal);
}