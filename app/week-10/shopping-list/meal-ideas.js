"use client";

import { useEffect, useState } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    };
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-white font-bold text-xl">Meal Ideas</h2>
      {meals.length > 0 ? (    
        <>
        <p className="text-white">Here are some meal ideas using {ingredient}:</p>
        <ul>
            {meals.map(meal => (
                <li key={meal.idMeal} className="flex items-center m-1 space-x-1 p-1 bg-slate-900 text-white">
                <p className="w-96 h-10 ">{meal.strMeal}</p>
                </li>
            ))}
        </ul>
        </>
        ) : (
        <p className="text-white">No meal ideas found for {ingredient}</p>
      )}        
    </div>
  );
};

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || []; 
}

export default MealIdeas;
