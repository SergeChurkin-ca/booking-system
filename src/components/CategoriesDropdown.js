import React from "react";

function Categories({ categories, filterItemsCat, filterItemsDate }) {
  const current = new Date();

  return (
    <div className="categories-container wrapper">
      <div className="btn-container">
        <form className="calendar">
          <label>select tour date</label>
          <input
            type="date"
            onChange={(e) => filterItemsDate(e.target.value)}
            defaultValue={`${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`}
          />
        </form>
      </div>

      <div className="options-container">
        <span>select tour category</span>
        <select onChange={(e) => filterItemsCat(e.target.value)}>
          <option value="">--Please choose category--</option>
          <option value="all">--CHOOSE ALL--</option>
          <option value="land">land</option>
          <option value="water">water</option>
          <option value="culinary">culinary</option>
          <option value="air">air</option>
          <option value="historical">historical</option>
        </select>
      </div>
    </div>
  );
}

export default Categories;
