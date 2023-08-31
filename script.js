const handleTabContainer = async () => {
  const tabContainer = document.getElementById("tab-container");

  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();

  data.data.forEach((category) => {
    const tab = `<a class="tab text-base font-medium bg-gray-200 rounded">${category.category}</a>`;
    const div = document.createElement("div");
    div.innerHTML = tab;
    tabContainer.appendChild(div);
  });

  console.log(data.data);
};
handleTabContainer();
