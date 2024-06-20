import React from "react";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import Adder from "./components/Adder";
import ProductCard from "./components/ProductCard";

const tasks = [
  { task: "Подъём в 05:00", isDone: false },
  { task: "Завтрак", isDone: true },
  { task: "Тренировка", isDone: true },
  { task: "Учёба", isDone: true },
];

const App = () => {
  return (
    <>
      <UserProfile
        name="Jonathan Jones"
        age={36}
        location="Rochester, New York"
      />
      <TodoList tasks={tasks} />
      <Adder num1={5} num2={5} />
      <ProductCard
        title="Iphone 2G"
        price={300}
        description="Доступный смартфон, выпущенный американским брендом Apple"
        imgSrc="https://images.thevoicemag.ru/upload/img_cache/4a2/4a26d324629518962c2e3ff5559ff02e_cropped_666x444.webp"
      />
    </>
  );
};

export default App;
