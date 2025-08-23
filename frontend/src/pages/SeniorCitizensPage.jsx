import React, { useState } from "react";
import './Seniors.css';
import Footer from "../components/Footer"; 

const SeniorCitizensPage = () => {
  const [language, setLanguage] = useState("en"); // Default English

  // Content in 3 languages
  const content = {
    en: {
      heading: "SENIOR CITIZEN SCAMS",
      subheading: "Elderly people are often targeted by fraudsters. Be alert and safeguard your money.",
      scams: [
        {
          title: "Fake Lottery/Prize Scams",
          description:
            "Fraud calls or letters claim you’ve won a lottery but demand fees or bank details.",
          redFlags: [
            "Unsolicited lottery/prize notifications",
            "Asking for advance payment",
            "Pressure to act quickly",
          ],
          tips: [
            "Ignore unknown calls/messages",
            "Lotteries never ask for fees",
            "Consult family before acting",
          ],
        },
        {
          title: "Health Insurance Scams",
          description:
            "Scammers sell fake health insurance policies to elderly individuals.",
          redFlags: [
            "No official documents",
            "Payment demanded instantly",
            "Too-good-to-be-true benefits",
          ],
          tips: [
            "Buy from trusted agents only",
            "Verify with IRDA website",
            "Check company registration",
          ],
        },
        {
          title: "Bank OTP/UPI Frauds",
          description:
            "Fraudsters pretend to be bank officials asking for OTP or UPI PIN.",
          redFlags: [
            "Calls asking for confidential details",
            "Threats of blocking account",
            "Links redirecting to unknown apps",
          ],
          tips: [
            "Never share OTP or PIN",
            "Banks never ask for such info",
            "Contact bank via official helpline",
          ],
        },
        {
          title: "Fake Tech Support Calls",
          description:
            "Scammers pose as tech support, asking seniors to download apps that steal data.",
          redFlags: [
            "Unsolicited tech support calls",
            "Requests to install unknown apps",
            "Remote access demands",
          ],
          tips: [
            "Disconnect unknown calls",
            "Install apps only from official stores",
            "Ask younger family members before acting",
          ],
        },
      ],
      report: "Report a Scam"
    },
    hi: {
      heading: "वरिष्ठ नागरिकों से जुड़े धोखे",
      subheading: "बुजुर्ग लोगों को अक्सर ठग निशाना बनाते हैं। सतर्क रहें और अपनी धनराशि सुरक्षित रखें।",
      scams: [
        {
          title: "नकली लॉटरी/इनाम घोटाले",
          description:
            "ठग कॉल या पत्र के माध्यम से दावा करते हैं कि आपने लॉटरी जीती है, लेकिन शुल्क या बैंक विवरण मांगते हैं।",
          redFlags: [
            "अवांछित लॉटरी/इनाम सूचनाएँ",
            "अग्रिम भुगतान की मांग",
            "जल्दी करने का दबाव",
          ],
          tips: [
            "अज्ञात कॉल/संदेशों को अनदेखा करें",
            "लॉटरी कभी शुल्क नहीं मांगती",
            "कार्रवाई से पहले परिवार से सलाह लें",
          ],
        },
        {
          title: "स्वास्थ्य बीमा घोटाले",
          description:
            "ठग बुजुर्गों को नकली स्वास्थ्य बीमा पॉलिसी बेचते हैं।",
          redFlags: [
            "कोई आधिकारिक दस्तावेज नहीं",
            "तुरंत भुगतान की मांग",
            "बहुत अच्छे लाभों का दावा",
          ],
          tips: [
            "सिर्फ भरोसेमंद एजेंट से खरीदें",
            "IRDA वेबसाइट पर सत्यापित करें",
            "कंपनी पंजीकरण जांचें",
          ],
        },
        {
          title: "बैंक ओटीपी/यूपीआई धोखाधड़ी",
          description:
            "ठग बैंक अधिकारी बनकर ओटीपी या यूपीआई पिन मांगते हैं।",
          redFlags: [
            "गोपनीय जानकारी के लिए कॉल",
            "खाते को ब्लॉक करने की धमकी",
            "अज्ञात ऐप्स पर रीडायरेक्ट करने वाले लिंक",
          ],
          tips: [
            "ओटीपी या पिन कभी साझा न करें",
            "बैंक कभी ऐसी जानकारी नहीं मांगते",
            "आधिकारिक हेल्पलाइन से संपर्क करें",
          ],
        },
        {
          title: "नकली टेक सपोर्ट कॉल",
          description:
            "ठग टेक सपोर्ट बनकर वरिष्ठ नागरिकों को डेटा चुराने वाले ऐप डाउनलोड करने को कहते हैं।",
          redFlags: [
            "अवांछित टेक सपोर्ट कॉल",
            "अज्ञात ऐप इंस्टॉल करने का अनुरोध",
            "रिमोट एक्सेस की मांग",
          ],
          tips: [
            "अज्ञात कॉल काट दें",
            "केवल आधिकारिक स्टोर से ऐप इंस्टॉल करें",
            "कार्रवाई से पहले परिवार से सलाह लें",
          ],
        },
      ],
      report: "धोखाधड़ी की रिपोर्ट करें"
    },
    kn: {
      heading: "ಹಿರಿಯ ನಾಗರಿಕರ ಮೋಸಗಳು",
      subheading: "ಹಿರಿಯರನ್ನು ಹೆಚ್ಚು ಬಾರಿ ಮೋಸಗಾರರು ಗುರಿಯಾಗಿಸುತ್ತಾರೆ. ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ ಮತ್ತು ನಿಮ್ಮ ಹಣವನ್ನು ರಕ್ಷಿಸಿ.",
      scams: [
        {
          title: "ನಕಲಿ ಲಾಟರಿ/ಪ್ರಶಸ್ತಿ ಮೋಸಗಳು",
          description:
            "ಮೋಸಗಾರರು ಲಾಟರಿ ಗೆದ್ದಿದ್ದೀರಿ ಎಂದು ಕರೆ/ಪತ್ರ ಕಳುಹಿಸಿ ಶುಲ್ಕ ಅಥವಾ ಬ್ಯಾಂಕ್ ವಿವರ ಕೇಳುತ್ತಾರೆ.",
          redFlags: [
            "ಅನಿರೀಕ್ಷಿತ ಲಾಟರಿ/ಪ್ರಶಸ್ತಿ ಮಾಹಿತಿ",
            "ಮುಂಗಡ ಹಣದ ಬೇಡಿಕೆ",
            "ತುರ್ತು ಕ್ರಮಕ್ಕೆ ಒತ್ತಡ",
          ],
          tips: [
            "ಅಪರಿಚಿತ ಕರೆ/ಸಂದೇಶಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ",
            "ಲಾಟರಿ ಎಂದಿಗೂ ಶುಲ್ಕ ಕೇಳುವುದಿಲ್ಲ",
            "ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಕುಟುಂಬದ ಸಲಹೆ ಪಡೆಯಿರಿ",
          ],
        },
        {
          title: "ಆರೋಗ್ಯ ವಿಮಾ ಮೋಸಗಳು",
          description:
            "ಮೋಸಗಾರರು ಹಿರಿಯರಿಗೆ ನಕಲಿ ಆರೋಗ್ಯ ವಿಮಾ ಪಾಲಿಸಿಗಳನ್ನು ಮಾರುತ್ತಾರೆ.",
          redFlags: [
            "ಅಧಿಕೃತ ದಾಖಲೆಗಳಿಲ್ಲ",
            "ತಕ್ಷಣ ಪಾವತಿ ಬೇಡಿಕೆ",
            "ಅತ್ಯಧಿಕ ಲಾಭದ ಭರವಸೆ",
          ],
          tips: [
            "ವಿಶ್ವಾಸಾರ್ಹ ಏಜೆಂಟ್‌ಗಳಿಂದ ಮಾತ್ರ ಖರೀದಿಸಿ",
            "IRDA ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ",
            "ಕಂಪನಿ ನೋಂದಣಿ ಪರಿಶೀಲಿಸಿ",
          ],
        },
        {
          title: "ಬ್ಯಾಂಕ್ OTP/UPI ಮೋಸಗಳು",
          description:
            "ಮೋಸಗಾರರು ಬ್ಯಾಂಕ್ ಅಧಿಕಾರಿಗಳಂತೆ ನಟಿಸಿ OTP ಅಥವಾ UPI ಪಿನ್ ಕೇಳುತ್ತಾರೆ.",
          redFlags: [
            "ಗೌಪ್ಯ ಮಾಹಿತಿಗಾಗಿ ಕರೆಗಳು",
            "ಖಾತೆ ತಡೆಯುವ ಬೆದರಿಕೆ",
            "ಅಪರಿಚಿತ ಆ್ಯಪ್‌ಗಳಿಗೆ ದಾರಿ ತೋರಿಸುವ ಲಿಂಕ್‌ಗಳು",
          ],
          tips: [
            "OTP ಅಥವಾ ಪಿನ್ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ",
            "ಬ್ಯಾಂಕ್ ಎಂದಿಗೂ ಈ ಮಾಹಿತಿಯನ್ನು ಕೇಳುವುದಿಲ್ಲ",
            "ಅಧಿಕೃತ ಸಹಾಯವಾಣಿ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ",
          ],
        },
        {
          title: "ನಕಲಿ ಟೆಕ್ ಸಹಾಯ ಕರೆಗಳು",
          description:
            "ಮೋಸಗಾರರು ಟೆಕ್ ಸಹಾಯ ಎಂದು ಹೇಳಿ, ಡೇಟಾ ಕಳವು ಮಾಡಲು ಆ್ಯಪ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಹೇಳುತ್ತಾರೆ.",
          redFlags: [
            "ಅನಿರೀಕ್ಷಿತ ಟೆಕ್ ಸಹಾಯ ಕರೆಗಳು",
            "ಅಪರಿಚಿತ ಆ್ಯಪ್‌ಗಳನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಲು ವಿನಂತಿ",
            "ರಿಮೋಟ್ ಆಕ್ಸೆಸ್ ಬೇಡಿಕೆ",
          ],
          tips: [
            "ಅಪರಿಚಿತ ಕರೆಗಳನ್ನು ಕಡಿತಗೊಳಿಸಿ",
            "ಆಧಿಕೃತ ಸ್ಟೋರ್‌ನಿಂದ ಮಾತ್ರ ಆ್ಯಪ್‌ಗಳನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ",
            "ಕುಟುಂಬದ ಸಲಹೆ ಪಡೆಯಿರಿ",
          ],
        },
      ],
      report: "ಮೋಸದ ವರದಿ ಮಾಡಿ"
    }
  };

  const { heading, subheading, scams, report } = content[language];

  return (
    <section className="seniors">
      <div className="container-seniors">
        {/* Language Buttons */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button onClick={() => setLanguage("en")} className="lang-btn">English</button>
          <button onClick={() => setLanguage("hi")} className="lang-btn">हिंदी</button>
          <button onClick={() => setLanguage("kn")} className="lang-btn">ಕನ್ನಡ</button>
        </div>

        <h1 className="heading-seniors">{heading}</h1>
        <p className="subheading-seniors">{subheading}</p>

        {scams.map((scam, index) => (
          <div key={index} className="scam-card-seniors">
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

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="report-btn"
          >
            {report}
          </a>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default SeniorCitizensPage;
