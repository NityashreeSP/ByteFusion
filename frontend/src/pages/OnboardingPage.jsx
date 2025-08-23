import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeOnboarding } from "../lib/api";
import { LoaderIcon, MapPinIcon, ShipWheelIcon, ShuffleIcon } from "lucide-react";
import { CameraIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import onboardingImage from "../assets/onboarding-illustration.jpeg";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import Footer from "../components/Footer"; 
// ✅ i18n setup
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Complete Your Profile",
        upload_device: "Upload from Device",
        generate_avatar: "Generate Random Avatar",
        full_name: "Full Name",
        bio: "Write a short bio about yourself",
        location: "City, Country",
        submit: "Complete Onboarding",
        onboarding: "Onboarding...",
        success: "Profile onboarded successfully",
        upload_success: "Profile picture uploaded!",
        random_avatar_success: "Random profile picture generated!",
      },
    },
    hi: {
      translation: {
        title: "अपनी प्रोफ़ाइल पूरी करें",
        upload_device: "डिवाइस से अपलोड करें",
        generate_avatar: "रैंडम अवतार बनाएं",
        full_name: "पूरा नाम",
        bio: "अपने बारे में एक छोटा बायो लिखें",
        location: "शहर, देश",
        submit: "ऑनबोर्डिंग पूरी करें",
        onboarding: "ऑनबोर्डिंग...",
        success: "प्रोफ़ाइल सफलतापूर्वक पूरी हुई",
        upload_success: "प्रोफ़ाइल चित्र अपलोड हो गया!",
        random_avatar_success: "रैंडम प्रोफ़ाइल चित्र बनाया गया!",
      },
    },
    kn: {
      translation: {
        title: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಪೂರ್ಣಗೊಳಿಸಿ",
        upload_device: "ಡಿವೈಸಿನಿಂದ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        generate_avatar: "ಯಾದೃಚ್ಛಿಕ ಅವತಾರ ರಚಿಸಿ",
        full_name: "ಪೂರ್ಣ ಹೆಸರು",
        bio: "ನಿಮ್ಮ ಬಗ್ಗೆ ಚಿಕ್ಕ ಪರಿಚಯ ಬರೆಯಿರಿ",
        location: "ನಗರ, ದೇಶ",
        submit: "ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಪೂರ್ಣಗೊಳಿಸಿ",
        onboarding: "ಆನ್‌ಬೋರ್ಡಿಂಗ್...",
        success: "ಪ್ರೊಫೈಲ್ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ",
        upload_success: "ಪ್ರೊಫೈಲ್ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಆಗಿದೆ!",
        random_avatar_success: "ಯಾದೃಚ್ಛಿಕ ಪ್ರೊಫೈಲ್ ಚಿತ್ರ ರಚಿಸಲಾಗಿದೆ!",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const OnboardingPage = () => {
  const { t } = useTranslation();
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",
  });

  const { mutate: onboardingMutation, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success(t("success"));
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onboardingMutation(formState);
  };

  const handleRandomAvatar = () => {
    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;
    setFormState({ ...formState, profilePic: randomAvatar });
    toast.success(t("random_avatar_success"));
  };

  // ✅ Upload to Cloudinary
  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "your_upload_preset"); // ✅ Replace with your Cloudinary preset

      const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        setFormState({ ...formState, profilePic: data.secure_url });
        toast.success(t("upload_success"));
      } else {
        toast.error("Image upload failed");
      }
    } catch (err) {
      toast.error("Image upload error");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-6 sm:p-8"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">{t("title")}</h1>
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue="en"
              className="select select-bordered"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center space-y-4">
              <div className="size-32 rounded-full bg-base-300 overflow-hidden">
                {formState.profilePic ? (
                  <img src={formState.profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <CameraIcon className="size-12 text-base-content opacity-40 mx-auto mt-10" />
                )}
              </div>
              <div className="flex flex-col items-center gap-2">
                <label className="btn btn-outline cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) handleFileUpload(file);
                    }}
                  />
                  {t("upload_device")}
                </label>
                <button type="button" onClick={handleRandomAvatar} className="btn btn-accent">
                  <ShuffleIcon className="size-4 mr-2" /> {t("generate_avatar")}
                </button>
              </div>
            </div>

            {/* Full Name */}
            <input
              type="text"
              placeholder={t("full_name")}
              className="input input-bordered w-full"
              value={formState.fullName}
              onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
            />

            {/* Bio */}
            <textarea
              placeholder={t("bio")}
              className="textarea textarea-bordered w-full"
              value={formState.bio}
              onChange={(e) => setFormState({ ...formState, bio: e.target.value })}
            />

            {/* Location */}
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-3 size-5 opacity-70" />
              <input
                type="text"
                placeholder={t("location")}
                className="input input-bordered w-full pl-10"
                value={formState.location}
                onChange={(e) => setFormState({ ...formState, location: e.target.value })}
              />
            </div>

            {/* Submit */}
            <button className="btn btn-primary w-full" disabled={isPending}>
              {!isPending ? (
                <>
                  <ShipWheelIcon className="size-5 mr-2" /> {t("submit")}
                </>
              ) : (
                <>
                  <LoaderIcon className="animate-spin size-5 mr-2" /> {t("onboarding")}
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center p-6"
        >
          <img src={onboardingImage} alt="Onboarding Illustration" className="max-w-md" />
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default OnboardingPage;
