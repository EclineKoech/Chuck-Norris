import React from "react";

const List = (props) => {
  const { categories } = props;
  if (!categories || categories.length === 0)
    return <p>No categories found,sorry</p>;
  return (
    <div className="container">
      <div className="categories">
        <h2>Chuck Norris Category Jokes</h2>
        {categories.map((category) => {
          return (
            <div className="card">
              <div className="card-body">
                <span className="cat">{category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default List;
