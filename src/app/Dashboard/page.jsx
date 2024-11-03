// Dashboard.jsx
'use client'
import React, { useEffect, useState } from "react";
import UpdateModal from "@/app/Components/UpdateModal";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Store selected item for update
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const inventory = data.inventory || [];
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/registiration");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) {
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/registiration/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      setData({inventory: data.inventory.filter(item => item._id !== id)});
      alert("Data Deleted Successfully");
      console.log("Item Deleted")
      router.refresh();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdate = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error loading data: {error.message}</p>;

  const items = inventory.map((item) => (
    <div
      className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-center sm:flex-col"
      key={item._id}
    >
      <div className="font-bold">
        <p>Name: {item.name}</p>
        <p>Email: {item.email}</p>
        <p>Phone Number: {item.phoneNumber}</p>
        <p>Gender : {item.gender}</p>
        <p>Package : {item.packageType}</p>
        <p>Price : {item.price}</p>
        <p>Message : {item.message}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => handleUpdate(item)}
        >
          Edit
        </button>
        <button
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => handleDelete(item._id)}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">{items}</div>
      <UpdateModal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
        item={selectedItem}
      />
    </div>
  );
};

export default Dashboard;
