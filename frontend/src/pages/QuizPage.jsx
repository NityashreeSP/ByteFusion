import { useState } from "react";
import { ShieldAlert, AlertTriangle, Lock } from "lucide-react";
import Footer from "../components/Footer"; 

// ✅ Multi-language quiz content
const translations = {
  en: {
    title: "Cyber Security Quiz",
    restart: "Restart Quiz",
    finished: "Quiz Finished!",
    scoreText: "Your Score:",
    successMsg: "🎉 You're a Cyber Ninja! Stay Safe!",
    failMsg: "⚠ Keep Learning! Protect Yourself!",
    questions: [
      {
        question: "What should you do if someone asks for your OTP?",
        options: ["Share it immediately", "Never share it", "Ask for money first", "Ignore"],
        answer: "Never share it",
      },
      {
        question: "What is phishing?",
        options: ["A scam email to steal data", "A secure payment method", "A coding language", "A VPN feature"],
        answer: "A scam email to steal data",
      },
      {
        question: "What should you do if you receive a suspicious email asking for your bank details?",
        options: ["Reply with details", "Ignore or report the email", "Forward to friends", "Click the link immediately"],
        answer: "Ignore or report the email",
      },
      {
        question: "What is the safest way to create a password?",
        options: ["123456", "Your name", "A mix of letters, numbers & symbols", "Your birthdate"],
        answer: "A mix of letters, numbers & symbols",
      },
      {
        question: "What is a common sign of a phishing website?",
        options: [
          "HTTPS with a padlock",
          "Poor grammar and suspicious links",
          "Trusted brand name",
          "Official customer care number",
        ],
        answer: "Poor grammar and suspicious links",
      },
      {
        question: "Which app feature helps secure your account?",
        options: ["Auto-login", "Two-Factor Authentication", "Sharing password", "None"],
        answer: "Two-Factor Authentication",
      },
    ],
  },
  hi: {
    title: "साइबर सुरक्षा क्विज़",
    restart: "क्विज़ फिर से शुरू करें",
    finished: "क्विज़ समाप्त!",
    scoreText: "आपका स्कोर:",
    successMsg: "🎉 आप साइबर निंजा हैं! सुरक्षित रहें!",
    failMsg: "⚠ सीखते रहें! खुद को सुरक्षित रखें!",
    questions: [
      {
        question: "अगर कोई आपसे आपका ओटीपी मांगे तो आपको क्या करना चाहिए?",
        options: ["तुरंत साझा करें", "कभी साझा न करें", "पहले पैसे मांगें", "नज़रअंदाज़ करें"],
        answer: "कभी साझा न करें",
      },
      {
        question: "फ़िशिंग क्या है?",
        options: [
          "डेटा चुराने के लिए एक धोखाधड़ी वाला ईमेल",
          "एक सुरक्षित भुगतान विधि",
          "एक प्रोग्रामिंग भाषा",
          "एक वीपीएन सुविधा",
        ],
        answer: "डेटा चुराने के लिए एक धोखाधड़ी वाला ईमेल",
      },
      {
        question: "अगर आपको बैंक डिटेल्स पूछने वाला संदिग्ध ईमेल मिले तो क्या करें?",
        options: ["विवरण के साथ उत्तर दें", "ईमेल को नज़रअंदाज़ या रिपोर्ट करें", "दोस्तों को भेजें", "लिंक तुरंत क्लिक करें"],
        answer: "ईमेल को नज़रअंदाज़ या रिपोर्ट करें",
      },
      {
        question: "पासवर्ड बनाने का सबसे सुरक्षित तरीका क्या है?",
        options: ["123456", "आपका नाम", "अक्षर, अंक और प्रतीकों का मिश्रण", "आपकी जन्मतिथि"],
        answer: "अक्षर, अंक और प्रतीकों का मिश्रण",
      },
      {
        question: "फ़िशिंग वेबसाइट की एक आम पहचान क्या है?",
        options: [
          "HTTPS के साथ एक ताला",
          "खराब व्याकरण और संदिग्ध लिंक",
          "विश्वसनीय ब्रांड नाम",
          "आधिकारिक ग्राहक सेवा नंबर",
        ],
        answer: "खराब व्याकरण और संदिग्ध लिंक",
      },
      {
        question: "कौन सा ऐप फीचर आपके खाते को सुरक्षित रखने में मदद करता है?",
        options: ["ऑटो-लॉगिन", "टू-फैक्टर ऑथेंटिकेशन", "पासवर्ड साझा करना", "कोई नहीं"],
        answer: "टू-फैक्टर ऑथेंटिकेशन",
      },
    ],
  },
  kn: {
    title: "ಸೈಬರ್ ಸುರಕ್ಷತಾ ಪ್ರಶ್ನೋತ್ತರ",
    restart: "ಪ್ರಶ್ನೋತ್ತರ ಪುನಃ ಪ್ರಾರಂಭಿಸಿ",
    finished: "ಪ್ರಶ್ನೋತ್ತರ ಮುಗಿದಿದೆ!",
    scoreText: "ನಿಮ್ಮ ಅಂಕಗಳು:",
    successMsg: "🎉 ನೀವು ಸೈಬರ್ ನಿಂಜಾ! ಸುರಕ್ಷಿತವಾಗಿರಿ!",
    failMsg: "⚠ ಕಲಿಯುತ್ತಿರಿ! ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳಿ!",
    questions: [
      {
        question: "ಯಾರಾದರೂ ನಿಮ್ಮ OTP ಕೇಳಿದರೆ ನೀವು ಏನು ಮಾಡಬೇಕು?",
        options: ["ತಕ್ಷಣ ಹಂಚಿಕೊಳ್ಳಿ", "ಯಾವತ್ತಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ", "ಮೊದಲು ಹಣ ಕೇಳಿ", "ಗಮನಿಸಬೇಡಿ"],
        answer: "ಯಾವತ್ತಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ",
      },
      {
        question: "ಫಿಶಿಂಗ್ ಎಂದರೆ ಏನು?",
        options: [
          "ಡೇಟಾ ಕದಿಯಲು ವಂಚನೆ ಇಮೇಲ್",
          "ಸುರಕ್ಷಿತ ಪಾವತಿ ವಿಧಾನ",
          "ಒಂದು ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಭಾಷೆ",
          "ಒಂದು VPN ವೈಶಿಷ್ಟ್ಯ",
        ],
        answer: "ಡೇಟಾ ಕದಿಯಲು ವಂಚನೆ ಇಮೇಲ್",
      },
      {
        question: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಕೇಳುವ ಶಂಕಾಸ್ಪದ ಇಮೇಲ್ ಬಂದರೆ ನೀವು ಏನು ಮಾಡಬೇಕು?",
        options: ["ವಿವರಗಳೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಿ", "ಇಮೇಲ್ ಅನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ ಅಥವಾ ವರದಿ ಮಾಡಿ", "ಸ್ನೇಹಿತರಿಗೆ ಫಾರ್ವರ್ಡ್ ಮಾಡಿ", "ಲಿಂಕ್ ತಕ್ಷಣ ಕ್ಲಿಕ್ ಮಾಡಿ"],
        answer: "ಇಮೇಲ್ ಅನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ ಅಥವಾ ವರದಿ ಮಾಡಿ",
      },
      {
        question: "ಪಾಸ್ವರ್ಡ್ ಸೃಷ್ಟಿಸಲು ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ವಿಧಾನ ಯಾವುದು?",
        options: ["123456", "ನಿಮ್ಮ ಹೆಸರು", "ಅಕ್ಷರಗಳು, ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಚಿಹ್ನೆಗಳ ಮಿಶ್ರಣ", "ನಿಮ್ಮ ಜನ್ಮದಿನಾಂಕ"],
        answer: "ಅಕ್ಷರಗಳು, ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಚಿಹ್ನೆಗಳ ಮಿಶ್ರಣ",
      },
      {
        question: "ಫಿಶಿಂಗ್ ವೆಬ್‌ಸೈಟ್‌ನ ಸಾಮಾನ್ಯ ಗುರುತು ಯಾವುದು?",
        options: [
          "HTTPS ಮತ್ತು ಲಾಕ್",
          "ಕೆಟ್ಟ ವ್ಯಾಕರಣ ಮತ್ತು ಶಂಕಾಸ್ಪದ ಲಿಂಕ್‌ಗಳು",
          "ವಿಶ್ವಾಸಾರ್ಹ ಬ್ರ್ಯಾಂಡ್ ಹೆಸರು",
          "ಅಧಿಕೃತ ಗ್ರಾಹಕ ಸೇವಾ ಸಂಖ್ಯೆ",
        ],
        answer: "ಕೆಟ್ಟ ವ್ಯಾಕರಣ ಮತ್ತು ಶಂಕಾಸ್ಪದ ಲಿಂಕ್‌ಗಳು",
      },
      {
        question: "ಯಾವ ಆಪ್ ವೈಶಿಷ್ಟ್ಯವು ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ?",
        options: ["ಸ್ವಯಂ ಲಾಗಿನ್", "ಟು-ಫ್ಯಾಕ್ಟರ್ ಪ್ರಾಮಾಣೀಕರಣ", "ಪಾಸ್ವರ್ಡ್ ಹಂಚಿಕೊಳ್ಳುವುದು", "ಯಾವುದೂ ಇಲ್ಲ"],
        answer: "ಟು-ಫ್ಯಾಕ್ಟರ್ ಪ್ರಾಮಾಣೀಕರಣ",
      },
    ],
  },
};

