import React, { useState } from "react";
import "./Home_makers.css";


const translations = {
  en: {
    heading: "HOME MAKER SCAMS",
    subheading:
      "Homemakers are often targeted with scams that seem trustworthy. Here are some common frauds and how to stay safe.",
    redFlags: "🚩 Red Flags:",
    tips: "✅ Tips:",
    report: "🚨 Report a Fraud",
    scams: [
      {
        title: "Online Shopping Frauds",
        description:
          "Fraudsters trick homemakers with fake shopping websites or WhatsApp sellers offering clothes, utensils, or decor items at cheap rates.",
        redFlags: [
          "No Cash on Delivery option",
          "Too-good-to-be-true prices",
          "No proper return/refund policy",
        ],
        tips: [
          "Shop only from trusted websites",
          "Check customer reviews",
          "Avoid paying in advance to unknown sellers",
        ],
      },
      {
        title: "Investment & Gold Scheme Frauds",
        description:
          "Scammers lure homemakers with fake chit funds or gold investment schemes, promising high returns.",
        redFlags: [
          "No proper company registration",
          "High returns promised quickly",
          "Verbal promises without receipts",
        ],
        tips: [
          "Invest only through reputed banks/companies",
          "Ask for legal documents",
          "Don’t trust verbal agreements",
        ],
      },
    ],
  },

  hi: {
    heading: "गृहिणी धोखाधड़ी",
    subheading:
      "गृहिणियों को अक्सर भरोसेमंद लगने वाले घोटालों का निशाना बनाया जाता है। यहां कुछ सामान्य धोखाधड़ी और उनसे बचने के तरीके दिए गए हैं।",
    redFlags: "🚩 संदेह के संकेत:",
    tips: "✅ सुझाव:",
    report: "🚨 धोखाधड़ी की रिपोर्ट करें",
    scams: [
      {
        title: "ऑनलाइन शॉपिंग धोखाधड़ी",
        description:
          "धोखेबाज नकली शॉपिंग वेबसाइटों या व्हाट्सएप विक्रेताओं के माध्यम से गृहिणियों को सस्ते दामों पर कपड़े, बर्तन या डेकोर आइटम का लालच देते हैं।",
        redFlags: [
          "कैश ऑन डिलीवरी का विकल्प नहीं",
          "बहुत सस्ते दाम",
          "कोई सही रिटर्न/रिफंड नीति नहीं",
        ],
        tips: [
          "सिर्फ भरोसेमंद वेबसाइटों से खरीदारी करें",
          "ग्राहक समीक्षाएं जांचें",
          "अज्ञात विक्रेताओं को अग्रिम भुगतान न करें",
        ],
      },
      {
        title: "निवेश और गोल्ड स्कीम धोखाधड़ी",
        description:
          "धोखेबाज गृहिणियों को फर्जी चिट फंड या गोल्ड निवेश योजनाओं से लुभाते हैं, जल्दी उच्च रिटर्न का वादा करते हैं।",
        redFlags: [
          "कंपनी का पंजीकरण नहीं",
          "जल्दी उच्च रिटर्न का वादा",
          "रसीदों के बिना मौखिक वादे",
        ],
        tips: [
          "सिर्फ विश्वसनीय बैंक/कंपनियों के माध्यम से निवेश करें",
          "कानूनी दस्तावेज मांगें",
          "मौखिक समझौतों पर भरोसा न करें",
        ],
      },
    ],
  },

  kn: {
    heading: "ಗೃಹಿಣಿಯರ ವಂಚನೆಗಳು",
    subheading:
      "ಗೃಹಿಣಿಯರನ್ನು ನಂಬಿಕೆಗೆ ಒಳಗಾಗುವ ವಂಚನೆಗಳಿಂದ ಗುರಿಯಾಗಿಸುತ್ತಾರೆ. ಇಲ್ಲಿವೆ ಕೆಲವು ಸಾಮಾನ್ಯ ವಂಚನೆಗಳು ಮತ್ತು ಅವನ್ನು ತಪ್ಪಿಸುವ ಮಾರ್ಗಗಳು.",
    redFlags: "🚩 ಎಚ್ಚರಿಕೆ ಸೂಚನೆಗಳು:",
    tips: "✅ ಸಲಹೆಗಳು:",
    report: "🚨 ವಂಚನೆಯನ್ನು ವರದಿ ಮಾಡಿ",
    scams: [
      {
        title: "ಆನ್‌ಲೈನ್ ಶಾಪಿಂಗ್ ವಂಚನೆಗಳು",
        description:
          "ವಂಚಕರು ನಕಲಿ ಶಾಪಿಂಗ್ ವೆಬ್‌ಸೈಟ್‌ಗಳು ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾರಾಟಗಾರರ ಮೂಲಕ ಬಟ್ಟೆ, ಪಾತ್ರೆಗಳು ಅಥವಾ ಅಲಂಕಾರಿಕ ವಸ್ತುಗಳನ್ನು ಕಡಿಮೆ ಬೆಲೆಯಲ್ಲಿ ನೀಡುವ ಮೂಲಕ ಗೃಹಿಣಿಯರನ್ನು ಮೋಸಗೊಳಿಸುತ್ತಾರೆ.",
        redFlags: [
          "ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ ಆಯ್ಕೆ ಇಲ್ಲ",
          "ಅತಿಯಾಗಿ ಕಡಿಮೆ ಬೆಲೆ",
          "ಸರಿಯಾದ ವಾಪಸಿ/ಹಣ ಮರುಪಾವತಿ ನೀತಿ ಇಲ್ಲ",
        ],
        tips: [
          "ವಿಶ್ವಾಸಾರ್ಹ ವೆಬ್‌ಸೈಟ್‌ಗಳಿಂದ ಮಾತ್ರ ಖರೀದಿಸಿ",
          "ಗ್ರಾಹಕರ ವಿಮರ್ಶೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
          "ಅಪರಿಚಿತ ಮಾರಾಟಗಾರರಿಗೆ ಮುಂಗಡ ಪಾವತಿ ಬೇಡ",
        ],
      },
      {
        title: "ಹೂಡಿಕೆ ಮತ್ತು ಚಿನ್ನದ ಯೋಜನೆ ವಂಚನೆಗಳು",
        description:
          "ವಂಚಕರು ನಕಲಿ ಚಿಟ್ ಫಂಡ್ ಅಥವಾ ಚಿನ್ನದ ಹೂಡಿಕೆ ಯೋಜನೆಗಳ ಮೂಲಕ ಗೃಹಿಣಿಯರನ್ನು ಆಕರ್ಷಿಸಿ, ಶೀಘ್ರದಲ್ಲಿ ಹೆಚ್ಚಿನ ಲಾಭವನ್ನು ಭರವಸೆ ನೀಡುತ್ತಾರೆ.",
        redFlags: [
          "ಕಂಪನಿಯ ಸರಿಯಾದ ನೋಂದಣಿ ಇಲ್ಲ",
          "ತ್ವರಿತವಾಗಿ ಹೆಚ್ಚಿನ ಲಾಭದ ಭರವಸೆ",
          "ರಸೀದಿ ಇಲ್ಲದೆ ಬಾಯಾರಿತ ಒಪ್ಪಂದಗಳು",
        ],
        tips: [
          "ಮಾತ್ರ ವಿಶ್ವಾಸಾರ್ಹ ಬ್ಯಾಂಕ್/ಕಂಪನಿಗಳ ಮೂಲಕ ಹೂಡಿಕೆ ಮಾಡಿ",
          "ಕಾನೂನು ದಾಖಲೆಗಳನ್ನು ಕೇಳಿ",
          "ಮೌಖಿಕ ಒಪ್ಪಂದಗಳನ್ನು ನಂಬಬೇಡಿ",
        ],
      },
    ],
  },
};



