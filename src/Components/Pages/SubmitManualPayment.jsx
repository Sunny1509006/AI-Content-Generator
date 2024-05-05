import React, { useContext, useEffect, useState } from "react";
import PrivatePageLayout from "../layouts/PrivatePageLayout";
import { Helmet } from "react-helmet";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useFetchSubscriptionPackages from "../../hooks/useFetchSubscriptionPackages";
import { MANUAL_PAYMENT_METHODS } from "../../utils/constants";
import AppButton from "../Common/AppButton";
import useAddPayment from "../../hooks/useAddPayment";
import { AuthContext } from "../../AuthProvider";
import useQuery from "../../hooks/useQuery";

const getBkashPaymentProcedure = (moneyAmount) => {
  return [
    "Open the bKash app and log in with your credentials.",
    'Look for the "Send Money" option.',
    "Choose the send money option for sending money to another bKash account.",
    `Enter ${MANUAL_PAYMENT_METHODS.BKASH.number} in the recipient's mobile number field.`,
    `Input ${moneyAmount} BDT as the amount of money.`,
    "Add a reference (optional) to specify the purpose of the transfer.",
    "Confirm the transaction with your bKash PIN.",
    "After a successfull bkash payment you will get a Transaction ID (TxnID) in the app.",
    "Submit that Transaction ID in the following section.",
  ];
};

const getNagadPaymentProcedure = (moneyAmount) => {
  return [
    "Open the Nagad app on your smartphone and log in with your credentials.",
    'Look for the option labeled "Send Money".',
    `Enter ${MANUAL_PAYMENT_METHODS.BKASH.number} in the recipient's mobile number field.`,
    `Input ${moneyAmount} BDT as the amount of money.`,
    "Add a reference (optional) to specify the purpose of the transfer.",
    "Double-check the recipient's number, amount, and reference.",
    "Enter your Nagad Mobile Menu PIN (MM PIN) to confirm the transaction.",
    'Tap "Send" or a similar confirmation button.',
    "After a successfull bkash payment you will get a Transaction ID (TxnID) in the app.",
    "Submit that Transaction ID in the following section.",
  ];
};

const getPaymentProcedure = (moneyAmount, paymentMethod) => {
  let paymentInstructions = null;

  if (!paymentMethod) {
    return "No instruction available for the selected payment method.";
  }

  if (paymentMethod.value === MANUAL_PAYMENT_METHODS.BKASH.value) {
    paymentInstructions = getBkashPaymentProcedure(moneyAmount);
  } else if (paymentMethod.value === MANUAL_PAYMENT_METHODS.NAGAD.value) {
    paymentInstructions = getNagadPaymentProcedure(moneyAmount);
  }

  return (
    <Box
      component="ol"
      sx={{ paddingInlineStart: "40px", lineHeight: 2, fontSize: "18px" }}
    >
      {paymentInstructions.map((instruction, index) => (
        <Box key={index} component="li">
          {instruction}
        </Box>
      ))}
    </Box>
  );
};

