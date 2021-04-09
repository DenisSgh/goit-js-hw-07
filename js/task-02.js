const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const refs = {
  ingredientsRef: document.querySelector('#ingredients'),
};

const createIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const addIngredient = document.createElement('li');
    addIngredient.textContent = ingredient;

    return addIngredient;
  });
};

const addIngredients = createIngredients(ingredients);

refs.ingredientsRef.append(...addIngredients);
