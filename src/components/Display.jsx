import React from "react";

const Display = () => {
  return (
    <div className="display">
        <div className="likes">
            <h3>LIKES</h3>
            <div class="like-box"></div>
        </div>

        <div className="neutral">
            <h3>NEUTRAL</h3>
            <div class="neutral-box"></div>
        </div>

        <div className="dislikes">
            <h3>DISLIKES</h3>
            <div class="dislike-box"></div>
        </div>
    </div>
  )
}

export default Display;