import React from 'react';

const ProductFilter = () => {
  return (
    <aside className="product-filter2">
      <h2>篩選</h2>
      <form>
        <fieldset>
          <legend>價格區間</legend>
          <label>
            <input type="checkbox" name="price" value="0-500" /> $0 - $500
          </label>
          <label>
            <input type="checkbox" name="price" value="501-1000" /> $501 - $1000
          </label>
          <label>
            <input type="checkbox" name="price" value="1001+" /> $1001+
          </label>
        </fieldset>
        <fieldset>
          <legend>產品種類</legend>
          <label>
            <input type="checkbox" name="type" value="tent" /> 帳篷與睡眠設備
          </label>
          <label>
            <input type="checkbox" name="type" value="sleeping-bag" /> 戶外用品
          </label>
          <label>
            <input type="checkbox" name="type" value="cookware" /> 其他
          </label>
        </fieldset>
        <button type="submit" className="filter-apply-button">套用</button>
      </form>
    </aside>
  );
};

export default ProductFilter;