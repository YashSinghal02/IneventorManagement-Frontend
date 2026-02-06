import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    category: "",
    price: "",
    quantity: "",
  });

  // Fetch product by ID
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);

        console.log("Server response:", response.data);

        setData({
          category: response.data.product.category,
          price: response.data.product.price,
          quantity: response.data.product.quantity,
        });
      } catch (err) {
        console.error("Error fetching product:", err);
        toast.error("Failed to load product");
      }
    };

    fetchSingleProduct();
  }, []);

  // Update product by fr
  async function SubmitForm(e) {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, data);

      toast.success("Product Updated Successfully");
      navigate("/allcard");
    } catch (err) {
      console.error("Error updating product:", err);
      toast.error("Update Failed");
    }
  }

  return (
    <div className="add-form-main">
      <div className="form-container">
        <form className="simple-form" onSubmit={SubmitForm}>
          <h2 className="login-title">Update Product</h2>

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

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditCard;