const SubmitManualPayment = () => {
  const query = useQuery();
  const packageIDFromQuery = parseInt(query.get("packageID"));
  const [selectedPackage, setSelectedPackage] = useState(packageIDFromQuery);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    MANUAL_PAYMENT_METHODS.BKASH.value
  );
  const [transactionID, setTransactionID] = useState("");
  const [
    isPaymentConfirmationDialogVisible,
    setIsPaymentConfirmationDialogVisible,
  ] = useState(false);
  const [
    selectedSubscriptionPackageDetail,
    setSelectedSubscriptionPackageDetail,
  ] = useState({});
  const { subscriptionPackages } = useFetchSubscriptionPackages();
  const { addPayment, isAddingPayment } = useAddPayment({
    onSuccess: () => setIsPaymentConfirmationDialogVisible(true),
  });
  const selectedPaymentMethodDetail = Object.values(
    MANUAL_PAYMENT_METHODS
  ).find((method) => method.value === selectedPaymentMethod);
  const { loggedInUser } = useContext(AuthContext);

  const closePaymentConfirmationDialog = () => {
    setIsPaymentConfirmationDialogVisible(false);
  };

  useEffect(() => {
    if (!packageIDFromQuery && subscriptionPackages.length > 0) {
      setSelectedPackage(subscriptionPackages[0].id);
    }
  }, [packageIDFromQuery, subscriptionPackages]);

  useEffect(() => {
    setSelectedSubscriptionPackageDetail(
      subscriptionPackages.find(
        (subscriptionPackage) => subscriptionPackage.id === selectedPackage
      )
    );
  }, [subscriptionPackages, selectedPackage]);

  return (
    <PrivatePageLayout>
      <Helmet>
        <title>Keyword Generator</title>
      </Helmet>
      <Box
        sx={{
          padding: "0 32px 60px",
          maxWidth: "900px",
          margin: "auto !important",
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography
              component="h1"
              sx={{ fontSize: "24px", fontWeight: "600" }}
            >
              Payment Submission
            </Typography>
            <Typography
              component="h2"
              sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
            >
              Get instructions on how to buy a package manually.
            </Typography>
            <Box>
              <Grid container spacing={2}>
                <Grid item md={12} lg={6}>
                  <FormControl fullWidth margin="normal" required>
                    <InputLabel id="subscription-package-select-box-label">
                      Package
                    </InputLabel>
                    <Select
                      labelId="subscription-package-select-box-label"
                      id="subscription-package-select-box"
                      name="package"
                      label="Package"
                      value={selectedPackage}
                      onChange={(event) =>
                        setSelectedPackage(event?.target?.value)
                      }
                    >
                      {subscriptionPackages.map((subscriptionPackage) => (
                        <MenuItem
                          key={subscriptionPackage.id}
                          value={subscriptionPackage.id}
                        >
                          {subscriptionPackage.plan}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={12} lg={6}>
                  <FormControl fullWidth margin="normal" required>
                    <InputLabel id="subscription-payment-method-select-box-label">
                      Payment Method
                    </InputLabel>
                    <Select
                      labelId="subscription-payment-method-select-box-label"
                      id="subscription-payment-method-select-box"
                      name="payment_method"
                      label="Payment Method"
                      value={selectedPaymentMethod}
                      onChange={(event) =>
                        setSelectedPaymentMethod(event?.target?.value)
                      }
                    >
                      {Object.values(MANUAL_PAYMENT_METHODS).map((method) => (
                        <MenuItem key={method.value} value={method.value}>
                          {method.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Typography
              component="h2"
              sx={{ fontSize: "20px", fontWeight: "600" }}
            >
              {selectedPaymentMethodDetail.label} Payment Procedure (
              {selectedSubscriptionPackageDetail?.plan})
            </Typography>
            <Box>
              {getPaymentProcedure(
                selectedSubscriptionPackageDetail?.price,
                selectedPaymentMethodDetail
              )}
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Typography
              component="h2"
              sx={{ fontSize: "20px", fontWeight: "600" }}
            >
              Submit {selectedPaymentMethodDetail.label} Transaction ID for (
              {selectedSubscriptionPackageDetail?.plan})
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Transaction ID"
                placeholder={`Provide your ${selectedPaymentMethodDetail.label} transaction ID (TxnID)`}
                value={transactionID}
                onChange={(event) => setTransactionID(event?.target?.value)}
              />
              <AppButton
                variant="contained"
                sx={{ alignSelf: "flex-start" }}
                loading={isAddingPayment}
                onClick={() => {
                  addPayment({
                    packageID: selectedPackage,
                    userID: loggedInUser.id,
                    transactionID,
                    transactionMethod: selectedPaymentMethod,
                  });
                }}
              >
                Submit
              </AppButton>
            </Stack>
          </Stack>
        </Stack>
        <Dialog
          open={isPaymentConfirmationDialogVisible}
          onClose={closePaymentConfirmationDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>TransactionID Received!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              We've received your transaction. We'll review the payment. Once
              the payment is approved, you can use our paid services. It may
              take 24 hrs. Thanks for your patience.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <AppButton
              onClick={closePaymentConfirmationDialog}
              variant="contained"
            >
              OK, Thanks!
            </AppButton>
          </DialogActions>
        </Dialog>
      </Box>
    </PrivatePageLayout>
  );
};

export default SubmitManualPayment;