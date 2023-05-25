import React from "react";

const MenuItems = ({ items }) => {
  // Divide items into chunks of three
  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }
  return (
    <div>
      {" "}
      {rows.map((row, index) => (
        <div className="row" key={index}>
          <div className="col">
            <div className="d-flex justify-content-evenly mt-5">
              {row.map((item) => (
                <div
                  key={item.id}
                  className="card mb-3 shadow p-3 mb-5 bg-body-tertiary rounded"
                  style={{ maxWidth: "400px" }}
                >
                  <div className="row g-0">
                    <div className="col-3">
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt={item.name}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
