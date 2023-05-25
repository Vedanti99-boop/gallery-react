// import React, { useState } from "react";
// import "./GalleryR.css";
// import Menu from "./Menu";

// const GalleryR = () => {
//   const [items, setItems] = useState(Menu);

//   return (
//     <>
//       <h3 className="d-flex justify-content-center mt-3">
//         Order Your Favourite Dish
//       </h3>
//       <hr />
//       <div className="container d-flex justify-content-around">
//         <button type="button" className="btn btn-warning">
//           Breakfast
//         </button>
//         <button type="button" className="btn btn-warning">
//           Lunch
//         </button>
//         <button type="button" className="btn btn-warning">
//           Evening
//         </button>
//         <button type="button" className="btn btn-warning">
//           Dinner
//         </button>
//         <button type="button" className="btn btn-warning">
//           All
//         </button>
//       </div>

//       <div className="row">
//         <div className="col">
//           <div className="d-flex justify-content-evenly mt-5">
//             {items.map((item) => {
//               return (
//                 <div
//                   key={item.id}
//                   className="card mb-3 shadow p-3 mb-5 bg-body-tertiary rounded"
//                   style={{ maxWidth: "400px" }}
//                 >
//                   <div className="row g-0">
//                     <div className="col-3">
//                       <img
//                         src={item.image}
//                         className="img-fluid rounded-start"
//                         alt={item.name}
//                       />
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-body">
//                         <h5 className="card-title">{item.name}</h5>
//                         <p className="card-text">{item.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GalleryR;

import React, { useState } from "react";
import "./GalleryR.css";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import CateMenu from "./CateMenu";

const allCatValues = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "all",
];

const GalleryR = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);

  const filterItem = (cateItem) => {
    if (cateItem === "all") {
      return setItems(Menu);
    }
    const updatedItems = Menu.filter((curEle) => {
      return curEle.category === cateItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <h3 className="d-flex justify-content-center mt-3">
        Order Your Favourite Dish
      </h3>
      <hr />

      {/* our category list will come from here */}

      <CateMenu filterItem={filterItem} catItems={catItems} />

      {/* our menu list will come from here */}
      <MenuItems items={items} />
    </>
  );
};

export default GalleryR;
