import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../constants/config.json";

const Similar = ({ id }) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {

    const res = async () => {
      let data = await fetch(
        `${config.host}recipes/${id}/similar?apiKey=${config.api}`,
        {
          headers: { "content-type": "application/json" },
        }
      );
      data = await data.json();
      setSimilar(data)
    };
    res();
  }, [id]);

  return (
    <section className="text-gray-600 body-font">
      <h1 className="title-font text-3xl mb-8 font-medium text-center text-gray-900">
        Similar Recipes
      </h1>
      <div href="/" className="flex flex-wrap -m-4">
      {similar.map(recipe => (
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="tracking-widest text-primary text-xs font-medium title-font">
              Preparation Time : {recipe.readyInMinutes}
            </h3>
            <Link to={`?id=${recipe.id}`} className="text-lg text-gray-900 font-medium title-font cursor-pointer hover:text-primary transition">
              {recipe.title}
            </Link>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Similar;
