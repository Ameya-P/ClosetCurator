import React from "react";

const Display = () => {
  return (
    <div className="display">
        <div className="likes">
            <h3>LIKES</h3>
            <div className="like-box"></div>
        </div>

        <div className="neutral">
            <h3>NEUTRAL</h3>
            <div className="neutral-box"></div>
        </div>

        <div className="dislikes">
            <h3>DISLIKES</h3>
            <div className="dislike-box"></div>
        </div>
    </div>
  )
}

export default Display;