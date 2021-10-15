export function renderFood(food) {
    const foodItem = document.createElement('li');
    foodItem.classList.add('food-item');

    const foodImg = document.createElement('img');
    foodImg.src = food.img ;

    const foodSpan = document.createElement('span');
    foodSpan.textContent = food.name;
    foodSpan.classList.add('food-name');

    foodItem.append(foodImg, foodSpan);
    return renderFood;
}
