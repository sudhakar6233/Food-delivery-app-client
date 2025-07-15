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
    Axios.post('http://localhost:3001/insert', { foodName, description })
      .then(() => {
        fetchData();
        setFoodName("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  const fetchData = () => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setFoodList(response.data);
    });
  };

  const updateFood = (id) => {
    Axios.put('http://localhost:3001/update', { id, newFoodName })
      .then(() => {
        fetchData();
        setNewFoodName("");
      });
  };

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => fetchData());
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
