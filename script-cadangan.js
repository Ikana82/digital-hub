document.addEventListener("DOMContentLoaded", function () {
  // Mengambil semua tombol tab
  const tabButtons = document.querySelectorAll(".tab-btn");

  // Menambahkan fungsi klik pada setiap tombol tab
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Ambil id target tab yang disimpan pada atribut data-tab
      const targetTabId = this.getAttribute("data-tab");

      // 1. Sembunyikan semua konten tab
      const tabContents = document.querySelectorAll(".tab-content");
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // 2. Hapus status 'active' dari semua tombol tab
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // 3. Tampilkan konten tab yang aktif sesuai target id
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add("active");
      }

      // 4. Tambahkan status 'active' pada tombol yang diklik
      this.classList.add("active");
    });
  });
});
