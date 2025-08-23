import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const categoryDetails = {
  students: {
    title: "Students",
    content: "Find educational resources, tips, and career guidance.",
  },
  professionals: {
    title: "Professionals",
    content: "Enhance your skills, job opportunities, and networking.",
  },
  homemakers: {
    title: "Homemakers",
    content: "Explore household management tips, budgeting, and more.",
  },
  "rural-users": {
    title: "Rural Users",
    content: "Access agricultural info, rural tech, and government schemes.",
  },
  "senior-citizens": {
    title: "Senior Citizens",
    content: "Get health tips, pension info, and community activities.",
  },
};

const CategoryPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const details = categoryDetails[type];

  if (!details) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Category Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
      <p className="text-gray-600 mb-6">{details.content}</p>
      <button
        onClick={() => navigate("/")}
        className="bg-primary text-white px-4 py-2 rounded-lg"
      >
        Back to Categories
      </button>
    </div>
  );
};

export default CategoryPage;
