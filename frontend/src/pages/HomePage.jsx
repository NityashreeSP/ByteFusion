import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  Briefcase,
  Home,
  Users,
  Heart,
  MessageCircle,
} from "lucide-react";
import Footer from "../components/Footer"; 

const DashboardPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // ✅ Categories now use translations
  const categories = [
    {
      id: "students",
      label: t("dashboard.categories.students.label"),
      description: t("dashboard.categories.students.description"),
      icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
      color: "bg-blue-50",
    },
    {
      id: "professionals",
      label: t("dashboard.categories.professionals.label"),
      description: t("dashboard.categories.professionals.description"),
      icon: <Briefcase className="w-10 h-10 text-green-500" />,
      color: "bg-green-50",
    },
    {
      id: "homemakers",
      label: t("dashboard.categories.homemakers.label"),
      description: t("dashboard.categories.homemakers.description"),
      icon: <Home className="w-10 h-10 text-pink-500" />,
      color: "bg-pink-50",
    },
    {
      id: "rural-users",
      label: t("dashboard.categories.ruralUsers.label"),
      description: t("dashboard.categories.ruralUsers.description"),
      icon: <Users className="w-10 h-10 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      id: "senior-citizens",
      label: t("dashboard.categories.seniorCitizens.label"),
      description: t("dashboard.categories.seniorCitizens.description"),
      icon: <Heart className="w-10 h-10 text-purple-500" />,
      color: "bg-purple-50",
    },
    {
      id: "upi-users",
      label: t("dashboard.categories.upiUsers.label"),
      description: t("dashboard.categories.upiUsers.description"),
      icon: <MessageCircle className="w-10 h-10 text-teal-500" />,
      color: "bg-teal-50",
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex flex-col items-center justify-center px-6">
      {/* ✅ Language Switcher */}
      {/* ✅ Language Switcher */}
<div className="absolute top-12 centre flex gap-2 z-50">
  <button
    onClick={() => changeLanguage("en")}
    className="bg-white text-black px-3 py-1 rounded shadow hover:bg-gray-200"
  >
    EN
  </button>
  <button
    onClick={() => changeLanguage("hi")}
    className="bg-white text-black px-3 py-1 rounded shadow hover:bg-gray-200"
  >
    हिंदी
  </button>
  <button
    onClick={() => changeLanguage("kn")}
    className="bg-white text-black px-3 py-1 rounded shadow hover:bg-gray-200"
  >
    ಕನ್ನಡ
  </button>
</div>


      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={() => navigate("/quiz")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md flex items-center gap-2"
        >
          {t("dashboard.quizButton")}
        </button>

        <button
          onClick={() => navigate("/Home")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" /> {t("dashboard.chatButton")}
        </button>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-4 text-center"
      >
        {t("dashboard.chooseCategory")}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-200 mb-10 text-center max-w-xl"
      >
        {t("dashboard.selectCategory")}
      </motion.p>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, type: "spring" }}
            onClick={() => navigate(`/${category.id}`)}
            className={`cursor-pointer ${category.color} rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 flex flex-col items-center text-center`}
          >
            <div className="mb-4">{category.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800">{category.label}</h2>
            <p className="text-gray-600 mt-2">{category.description}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
