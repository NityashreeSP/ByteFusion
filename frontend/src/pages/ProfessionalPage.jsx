import React, { useState } from "react";
import "./Professionals.css";
import Footer from "../components/Footer"; 
const Professionals = () => {
  const [language, setLanguage] = useState("en");
  

  

  // ✅ Content for 3 languages
  const content = {
    en: {
      heading: "PROFESSIONAL SCAMS",
      subheading: "Stay aware of the most common professional scams and learn how to protect yourself.",
      scams: [
        {
          title: "Job Scams",
          description: "Fake recruiters offering jobs with unreal salaries, asking money upfront, or using unofficial emails.",
          redFlags: [
            "Asking for money to get a job",
            "Too good to be true salaries",
            "Emails from free domains (gmail, yahoo, etc.)",
          ],
          tips: [
            "Verify company details on LinkedIn/official website",
            "Never pay for a job offer",
            "Cross-check recruiter profiles",
          ],
        },
        {
          title: "Internship Scams",
          description: "Fraud internship portals demanding fees for fake training or certificates.",
          redFlags: [
            "No official website or reviews",
            "Only contact via WhatsApp/Telegram",
            "No registered company details",
          ],
          tips: [
            "Check reviews on Glassdoor/LinkedIn",
            "Validate company registration",
            "Avoid paying for internships",
          ],
        },
        {
          title: "Freelance Scams",
          description: "Clients who don’t pay or send phishing links disguised as projects.",
          redFlags: [
            "Requesting free trial work",
            "Payment only after long delays",
            "Suspicious payment methods",
          ],
          tips: [
            "Use trusted platforms (Upwork, Fiverr, etc.)",
            "Always sign contracts",
            "Request partial payment upfront",
          ],
        },
      ],
      reportText: "Report a Scam",
    },

    hi: {
      heading: "व्यावसायिक घोटाले",
      subheading: "सबसे सामान्य व्यावसायिक घोटालों से सावधान रहें और खुद को सुरक्षित रखना सीखें।",
      scams: [
        {
          title: "नकली नौकरी घोटाले",
          description: "नकली रिक्रूटर्स अवास्तविक वेतन के साथ नौकरियां देने का वादा करते हैं और पैसे की मांग करते हैं।",
          redFlags: [
            "नौकरी पाने के लिए पैसे मांगना",
            "बहुत अच्छे लगने वाले वेतन",
            "फ्री डोमेन से ईमेल (gmail, yahoo, आदि)",
          ],
          tips: [
            "कंपनी का विवरण लिंक्डइन/आधिकारिक वेबसाइट पर जांचें",
            "नौकरी के लिए कभी पैसे न दें",
            "रिक्रूटर प्रोफाइल को सत्यापित करें",
          ],
        },
        {
          title: "इंटर्नशिप घोटाले",
          description: "धोखाधड़ी वाले पोर्टल नकली प्रशिक्षण या प्रमाणपत्र के लिए शुल्क मांगते हैं।",
          redFlags: [
            "कोई आधिकारिक वेबसाइट या समीक्षा नहीं",
            "सिर्फ व्हाट्सएप/टेलीग्राम से संपर्क",
            "कंपनी पंजीकरण विवरण का अभाव",
          ],
          tips: [
            "ग्लासडोर/लिंक्डइन पर समीक्षा जांचें",
            "कंपनी पंजीकरण सत्यापित करें",
            "इंटर्नशिप के लिए पैसे न दें",
          ],
        },
        {
          title: "फ्रीलांस घोटाले",
          description: "ग्राहक भुगतान नहीं करते या फिशिंग लिंक भेजते हैं।",
          redFlags: [
            "नि:शुल्क ट्रायल कार्य की मांग",
            "भुगतान में लंबी देरी",
            "संदिग्ध भुगतान विधियां",
          ],
          tips: [
            "विश्वसनीय प्लेटफ़ॉर्म (Upwork, Fiverr, आदि) का उपयोग करें",
            "हमेशा अनुबंध पर हस्ताक्षर करें",
            "आंशिक भुगतान अग्रिम में मांगें",
          ],
        },
      ],
      reportText: "घोटाले की रिपोर्ट करें",
    },

    kn: {
      heading: "ವೃತ್ತಿಪರ ಮೋಸಗಳು",
      subheading: "ಸಾಮಾನ್ಯ ವೃತ್ತಿಪರ ಮೋಸಗಳ ಬಗ್ಗೆ ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ ಮತ್ತು ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸಲು ಕಲಿಯಿರಿ.",
      scams: [
        {
          title: "ನಕಲಿ ಉದ್ಯೋಗ ಮೋಸಗಳು",
          description: "ಅಸಾಧಾರಣ ಸಂಬಳವನ್ನು ಭರವಸೆ ನೀಡುವ ನಕಲಿ ನೇಮಕಾತಿದಾರರು ಮುಂಚಿತ ಹಣವನ್ನು ಕೇಳುತ್ತಾರೆ.",
          redFlags: [
            "ಉದ್ಯೋಗ ಪಡೆಯಲು ಹಣ ಕೇಳುವುದು",
            "ಅಸಾಧಾರಣ ಸಂಬಳದ ಭರವಸೆ",
            "ಉಚಿತ ಡೊಮೇನ್‌ಗಳಿಂದ ಇಮೇಲ್‌ಗಳು (gmail, yahoo, ಇತ್ಯಾದಿ)",
          ],
          tips: [
            "ಕಂಪನಿ ವಿವರಗಳನ್ನು ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ",
            "ಉದ್ಯೋಗಕ್ಕಾಗಿ ಹಣ ಪಾವತಿಸಬೇಡಿ",
            "ನೇಮಕಾತಿದಾರರ ಪ್ರೊಫೈಲ್ ಪರಿಶೀಲಿಸಿ",
          ],
        },
        {
          title: "ಇಂಟರ್ನ್‌ಶಿಪ್ ಮೋಸಗಳು",
          description: "ನಕಲಿ ತರಬೇತಿ ಅಥವಾ ಪ್ರಮಾಣಪತ್ರಕ್ಕಾಗಿ ಶುಲ್ಕ ಕೇಳುವ ಮೋಸ ಪೋರ್ಟಲ್‌ಗಳು.",
          redFlags: [
            "ಯಾವುದೇ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಇಲ್ಲ",
            "ಕೇವಲ ವಾಟ್ಸಾಪ್/ಟೆಲಿಗ್ರಾಂ ಮೂಲಕ ಸಂಪರ್ಕ",
            "ಕಂಪನಿ ನೋಂದಣಿ ವಿವರಗಳ ಕೊರತೆ",
          ],
          tips: [
            "ವಿಮರ್ಶೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
            "ಕಂಪನಿ ನೋಂದಣಿಯನ್ನು ದೃಢೀಕರಿಸಿ",
            "ಇಂಟರ್ನ್‌ಶಿಪ್‌ಗಾಗಿ ಹಣ ಪಾವತಿಸಬೇಡಿ",
          ],
        },
        {
          title: "ಫ್ರೀಲಾನ್ಸ್ ಮೋಸಗಳು",
          description: "ಗ್ರಾಹಕರು ಪಾವತಿಸದೇ ಇರುವುದಿಲ್ಲ ಅಥವಾ ಫಿಶಿಂಗ್ ಲಿಂಕ್‌ಗಳನ್ನು ಕಳುಹಿಸುತ್ತಾರೆ.",
          redFlags: [
            "ಉಚಿತ ಪ್ರಯೋಗಾತ್ಮಕ ಕೆಲಸದ ಬೇಡಿಕೆ",
            "ಪಾವತಿಯಲ್ಲಿ ವಿಳಂಬ",
            "ಸಂದೇಹಾಸ್ಪದ ಪಾವತಿ ವಿಧಾನಗಳು",
          ],
          tips: [
            "ನಂಬಲರ್ಹ ವೇದಿಕೆಗಳನ್ನು ಬಳಸಿರಿ",
            "ಒಪ್ಪಂದಕ್ಕೆ ಸಹಿ ಹಾಕಿ",
            "ಭಾಗಶಃ ಪಾವತಿಯನ್ನು ಮುಂಚಿತವಾಗಿ ಕೇಳಿ",
          ],
        },
      ],
      reportText: "ಮೋಸವನ್ನು ವರದಿ ಮಾಡಿ",
    },
  };

  const { heading, subheading, scams, reportText } = content[language];
 

    


  return (
    <section className="professionals" id="professionals">
      <div className="container mx-auto px-6">
        {/* Language Switcher */}
        <div className="language-switcher flex justify-center gap-4 mb-6">
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
        <div className="heading_section text-center mb-10">
          <h1 className="text-4xl font-extrabold text-red-700 tracking-wide mb-4">
            {heading}
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>

        {/* Scam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scams.map((scam, index) => (
            <div
              key={index}
              className="scam-card bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition duration-300 p-6 flex flex-col"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {scam.title}
              </h2>
              <p className="text-gray-700 mb-4">{scam.description}</p>

              <h3 className="font-semibold text-red-500 mb-1">🚩 Red Flags:</h3>
              <ul className="list-disc ml-5 mb-4 text-gray-700">
                {scam.redFlags.map((flag, i) => (
                  <li key={i}>{flag}</li>
                ))}
              </ul>

              <h3 className="font-semibold text-green-600 mb-1">
                ✅ Prevention Tips:
              </h3>
              <ul className="list-disc ml-5 text-gray-700">
                {scam.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        


        {/* Report Scam Button */}
        <div className="text-center mt-12">
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-red-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300"
          >
            {reportText}
          </a>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Professionals;
