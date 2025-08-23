// RuralScams.jsx
import React, { useState } from "react";
import "./Rural_users.css";
import Footer from "../components/Footer"; 

const translations = {
  en: {
    heading: "RURAL SCAMS",
    subheading: "Be aware of these scams affecting rural areas and stay protected.",
    scams: [
      {
        title: "Job Scams",
        description:
          "Fake recruiters offering jobs with unrealistic salaries and asking for money upfront.",
        redFlags: [
          "Asking for money to get a job",
          "Too-good-to-be-true salaries",
          "Emails from free domains (gmail, yahoo, etc.)",
        ],
        tips: [
          "Verify company on official websites or social media",
          "Never pay for a job offer",
          "Cross-check recruiter profiles",
        ],
      },
      {
        title: "Fake Agricultural Schemes",
        description:
          "Scammers promise high returns on seeds, fertilizers, or government subsidies but take money without delivering.",
        redFlags: [
          "Upfront payment required for seeds or fertilizer",
          "No official registration or receipts",
          "Pressure to act immediately",
        ],
        tips: [
          "Verify with local agricultural offices",
          "Ask for official documents",
          "Never pay before confirmation",
        ],
      },
      {
        title: "Microfinance / Loan Scams",
        description:
          "Fraudsters offer quick loans with low interest but ask for processing fees upfront.",
        redFlags: [
          "Unsolicited loan offers",
          "Requesting advance processing fees",
          "No official paperwork",
        ],
        tips: [
          "Check with banks or registered MFIs",
          "Never pay money upfront",
          "Verify legitimacy through local authorities",
        ],
      },
      {
        title: "Fake Government Subsidy Scams",
        description:
          "Scammers claim you are eligible for a government grant/subsidy and ask for personal info or fees.",
        redFlags: [
          "Unexpected messages claiming subsidies",
          "Requests for bank account info",
          "Pressure to pay a fee",
        ],
        tips: [
          "Verify via official government portals",
          "Do not share personal details with strangers",
          "Avoid paying for government schemes",
        ],
      },
      {
        title: "Mobile Recharge / Digital Payment Scams",
        description:
          "Fraudsters trick rural users into paying for mobile recharges or digital wallets that don’t exist.",
        redFlags: [
          "Too-good-to-be-true recharge offers",
          "SMS or call asking for money transfer",
          "Unverified apps or websites",
        ],
        tips: [
          "Use official apps or stores",
          "Verify offers before paying",
          "Report suspicious messages to authorities",
        ],
      },
    ],
    report: "Report a Scam",
  },
  hi: {
    heading: "ग्रामीण धोखाधड़ी",
    subheading: "ग्रामीण क्षेत्रों को प्रभावित करने वाले इन धोखों से सावधान रहें और सुरक्षित रहें।",
    scams: [
      {
        title: "नौकरी के धोखे",
        description:
          "फर्जी भर्ती करने वाले अवास्तविक वेतन वाली नौकरियां देते हैं और अग्रिम पैसे मांगते हैं।",
        redFlags: [
          "नौकरी पाने के लिए पैसे की मांग",
          "बहुत ज्यादा वेतन का वादा",
          "फ्री ईमेल डोमेन (gmail, yahoo आदि) से ईमेल",
        ],
        tips: [
          "कंपनी को आधिकारिक वेबसाइट या सोशल मीडिया पर सत्यापित करें",
          "नौकरी के लिए कभी पैसे न दें",
          "भर्ती करने वालों की प्रोफाइल जांचें",
        ],
      },
      {
        title: "फर्जी कृषि योजनाएं",
        description:
          "धोखेबाज बीज, उर्वरक या सरकारी सब्सिडी पर अधिक रिटर्न का वादा करते हैं और पैसे लेकर गायब हो जाते हैं।",
        redFlags: [
          "बीज या उर्वरक के लिए अग्रिम भुगतान",
          "कोई आधिकारिक पंजीकरण या रसीद नहीं",
          "तुरंत कार्य करने का दबाव",
        ],
        tips: [
          "स्थानीय कृषि कार्यालय से सत्यापित करें",
          "आधिकारिक दस्तावेज मांगें",
          "पुष्टि से पहले कभी भुगतान न करें",
        ],
      },
      {
        title: "माइक्रोफाइनेंस / ऋण धोखे",
        description:
          "धोखेबाज कम ब्याज पर जल्दी ऋण देने का वादा करते हैं लेकिन प्रोसेसिंग फीस अग्रिम मांगते हैं।",
        redFlags: [
          "बिना पूछे ऋण का ऑफर",
          "अग्रिम प्रोसेसिंग शुल्क की मांग",
          "कोई आधिकारिक कागजात नहीं",
        ],
        tips: [
          "बैंकों या पंजीकृत एमएफआई से जांच करें",
          "अग्रिम में कभी पैसे न दें",
          "वैधता स्थानीय अधिकारियों से सत्यापित करें",
        ],
      },
      {
        title: "फर्जी सरकारी सब्सिडी धोखे",
        description:
          "धोखेबाज दावा करते हैं कि आप सरकारी अनुदान/सब्सिडी के पात्र हैं और व्यक्तिगत जानकारी या शुल्क मांगते हैं।",
        redFlags: [
          "अनपेक्षित संदेश जो सब्सिडी का दावा करते हैं",
          "बैंक खाता जानकारी की मांग",
          "शुल्क भुगतान का दबाव",
        ],
        tips: [
          "आधिकारिक सरकारी पोर्टल से सत्यापित करें",
          "अजनबियों के साथ व्यक्तिगत जानकारी साझा न करें",
          "सरकारी योजनाओं के लिए भुगतान से बचें",
        ],
      },
      {
        title: "मोबाइल रिचार्ज / डिजिटल भुगतान धोखे",
        description:
          "धोखेबाज ग्रामीण उपयोगकर्ताओं को नकली मोबाइल रिचार्ज या डिजिटल वॉलेट के लिए पैसे देने के लिए फंसाते हैं।",
        redFlags: [
          "बहुत अच्छे ऑफर वाले रिचार्ज",
          "पैसे ट्रांसफर करने के लिए कॉल या एसएमएस",
          "असत्यापित ऐप्स या वेबसाइट",
        ],
        tips: [
          "आधिकारिक ऐप या स्टोर का उपयोग करें",
          "भुगतान से पहले ऑफर सत्यापित करें",
          "संदिग्ध संदेश अधिकारियों को रिपोर्ट करें",
        ],
      },
    ],
    report: "धोखाधड़ी रिपोर्ट करें",
  },
  kn: {
    heading: "ಗ್ರಾಮೀಣ ವಂಚನೆಗಳು",
    subheading: "ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ನಡೆಯುವ ಈ ವಂಚನೆಗಳ ಬಗ್ಗೆ ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿರಿ.",
    scams: [
      {
        title: "ಉದ್ಯೋಗ ವಂಚನೆಗಳು",
        description:
          "ನಕಲಿ ನೇಮಕದಾರರು ಅಸಾಧ್ಯವಾದ ವೇತನದೊಂದಿಗೆ ಉದ್ಯೋಗಗಳನ್ನು ಆಫರ್ ಮಾಡಿ ಮುಂಗಡ ಹಣ ಕೇಳುತ್ತಾರೆ.",
        redFlags: [
          "ಉದ್ಯೋಗ ಪಡೆಯಲು ಹಣ ಕೇಳುವುದು",
          "ತುಂಬಾ ಚೆನ್ನಾದ ವೇತನದ ಭರವಸೆ",
          "ಫ್ರೀ ಇಮೇಲ್ ಡೊಮೇನ್‌ಗಳಿಂದ ಇಮೇಲ್‌ಗಳು (gmail, yahoo ಮುಂತಾದವು)",
        ],
        tips: [
          "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಅಥವಾ ಸೋಷಿಯಲ್ ಮೀಡಿಯಾದಲ್ಲಿ ಕಂಪನಿಯನ್ನು ಪರಿಶೀಲಿಸಿ",
          "ಉದ್ಯೋಗಕ್ಕಾಗಿ ಹಣ ಕೊಡುವುದಿಲ್ಲ",
          "ನೇಮಕದಾರರ ಪ್ರೊಫೈಲ್ ಪರಿಶೀಲಿಸಿ",
        ],
      },
      {
        title: "ನಕಲಿ ಕೃಷಿ ಯೋಜನೆಗಳು",
        description:
          "ವಂಚಕರು ಬೀಜ, ರಾಸಾಯನಿಕ ಗೊಬ್ಬರ ಅಥವಾ ಸರ್ಕಾರಿ ಸಹಾಯಧನದಲ್ಲಿ ಹೆಚ್ಚಿನ ಲಾಭದ ಭರವಸೆ ನೀಡಿ ಹಣ ಪಡೆದು ಕಾಣೆಯಾಗುತ್ತಾರೆ.",
        redFlags: [
          "ಬೀಜ ಅಥವಾ ಗೊಬ್ಬರಕ್ಕೆ ಮುಂಗಡ ಪಾವತಿ",
          "ಯಾವುದೇ ಅಧಿಕೃತ ನೋಂದಣಿ ಅಥವಾ ರಸೀದಿ ಇಲ್ಲ",
          "ತಕ್ಷಣ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಒತ್ತಡ",
        ],
        tips: [
          "ಸ್ಥಳೀಯ ಕೃಷಿ ಕಚೇರಿಯಲ್ಲಿ ಪರಿಶೀಲಿಸಿ",
          "ಅಧಿಕೃತ ದಾಖಲೆಗಳನ್ನು ಕೇಳಿ",
          "ದೃಢೀಕರಣದ ಮೊದಲು ಪಾವತಿ ಮಾಡಬೇಡಿ",
        ],
      },
      {
        title: "ಮೈಕ್ರೋಫೈನಾನ್ಸ್ / ಸಾಲ ವಂಚನೆಗಳು",
        description:
          "ವಂಚಕರು ಕಡಿಮೆ ಬಡ್ಡಿದರದಲ್ಲಿ ತ್ವರಿತ ಸಾಲ ನೀಡುವುದಾಗಿ ಹೇಳಿ ಮುಂಗಡ ಪ್ರೊಸೆಸಿಂಗ್ ಶುಲ್ಕ ಕೇಳುತ್ತಾರೆ.",
        redFlags: [
          "ಆಮಂತ್ರಣವಿಲ್ಲದ ಸಾಲ ಆಫರ್‌ಗಳು",
          "ಮುಂಗಡ ಪ್ರೊಸೆಸಿಂಗ್ ಶುಲ್ಕ ಕೇಳುವುದು",
          "ಯಾವುದೇ ಅಧಿಕೃತ ದಾಖಲೆಗಳಿಲ್ಲ",
        ],
        tips: [
          "ಬ್ಯಾಂಕ್‌ಗಳು ಅಥವಾ ನೋಂದಾಯಿತ MFIs ಜೊತೆ ಪರಿಶೀಲಿಸಿ",
          "ಮುಂಗಡ ಹಣ ನೀಡಬೇಡಿ",
          "ಸ್ಥಳೀಯ ಅಧಿಕಾರಿಗಳ ಮೂಲಕ ದೃಢೀಕರಿಸಿ",
        ],
      },
      {
        title: "ನಕಲಿ ಸರ್ಕಾರಿ ಸಹಾಯಧನ ವಂಚನೆಗಳು",
        description:
          "ವಂಚಕರು ನೀವು ಸರ್ಕಾರಿ ಅನುದಾನ/ಸಹಾಯಧನಕ್ಕೆ ಅರ್ಹರು ಎಂದು ಹೇಳಿ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಅಥವಾ ಶುಲ್ಕವನ್ನು ಕೇಳುತ್ತಾರೆ.",
        redFlags: [
          "ಅನಿರೀಕ್ಷಿತ ಸಂದೇಶಗಳು ಸಹಾಯಧನದ ಬಗ್ಗೆ ಹೇಳುವುದು",
          "ಬ್ಯಾಂಕ್ ಖಾತೆ ಮಾಹಿತಿಯನ್ನು ಕೇಳುವುದು",
          "ಶುಲ್ಕ ಪಾವತಿಸಲು ಒತ್ತಡ",
        ],
        tips: [
          "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ",
          "ಅಪರಿಚಿತರೊಂದಿಗೆ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳಬೇಡಿ",
          "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿಗೆ ಹಣ ಪಾವತಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ",
        ],
      },
      {
        title: "ಮೊಬೈಲ್ ರಿಚಾರ್ಜ್ / ಡಿಜಿಟಲ್ ಪಾವತಿ ವಂಚನೆಗಳು",
        description:
          "ವಂಚಕರು ನಕಲಿ ಮೊಬೈಲ್ ರಿಚಾರ್ಜ್ ಅಥವಾ ಡಿಜಿಟಲ್ ವಾಲೆಟ್‌ಗಾಗಿ ಗ್ರಾಮೀಣ ಬಳಕೆದಾರರಿಂದ ಹಣ ಪಡೆಯುತ್ತಾರೆ.",
        redFlags: [
          "ತುಂಬಾ ಚೆನ್ನಾದ ರಿಚಾರ್ಜ್ ಆಫರ್‌ಗಳು",
          "ಪಾವತಿಗಾಗಿ ಕರೆ ಅಥವಾ SMS",
          "ಪರಿಶೀಲಿಸದ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು ಅಥವಾ ವೆಬ್‌ಸೈಟ್‌ಗಳು",
        ],
        tips: [
          "ಅಧಿಕೃತ ಅಪ್ಲಿಕೇಶನ್ ಅಥವಾ ಸ್ಟೋರ್ ಬಳಸಿ",
          "ಪಾವತಿಸುವ ಮೊದಲು ಆಫರ್ ಪರಿಶೀಲಿಸಿ",
          "ಸಂದೇಹಾಸ್ಪದ ಸಂದೇಶಗಳನ್ನು ಅಧಿಕಾರಿಗಳಿಗೆ ವರದಿ ಮಾಡಿ",
        ],
      },
    ],
    report: "ವಂಚನೆ ವರದಿ ಮಾಡಿ",
  },
};

const reportLink = "https://www.consumerhelpline.gov.in/";

const RuralScams = () => {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <section className="rural-scams">
      <div className="container">
        {/* Language Buttons */}
        <div className="language-buttons">
          <button className="lang-btn" onClick={() => setLang("en")}>
            English
          </button>
          <button className="lang-btn" onClick={() => setLang("hi")}>
            हिंदी
          </button>
          <button className="lang-btn" onClick={() => setLang("kn")}>
            ಕನ್ನಡ
          </button>
        </div>

        {/* Heading */}
        <h1 className="heading">{t.heading}</h1>
        <p className="subheading">{t.subheading}</p>

        {/* Scams List */}
        {t.scams.map((scam, index) => (
          <div className="scam-card" key={index}>
            <h2>{scam.title}</h2>
            <p>{scam.description}</p>
            <h4>Red Flags:</h4>
            <ul>
              {scam.redFlags.map((flag, i) => (
                <li key={i}>{flag}</li>
              ))}
            </ul>
            <h4>Tips:</h4>
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
            href={reportLink}
            target="_blank"
            rel="noopener noreferrer"
            className="report-btn"
          >
            {t.report}
          </a>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default RuralScams;
