import "./AddForm.css";
import { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
// import { Link } from "react-router";
import { useNavigate } from "react-router-dom";


function AddForm() {

        const navigate = useNavigate();

  const [data, setData] = useState({
    category: "",
    price: "",
    quantity: "",
  });

  async function SubmitForm(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/products", data);
      console.log("Server response:", response.data);

      // Reset form fields after submit
      setData({
        category: "",
        price: "",
        quantity: "",
      });

       toast.success("Product added Successfully");
              navigate("/allcard");  

    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Product Failed")
    }
  }

  return (
    <div className="add-form-main">
      <div className="form-container">
        <form className="simple-form" onSubmit={SubmitForm}>
          <h2 className="login-title">Add Product</h2>

          <label htmlFor="category">Select Product Category</label>
          <select
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="shirt">Shirt</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
            <option value="watch">Watch</option>
            <option value="jackets">Jackets</option>
          </select>

          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={data.quantity}
            onChange={(e) => setData({ ...data, quantity: e.target.value })}
            placeholder="Enter quantity"
            required
          />

          <label htmlFor="price">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
            placeholder="Enter price"
            required
          />
<button type="submit">Submit</button>
          {/* <Link to="/allcard"><button type="submit">Submit</button></Link> */}
        </form>
      </div>
    </div>
  );
}

export default AddForm;
