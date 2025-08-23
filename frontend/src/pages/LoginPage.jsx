import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../lib/api";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { ShipWheelIcon } from "lucide-react";


const LoginPage = () => {
  const { t } = useTranslation();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const queryClient = useQueryClient();

  const { mutate: loginMutation, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white relative">
      
      {/* Language Switcher */}
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      {/* Left Section - Animation */}
<div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-10 rounded-l-2xl">
  {/* Logo and Title */}
  <div className="flex items-center gap-4 mb-8">
    <ShipWheelIcon className="size-12 text-blue-400" />
    <span className="text-5xl font-extrabold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-wider">
      Click Safe
    </span>
  </div>

  {/* Animation + Welcome Message */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center text-center"
  >
    <Player
      autoplay
      loop
      src="https://assets9.lottiefiles.com/packages/lf20_tfb3estd.json"
      style={{ height: "320px", width: "320px" }}
    />
    <h2 className="text-3xl font-bold mt-6 text-white">{t("login.welcomeBack")}</h2>
    <p className="mt-3 text-lg text-gray-300 max-w-sm">
      {t("login.welcomeMessage")}
    </p>
  </motion.div>
</div>


      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-white text-gray-900 rounded-2xl shadow-xl p-6 sm:p-8"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-blue-700">{t("login.signIn")}</h1>
            <p className="text-gray-600 mt-2">{t("login.signInSubtitle")}</p>
          </div>

          {/* Error */}
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response?.data?.message || t("login.loginError")}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">{t("login.email")}</label>
              <input
                type="email"
                placeholder={t("login.emailPlaceholder")}
                className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">{t("login.password")}</label>
              <input
                type="password"
                placeholder={t("login.passwordPlaceholder")}
                className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold"
              type="submit"
            >
              {isPending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                t("login.signInButton")
              )}
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              {t("login.noAccount")}{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-medium hover:underline"
              >
                {t("login.createOne")}
              </Link>
            </p>
          </form>

          {/* Security Note */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-gray-700">
            🔐 <strong>{t("login.staySafe")}</strong>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
