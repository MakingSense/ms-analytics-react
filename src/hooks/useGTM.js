import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";

const CONSENT_GRANTED = "granted";
const CONSENT_DENIED = "denied";

const initializeGTM = () => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  window.dataLayer.push({
    event: "gtm.js",
    "gtm.start": new Date().getTime(),
    "gtm.uniqueEventId": 0,
  });

  const tagManagerArgs = {
    gtmId: "GTM-TJBP2G8Q",
  };
  TagManager.initialize(tagManagerArgs);
};

const useGTM = () => {
  const [consentGiven, setConsentGiven] = useState(() => {
    return localStorage.getItem("userConsent") === CONSENT_GRANTED;
  });

  useEffect(() => {
    if (consentGiven) {
      initializeGTM();
      if (typeof window.dataLayer !== "undefined") {
        window.dataLayer.push({
          event: "cookieConsentUpdate",
          cookieConsent: CONSENT_GRANTED,
          ad_user_data: "enabled",
          ad_personalization: "enabled",
          ad_storage: CONSENT_GRANTED,
          analytics_storage: CONSENT_GRANTED,
          personalization_storage: CONSENT_GRANTED,
          functionality_storage: CONSENT_GRANTED,
          security_storage: CONSENT_GRANTED,
        });
      }
    }
  }, [consentGiven]);

  const handleConsent = (consent) => {
    const consentStatus = consent === CONSENT_GRANTED;
    setConsentGiven(consentStatus);

    localStorage.setItem(
      "userConsent",
      consentStatus ? CONSENT_GRANTED : CONSENT_DENIED
    );

    if (consentStatus) {
      if (typeof window.dataLayer === "undefined") {
        window.dataLayer = [];
      }

      window.dataLayer.push({
        event: "cookieConsentUpdate",
        cookieConsent: CONSENT_GRANTED,
        ad_user_data: "enabled",
        ad_personalization: "enabled",
        ad_storage: CONSENT_GRANTED,
        analytics_storage: CONSENT_GRANTED,
        personalization_storage: CONSENT_GRANTED,
        functionality_storage: CONSENT_GRANTED,
        security_storage: CONSENT_GRANTED,
      });
    }
  };

  return { consentGiven, handleConsent };
};

export default useGTM;
