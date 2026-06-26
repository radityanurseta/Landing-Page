document.addEventListener("DOMContentLoaded", function () {
  // NAVBAR SCROLL
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // DARK MODE
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
    });
  }

  // REVEAL EFFECT
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

  // PARTICLES JS
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

  // DETAIL PAGE
  if (window.location.pathname.includes("detail.html")) {
    const params = new URLSearchParams(window.location.search);
    const materi = params.get("materi");

    const dataMateri = {
      "hukum-islam": {
        title: "Studi kasus yang membatalkan syahdatain",
        content: `
          <p><strong>PERKARA-PERKARA YANG MEMBATALKAN SYAHDATAIN</strong></p>
          <p><strong>Imam adalah harta termahal</strong></p>
          <p>man adalah harta termahal yang dimiliki oleh seorang hamba, yang dapat menyelamatkannya pada kehidupan dunia maupun akhirat kelak. Sesuatu yang tidak dapat ditukar sekalipun dengan emas sepenuh bumi. Allah Subhanahu wa Ta'ala berfirman:
          إِنَّ الَّذِينَ كَفَرُوا وَمَاتُوا وَهُمْ كُفَّارٌ فَلَنْ يُقْبَلَ مِنْ أَحَدِهِمْ مِلْءُ الْأَرْضِ ذَهَبًا وَلَوْ افْتَدَى بِهِ أُولَئِكَ لَهُمْ عَذَابٌ أَلِيمٌ وَمَا لَهُمْ مِنْ نَاصِرِينَ
          "Sesungguhnya orang-orang yang kafir dan mati sedang mereka tetap dalam kekafirannya, maka tidaklah akan diterima dari seseorang di antara mereka emas sepenuh bumi, walaupun dia menebus diri dengan emas (yang sebanyak) itu. Bagi mereka itulah siksa yang pedih dan sekali-kali mereka tidak memperoleh penolong." (QS. Ali 'Imran: 91).
          Maka janganlah sampai harta termahal ini batal dengan sebab amalan yang dapat membatalkannya, sehingga kita merugi di akhirat.</p>

          <p><strong>Perkara-perkara yang membatalkan Syahadatain:</strong></p>
          <ul>
            <li>1. Menyekutukan Allah (syirik).
            Yaitu memalingkan ibadah yang khusus milik Allah kepada selain-Nya, misalnya berdo'a, memohon syafa'at, bertawakal, beristighatsah, bernadzar, dan menyembelih, yang ditujukan kepada selain Allah. Seperti menyembelih untuk jin atau untuk penghuni kubur, dengan keyakinan bahwa para sesembahan selain Allah itu dapat menolak bahaya atau dapat mendatangkan manfaat. Allah Subhanahu wa Ta'ala berfirman:
            إِنَّ اللَّهَ لَا يَغْفِرُ أَنْ يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَلِكَ لِمَنْ يَشَاءُ وَمَنْ يُشْرَكْ بِاللَّهِ فَقَدْ افْتَرَى إِثْمًا عَظِيمًا
            "Sesungguhnya Allah tidak akan mengampuni dosa syirik, dan Dia mengampuni segala dosa yang selain dari (syirik) itu, bagi siapa yang dikehendaki-Nya…" (QS. An-Nisa': 48).</li>
            <li>2. Tidak mengkafirkan orang-orang musyrik, atau meragukan kekafiran mereka, atau membenarkan pendapat mereka.
            Yaitu orang yang tidak mengkafirkan orang-orang kafir, baik dari kalangan Yahudi, Nasrani maupun Majusi, orang-orang musyrik, atau orang-orang mulhid (Atheis), atau selain itu dari berbagai macam kekufuran, atau seseorang meragukan kekafiran mereka, atau membenarkan pendapat mereka, maka orang tersebut telah batal keimanannya. Allah Subhanahu wa Ta'ala berfirman:
            إِنَّ الدِّينَ عِنْدَ اللَّهِ الْإِسْلَامُ
            "Sesungguhnya agama (yang diridhai) di sisi Allah hanyalah Islam…" (QS. Ali 'Imran: 19).</li>
            <li>3. Meyakini adanya petunjuk yang lebih sempurna dari Sunnah Nabi Shallallahu 'alaihi wa sallam.
            Orang yang meyakini bahwa ada petunjuk lain yang lebih sempurna dari petunjuk Nabi shallallahu 'alaihi wa sallam, atau orang meyakini bahwa ada hukum lain yang lebih baik daripada hukum Nabi shallallahu 'alaihi wa sallam, seperti orang-orang yang lebih memilih hukum-hukum Thaghut daripada hukum Nabi Shallallahu 'alaihi wa sallam, maka ia telah kafir. Allah Subhanahu wa Ta'ala berfirman:
            أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا لِقَوْمٍ يُوقِنُونَ
            "Apakah hukum Jahiliyyah yang mereka kehendaki dan (hukum) siapakah yang lebih baik daripada (hukum) Allah bagi orang-orang yang yakin?" (QS. Al-Ma'idah: 50).</li>
            <li>4. Tidak senang dan membenci hal-hal yang dibawa oleh Rasulullah Shallallahu 'alaihi wa sallam.
            Yaitu orang yang marah, murka, atau benci terhadap syariat dan ajaran yang dibawa oleh Rasulullah Shallallahu 'alaihi wa sallam, meskipun orang tersebut melaksanakannya. Allah Subhanahu wa Ta'ala berfirman:
            وَالَّذِينَ كَفَرُوا فَتَعَسًا لَهُمْ وَأَضَلَّ أَعْمَالَهُمْ (8) ذَلِكَ بِأَنَّهُمْ كَرِهُوا مَا أَنْزَلَ اللَّهُ فَأَحْبَطَ أَعْمَالَهُمْ
            "Dan orang-orang yang kafir, maka kecelakaanlah bagi mereka dan Allah menghapus amal-amal mereka. Yang demikian itu adalah karena sesungguhnya mereka benci kepada apa yang diturunkan Allah (Al-Qur'an), lalu Allah menghapus (pahala-pahala) amal-amal mereka." (QS. Muhammad: 8-9).</li>
            <li>5. Menghina Islam.
            Yaitu orang yang mengolok-olok (menghina) Allah Subhanahu wa Ta'ala dan Rasul-Nya, Al-Qur'an, agama Islam, Malaikat atau para ulama karena ilmu yang mereka miliki; atau menghina salah satu syi'ar dari syi'ar-syi'ar Islam, seperti shalat, zakat, puasa, haji, thawaf di sekeliling Ka'bah, wukuf di 'Arafah; atau menghina masjid, adzan, memelihara jenggot atau Sunnah-sunnah Nabi Shallallahu 'alaihi wa sallam lainnya, dan syi'ar-syi'ar agama Allah pada tempat-tempat yang disucikan dalam keyakinan Islam serta terdapat keberkahan padanya, maka telah batal keimanan pelakunya. Allah Subhanahu wa Ta'ala berfirman:
            قُلْ أَبِاللَّهِ وَآيَاتِهِ وَرَسُولِهِ كُنْتُمْ تَسْتَهْزِئُونَ (65) لَا تَعْتَذِرُوا قَدْ كَفَرْتُمْ بَعْدَ إِيمَانِكُمْ
            "Katakanlah: 'Apakah dengan Allah, ayat-ayat-Nya dan Rasul-Nya kamu selalu berolok-olok?' Tidak usah kamu minta maaf, karena kamu kafir sesudah beriman." (QS. At-Taubah: 65-66).</li>
          </ul>

          <p>Referensi.</p>
          <p>1. Syarh Nawaqidh Al-Islam, karya Syaikh Shalih bin Fauzan bin Abdullah Al-Fauzan.</p>
          <p>2. Syuruth La Ilaha Illallah wa Nawaqidh Al-Islam, karya Syaikh Muhammad bin Sa'id Ruslan, dan lainnya.</p>
        `
      },
      "akhlak": {
        title: "Kisah Ashabul Kahfi",
        content: `
          <p>Di antara lembaran-lembaran Al-Qur'an yang mulia, tersimpan kisah-kisah nyata yang tidak lekang oleh waktu. Bukan sekadar dongeng pengantar tidur, melainkan cerminan sejarah yang sarat akan pelajaran. Salah satu kisah paling menakjubkan yang Allah perintahkan untuk kita renungi setiap Jumat adalah kisah Ashabul Kahfi, kisah para pemuda penghuni gua.</p>
          <p>Mereka bukanlah Nabi, bukan pula Rasul. Mereka adalah sekelompok pemuda biasa seperti Anda, yang hidup di tengah-tengah masyarakat yang rusak dan penguasa yang zalim. Namun, di dalam dada mereka menyala sebuah cahaya yang tidak mau padam: cahaya tauhid. Di saat yang lain tunduk pada berhala dan kekuasaan, mereka memilih untuk berdiri tegar, bahkan jika itu berarti harus kehilangan segalanya.</p>
          <p>Artikel ini bukan sekadar penceritaan ulang. Ini adalah sebuah perjalanan untuk menyelami kisah Ashabul Kahfi lengkap, menelusuri jejak langkah mereka ayat per ayat dalam Surah Al-Kahfi. Kita akan mengungkap keteguhan iman mereka yang luar biasa, menyaksikan keajaiban perlindungan Allah yang di luar nalar manusia, dan yang terpenting, memetik hikmah-hikmah abadi yang sangat relevan untuk kita, para pemuda dan orang tua di akhir zaman.</p>
        `
      },
      "fiqh": {
        title: "Fiqh Ibadah",
        content: `<p>Fiqh ibadah membahas tata cara pelaksanaan ibadah sesuai tuntunan syariat.</p>`
      },
      "hakikat-manusia": {
        title: "Gaya Hidup Hedonisme Penyimpangan dari Nilai Kesederhanaan dalam Agama",
        content: `
          <p><strong>Pendahuluan</strong></p>
          <p>Dalam perkembangan zaman modern yang serba cepat dan penuh dengan kemajuan teknologi, gaya hidup hedonisme semakin menjadi tren di kalangan masyarakat, khususnya generasi muda. Hedonisme sendiri merupakan paham yang menganggap bahwa kesenangan dan kenikmatan material adalah tujuan utama dalam hidup.</p>
          <p><strong>Ciri-ciri Gaya Hidup Hedonisme</strong></p>
          <ol>
            <li>Konsumerisme Berlebihan</li>
            <li>Mengejar Popularitas</li>
            <li>Hidup untuk Kesenangan</li>
          </ol>
          <p><img src="hotman.png" alt="Gaya Hidup Hedonisme" style="max-width:100%;border-radius:10px;margin:20px 0;"></p>
          <p><strong>Referensi</strong></p>
          <ol><li>Al-Qur'an Al-Karim dan terjemahannya</li></ol>
        `
      },
      "adab-makan": {
        title: "Adab/Aturan Makan-Minum dalam Konteks Agama",
        content: `
          <p><strong>Pendahuluan</strong></p>
          <p>Makan dan minum adalah kebutuhan dasar manusia yang tidak dapat dihindari dalam kehidupan sehari-hari. Namun, dalam ajaran agama Islam, aktivitas ini bukanlah sekadar proses biologis untuk mengisi perut atau menghilangkan haus, melainkan juga merupakan bagian dari ibadah yang harus dilakukan dengan adab dan aturan yang telah ditetapkan oleh Allah SWT dan Rasul-Nya Muhammad ﷺ.</p>
          <p>Dengan menjalankan adab makan dan minum yang sesuai syariat, seorang muslim tidak hanya memenuhi kebutuhan jasmani, tetapi juga memperoleh pahala, keberkahan, dan menjaga kesehatan secara spiritual maupun fisik. Artikel ini akan membahas secara mendalam tentang adab-adab tersebut beserta dalil-dalilnya.</p>
          <p><strong>Definisi dan Urgensi Adab Makan-Minum</strong></p>
          <p>Adab (bahasa Arab: أدب) secara etimologis berarti pendidikan, akhlak, atau tata krama yang mulia. Sedangkan secara terminologis, adab makan minum adalah tata cara dan aturan yang ditetapkan syariat untuk mengiringi aktivitas makan dan minum sehingga menjadi perilaku yang terarah, terkontrol, dan penuh makna.</p>
          <p>Urgensi mempelajari dan mengamalkan adab makan dan minum antara lain:</p>
          <ol>
            <li><strong>Mendapatkan Pahala:</strong> Setiap aktivitas yang diniatkan karena Allah SWT, termasuk makan dan minum sesuai adab, akan dicatat sebagai amal saleh.</li>
            <li><strong>Keberkahan Rizki:</strong> Makanan yang dikonsumsi dengan mengikuti aturan Allah akan diberkahi dan bermanfaat.</li>
            <li><strong>Menjaga Kesehatan:</strong> Adab seperti tidak berlebihan, makan dengan tenang, dan tidak langsung beraktivitas berat setelah makan terbukti secara medis bermanfaat untuk pencernaan.</li>
            <li><strong>Pendidikan Akhlak:</strong> Adab makan melatih kesabaran, syukur, kesederhanaan, dan kepedulian terhadap sesama.</li>
          </ol>
          <p><strong>Adab Sebelum Makan</strong></p>
          <p>Adab-adab yang harus diperhatikan sebelum memulai makan adalah:</p>
          <ol>
            <li><strong>Mencuci Tangan (Wudu jika memungkinkan):</strong> Membersihkan tangan sebelum makan adalah sunnah dan penting untuk menjaga kebersihan. Rasulullah ﷺ biasa mencuci tangan sebelum makan. Menjaga kebersihan adalah bagian dari iman.</li>
            <li><strong>Membaca Basmalah (Bismillāh hir-Rahmānir-Rahīm):</strong> Ini adalah kewajiban dan pintu masuk keberkahan makanan. Rasulullah ﷺ bersabda: "Apabila salah seorang di antara kamu makan, hendaklah menyebut nama Allah. Jika lupa menyebutnya di awal, hendaklah mengucapkan ketika ingat: 'Bismillāhi fī awwalihi wa akhiru' (Dengan nama Allah pada awal dan akhirnya)." (HR. Tirmidzi, Abu Dawud, dan Ibnu Majah).</li>
            <li><strong>Duduk dengan Sopan dan Tenang:</strong> Dianjurkan untuk duduk bersila atau di lantai dengan sikap yang tenang dan tidak bersandar, meskipun dalam situasi modern duduk di kursi juga diperbolehkan asalkan sopan.</li>
            <li><strong>Melihat Makanan Terlebih Dahulu:</strong> Beberapa ulama menganjurkan untuk melihat makanan terlebih dahulu untuk memastikan tidak ada sesuatu yang tidak diinginkan atau untuk meningkatkan nafsu makan secara sehat.</li>
            <li><strong>Makan Bersama-sama:</strong> Makan bersama keluarga atau saudara adalah sunnah yang sangat dianjurkan karena dapat mempererat tali silaturahmi dan membagi kebahagiaan. Rasulullah ﷺ bersabda: "Makanlah bersama-sama dan janganlah makan sendirian, karena berkah ada pada kumpulan." (HR. Bukhari dan Muslim).</li>
            <li><strong>Memastikan Makanan Halal dan Thayyib:</strong> Ini adalah syarat utama agar makanan diterima oleh Allah SWT. Halal berarti diperbolehkan oleh syariat, dan thayyib berarti baik, sehat, dan tidak merugikan tubuh.</li>
          </ol>
          <p><strong>Adab Saat Makan</strong></p>
          <p>Setelah memulai makan, ada beberapa adab yang harus tetap diperhatikan:</p>
          <ol>
            <li><strong>Makan dengan Tangan Kanan:</strong> Ini adalah adab yang sangat ditekankan. Rasulullah ﷺ bersabda: "Apabila salah seorang dari kalian makan, hendaklah dia makan dengan tangan kanannya, dan apabila dia minum, hendaklah dia minum dengan tangan kanannya." (HR. Bukhari dan Muslim). Tangan kanan adalah tangan yang digunakan untuk kebaikan dan ibadah.</li>
            <li><strong>Makan dari Bagian yang Dekat:</strong> Jangan memilih-milih makanan atau mengambil dari bagian tengah piring, melainkan ambillah dari bagian yang paling dekat dengan kita. Rasulullah ﷺ bersabda: "Apabila salah seorang dari kamu makan di atas piring bersama-sama, maka janganlah dia mulai dari tengah, tetapi mulailah dari pinggiran." (HR. Tirmidzi).</li>
            <li><strong>Makan dengan Tenang dan Tidak Terburu-buru:</strong> Hindari makan dengan tergesa-gesa. Nikmati makanan dengan penuh kesadaran dan syukur. Ini juga bermanfaat untuk pencernaan yang lebih baik.</li>
            <li><strong>Tidak Banyak Bicara Saat Makan:</strong> Bicaralah secukupnya dan yang bermanfaat. Terlalu banyak bicara saat makan dapat menyebabkan tersedak atau makanan tidak dicerna dengan baik.</li>
            <li><strong>Tidak Mengeluh atau Menghina Makanan:</strong> Selalu bersyukur atas makanan yang diberikan, meskipun sederhana. Rasulullah ﷺ tidak pernah mengeluh tentang makanan. Apabila beliau menyukainya, beliau memakannya; apabila tidak, beliau meninggalkannya tanpa mengeluh. (HR. Bukhari dan Muslim).</li>
            <li><strong>Tidak Meniup Makanan atau Minuman yang Panas:</strong> Apabila makanan atau minuman terlalu panas, biarkan dingin terlebih dahulu secara alami daripada meniupnya, karena meniup dapat mengeluarkan udara kotor dari mulut ke makanan.</li>
            <li><strong>Tidak Makan dalam Keadaan Sangat Lapar atau Sangat Kenyang:</strong> Rasulullah ﷺ mengajarkan untuk membagi perut menjadi tiga bagian: sepertiga untuk makanan, sepertiga untuk minuman, dan sepertiga untuk udara. "Tidaklah anak Adam memenuhi wadah yang lebih buruk dari perutnya. Cukuplah baginya beberapa suap yang dapat menegakkan punggungnya. Jika tidak dapat dihindari, maka sepertiga untuk makanan, sepertiga untuk minuman, dan sepertiga untuk udara." (HR. Tirmidzi, Ibnu Majah, dan Ahmad).</li>
          </ol>
          <p><img src="adabmakan.png" alt="Adab Makan" style="max-width:100%;border-radius:10px;margin:20px 0;"></p>
          <p><strong>Adab Minum</strong></p>
          <p>Adab minum juga tidak kalah pentingnya dengan adab makan. Berikut adalah adab-adabnya:</p>
          <ol>
            <li><strong>Membaca Basmalah Sebelum Minum:</strong> Sama seperti sebelum makan, juga mengucapkan basmalah sebelum minum untuk mendapatkan keberkahan.</li>
            <li><strong>Minum dengan Tangan Kanan:</strong> Gunakan tangan kanan seperti halnya makan, sesuai hadis yang telah disebutkan sebelumnya.</li>
            <li><strong>Minum dengan Tiga Tegukan:</strong> Dianjurkan minum dengan tiga tegukan, tidak sekaligus habis. Rasulullah ﷺ minum dengan tiga tegukan. Beliau bersabda: "Janganlah kamu minum dengan sekali tegukan, tetapi minumlah dengan dua atau tiga tegukan." (HR. Bukhari dan Muslim). Ini juga bermanfaat untuk kesehatan ginjal.</li>
            <li><strong>Minum dalam Keadaan Duduk:</strong> Lebih baik minum dalam posisi duduk, tidak berdiri. Meskipun dalam kondisi darurat, minum berdiri diperbolehkan, tetapi duduk lebih utama. Rasulullah ﷺ melarang minum sambil berdiri. (HR. Bukhari dan Muslim).</li>
            <li><strong>Tidak Bernapas ke dalam Gelas:</strong> Jangan bernapas ke dalam gelas atau wadah minuman untuk menjaga kebersihan dan kebersihan air.</li>
            <li><strong>Minum Air Zam-Zam dengan Cara Khusus:</strong> Jika meminum air Zam-Zam, anjurkan untuk meminumnya dalam keadaan berdiri, menghadap Kabah, memulainya dengan basmalah, meminumnya dengan tiga tegukan, dan memperbanyak doa di antaranya.</li>
          </ol>
          <p><strong>Hadis-Hadis Terkait Adab Makan dan Minum</strong></p>
          <p>Selain hadis yang telah disebutkan, berikut beberapa hadis lain yang relevan:</p>
          <ol>
            <li><p class="ayat">مَنْ ذَكَرَ اسْمَ اللَّهِ عَلَى طَعَامِهِ بَرَكَ لَهُ فِيهِ، وَإِنْ نَسِيَ ذِكْرَ اللَّهِ عَلَيْهِ فَلْيَقُلْ بِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ</p>
            <p class="artinya">"Barangsiapa yang menyebut nama Allah pada makanannya, niscaya akan diberkahi padanya; dan jika lupa menyebut nama Allah padanya, hendaklah dia mengucapkan: 'Bismillahi fi awwalihi wa akhirih'." (HR. Tirmidzi, Abu Dawud, dan Ibnu Majah).</p></li>
            <li><p class="ayat">لَا يَكُلُ أَحَدُكُمْ وَهُوَ شَاهِدٌ عَلَى حَوَائِجِهِ إِلَى حَتَّى يَسْتَوِيَ</p>
            <p class="artinya">"Janganlah salah seorang di antara kamu makan sampai ia kenyang, tetapi biarkanlah ada ruang untuknya." (HR. Tirmidzi, Ibnu Majah, dan Ahmad).</p></li>
            <li><p class="ayat">مَنْ أَكَلَ بَقِيَّةَ طَعَامِهِ بَعْدَ شُكُورِهِ، كَتَبَ اللَّهُ لَهُ مَغْفِرَةً</p>
            <p class="artinya">"Barangsiapa yang memakan sisa makanannya setelah mensyukurinya, Allah akan menuliskan baginya ampunan." (HR. Tirmidzi).</p></li>
          </ol>
          <p><strong>Adab Setelah Makan</strong></p>
          <p>Setelah selesai makan, ada beberapa adab yang harus tetap kita jalankan:</p>
          <ol>
            <li><strong>Membaca Hamdalah (Alhamdulillāh):</strong> Setelah selesai makan, selalu ucapkan "Alhamdulillah" sebagai tanda syukur atas nikmat yang telah diberikan. Rasulullah ﷺ bersabda: "Barangsiapa yang makan makanan dan berkata: 'Alhamdulillah alladhi at'amani hadha, wa razaqanihi min ghayri hawlin minni wa la quwwa', niscaya akan diampuni dosanya yang telah lalu." (HR. Tirmidzi, Abu Dawud, dan Ibnu Majah). atau cukup dengan "Alhamdulillah" saja.</li>
            <li><strong>Mencuci Tangan dan Mulut:</strong> Membersihkan tangan dan mulut setelah makan adalah sunnah dan penting untuk menjaga kebersihan.</li>
            <li><strong>Membersihkan Sisa Makanan:</strong> Jangan biarkan sisa makanan berceceran. Bersihkan meja atau tempat makan. Dianjurkan juga untuk menjilati jari-jari tangan yang terkena makanan, karena Rasulullah ﷺ biasa menjilati jari-jari beliau setelah makan. Beliau bersabda: "Apabila salah seorang dari kamu makan, janganlah dia meninggalkan makanannya sampai dia menjilati jari-jarinya atau menjilatnya." (HR. Bukhari dan Muslim). Menjilati jari-jari adalah untuk mendapatkan keberkahan makanan yang tersisa.</li>
            <li><strong>Berbagi Sisa Makanan yang Layak:</strong> Jika ada sisa makanan yang masih layak, berikanlah kepada orang yang membutuhkan atau kepada hewan. Jangan membuang makanan, karena membuang makanan adalah perbuatan yang tidak disukai.</li>
            <li><strong>Tidur atau Beristirahat Sebentar (Tidak Langsung Beraktivitas Berat):</strong> Agar makanan dapat dicerna dengan baik, sebaiknya beristirahat atau tidur sebentar (tidur siang/qailulah) atau melakukan aktivitas ringan terlebih dahulu sebelum melakukan aktivitas berat.</li>
            <li><strong>Berdoa untuk Orang yang Memberi Makan:</strong> Jika kita diundang makan oleh seseorang, hendaklah berdoa untuk kebaikan orang tersebut.</li>
          </ol>
          <p><strong>Manfaat Menerapkan Adab Makan dan Minum</strong></p>
          <p>Menerapkan adab makan dan minum dalam kehidupan sehari-hari akan memberikan banyak manfaat, antara lain:</p>
          <ol>
            <li><strong>Kesehatan Jasmani yang Lebih Baik:</strong> Adab seperti tidak berlebihan, makan dengan tenang, makan dengan tangan kanan (yang lebih bersih secara alami), dan tidak langsung beraktivitas berat setelah makan terbukti secara medis bermanfaat untuk kesehatan pencernaan dan tubuh secara keseluruhan.</li>
            <li><strong>Keberkahan Rizki dan Kehidupan:</strong> Makanan yang dikonsumsi dengan adab dan syukur akan diberkahi oleh Allah SWT, sehingga manfaatnya lebih banyak dan bertahan lama.</li>
            <li><strong>Pendidikan Akhlak yang Mulia:</strong> Adab makan melatih kita untuk menjadi pribadi yang sabar, syukur, sederhana, tidak rakus, dan peduli terhadap sesama.</li>
            <li><strong>Mempererat Hubungan Keluarga dan Saudara:</strong> Makan bersama-sama dengan adab akan mempererat tali silaturahmi dan menciptakan suasana yang harmonis.</li>
            <li><strong>Pahala yang Berlipat Ganda:</strong> Setiap adab yang kita lakukan dengan niat karena Allah SWT akan dicatat sebagai amal saleh dan diberi pahala.</li>
          </ol>
          <p><strong>Kesimpulan</strong></p>
          <p>Adab makan dan minum dalam agama Islam bukanlah sekadar aturan yang memberatkan, melainkan panduan hidup yang penuh hikmah dan manfaat. Ia adalah bagian integral dari ibadah yang dapat mendatangkan berkah, pahala, dan kesejahteraan baik di dunia maupun di akhirat.</p>
          <p>Mari kita mulai menerapkan adab-adab tersebut dalam kehidupan kita sehari-hari, dimulai dari hal-hal kecil seperti membaca basmalah sebelum makan dan hamdalah setelahnya, serta selalu bersyukur atas setiap nikmat yang Allah berikan. Semoga Allah SWT selalu memberikan kita kemudahan untuk mengamalkan ajaran-Nya dan menjadikan kita hamba-Nya yang bersyukur.</p>
          <p><strong>Referensi</strong></p>
          <ol>
            <li>Al-Qur'an Al-Karim dan terjemahannya</li>
            <li>Sahih Bukhari dan Sahih Muslim</li>
            <li>Al-Ghazali, Abu Hamid Muhammad bin Muhammad. <em>Ihya Ulum ad-Din</em> (Keselamatan Jiwa), Bab Adab Makan dan Minum.</li>
            <li>As-Suyuthi, Jalaluddin. <em>Al-Jami' as-Saghir</em>.</li>
            <li>Al-Mawardi, Abu al-Hasan. <em>Adab al-Dunya wa al-Din</em>.</li>
            <li>Al-Baihaqi. <em>Shu'ab al-Iman</em>.</li>
            <li>Ibn Qudamah. <em>Al-Mughni</em>.</li>
          </ol>
        `
      },
      "harmoni-digital": {
        title: "Menjaga Harmoni: Strategi dan Sikap Menghadapi Pergeseran Moral serta Nilai Agama di Era Digital",
        content: `
          <p><strong>1. Pendahuluan</strong></p>
          <p>Masyarakat kontemporer tengah mengalami transformasi kultural dan struktural yang sangat masif akibat disrupsi teknologi informasi. Di satu sisi, digitalisasi membuka ruang bagi demokratisasi informasi; di sisi lain, fenomena ini membawa tantangan serius terhadap eksistensi nilai moral tradisi dan norma agama. Seringkali kita menjumpai kelompok atau individu di ruang publik maupun maya yang perilakunya secara benderang bertentangan dengan pakem moralitas dan ajaran spiritual yang dianut oleh mayoritas masyarakat Indonesia. Menghadapi realitas keberagaman dan degradasi ini, diperlukan sebuah formula sikap yang tidak hanya reaktif-menghakimi, melainkan solutif, edukatif, dan berbasis pada nilai-nilai kemanusiaan universal.</p>

          <p><strong>2. Tinjauan Filosofis dan Teologis</strong></p>
          <p>Dalam perspektif sosiologi moral, norma sosial berfungsi sebagai integrator masyarakat agar terhindar dari kondisi anomie (situasi tanpa arah dan norma). Dari sudut pandang teologis (khususnya nilai luhur Pendidikan Agama), menyikapi penyimpangan tidak boleh dilakukan dengan cara yang melanggar esensi agama itu sendiri. Agama diturunkan sebagai rahmat (rahmatan lil 'alamin), sehingga metodologi perbaikan moral harus mengedepankan pendekatan yang persuasif (dakwah bil-hikmah) serta diskusi yang bersandar pada argumentasi logis-humanis (mau'idzah hasanah), bukan dengan kekerasan struktural maupun verbal.</p>

          <p><strong>3. Strategi Sikap Menghadapi Penyimpangan Moral</strong></p>
          <p>Untuk menyikapi fenomena masyarakat yang tidak selaras dengan nilai moral dan agama, beberapa langkah strategis yang dapat diambil antara lain:</p>
          <ul>
            <li><strong>Edukasi dan Literasi Digital:</strong> Memperkuat fondasi berpikir kritis agar masyarakat mampu memfilter budaya asing yang destruktif tanpa kehilangan identitas religiusnya.</li>
            <li><strong>Pendekatan Persuasif (Humanis):</strong> Merangkul pelaku penyimpangan melalui dialog konstruktif, bukan melakukan pengucilan (social shaming) yang justru berpotensi membuat mereka semakin resisten.</li>
            <li><strong>Optimalisasi Fungsi Komunitas Komunal:</strong> Menghidupkan kembali ruang-ruang diskusi positif di tingkat keluarga, instansi pendidikan, hingga lingkungan kerja untuk menggaungkan kembali pentingnya etika profesi dan sosial.</li>
            <li><strong>Penegakan Aturan (Law Enforcement) yang Adil:</strong> Jika penyimpangan tersebut telah melanggar hukum positif (seperti perjudian atau penipuan), maka penyelesaian wajib diserahkan kepada koridor hukum yang berlaku demi menjaga ketertiban umum.</li>
          </ul>

          <p><strong>4. Studi Kasus: Maraknya Normalisasi Judi Online dan Pinjaman Online Ilegal di Lingkungan Masyarakat Digital</strong></p>
          <p><strong>Opini Pribadi Mengenai Studi Kasus:</strong></p>
          <p>Fenomena maraknya judi online (judol) dan pinjaman online ilegal merupakan salah satu bentuk nyata dari degradasi moral dan pelanggaran nilai agama yang sangat masif di era siber ini. Perilaku ini tidak hanya merusak tatanan ekonomi individu, tetapi juga menghancurkan ketahanan keluarga dan memicu kriminalitas turunan (seperti pencurian dan penipuan).</p>
          <p>Dari sudut pandang nilai norma, aktivitas ini mencerminkan hilangnya budaya kerja keras dan jujur, digantikan oleh mentalitas instan (shortcut mentality) untuk mendapatkan kekayaan secara cepat tanpa usaha yang sah. Dari segi agama, seluruh ajaran agama secara tegas melarang perjudian karena sifatnya yang spekulatif, eksploitatif, dan merusak akal sehat manusia.</p>
          <p>Sebagai mahasiswa Teknik Informatika, saya memandang bahwa pendekatan teknis seperti pemblokiran situs oleh pemerintah (cybersecurity barrier) tidak akan pernah cukup jika tidak dibarengi dengan literasi finansial dan penguatan mental spiritual di tingkat akar rumput. Masyarakat perlu disadarkan kembali bahwa teknologi harus diadopsi untuk meningkatkan produktivitas dan kesejahteraan, bukan sebagai alat pemuas keserakahan yang melanggar batasan moral dan syariat agama. Penyelesaian masalah ini membutuhkan sinergi kuat antara penegak hukum, akademisi IT, tokoh agama, dan komunitas lokal.</p>

          <p><strong>5. Kesimpulan</strong></p>
          <p>Menyikapi masyarakat yang berada di luar koridor moral dan agama membutuhkan kedewasaan berpikir. Tindakan menghakimi secara sepihak hanya akan memperlebar polarisasi sosial. Sebaliknya, kombinasi antara ketegasan hukum, kelembutan pendekatan personal, serta penguatan edukasi nilai adalah kunci utama dalam merajut kembali keharmonisan sosial di tengah derasnya arus modernisasi.</p>

          <p><strong>Referensi:</strong></p>
          <ol>
            <li>Azra, A. (2019). <em>Pendidikan Islam: Tradisi dan Modernisasi di Tengah Tantangan Milenium Ketiga</em>. Jakarta: Kencana.</li>
            <li>Turner, B. S. (2012). <em>Religi dan Teori Sosial</em>. Yogyakarta: Pustaka Pelajar.</li>
            <li>Magnis-Suseno, F. (2001). <em>Etika Sosial: Buku Panduan Mahasiswa</em>. Jakarta: Gramedia Pustaka Utama.</li>
          </ol>
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
