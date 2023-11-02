const foodData = require('./food.json');
function listAllFood(){
    return foodData;
}
function listVegetables() {
    return foodData.filter((food) => food.category === 'Vegetable');
}
function listFruits() {
    return foodData.filter((food) => food.category === 'Fruit');
}
function listProtien() {
    return foodData.filter((food) => food.category === 'Protein');
}
function listNuts() {
    return foodData.filter((food) => food.category === 'Nuts');
}
function listGrain() {
    return foodData.filter((food) => food.category === 'Grain');
}
function listDairy() {
    return foodData.filter((food) => food.category === 'Dairy');
}
function listAboveCalorie(calorie){
    return foodData.filter((food) => food.calorie > calorie);
}
function listBelowCalorie(calorie){
    return foodData.filter((food) => food.calorie < calorie);
}
function highestProtienLowest(){
    return foodData.sort((a, b) => b.protiens - a.protiens);
}
function lowestProtienHighest(){
    return foodData.sort((a, b) => a.cab - b.cab);
}