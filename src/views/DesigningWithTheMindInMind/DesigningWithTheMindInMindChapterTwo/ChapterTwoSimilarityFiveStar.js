import React from "react";
import GenerateStar from "../../../components/GenerateStar";
import "./ChapterTwoSimilarityFiveStar.css";
import shuihu from "../../../assets/shuihu.json";

function ChapterTwoSimilarityFiveStar({ defaultState }) {
  return (
    <section>
      <GenerateStar defaultState={shuihu} />
    </section>
  );
}

export default ChapterTwoSimilarityFiveStar;

/* <section>
      <div class="rate">
        
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text">
          5 stars
        </label>
        <input
          type="radio"
          id="star4"
          name="rat                                                                                                                                                                                                                                  e"
          value="4"
        />
        <label for="star4" title="text">
          4 stars e d
        </label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">
          3 stars
        </label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">
          2 stars
        </label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">
          1 star
        </label>
      </div>
    </section> */
