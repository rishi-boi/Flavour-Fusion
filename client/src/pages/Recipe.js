import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Steps from "../components/Steps";
import Similar from "../components/Similar";
import { getRecipe, clear } from "../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

const Recipe = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.recipe);

  const id = searchParams.get("id");
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(clear());
    dispatch(getRecipe(id));
    console.log(data);
  }, [id]);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const summary =
    !isEmpty(data) || data.status === "failure" ? data.summary : null;

  const instructions =
    !isEmpty(data) || data.status === "failure" ? data.instructions : null;

  return (
    <>
      {isEmpty(data) ? (
        <Loader></Loader>
      ) : data.status === "failure" ? (
        "Api key exhausted"
      ) : (
        <div className="py-5 px-32">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {data.title}
                </h1>
                <p
                  className="mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: summary }}
                ></p>
                <p className="mb-4 text-secondary">
                  Preparation Time : {data.readyInMinutes}
                </p>
                <div className="flex justify-center">
                  <a
                    href={data.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Official Soure
                  </a>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover rounded"
                  alt={data.title}
                  src={data.image}
                />
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font flex flex-col justify-center items-center w-full px-5">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Instructions
            </h1>
            <p
              className="mb-4 leading-relaxed text-center"
              dangerouslySetInnerHTML={{ __html: instructions }}
            ></p>
            <p className="text-center bg-red-100 p-4 rounded-md">
              {data?.winePairing?.pairingText
                ? data.winePairing.pairingText
                : "No Data"}
            </p>
          </section>
          <Steps
            steps={
              data?.analyzedInstructions[0]?.steps &&
              data?.analyzedInstructions[0]?.steps
            }
          ></Steps>
          <Similar id={id}></Similar>
        </div>
      )}
    </>
  );
};

export default Recipe;
