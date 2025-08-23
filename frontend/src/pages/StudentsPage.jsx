import React, { useState } from "react";
import "./Students.css";
import Footer from "../components/Footer"; 
const StudentsPage = () => {
  const [language, setLanguage] = useState("en"); // Default: English
  

  // ✅ Multi-language content
  const content = {
    en: {
      heading: "STUDENT SCAMS",
      subheading: "Stay alert about common scams targeting students and learn to stay safe.",
      scams: [
        {
          title: "Fake Scholarship Scams",
          description:
            "Fraudulent websites or individuals promise scholarships but ask for processing fees or personal details.",
          redFlags: [
            "Asking for money to apply",
            "Unverified email IDs/domains",
            "Promises of guaranteed scholarship",
          ],
          tips: [
            "Check official govt/NGO websites",
            "Never share bank details for applying",
            "Cross-check legitimacy via teachers",
          ],
        },
        {
          title: "Exam Paper Leak Scams",
          description:
            "Fraudsters claim to have leaked papers and sell them to students online.",
          redFlags: [
            "Guaranteed pass schemes",
            "Selling papers on Telegram/WhatsApp",
            "No official proof or source",
          ],
          tips: [
            "Ignore offers of leaked papers",
            "Report suspicious accounts",
            "Prepare through legitimate sources only",
          ],
        },
      ],
      reportText: "Report a Scam",
    },

    hi: {
      heading: "छात्र घोटाले",
      subheading: "छात्रों को लक्षित करने वाले सामान्य घोटालों के बारे में सतर्क रहें और सुरक्षित रहना सीखें।",
      scams: [
        {
          title: "नकली छात्रवृत्ति घोटाले",
          description:
            "धोखाधड़ी वाली वेबसाइटें या व्यक्ति छात्रवृत्ति का वादा करते हैं लेकिन प्रसंस्करण शुल्क या व्यक्तिगत विवरण मांगते हैं।",
          redFlags: [
            "आवेदन करने के लिए पैसे मांगना",
            "अप्रमाणित ईमेल आईडी/डोमेन",
            "गारंटीड छात्रवृत्ति का वादा",
          ],
          tips: [
            "आधिकारिक सरकारी/एनजीओ वेबसाइट देखें",
            "आवेदन करने के लिए बैंक विवरण कभी साझा न करें",
            "शिक्षकों के माध्यम से वैधता जांचें",
          ],
        },
        {
          title: "परीक्षा पेपर लीक घोटाले",
          description:
            "धोखेबाज दावा करते हैं कि उन्होंने लीक किए गए पेपर प्राप्त कर लिए हैं और उन्हें छात्रों को ऑनलाइन बेचते हैं।",
          redFlags: [
            "गारंटीड पास योजनाएं",
            "टेलीग्राम/व्हाट्सएप पर पेपर बेचना",
            "कोई आधिकारिक प्रमाण या स्रोत नहीं",
          ],
          tips: [
            "लीक किए गए पेपर के ऑफ़र को अनदेखा करें",
            "संदिग्ध खातों की रिपोर्ट करें",
            "केवल वैध स्रोतों से तैयारी करें",
          ],
        },
      ],
      reportText: "घोटाले की रिपोर्ट करें",
    },

    kn: {
      heading: "ವಿದ್ಯಾರ್ಥಿ ಮೋಸಗಳು",
      subheading: "ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಗುರಿಯಾಗಿಸಿರುವ ಸಾಮಾನ್ಯ ಮೋಸಗಳ ಬಗ್ಗೆ ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿರಿ.",
      scams: [
        {
          title: "ನಕಲಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಮೋಸಗಳು",
          description:
            "ಮೋಸಗಾರರು ವಿದ್ಯಾರ್ಥಿವೇತನ ನೀಡುವಂತೆ ನಾಟಕವಾಡಿ ಪ್ರಕ್ರಿಯಾ ಶುಲ್ಕ ಅಥವಾ ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಕೇಳುತ್ತಾರೆ.",
          redFlags: [
            "ಅರ್ಜಿಸಲು ಹಣವನ್ನು ಕೇಳುವುದು",
            "ಅನಧಿಕೃತ ಇಮೇಲ್ ಐಡಿಗಳು/ಡೊಮೇನ್‌ಗಳು",
            "ಭರವಸೆ ನೀಡಿದ ವಿದ್ಯಾರ್ಥಿವೇತನ",
          ],
          tips: [
            "ಅಧಿಕೃತ ಸರ್ಕಾರ/ಎನ್‌ಜಿಒ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
            "ಅರ್ಜಿಸಲು ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಬೇಡಿ",
            "ಶಿಕ್ಷಕರ ಮೂಲಕ ಚಾಕಾಸಿ ಮಾಡಿ",
          ],
        },
        {
          title: "ಪರೀಕ್ಷಾ ಪೇಪರ್ ಲೀಕ್ ಮೋಸಗಳು",
          description:
            "ಮೋಸಗಾರರು ಲೀಕ್ ಮಾಡಿದ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳನ್ನು ಹೊಂದಿದ್ದಾರೆ ಎಂದು ಹೇಳಿ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಮಾರಾಟ ಮಾಡುತ್ತಾರೆ.",
          redFlags: [
            "ಭರವಸೆ ನೀಡಿದ ಪಾಸ್ ಯೋಜನೆಗಳು",
            "ಟೆಲಿಗ್ರಾಮ್/ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಪೇಪರ್ ಮಾರಾಟ",
            "ಯಾವುದೇ ಅಧಿಕೃತ ಸಾಕ್ಷ್ಯ ಇಲ್ಲ",
          ],
          tips: [
            "ಲೀಕ್ ಆಫರ್‌ಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ",
            "ಸಂದೇಹಾಸ್ಪದ ಖಾತೆಗಳನ್ನು ವರದಿ ಮಾಡಿ",
            "ನೈಜ ಮೂಲಗಳಿಂದ ಮಾತ್ರ ಸಿದ್ಧತೆ ಮಾಡಿ",
          ],
        },
      ],
      reportText: "ಮೋಸವನ್ನು ವರದಿ ಮಾಡಿ",
    },
  };
  



  const { heading, subheading, scams, reportText } = content[language];

  return (
    <section className="students">
      <div className="container-students">
        {/* Language Switcher */}
        <div className="language-switcher">
          <button
            onClick={() => setLanguage("en")}
            className={`lang-btn ${language === "en" ? "active" : ""}`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("hi")}
            className={`lang-btn ${language === "hi" ? "active" : ""}`}
          >
            हिन्दी
          </button>
          <button
            onClick={() => setLanguage("kn")}
            className={`lang-btn ${language === "kn" ? "active" : ""}`}
          >
            ಕನ್ನಡ
          </button>
        </div>

        {/* Heading */}
        <h1 className="heading-students">{heading}</h1>
        <p className="subheading-students">{subheading}</p>

        {/* Scam Cards */}
        {scams.map((scam, index) => (
          <div key={index} className="scam-card-students">
            <h2>{scam.title}</h2>
            <p>{scam.description}</p>

            <h3>🚩 Red Flags:</h3>
            <ul>
              {scam.redFlags.map((flag, i) => (
                <li key={i}>{flag}</li>
              ))}
            </ul>

            <h3>✅ Prevention Tips:</h3>
            <ul>
              {scam.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
       



        {/* Report Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="report-btn-students"
          >
            {reportText}
          </a>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default StudentsPage;
