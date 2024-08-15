import { useCallback, useEffect, useState } from "react";
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

  TagManager.initialize({ gtmId: "GTM-TJBP2G8Q" });
};

const updateDataLayer = (consent) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "cookieConsentUpdate",
      cookieConsent: consent,
      ad_user_data: consent,
      ad_personalization: consent,
      ad_storage: consent,
      analytics_storage: consent,
      personalization_storage: consent,
      functionality_storage: consent,
      security_storage: consent,
    });
  }
};

const useGTM = () => {
  const [consentGiven, setConsentGiven] = useState(() => {
    return localStorage.getItem("userConsent") === CONSENT_GRANTED;
  });

  useEffect(() => {
    if (consentGiven) {
      initializeGTM();
      updateDataLayer(CONSENT_GRANTED);
    }
  }, [consentGiven]);

  const handleConsent = useCallback((consent) => {
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
      updateDataLayer(CONSENT_GRANTED);
    }
  }, []);

  return { consentGiven, handleConsent };
};

export default useGTM;
