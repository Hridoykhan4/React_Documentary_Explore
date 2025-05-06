import { useState } from "react";
import { Outlet } from "react-router-dom";
import FilterableProductTable from "../components/FilterableProductTable";
import { sculptureList } from "../components/sculptureList";

const Root = () => {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

 



  return (
    <div className="p-10 flex flex-col space-y-4">
      <h2>Hi I am ROot</h2>
      <Outlet></Outlet>
      {/* <FilterableProductTable products={PRODUCTS}></FilterableProductTable> */}

      <label>
        Name:
        <input name="name" value={person.name} 
        onChange={handleChange}
         />
      </label>
      <label>
        Title:
        <input name="title" value={person.artwork.title}
         onChange={handleChange} 
         />
      </label>
      <label>
        City:
        <input name="city" value={person.artwork.city} 
        onChange={handleChange} 
        />
      </label>
      <label>
        Image:
        <input name="image" value={person.artwork.image} 
        // onChange={handleImageChange} 
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} className="w-32" alt={person.artwork.title} />
    </div>
  );
};

export default Root;
