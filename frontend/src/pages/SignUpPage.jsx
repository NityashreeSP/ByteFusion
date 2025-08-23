import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { ShipWheelIcon } from "lucide-react";
const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { mutate: signupMutation, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white relative">
     
{/* Language Switcher */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>


      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 text-center">
        <div className="flex items-center gap-2">
            <ShipWheelIcon className="size-12 text-blue-400" />
                <span className="text-5xl font-extrabold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-wider">
                  Click Safe
                </span>
          </div><motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-md"
        >
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_4kx2q32n.json"
            style={{ height: "300px", width: "300px" }}
          />
          <h1 className="text-4xl font-bold mt-6">{t("signup.title")}</h1>
          <p className="mt-4 text-lg text-gray-300">{t("signup.subtitle")}</p>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md bg-white/90 text-gray-900"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-blue-700">
              {t("signup.title")}
            </h1>
            <p className="text-gray-600 mt-2">{t("signup.subtitle")}</p>
          </div>

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response?.data?.message}</span>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">
                {t("signup.fullName")}
              </label>
              <input
                type="text"
                placeholder={t("signup.fullName")}
                className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                {t("signup.email")}
              </label>
              <input
                type="email"
                placeholder={t("signup.email")}
                className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                {t("signup.password")}
              </label>
              <input
                type="password"
                placeholder={t("signup.password")}
                className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                {t("signup.passwordHint")}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="checkbox checkbox-sm" required />
              <span className="text-xs text-gray-600">{t("signup.terms")}</span>
            </div>

            <button
              className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold"
              type="submit"
            >
              {isPending ? t("signup.loading") : t("signup.createAccount")}
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              {t("signup.alreadyAccount")}{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                {t("signup.signIn")}
              </Link>
            </p>
          </form>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-gray-700">
            🔐 <strong>{t("signup.securityNote")}</strong>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpPage;
