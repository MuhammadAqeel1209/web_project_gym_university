'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const Modal = ({ isOpen, closeModal }) => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState(isOpen); // State to manage modal visibility
  const router = useRouter(); 

  const handleSubmit = (event) => {
    event.preventDefault(); 

    // Validation logic
    if (username === 'FARGYM' && password === '12345') {
      // Redirect to the dashboard
      router.push("/Dashboard");
      setIsModalOpen(false); // Close the modal upon successful login
    } else {
      alert('Please enter the correct username and password!');
    }
  };

  // Close modal when isOpen prop changes
  React.useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute bg-white rounded-lg p-8 animate-slideInDown w-full">
            <div>
              <form className="form flex flex-col gap-8 px-8 py-10 bg-gray-900 rounded-3xl" onSubmit={handleSubmit}>
                <h2 className="text-center items-center text-white">Login Form</h2>
                <div className="contactDiv">
                  <input
                    type="text"
                    className="contactField"
                    placeholder="Username"
                    value={username} // Bind value to state
                    onChange={(e) => setUsername(e.target.value)} // Update state on change
                  />
                </div>
                <div className="contactDiv">
                  <input
                    type="password"
                    className="contactField"
                    placeholder="Password"
                    value={password} // Bind value to state
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                  />
                </div>
                <div className="grid grid-cols-1 justify-center mt-6 md:grid-cols-2">
                  <button className="btnModal">Login</button>
                  <button className="btnModal" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
