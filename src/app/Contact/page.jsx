'use client'
import React, { useState } from 'react';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [packageType, setPackage] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phoneNumber,
      gender,
      packageType,
      price,
      message,
    };

    // Validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch("http://localhost:3000/api/registiration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        alert('Form submitted successfully!', data);
        if (data){
          setName("")
          setEmail("")
          setPhoneNumber("")
          setGender("")
          setPackage("")
          setPrice("")
          setMessage("")
        }
      } catch (error) {
        console.error('There was an error submitting the form:', error.message);
        alert('Error in submission', error.message);

      }
    }
  };

  // Function to validate form fields
  const validateForm = (formData) => {
    const validationErrors = {};

    // Validation rules
    if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      validationErrors.name = 'Name must only contain alphabetic characters, spaces, hyphens, and apostrophes';
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = 'Phone number must be enter';
    }

    if (!formData.gender) {
      validationErrors.gender = 'Please select a gender';
    }

    if (!formData.packageType) {
      validationErrors.packageType = 'Please select a package';
    }

    if (!formData.price) {
      validationErrors.price = 'Please select a price';
    }

    return validationErrors;
  };

  // Function to handle package selection and update price
  const handlePackageSelection = (selectedPackage) => {
    setPackage(selectedPackage);
    // Set price based on the selected package
    switch (selectedPackage) {
      case 'Standard':
        setPrice('30 $');
        break;
      case 'Ultimate':
        setPrice('45 $');
        break;
      case 'Professional':
        setPrice('60 $');
        break;
      default:
        setPrice('');
    }
  };

  return (
    <div>
      <form className="flex flex-col bg-gray-900 justify-center items-center p-8 gap-4" onSubmit={handleSubmitForm}>
        <h2 className="text-center text-teal-300">for Registration</h2>

        <div className="contactDiv">
          <input
            placeholder="Enter your Name"
            className="contactField"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>

        <div className="contactDiv">
          <input
            placeholder="Enter your Email"
            className="contactField"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="contactDiv">
          <input
            placeholder="Enter your Phone Number"
            className="contactField"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
        </div>

        <div className="contactDiv">
          <select
            className="contactField"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled>Select Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>

        <div className="contactDiv">
          <select
            className="contactField"
            value={packageType}
            onChange={(e) => handlePackageSelection(e.target.value)} // Update package and price on selection
          >
            <option value="" disabled>Select The Package</option>
            <option value="Standard">Standard</option>
            <option value="Ultimate">Ultimate</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
        <div>
          {errors.packageType && <p className="text-red-500">{errors.packageType}</p>}
        </div>

        <div className="contactDiv">
          <input
            placeholder="Price"
            className="contactField"
            type="text"
            value={price} // Display selected price
            readOnly // Make the input read-only
          />
        </div>
        <div>
          {errors.price && <p className="text-red-500">{errors.price}</p>}
        </div>

        <div className="contactDiv">
          <textarea
            placeholder="Enter your Message"
            className="contactField"
            cols="30"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button className="mb-9 py-3 px-6 rounded-lg font-bold text-white hover:text-black hover:bg-teal-400 hover:shadow-inner">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Page;
