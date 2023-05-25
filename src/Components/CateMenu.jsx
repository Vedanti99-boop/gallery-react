import React from "react";

const CateMenu = ({ filterItem, catItems }) => {
  return (
    <>
      <div className="container d-flex justify-content-around">
        {catItems.map((curElem, index) => {
          return (
            <button
              type="button"
              className="btn btn-warning"
              key={index}
              onClick={() => {
                filterItem(curElem);
              }}
            >
              {curElem}
            </button>
          );
        })}
        {/* <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            filterItem("breakfast");
          }}
        >
          Breakfast
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            filterItem("lunch");
          }}
        >
          Lunch
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            filterItem("evening");
          }}
        >
          Evening
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            filterItem("dinner");
          }}
        >
          Dinner
        </button> */}
      </div>
    </>
  );
};

export default CateMenu;
