const handleTabContainer = async () => {
  const tabContainer = document.getElementById("tab-container");

  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  console.log(data);
};