const QuizPage = () => {
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    const correctAnswer = t.questions[currentQuestion].answer;

    if (option === correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < t.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6">
      {/* ✅ Language Switcher */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded ${language === "en" ? "bg-red-600" : "bg-gray-700"}`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("hi")}
          className={`px-4 py-2 rounded ${language === "hi" ? "bg-red-600" : "bg-gray-700"}`}
        >
          हिंदी
        </button>
        <button
          onClick={() => setLanguage("kn")}
          className={`px-4 py-2 rounded ${language === "kn" ? "bg-red-600" : "bg-gray-700"}`}
        >
          ಕನ್ನಡ
        </button>
      </div>

      {!isFinished ? (
        <div className="w-full max-w-xl bg-gray-800 rounded-xl shadow-lg p-6 border border-red-500">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="text-red-500 h-8 w-8" />
            <h2 className="text-2xl font-bold">{t.title}</h2>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
            <div
              className="bg-red-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${((currentQuestion + 1) / t.questions.length) * 100}%`,
              }}
            ></div>
          </div>

          {/* Question */}
          <p className="text-lg font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="text-yellow-400" />
            {t.questions[currentQuestion].question}
          </p>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {t.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="border border-red-500 bg-gray-900 hover:bg-red-600 hover:text-white transition-all duration-300 w-full py-2 rounded-lg text-left px-4"
              >
                {option}
              </button>
            ))}
          </div>

          {/* Question Counter */}
          <p className="text-gray-400 text-sm mt-4">
            Question {currentQuestion + 1} of {t.questions.length}
          </p>
        </div>
      ) : (
        <div className="text-center bg-gray-800 p-8 rounded-xl border border-green-500 shadow-lg">
          <Lock className="text-green-500 h-10 w-10 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">{t.finished}</h2>
          <p className="text-xl mb-4">
            {t.scoreText}{" "}
            <span className="text-green-400">
              {score}/{t.questions.length}
            </span>
          </p>
          <p className="text-lg">
            {score >= 5 ? t.successMsg : t.failMsg}
          </p>

          <button
            className="mt-6 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-2 rounded-lg"
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setIsFinished(false);
            }}
          >
            {t.restart}
          </button>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default QuizPage;
