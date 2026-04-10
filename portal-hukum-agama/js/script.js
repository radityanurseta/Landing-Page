document.addEventListener("DOMContentLoaded", function () {

  // ================= NAVBAR SCROLL =================
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // ================= DARK MODE =================
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      toggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
    });
  }

  // ================= REVEAL EFFECT =================
  function reveal() {
    document.querySelectorAll(".reveal").forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", reveal);
  reveal();

  // ================= COUNTER (AMAN) =================
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach((counter) => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(update, 10);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });

  // ================= PARTICLES (AMAN) =================
  if (document.getElementById("particles-js") && typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 1 },
        line_linked: { enable: true }
      }
    });
  }

  // ================= DETAIL PAGE =================
  if (window.location.pathname.includes("detail.html")) {

    const params = new URLSearchParams(window.location.search);
    const materi = params.get("materi");

    const dataMateri = {

      "hukum-islam": {
        title: "Studi kasus yang membatalkan syahdatain",
        content: `
          <p><strong>PERKARA-PERKARA YANG MEMBATALKAN SYAHADATAIN</strong></p>
          <p><strong>Imam adalah harta termahal</strong></p>
          <p>man adalah harta termahal yang dimiliki seorang hamba, yang bisa menyelamatkannya pada kehidupan dunia maupun akhirat kelak. Sesuatu yang tidak bisa ditukar sekalipun dengan emas sepenuh bumi. Allah Subhanahu wa Ta’ala berfirman:
          إِنَّ الَّذِينَ كَفَرُوا وَمَاتُوا وَهُمْ كُفَّارٌ فَلَنْ يُقْبَلَ مِنْ أَحَدِهِمْ مِلْءُ الْأَرْضِ ذَهَبًا وَلَوِ افْتَدَى بِهِ أُولَئِكَ لَهُمْ عَذَابٌ أَلِيمٌ وَمَا لَهُمْ مِنْ نَاصِرِينَ
          “Sesungguhnya orang-orang yang kafir dan mati sedang mereka tetap dalam kekafirannya, maka tidaklah akan diterima dari seseorang diantara mereka emas sepenuh bumi, walaupun dia menebus diri dengan emas (yang sebanyak) itu.Bagi mereka itulah siksa yang pedih dan sekali-kali mereka tidak memperoleh penolong.” (QS. Ali ‘Imran: 91).
          Maka janganlah sampai harta termahal ini batal dengan sebab amalan yang bisa membatalkannya, sehingga kita merugi di akhirat.</p>

          <p><strong>Perkara-perkara yang membatalkan Syahadatain:</strong></p>
          <ul>
            <li>1. Menyekutukan Allah (syirik).

Yaitu memalingkan ibadah yang khusus milik Allah kepada selain-Nya, misalnya berdo’a, memohon syafa’at, bertawakkal, beristighatsah, bernadzar, dan menyembelih, yang ditujukan kepada selain Allah. Seperti menyembelih untuk jin atau untuk penghuni kubur, dengan keyakinan bahwa para sesembahan selain Allah itu dapat menolak bahaya atau dapat mendatangkan manfaat. Allah Subhanahu wa Ta’ala berfirman:

إِنَّ اللَّهَ لَا يَغْفِرُ أَنْ يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَلِكَ لِمَنْ يَشَاءُ وَمَنْ يُشْرِكْ بِاللَّهِ فَقَدِ افْتَرَى إِثْمًا عَظِيمًا

“Sesungguhnya Allah tidak akan mengampuni dosa syirik, dan Dia mengampuni segala dosa yang selain dari (syirik) itu, bagi siapa yang dikehendaki-Nya…” (QS. An-Nisaa’: 48).</li>
            <li>2. Tidak mengkafirkan orang-orang musyrik, atau meragukan kekafiran mereka, atau membenarkan pendapat mereka.

Yaitu orang yang tidak mengkafirkan orang-orang kafir, baik dari kalangan yahudi, nasrani maupun majusi, orang-orang musyrik, atau orang-orang mulhid (Atheis), atau selain itu dari berbagai macam kekufuran, atau seseorang meragukan kekufuran mereka, atau membenarkan pendapat mereka, maka orang tersebut telah batal keimanannya. Allah Subhanahu wa Ta’ala berfirman:
إِنَّ الدِّينَ عِنْدَ اللَّهِ الْإِسْلَامُ

“Sesungguhnya agama (yang diridhai) di sisi Allah hanyalah Islam…” (QS. Ali ‘Imran: 19).</li>
            <li>3. Meyakini adanya petunjuk yang lebih sempurna dari Sunnah Nabi Shallallahu ‘alaihi wa sallam.

Orang yang meyakini bahwa ada petunjuk lain yang lebih sempurna dari petunjuk Nabi shallallahu ‘alaihi wasallam, atau orang meyakini bahwa ada hukum lain yang lebih baik daripada hukum Nabi shallallahu ‘alaihi wasallam, seperti orang-orang yang lebih memilih hukum-hukum Thaghut daripada hukum Nabi Shallallahu ‘alaihi wasallam, maka ia telah kafir. Allah Subhanahu wa Ta’ala berfirman:

أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا لِقَوْمٍ يُوقِنُونَ

“Apakah hukum Jahiliyyah yang mereka kehendaki dan (hukum) siapakah yang lebih baik daripada (hukum) Allah bagi orang-orang yang yakin?” (QS. Al-Maaidah: 50).</li>
            <li>4. Tidak senang dan membenci hal-hal yang dibawa oleh Rasulullah Shallallahu ‘alaihi wasallam.

Yaitu orang yang marah, murka, atau benci terhadap syariat dan ajaran yang dibawa oleh Rasulullah Shallallahu ‘alaihi wasallam, meskipun orang tersebut melaksanakannya. Allah Subhanahu wa Ta’ala berfirman:

وَالَّذِينَ كَفَرُوا فَتَعْسًا لَهُمْ وَأَضَلَّ أَعْمَالَهُمْ (8) ذَلِكَ بِأَنَّهُمْ كَرِهُوا مَا أَنْزَلَ اللَّهُ فَأَحْبَطَ أَعْمَالَهُمْ

“Dan orang-orang yang kafir, maka kecelakaanlah bagi mereka dan Allah menghapus amal-amal mereka. Yang demikian itu adalah karena sesungguhnya mereka benci kepada apa yang diturunkan Allah (Al-Qur-an), lalu Allah menghapuskan (pahala-pahala) amal-amal mereka.” (QS. Muhammad: 8-9).</li>
          <li>5. Menghina Islam.

Yaitu orang yang mengolok-olok (menghina) Allah Subhanahu wa Ta’ala dan Rasul-Nya, Al-Qur’an, agama Islam, Malaikat atau para ulama karena ilmu yang mereka miliki; atau menghina salah satu syi’ar dari syi’ar-syi’ar Islam, seperti shalat, zakat, puasa, haji, thawaf di sekeliling Ka’bah, wukuf di ‘Arafah; atau menghina masjid, adzan, memelihara jenggot atau Sunnah-sunnah Nabi Shallallahu ‘alaihi wasallam lainnya, dan syi’ar-syi’ar agama Allah pada tempat-tempat yang disucikan dalam keyakinan Islam serta terdapat keberkahan padanya, maka telah batal keimanan pelakunya. Allah Subhanahu wa Ta’ala berfirman:

قُلْ أَبِاللَّهِ وَآيَاتِهِ وَرَسُولِهِ كُنْتُمْ تَسْتَهْزِئُونَ (65) لَا تَعْتَذِرُوا قَدْ كَفَرْتُمْ بَعْدَ إِيمَانِكُمْ

“Katakanlah: ‘Apakah dengan Allah, ayat-ayat-Nya dan Rasul-Nya kamu selalu berolok-olok?’ Tidak usah kamu minta maaf, karena kamu kafir sesudah beriman.” (QS. At-Taubah: 65-66).</li>
          </ul>

          <p>Referensi.</p>
          <p>1. Syarh Nawaqidh Al-Islam, karya Syaikh Shalih bin Fauzan bin Abdullah Al-Fauzan.</p>
              <p>2. Syuruth La Ilaha Illallah wa Nawaqidh Al-Islam, karya Syaikh Muhammad bin Sa’id Ruslan, dan lainnya.</p>
        `
      },

      "akhlak": {
        title: "Kisah Ashabul Kahfi",
        content: `
          <p>Di antara lembaran-lembaran Al-Qur'an yang mulia, tersimpan kisah-kisah nyata yang tak lekang oleh waktu. Bukan sekadar dongeng pengantar tidur, melainkan cerminan sejarah yang sarat akan pelajaran. Salah satu kisah paling menakjubkan yang Allah perintahkan untuk kita renungi setiap Jumat adalah kisah Ashabul Kahfi, kisah para pemuda penghuni gua.</p>
          <p>Mereka bukanlah Nabi, bukan pula Rasul. Mereka adalah sekelompok pemuda biasa sepertimu, yang hidup di tengah-tengah masyarakat yang rusak dan penguasa yang zalim.
          Namun, di dalam dada mereka menyala sebuah cahaya yang enggan padam: cahaya tauhid. Di saat yang lain tunduk pada berhala dan kekuasaan, mereka memilih untuk berdiri tegar, bahkan jika itu berarti harus kehilangan segalanya.</p>
          <p>Artikel ini bukan sekadar penceritaan ulang. Ini adalah sebuah perjalanan untuk menyelami kisah Ashabul Kahfi lengkap, menelusuri jejak langkah mereka ayat per ayat dalam Surah Al-Kahfi.
          Kita akan mengungkap keteguhan iman mereka yang luar biasa, menyaksikan keajaiban perlindungan Allah yang di luar nalar manusia, dan yang terpenting, memetik hikmah-hikmah abadi yang sangat relevan untuk kita, para pemuda dan orang tua di akhir zaman.</p>
          <p>Kisah Ashabul Kahfi, Saat Iman Menjadi Bara di Genggaman</p>
          <p>Kisah ini terjadi di sebuah negeri yang diperintah oleh seorang raja yang kejam dan penyembah berhala, yang oleh para ahli sejarah disebut Diqyanus (Decius). Ia memaksa seluruh rakyatnya untuk ikut dalam kemusyrikan, mempersembahkan kurban untuk berhala-berhala. Siapa pun yang menolak, akan dihadapkan pada dua pilihan: murtad atau mati.
          Di tengah kegelapan itu, muncullah sekelompok pemuda dari kalangan bangsawan. Hati mereka resah. Mereka menolak untuk menukar iman mereka kepada Allah Yang Maha Esa dengan kemewahan dunia yang fana. Secara sembunyi-sembunyi, mereka saling menguatkan di atas jalan tauhid.
          "Tuhan Kami adalah Tuhan Langit dan Bumi" - Deklarasi Tauhid yang Mengguncang
          Kabar tentang para pemuda ini akhirnya sampai ke telinga raja. Mereka pun ditangkap dan dihadapkan ke istana. Di hadapan penguasa yang zalim, di saat nyawa berada di ujung tanduk, mereka tidak gentar. Allah SWT mengabadikan momen heroik ini:
      
<p>وَرَبَطْنَا عَلَىٰ قُلُوبِهِمْ إِذْ قَامُوا فَقَالُوا رَبُّنَا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ لَنْ نَدْعُوَ مِنْ دُونِهِ إِلَٰهًا ۖ لَقَدْ قُلْنَا إِذًا شَطَطًا
</p>
Artinya: "Dan Kami telah meneguhkan hati mereka di waktu mereka berdiri, lalu mereka pun berkata, 'Tuhan kami adalah Tuhan langit dan bumi; kami sekali-kali tidak menyeru Tuhan selain Dia, sesungguhnya kami kalau demikian telah mengucapkan perkataan yang amat jauh dari kebenaran'." (QS. Al-Kahfi: 14)
Raja memberi mereka waktu beberapa hari untuk berpikir. Namun, bagi mereka, iman bukanlah sesuatu yang bisa ditawar.</p>
          <p>Hijrah ke Gua, Meninggalkan Dunia demi Menyelamatkan Iman</p>


Menyadari bahwa mereka tidak bisa lagi berdakwah secara terang-terangan dan untuk menyelamatkan akidah mereka, para pemuda ini memutuskan untuk uzlah (mengasingkan diri) atau "berhijrah" dari kebobrokan kota mereka.
Mereka memilih sebuah gua di gunung sebagai tempat berlindung. Di ambang pintu gua, mereka memanjatkan doa yang sangat indah:

<p>
رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا</p>



Artinya: "...(mereka berdoa): 'Wahai Tuhan kami,
berikanlah rahmat kepada kami dari sisi-Mu dan sempurnakanlah bagi kami petunjuk yang lurus dalam urusan kami (ini)'." (QS. Al-Kahfi: 10)



<p>Tidur Selama 309 Tahun dalam Penjagaan Allahl</p>



Di dalam gua inilah, keajaiban terbesar dimulai. Allah tidak hanya menyembunyikan mereka, tetapi menidurkan mereka dengan lelap.


<p>
فَضَرَبْنَا عَلَىٰ آذَانِهِمْ فِي الْكَهْفِ سِنِينَ عَدَدًا
</p>

Artinya: "Maka Kami tutup telinga mereka beberapa tahun dalam gua itu." (QS. Al-Kahfi: 11)



Selama 309 tahun (menurut perhitungan kalender bulan), mereka tertidur dalam penjagaan langsung dari Allah:



<p>Posisi Matahari Diatur: Allah mengatur pergerakan matahari sehingga sinarnya tidak mengenai mereka secara langsung namun tetap memberikan kehangatan. "Dan kamu akan melihat matahari ketika terbit, condong dari gua mereka ke sebelah kanan, dan bila matahari terbenam, menjauhi mereka ke sebelah kiri..." (QS. Al-Kahfi: 17).</p>


<p>Posisi Tubuh Dibalik-balik: Agar tubuh mereka tidak rusak, Allah membolak-balikkan posisi tidur mereka. "Dan Kami bolak-balikkan mereka ke kanan dan ke kiri..." (QS. Al-Kahfi: 18).</p>


<p>Anjing yang Setia: Seekor anjing menemani mereka dan ikut tertidur, menjulurkan kedua lengannya di muka pintu gua, menambah kesan angker agar tidak ada yang berani mendekat.</p>


<p>Kebangkitan dan Terungkapnya Tanda Kebesaran Allah</p>
<p>Setelah 309 tahun berlalu, Allah membangunkan mereka. Mereka saling bertanya, "Berapa lama kita di sini?" Sebagian menjawab, 
"Sehari atau setengah hari." Mereka masih mengira hanya tertidur sebentar.
Karena lapar, salah satu dari mereka diutus ke kota untuk membeli makanan dengan uang perak yang mereka bawa, dengan pesan agar berhati-hati jangan sampai ketahuan. Di sinilah tabir waktu tersingkap. 
Kota itu telah berubah total. Penduduknya bukan lagi penyembah berhala, melainkan orang-orang yang beriman kepada Allah.
Saat pemuda itu hendak membayar dengan koin kuno dari zaman Raja Diqyanus, gemparlah seluruh kota. 
Singkat cerita, keberadaan mereka pun terungkap. Kisah mereka menjadi bukti nyata (ayah) bagi penduduk negeri yang saat itu sedang berselisih pendapat tentang adanya hari kebangkitan.</p>


Misteri Jumlah Ashabul Kahfi, Pelajaran Berharga dari Al-Qur'an


Berapa sebenarnya jumlah pemuda Ashabul Kahfi? Al-Qur'an secara elegan menjawab rasa penasaran ini sambil memberikan pelajaran penting:



سَيَقُولُونَ ثَلَاثَةٌ رَابِعُهُمْ كَلْبُهُمْ وَيَقُولُونَ خَمْسَةٌ سَادِسُهُمْ كَلْبُهُمْ رَجْمًا بِالْغَيْبِ ۖ وَيَقُولُونَ سَبْعَةٌ وَثَامِنُهُمْ كَلْبُهُمْ ۚ قُلْ رَبِّي أَعْلَمُ بِعِدَّتِهِمْ...



Artinya: "Nanti (ada orang yang akan) mengatakan (jumlah mereka) adalah tiga orang, yang keempat adalah anjingnya, dan (yang lain) mengatakan: 'lima orang, yang keenam adalah anjingnya', sebagai terkaan terhadap yang gaib; dan (yang lain lagi) mengatakan: 'tujuh orang, yang kedelapan adalah anjingnya'. Katakanlah: 'Tuhanku lebih mengetahui jumlah mereka'..." (QS. Al-Kahfi: 22)



fokuslah pada hikmah dan pelajaran dari kisah ini, bukan pada perdebatan tentang detail-detail yang tidak akan menambah keimananmu.



Hikmah Abadi dari Kisah Ashabul Kahfi untuk Generasi Modern


<p>Kisah ini bukan untuk dikenang, tapi untuk diteladani. Inilah beberapa hikmahnya untukmu:</p>



<p>a. Keteguhan Akidah Itu Harga Mati
Di tengah gempuran "berhala-berhala modern" seperti materialisme, hedonisme, dan popularitas, berpegang teguh pada tauhid adalah perjuangan terbesar.</p>



<p>b. Pentingnya Hijrah dari Lingkungan Buruk
Jika lingkunganmu merusak iman dan akhlakmu, beranilah untuk "hijrah"—menjauh dari teman-teman yang toksik atau kebiasaan buruk—demi menyelamatkan agamamu.</P>



<p>c. Kekuatan Doa dan Tawakkal
Lihatlah apa yang pertama kali dilakukan para pemuda itu saat terdesak: mereka berdoa. Doa adalah senjata pertama dan terakhir seorang mukmin.</p>



<p>d. Pertolongan Allah Itu Nyata dan di Luar Logika
Jika kamu menolong agama Allah, Allah pasti akan menolongmu dengan cara yang tidak pernah kamu bayangkan.</p>



<p>e. Fokus pada Substansi, Bukan Perdebatan Sia-sia
Sibukkan dirimu dengan amal dan hikmah, jangan habiskan energimu untuk perdebatan yang tidak produktif.</p>



<p>Kisah Ashabul Kahfi adalah monumen abadi tentang keberanian iman di usia muda.
Mereka adalah simbol perlawanan terhadap kezaliman, bukti nyata akan kekuasaan Allah, dan inspirasi bagi setiap jiwa yang merasa sendirian dalam memegang kebenaran.
Kisah mereka mengajarkan kita bahwa lari kepada Allah adalah satu-satunya tempat berlindung yang paling aman dan bahwa Allah tidak akan pernah menyia-nyiakan hamba-Nya yang beriman.
Ashabul Kahfi adalah kisah heroik tentang mempertahankan akidah Tauhid di tengah lingkungan yang syirik. 
Mereka mengajarkan pentingnya meninggalkan lingkungan yang buruk demi menjaga keselamatan iman. Tidur selama 309 tahun adalah tanda (ayah) kebesaran Allah dan menjadi bukti nyata akan adanya hari kebangkitan.
Hikmah dan pelajaran dari kisah ini jauh lebih penting daripada mempersoalkan detail-detail yang diperselisihkan (seperti jumlah pemuda atau lokasi pasti gua). Kisah ini adalah cetak biru bagi setiap pemuda di setiap zaman untuk berani berbeda dan teguh pendirian demi memegang teguh kebenaran.</p>
        `
      },

      "fiqh": {
        title: "Fiqh Ibadah",
        content: `
          <p>Fiqh ibadah membahas tata cara pelaksanaan ibadah sesuai tuntunan syariat.</p>
        `
      },

      "Studi kasus yang membatalkan syahdatain": {
        title: "Studi kasus yang membatalkan syahdatain",
        content: `
          <p>Syariah adalah hukum Allah yang bersifat tetap dan universal.</p>
          <p>Fiqh adalah hasil ijtihad ulama dalam memahami syariah.</p>
        `
      },

      "digital": {
        title: "Urgensi Akhlak di Era Digital",
        content: `
          <p>Islam mengajarkan etika dalam bermedia sosial seperti tabayyun dan menjaga lisan.</p>
        `
      }

    };

    const judul = document.getElementById("judul");
    const isi = document.getElementById("isi");

    if (dataMateri[materi]) {
      judul.innerText = dataMateri[materi].title;
      isi.innerHTML = dataMateri[materi].content;
    } else {
      judul.innerText = "Materi tidak ditemukan";
      isi.innerText = "Silakan kembali ke halaman utama.";
    }
    
  }

  

});