const HomemakersPage = () => {
  const [lang, setLang] = useState("en");
  const reportLink = "https://cybercrime.gov.in";

  return (
    <section className="homemakers">
      <div className="container">
        {/* Language Buttons */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            onClick={() => setLang("en")}
            style={{
              background: lang === "en" ? "#6a11cb" : "#f1f1f1",
              color: lang === "en" ? "#fff" : "#333",
              border: "none",
              padding: "10px 15px",
              margin: "5px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow:
                lang === "en" ? "0 4px 10px rgba(106,17,203,0.5)" : "none",
            }}
          >
            English
          </button>
          <button
            onClick={() => setLang("hi")}
            style={{
              background: lang === "hi" ? "#6a11cb" : "#f1f1f1",
              color: lang === "hi" ? "#fff" : "#333",
              border: "none",
              padding: "10px 15px",
              margin: "5px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow:
                lang === "hi" ? "0 4px 10px rgba(106,17,203,0.5)" : "none",
            }}
          >
            हिंदी
          </button>
          <button
            onClick={() => setLang("kn")}
            style={{
              background: lang === "kn" ? "#6a11cb" : "#f1f1f1",
              color: lang === "kn" ? "#fff" : "#333",
              border: "none",
              padding: "10px 15px",
              margin: "5px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow:
                lang === "kn" ? "0 4px 10px rgba(106,17,203,0.5)" : "none",
            }}
          >
            ಕನ್ನಡ
          </button>
        </div>

        {/* Heading */}
        <div className="heading_section">
          <h1>{translations[lang].heading}</h1>
          <p>{translations[lang].subheading}</p>
        </div>

        {/* Scams */}
        {translations[lang].scams.map((scam, index) => (
          <div key={index} className="scam-card">
            <h2>{scam.title}</h2>
            <p>{scam.description}</p>
            <h3>{translations[lang].redFlags}</h3>
            <ul>
              {scam.redFlags.map((flag, i) => (
                <li key={i}>{flag}</li>
              ))}
            </ul>
            <h3>{translations[lang].tips}</h3>
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
            {translations[lang].report}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomemakersPage;
