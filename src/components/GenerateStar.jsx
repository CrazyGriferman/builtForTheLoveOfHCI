import React from "react";
import "./GenerateStar.css";

function GenerateStar({ defaultState }) {
  return (
    <section>
      <div class="rate">
        {defaultState.map((item) => {
          return (
            <>
              <label for={item.star} title={item.name}>
                {item.nickName}
              </label>
              <input
                type="radio"
                id={item.star}
                name={item.name}
                value={item.nickName}
              />
            </>
          );
        })}
      </div>
    </section>
  );
}

export default GenerateStar;
