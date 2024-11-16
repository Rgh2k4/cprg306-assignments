"use client"
import React, { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient)  {
        try{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            console.log(data);
            return data;}
            catch (error) {
            console.error(error);
        }
};

const Meal = ({ strMeal }) => {
    return(
        <li>
            <div className="flex flex-col gap-4">
                <h3>{strMeal}</h3>
            </div>
        </li>
    );
};

const Ingredient = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);


    const loadMealIdeas = async () => {
        if (!ingredient) return;
        const data = await fetchMealIdeas(ingredient);
        setMeals(data.meals || []);
        if (data.meals) {
            setMeals(data.meals);
        }
        else {
            setMeals([]);
        }
    };
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="container max-w-screen-sm bg-slate-600 border border-gray-950 rounded">
            <h2 className="pl-3">{ingredient}</h2>
            <ul>
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <Meal key={meal.idMeal} {...meal} />
                    ))
                ) : (
                    <p>No meals found for {ingredient}</p>
                )}
            </ul>
        </div>
    );
};

const MealIdeas = ({ ingredient }) => {
    if (ingredient) {
        return (
            <div className="flex flex-col gap-4 ">
                <h2>Meal Ideas for: {ingredient}</h2>
                <Ingredient ingredient={ingredient} />
            </div>
        )
    }
    else {
        return null;
    };
};

export default MealIdeas;