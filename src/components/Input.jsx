import React from "react";
import axious from "axios";

const Input = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    
    try {
      const response = await axios.post(
        'https://vrnvi7vx72.execute-api.us-west-2.amazonaws.com/development/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      setResult(response.data);
    } catch (error) {
      console.error('API Error:', error);
      // Handle error state
    } finally {
      setLoading(false);
    }
  };

  return (
    <form>
        <div className="img-box">
            <img src="wardrobe.png"></img>
            <input type="file" id="imageFile" accept="image/*"/>
        </div>
        <textarea placeholder="Enter a clothing feature you like"></textarea>
        <button id="submit" onClick={() => handleSubmit({ message: 'Hello API!' })}
        disabled={loading}>SUBMIT</button>

        <div>{result && <div>Result: {JSON.stringify(result)}</div>}</div>
    </form>
  )
}

export default Input;