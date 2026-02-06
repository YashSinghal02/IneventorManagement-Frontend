import { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router";

function Card() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); 

  async function AllCards() {
    try {
      setLoading(true); 
      const response = await axios.get("http://localhost:5000/api/products");
      setCards(response.data.data);
        console.log("Server response:", response.data.data);
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    AllCards();
  }, []);


  async function deleteCard(id) {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      toast.success("Card Deleted Successfully");
      AllCards(); // refresh
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Card Delete Failed");
    }
  }

  return (
    <div>
      {loading ? (
        <h2 style={{ textAlign: "center", marginTop: "20px",fontSize:"50px" }}>
          Loading...
        </h2>
      ) : (
        <div className="card1-main">
          {cards.map((x, index) => {
            return (
              <div key={index} className="card1">
                <h2>Category : {x.category}</h2>

                <div className="card1-info">
                  <div className="card1-info-label">Quantity</div>
                  <div className="card1-info-value">{x.quantity}</div>
                </div>

                <div className="card1-info">
                  <div className="card1-info-label">Price</div>
                  <div className="card1-info-value">₹{x.price}</div>
                </div>

                <div className="edit-delete-btns">
                  <Link to={`/editcard/${x._id}`}>
                    <button className="edit-btn">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => deleteCard(x._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Card;
