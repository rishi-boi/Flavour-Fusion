import React from "react";
import { ChefHat } from "lucide-react";
import { Check } from "lucide-react";

const Steps = ({steps}) => {

  return (
    <section className="text-gray-600 body-font">
        
      <div className="container px-5 py-24 mx-auto flex flex-col justify-center items-center flex-wrap">
      <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-12">
            Steps
          </h1>
        {steps ?
          steps.map((step, index) => (
            <div key={index} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-input pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm">
                {step.number}
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-primary rounded-full inline-flex items-center justify-center">
                  {index + 1 === steps.length ? <Check size={40} /> : <ChefHat size={40} />}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    {step.step}
                  </h2>
                  <div className="flex">
                    <div className="mr-4">
                      <p className="leading-relaxed text-primary">Ingredients</p>
                      <ul className="list-disc px-4">
                        {step.ingredients.length !== 0 ? step.ingredients.map((ingredient, index) => (
                            <li key={index}>
                            <a href="/">{ingredient.name}</a>
                          </li>
                        )) : 'No ingredients needed'}
                      </ul>
                    </div>
                    <div className="mr-4">
                      <p className="leading-relaxed text-primary">Equipment</p>
                      <ul className="list-disc px-4">
                        {step.equipment.length !== 0 ? step.equipment.map((equip, index) => (
                            <li key={index}>
                            <a href="/">{equip.name}</a>
                          </li>
                        )) : 'No equipment needed'}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )) : 'No Steps'}
      </div>
    </section>
  );
};

export default Steps;
