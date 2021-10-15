import { food } from './food.js';
import { renderFood } from './render-food.js';

const foodList = document.getElementById('food-list');

for (let foods of food) {
    // const foodItem = document.createElement('li');
    // foodItem.classList.add('food-item');

    // const img = document.createElement('img');
    // img.src = food.img;

    // const foodSpan = document.createElement('span');
    // foodSpan.textContent = food.name;
    // foodSpan.classList.add('food-name');
    const foodItem = renderFood(food);
    foodList.append(foodItem);
}