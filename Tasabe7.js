const azkar = [
    { text: "سُـبْحانَ اللهِ", count: 100 },
    { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count: 100 },
    { text: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ", count: 100 },
    { text: "سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ", count: 100 },
    { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ", count: 100 },
    { text: "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ", count: 100 },
    { text: "لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ", count: 100 },
    { text: "الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ ", count: 100 },
    { text: "الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد", count: 100 },
    { text: "أستغفر الله", count: 100 },
    { text: "سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ", count: 100 },
    { text: "لَا إِلَهَ إِلَّا اللَّهُ", count: 100 },
    { text: "الْلَّهُ أَكْبَرُ", count: 100 },
    { text: "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلا إِلَهَ إِلا اللَّهُ ، وَاللَّهُ أَكْبَرُ ، اللَّهُمَّ اغْفِرْ لِي ، اللَّهُمَّ ارْحَمْنِي ، اللَّهُمَّ ارْزُقْنِي", count: 100 },
    { text: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ", count: 100 },
    { text: "اللَّهُ أَكْبَرُ كَبِيرًا ، وَالْحَمْدُ لِلَّهِ كَثِيرًا ، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً", count: 100 },
    { text: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ", count: 100 },
    // أضف الأذكار الأخرى هنا
];

let currentAzkarIndex = 0;
let azkarCounts = azkar.map(azkar => azkar.count);

document.getElementById("azkar-container").innerHTML = azkar[currentAzkarIndex].text;
document.getElementById("count").innerHTML = azkarCounts[currentAzkarIndex];

document.getElementById('prev-btn').addEventListener('click', function() {
    if (currentAzkarIndex == 0) {
        window.location.href = '/';
    } else {
        currentAzkarIndex--;
        document.getElementById("azkar-container").innerHTML = azkar[currentAzkarIndex].text;
        document.getElementById("count").innerHTML = azkarCounts[currentAzkarIndex];
    }
});

document.getElementById("next-btn").addEventListener("click", function() {
    if (currentAzkarIndex == azkar.length - 1) {
        window.location.href = '/';
    } else {
        currentAzkarIndex++;
        document.getElementById("azkar-container").innerHTML = azkar[currentAzkarIndex].text;
        document.getElementById("count").innerHTML = azkarCounts[currentAzkarIndex];
    }
});

document.getElementById("count").addEventListener("click", function() {
    if (azkarCounts[currentAzkarIndex] > 0) {
        azkarCounts[currentAzkarIndex]--;
        document.getElementById("count").innerHTML = azkarCounts[currentAzkarIndex];
    } else {
        azkarCounts[currentAzkarIndex] = azkar[currentAzkarIndex].count;
        document.getElementById("count").innerHTML = azkarCounts[currentAzkarIndex];
    }
});