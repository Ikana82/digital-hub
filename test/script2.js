const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => btn.classList.remove("active"));

    contents.forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");

    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
  const keyword = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();

    card.style.display = title.includes(keyword) ? "block" : "none";
  });
});
