export const getMealByName = async (entryValue) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${entryValue}`)
        const meal = await res.json();
        return meal.meals;
    } catch(error) {
        console.log(`Failed to fetch data: ${error}`)
    }
}
