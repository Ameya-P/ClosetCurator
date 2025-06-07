import React from "react";

const Input = () => {
  return (
    <form>
        <div className="img-box">
            <img src="wardrobe.png"></img>
            <input type="file" id="imageFile" accept="image/*"/>
        </div>
        <textarea placeholder="Enter a clothing feature you like"></textarea>
        <button id="submit">SUBMIT</button>
    </form>
  )
}

export default Input;