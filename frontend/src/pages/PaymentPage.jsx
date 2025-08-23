import React, { useState } from "react";
import "./payment.css";
import Footer from "../components/Footer"; 

const translations = {
  en: {
    heading: "UPI & OTP Fraud Awareness",
    quote: `"Your bank will never ask for OTP or UPI PIN. Stay alert, stay safe."`,
    redFlags: "Red Flags:",
    tips: "Prevention Tips:",
    report: "Report a Scam",
    scams: [
      {
        title: "Fake OTP Messages",
        description: "Never share your OTP with anyone, even if they claim to be from your bank.",
        redFlags: [
          "OTP requests over phone or WhatsApp",
          "Urgency or threats to take action immediately",
          "Unsolicited messages",
        ],
        tips: [
          "Always verify the sender before sharing OTP",
          "Never disclose OTP to anyone, even bank officials",
          "Enable two-factor authentication for added security",
        ],
      },
      {
        title: "UPI Fraudulent Requests",
        description: "Avoid approving UPI payment requests from unknown contacts.",
        redFlags: [
          "Unexpected payment requests",
          "Low trust in sender",
          "Requests for small amounts to test account",
        ],
        tips: [
          "Do not accept requests from unknown contacts",
          "Check transaction details before approval",
          "Use UPI PIN securely and never share it",
        ],
      },
      {
        title: "Phishing Links",
        description: "Do not click on suspicious links that ask for banking credentials or OTPs.",
        redFlags: [
          "Shortened URLs",
          "Emails/SMS pretending to be bank",
          "Spelling mistakes or poor formatting",
        ],
        tips: [
          "Avoid clicking on suspicious links",
          "Always type the bank URL manually",
          "Report phishing attempts to your bank",
        ],
      },
      {
        title: "Fake Payment Links / QR Code Scams",
        description:
          "Scammers share fake UPI links or QR codes claiming refunds, offers, or payments. Money gets debited or credentials stolen.",
        redFlags: [
          "Unexpected links in SMS, WhatsApp, or email",
          "Promises of rewards, cashbacks, or refunds",
        ],
        tips: [
          "Only scan QR codes from trusted sources",
          "Verify the UPI ID before sending money",
        ],
      },
      {
        title: "Overpayment / Refund Scams",
        description:
          "Scammer sends a fake payment and asks you to refund the extra amount. Original payment often doesn't exist.",
        redFlags: [
          "Stranger asking to refund a 'mistaken' payment",
          "Urgent request to transfer money",
        ],
        tips: [
          "Verify the payment in your bank app before sending anything back",
          "Avoid sending money to unknown persons",
        ],
      },
    ],
  },

  hi: {
    heading: "यूपीआई और ओटीपी धोखाधड़ी जागरूकता",
    quote: `"आपका बैंक कभी भी ओटीपी या यूपीआई पिन नहीं मांगेगा। सतर्क रहें, सुरक्षित रहें।"`,
    redFlags: "संदेह के संकेत:",
    tips: "रोकथाम के सुझाव:",
    report: "धोखाधड़ी की रिपोर्ट करें",
    scams: [
      {
        title: "फर्जी ओटीपी संदेश",
        description: "अपना ओटीपी किसी के साथ साझा न करें, भले ही वे आपके बैंक से होने का दावा करें।",
        redFlags: [
          "फोन या व्हाट्सएप पर ओटीपी की मांग",
          "तुरंत कार्रवाई के लिए दबाव",
          "असंबंधित संदेश",
        ],
        tips: [
          "ओटीपी साझा करने से पहले प्रेषक की पुष्टि करें",
          "किसी को भी ओटीपी न दें, बैंक अधिकारियों को भी नहीं",
          "दो-स्तरीय प्रमाणीकरण सक्षम करें",
        ],
      },
      {
        title: "यूपीआई धोखाधड़ी अनुरोध",
        description: "अज्ञात संपर्कों से यूपीआई भुगतान अनुरोध को स्वीकृत करने से बचें।",
        redFlags: [
          "अनपेक्षित भुगतान अनुरोध",
          "प्रेषक पर कम भरोसा",
          "खाते की जांच के लिए छोटे भुगतान के अनुरोध",
        ],
        tips: [
          "अज्ञात संपर्कों से अनुरोध स्वीकार न करें",
          "अनुमोदन से पहले लेन-देन विवरण जांचें",
          "यूपीआई पिन सुरक्षित रखें और साझा न करें",
        ],
      },
    ],
  },

  kn: {
    heading: "ಯುಪಿಐ ಮತ್ತು OTP ವಂಚನೆ ಜಾಗೃತಿ",
    quote: `"ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಎಂದಿಗೂ OTP ಅಥವಾ UPI ಪಿನ್ ಕೇಳುವುದಿಲ್ಲ. ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ, ಸುರಕ್ಷಿತವಾಗಿರಿ."`,
    redFlags: "ಎಚ್ಚರಿಕೆ ಸೂಚನೆಗಳು:",
    tips: "ತಡೆಯುವ ಸಲಹೆಗಳು:",
    report: "ವಂಚನೆ ವರದಿ ಮಾಡಿ",
    scams: [
      {
        title: "ನಕಲಿ OTP ಸಂದೇಶಗಳು",
        description:
          "ನಿಮ್ಮ OTP ಯನ್ನು ಯಾರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ, ಅವರು ನಿಮ್ಮ ಬ್ಯಾಂಕ್‌ನವರು ಎಂದು ಹೇಳಿದರೂ ಕೂಡ.",
        redFlags: [
          "ಫೋನ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮೂಲಕ OTP ಕೇಳುವುದು",
          "ತಕ್ಷಣ ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಒತ್ತಡ",
          "ಅನಗತ್ಯ ಸಂದೇಶಗಳು",
        ],
        tips: [
          "OTP ಹಂಚುವ ಮೊದಲು ಕಳುಹಿಸಿದವರನ್ನು ಪರಿಶೀಲಿಸಿ",
          "OTP ಅನ್ನು ಯಾರಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ, ಬ್ಯಾಂಕ್ ಅಧಿಕಾರಿಗಳಿಗೆ ಸಹ",
          "ಹೆಚ್ಚುವರಿ ಭದ್ರತೆಗೆ ಎರಡು ಹಂತದ ದೃಢೀಕರಣ ಸಕ್ರಿಯಗೊಳಿಸಿ",
        ],
      },
      {
        title: "UPI ವಂಚನೆ ವಿನಂತಿಗಳು",
        description:
          "ಅಪರಿಚಿತ ಸಂಪರ್ಕಗಳಿಂದ UPI ಪಾವತಿ ವಿನಂತಿಗಳನ್ನು ಅನುಮೋದಿಸಲು ತಪ್ಪಿಸಿ.",
        redFlags: [
          "ಅನಿರೀಕ್ಷಿತ ಪಾವತಿ ವಿನಂತಿಗಳು",
          "ಕಳುಹಿಸಿದವರ ಮೇಲೆ ವಿಶ್ವಾಸ ಕಡಿಮೆ",
          "ಖಾತೆ ಪರೀಕ್ಷಿಸಲು ಸಣ್ಣ ಮೊತ್ತದ ವಿನಂತಿಗಳು",
        ],
        tips: [
          "ಅಪರಿಚಿತರಿಂದ ಬಂದ ವಿನಂತಿಗಳನ್ನು ಸ್ವೀಕರಿಸಬೇಡಿ",
          "ಅನುಮೋದನೆಗೆ ಮೊದಲು ವ್ಯವಹಾರದ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
          "UPI ಪಿನ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಇಡಿ ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಬೇಡಿ",
        ],
      },
    ],
  },
};

const PaymentPage = () => {
  const [lang, setLang] = useState("en");

  return (
    <section className="upiotp">
      <div className="container-upiotp">
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
              boxShadow: lang === "en" ? "0 4px 10px rgba(106,17,203,0.5)" : "none",
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
              boxShadow: lang === "hi" ? "0 4px 10px rgba(106,17,203,0.5)" : "none",
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
              boxShadow: lang === "kn" ? "0 4px 10px rgba(106,17,203,0.5)" : "none",
            }}
          >
            ಕನ್ನಡ
          </button>
        </div>

        <h1 className="heading-upiotp">{translations[lang].heading}</h1>
        <p className="quote-upiotp">{translations[lang].quote}</p>

        {translations[lang].scams.map((scam, index) => (
          <div key={index} className="scam-card-upiotp">
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

        <a
          href="https://cybercrime.gov.in"
          className="report-btn-upiotp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translations[lang].report}
        </a>
      </div>
      <Footer/>
    </section>
  );
};

export default PaymentPage;
