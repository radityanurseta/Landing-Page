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
        title: "Akhlak dalam Islam",
        content: `
          <p>Akhlak adalah perilaku yang mencerminkan iman seseorang.</p>
          <p>Islam mengajarkan akhlak seperti jujur, amanah, dan rendah hati.</p>
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