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
import useFetchDiscountedPrice from "../../hooks/useFetchDiscountedPrice";

const getBkashPaymentProcedure = (moneyAmount, discountedAmount = 0) => {
  console.log(discountedAmount, moneyAmount);
  return [
    "Open the bKash app and log in with your credentials.",
    'Look for the "Send Money" option.',
    "Choose the send money option for sending money to another bKash account.",
    `Enter ${MANUAL_PAYMENT_METHODS.BKASH.number} in the recipient's mobile number field.`,
    <>
      Input{" "}
      {!!discountedAmount ? (
        <strong>
          <del>{moneyAmount}</del> {discountedAmount}
        </strong>
      ) : (
        moneyAmount
      )}{" "}
      BDT as the amount of money.
    </>,
    "Add a reference (optional) to specify the purpose of the transfer.",
    "Confirm the transaction with your bKash PIN.",
    "After a successfull bkash payment you will get a Transaction ID (TxnID) in the app.",
    "Submit that Transaction ID in the following section.",
  ];
};

const getNagadPaymentProcedure = (moneyAmount, discountedAmount = 0) => {
  return [
    "Open the Nagad app on your smartphone and log in with your credentials.",
    'Look for the option labeled "Send Money".',
    `Enter ${MANUAL_PAYMENT_METHODS.BKASH.number} in the recipient's mobile number field.`,
    <>
      Input{" "}
      {!!discountedAmount ? (
        <strong>
          <del>{moneyAmount}</del> {discountedAmount}
        </strong>
      ) : (
        moneyAmount
      )}{" "}
      BDT as the amount of money.
    </>,
    "Add a reference (optional) to specify the purpose of the transfer.",
    "Double-check the recipient's number, amount, and reference.",
    "Enter your Nagad Mobile Menu PIN (MM PIN) to confirm the transaction.",
    'Tap "Send" or a similar confirmation button.',
    "After a successfull bkash payment you will get a Transaction ID (TxnID) in the app.",
    "Submit that Transaction ID in the following section.",
  ];
};

const getPaymentProcedure = (
  moneyAmount,
  paymentMethod,
  discountedPrice = 0
) => {
  let paymentInstructions = null;

  if (!paymentMethod) {
    return "No instruction available for the selected payment method.";
  }

  if (paymentMethod.value === MANUAL_PAYMENT_METHODS.BKASH.value) {
    paymentInstructions = getBkashPaymentProcedure(
      moneyAmount,
      discountedPrice
    );
  } else if (paymentMethod.value === MANUAL_PAYMENT_METHODS.NAGAD.value) {
    paymentInstructions = getNagadPaymentProcedure(
      moneyAmount,
      discountedPrice
    );
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
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeWithTransaction, setCouponCodeWithTransaction] =
    useState("");
  const { subscriptionPackages } = useFetchSubscriptionPackages();
  const { addPayment, isAddingPayment } = useAddPayment({
    onSuccess: () => setIsPaymentConfirmationDialogVisible(true),
  });
  const selectedPaymentMethodDetail = Object.values(
    MANUAL_PAYMENT_METHODS
  ).find((method) => method.value === selectedPaymentMethod);
  const { loggedInUser } = useContext(AuthContext);
  const {
    fetchDiscountedPrice,
    discountedPrice,
    errorMessage: couponErrorMessage,
    setErrorMessage: setCouponErrorMessage,
    isFetching: isFetchingDiscountedPrice,
  } = useFetchDiscountedPrice();

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

  useEffect(() => {
    setCouponErrorMessage(null);
  }, [couponCode]);

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
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      label="Coupon Code"
                      placeholder="Provide coupon code"
                      fullWidth={true}
                      value={couponCode}
                      helperText={couponErrorMessage}
                      error={!!couponErrorMessage}
                      onChange={(event) => {
                        const code = event?.target?.value;

                        setCouponCode(code);
                      }}
                    />
                    <AppButton
                      variant="contained"
                      size="large"
                      loading={isFetchingDiscountedPrice}
                      disabled={!couponCode}
                      onClick={() => {
                        fetchDiscountedPrice({
                          couponCode,
                          packageID: selectedPackage,
                        });
                      }}
                    >
                      Apply
                    </AppButton>
                  </Stack>
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
                selectedPaymentMethodDetail,
                discountedPrice
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
            <Box>
              <Grid container={true} spacing={2}>
                <Grid item xs={12} md={8} lg={9}>
                  <TextField
                    label="Transaction ID"
                    placeholder={`Provide your ${selectedPaymentMethodDetail.label} transaction ID (TxnID)`}
                    fullWidth={true}
                    value={transactionID}
                    onChange={(event) => {
                      setTransactionID(event?.target?.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <TextField
                    label="Coupon Code"
                    placeholder="Provide coupon code"
                    fullWidth={true}
                    value={couponCodeWithTransaction}
                    onChange={(event) =>
                      setCouponCodeWithTransaction(event?.target?.value)
                    }
                  />
                </Grid>
                <Grid item={true} xs={12} sx={{ paddingTop: "4px !important" }}>
                  <AppButton
                    variant="text"
                    sx={{ alignSelf: "flex-start" }}
                    disabled={!couponCode}
                    onClick={() => {
                      setCouponCodeWithTransaction(couponCode);
                    }}
                  >
                    Use coupon code given at the top?
                  </AppButton>
                </Grid>
                <Grid item={true} xs={12}>
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
                        couponCode: couponCodeWithTransaction,
                      });
                    }}
                  >
                    Submit
                  </AppButton>
                </Grid>
              </Grid>
            </Box>
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
