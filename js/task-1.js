const categoriesList = document.querySelector("#categories");
const itemList = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemList.length}`);
itemList.forEach(item => {
    const categoryTitle = item.querySelector("h2").textContent;
    const categoryItems = item.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
})
   
