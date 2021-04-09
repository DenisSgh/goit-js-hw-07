const categoriesRef = document.querySelectorAll('.item');

const categoriesNumber = categories =>
  console.log(`В списке ${categories.length} категории.`);

const titleRef = categories => {
  categories.forEach(category => {
    const categoryTitleRef = category.querySelector('h2');
    const categoryQuantityElementsRef = category.querySelectorAll('ul li');
    console.log('Категория: ', categoryTitleRef.textContent);
    console.log('Количество элементов: ', categoryQuantityElementsRef.length);
  });
};

categoriesNumber(categoriesRef);
titleRef(categoriesRef);
