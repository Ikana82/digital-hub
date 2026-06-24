document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // 1. Matikan status active di semua tombol navigasi
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // 2. Sembunyikan semua konten kategori
      tabContents.forEach((content) => content.classList.remove("active"));

      // 3. Aktifkan tombol yang sedang diklik
      button.classList.add("active");
      // 4. Tampilkan konten kategori yang sesuai
      document.getElementById(targetTab).classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // --- KODE LAMA UNTUK AKTIVASI TAB (Tetap Pertahankan) ---
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });

  // --- KODE BARU UNTUK TOMBOL NEXT (PANAH) ---
  const tabsNav = document.getElementById("tabsNav");
  const nextBtn = document.getElementById("tabNextBtn");

  if (nextBtn && tabsNav) {
    nextBtn.addEventListener("click", () => {
      // Menggeser ke kanan sejauh 150px
      tabsNav.scrollLeft += 150;
    });

    // Opsional: Menyembunyikan tombol secara otomatis jika scroll sudah mentok di kanan
    tabsNav.addEventListener("scroll", () => {
      const maxScrollLeft = tabsNav.scrollWidth - tabsNav.clientWidth;
      if (tabsNav.scrollLeft >= maxScrollLeft - 5) {
        nextBtn.style.opacity = "0";
        nextBtn.style.pointerEvents = "none";
      } else {
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "auto";
      }
    });
  }
});
