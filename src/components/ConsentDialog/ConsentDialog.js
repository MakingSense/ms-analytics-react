import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useEffect, useState } from "react";

const ConsentDialog = ({ onConsent }) => {
  const [open, setOpen] = useState(true);

  const handleAgree = () => {
    localStorage.setItem("userConsent", "granted");
    onConsent("granted");
    setOpen(false);
  };

  const handleDisagree = () => {
    localStorage.setItem("userConsent", "denied");
    onConsent("denied");
    setOpen(false);
  };

  useEffect(() => {
    const consent = localStorage.getItem("userConsent");
    if (consent !== null) {
      setOpen(false);
      onConsent(consent === "granted");
    }
  }, [onConsent]);

  return (
    <Dialog open={open}>
      <DialogTitle>Cookie Consent</DialogTitle>
      <DialogContent>
        <DialogContentText>
          We use cookies to enhance your experience and allow data analytics. Do
          you accept the use of cookies?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDisagree} color="primary">
          I Decline
        </Button>
        <Button onClick={handleAgree} color="primary" autoFocus>
          I Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConsentDialog;
