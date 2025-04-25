import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import Loader from "./loader";
import Footer from "./footer";

const App = () => {
  const [data, Setdata] = useState(null);
  const [values, Setvalues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, Setloading] = useState(false);
  const [adminView, SetadminView] = useState(false);
  const [darkMode, SetDarkMode] = useState(false); 

  useEffect(() => {
    if (adminView) {
      const fetch = async () => {
        try {
          const res = await axios.get("https://feedback-form-backend-one.vercel.app/get-feedback");
          Setdata(res.data);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      };
      fetch();
    }
  }, [adminView]);

  const toggleDarkMode = () => {
    SetDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setvalues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    Setloading(true);
    try {
      if (values.name === "" || values.email === "" || values.message === "") {
        alert("All fields required");
      } else {
        await axios.post("https://feedback-form-backend-one.vercel.app/post-feedback", values);
        Setvalues({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      Setloading(false);
    }
  };

  const toggle = () => {
    SetadminView(!adminView);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6 bg-gray-800 text-white p-4 rounded-lg">
        <div
          className="cursor-pointer hover:text-gray-300"
          onClick={toggle}
        >
          {adminView ? "Submit Feedback" : "Admin View"}
        </div>
        <div
          className="cursor-pointer hover:text-gray-300"
          onClick={toggleDarkMode} 
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </div>
      </div>

      {!adminView ? (
        <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
            Submit Your Feedback
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Feedback</label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your feedback..."
            />
          </div>
          <button
            onClick={handleSubmit}
            className=" w-full py-2 px-4 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {loading ? <Loader/> : "Submit"}
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
            All Feedbacks
          </h2>
          {data ? (
            data.map((val, idx) => (
              <div key={idx} className="mb-6">
                <Card data={val} />
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-center text-gray-500 dark:text-gray-400">Loading feedback</p>
            <Loader/>
            </div>
          )}
        </div>
      )}
       <Footer/>
    </div>
   
  );
};

export default App;
