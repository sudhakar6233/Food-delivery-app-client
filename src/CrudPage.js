import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { motion } from "framer-motion";
import './CrudPage.css';

function CrudPage() {
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [newFoodName, setNewFoodName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const addFoodData = () => {
    Axios.post('https://food-delivery-app-server-1.onrender.com/insert', { foodName, description })
      .then(() => {
        fetchData();
        setFoodName("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  const fetchData = () => {
    Axios.get('https://food-delivery-app-server-1.onrender.com/read').then((response) => {
      setFoodList(response.data);
      console.log(response.data);
    });
  };

  const updateFood = (id) => {
    Axios.put('https://food-delivery-app-server-1.onrender.com/update', { id, newFoodName })
      .then(() => {
        fetchData();
        setNewFoodName("");
      });
  };

  const deleteFood = (id) => {
    Axios.delete(`https://food-delivery-app-server-1.onrender.com/delete/${id}`).then(() => fetchData());
  };

  return (
    <>
      {/* ✅ Full-width hero section */}
      <section className="hero-full">
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Great Food Offers Near You</h1>
          <p>Order your favorite meals online & enjoy exclusive discounts!</p>
        </motion.div>
      </section>

      {/* ✅ CRUD Section */}
      <div className="crud-container">
        <h2>🍽️ Manage Foods</h2>
        <div className="crud-form">
          <input
            type="text"
            placeholder="Food Name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <textarea
            placeholder="Description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button onClick={addFoodData}>Add Food</button>
        </div>

        <table className="crud-table">
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((val) => (
              <tr key={val._id}>
                <td>{val.foodName}</td>
                <td>{val.description}</td>
                <td>
                  <input
                    type="text"
                    placeholder="New Name"
                    onChange={(e) => setNewFoodName(e.target.value)}
                  />
                  <button onClick={() => updateFood(val._id)}>Update</button>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => deleteFood(val._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CrudPage;
