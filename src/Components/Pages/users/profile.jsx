import React, { useContext, useEffect, useRef, useState } from "react";
import PrivatePageLayout from "../../layouts/PrivatePageLayout";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../AuthProvider";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AppButton from "../../Common/AppButton";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import ActivePackageChip from "../../Common/ActivePackageChip";
import RemainingToken from "../../Common/RemainingToken";
import useChangePassword from "../../../hooks/useChangePassword";
import useFetchProfilePicture from "../../../hooks/useFetchProfilePicture";
import useUploadProfilePicture from "../../../hooks/useUploadProfilePicture";
import useUpdateProfile from "../../../hooks/useUpdateProfile";

const Profile = () => {
  const { loggedInUser } = useContext(AuthContext);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [editedName, setEditedName] = useState("");
  const { uploadProfilePicture, isUploading: isUploadingProfilePicture } =
    useUploadProfilePicture({ userID: loggedInUser?.id });
  const { isFetching: isFetchingProfilePicture, fetchProfilePicture } =
    useFetchProfilePicture();
  const { isUpdating, updateProfile } = useUpdateProfile();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const nameInputRef = useRef(null);
  const { changePassword, isChangingPassword } = useChangePassword({
    onSuccess: () => {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    },
  });

  useEffect(() => {
    setEditedName(loggedInUser?.name);
  }, [loggedInUser?.name]);

  useEffect(() => {
    if (!!isInEditMode && !!nameInputRef.current) {
      console.log(nameInputRef);
      nameInputRef.current.focus();
    }
  }, [isInEditMode]);

  return (
    <PrivatePageLayout>
      <Helmet>
        <title>Profile: {loggedInUser?.name}</title>
      </Helmet>
      <Grid
        container={true}
        spacing={5}
        sx={{
          padding: "0 32px 60px",
          maxWidth: "1240px",
          margin: "auto !important",
        }}
      >
        <Grid item={true} container={true} xs={12} spacing={3}>
          <Grid item={true} container={true} xs={true}>
            <Grid xs={true} item={true}>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                Profile
              </Typography>
            </Grid>
            <Grid item={true}>
              <Stack direction="row" spacing={2}>
                {isInEditMode ? (
                  <>
                    <AppButton
                      variant="outlined"
                      onClick={() => {
                        setEditedName(loggedInUser?.name);
                        setIsInEditMode(false);
                      }}
                    >
                      Cancel
                    </AppButton>
                    <AppButton
                      variant="contained"
                      startIcon={<SaveRoundedIcon />}
                      loading={isUpdating}
                      disabled={editedName === loggedInUser?.name}
                      onClick={() => {
                        updateProfile({ name: editedName }, () => {
                          setIsInEditMode(false);
                        });
                      }}
                    >
                      Save
                    </AppButton>
                  </>
                ) : (
                  <AppButton
                    variant="contained"
                    startIcon={<EditRoundedIcon />}
                    onClick={() => {
                      setIsInEditMode(true);
                    }}
                  >
                    Edit
                  </AppButton>
                )}
              </Stack>
            </Grid>
          </Grid>
          <Grid item={true} xs={12}>
            <Paper sx={{ padding: "16px", width: "100%" }}>
              <Grid item={true} container={true} xs={12} spacing={3}>
                <Grid item={true} sx={{ position: "relative" }}>
                  {isFetchingProfilePicture ? (
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width={250}
                      height={250}
                    />
                  ) : (
                    <>
                      <Box
                        component="img"
                        src={loggedInUser?.profilePicture}
                        alt={loggedInUser?.name}
                        sx={{
                          width: "250px",
                          height: "250px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          display: "block",
                        }}
                      />
                      <IconButton
                        component="label"
                        htmlFor="profile-picture-input"
                        color="primary"
                        sx={{
                          position: "absolute",
                          bottom: "8px",
                          right: "8px",
                          backgroundColor: "white !important",
                        }}
                      >
                        {isUploadingProfilePicture ? (
                          <CircularProgress size={20} />
                        ) : (
                          <BackupRoundedIcon />
                        )}
                        <Box
                          component="input"
                          id="profile-picture-input"
                          type="file"
                          hidden={true}
                          onChange={(event) => {
                            if (event.target.files.length > 0) {
                              console.log(event.target.files[0]);
                              uploadProfilePicture(
                                event.target.files[0],
                                fetchProfilePicture
                              );
                            }
                          }}
                        />
                      </IconButton>
                    </>
                  )}
                </Grid>
                <Grid
                  item={true}
                  container={true}
                  xs={12}
                  lg={true}
                  spacing={3}
                >
                  <Grid item={true} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 600, marginBottom: "4px" }}>
                      Name
                    </Typography>
                    {isInEditMode ? (
                      <TextField
                        inputRef={nameInputRef}
                        variant="standard"
                        value={editedName}
                        onChange={(event) => {
                          setEditedName(event?.target?.value);
                        }}
                        fullWidth={true}
                      />
                    ) : (
                      <Typography>{editedName}</Typography>
                    )}
                  </Grid>
                  <Grid item={true} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 600, marginBottom: "4px" }}>
                      Username
                    </Typography>
                    <Typography>{loggedInUser?.username}</Typography>
                  </Grid>
                  <Grid item={true} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 600, marginBottom: "4px" }}>
                      Email
                    </Typography>
                    <Typography>{loggedInUser?.email}</Typography>
                  </Grid>
                  <Grid item={true} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 600, marginBottom: "4px" }}>
                      Phone Number
                    </Typography>
                    <Typography>{loggedInUser?.mobile}</Typography>
                  </Grid>
                  <Grid item={true} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 600, marginBottom: "4px" }}>
                      Remaining Credit
                    </Typography>
                    <RemainingToken />
                  </Grid>
                  <Grid item={true} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 600, marginBottom: "4px" }}>
                      Subscription
                    </Typography>
                    <ActivePackageChip />
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item={true} container={true} xs={12} spacing={3}>
          <Grid xs={12} item={true}>
            <Typography
              component="h2"
              sx={{ fontSize: "20px", fontWeight: "600" }}
            >
              Change Password
            </Typography>
            <Divider sx={{ marginTop: "16px" }} />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              label="Current Password"
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event?.target?.value)}
              fullWidth={true}
              type="password"
            />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <TextField
              label="New Password"
              value={newPassword}
              onChange={(event) => setNewPassword(event?.target?.value)}
              fullWidth={true}
              type="password"
            />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <TextField
              label="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event?.target?.value)}
              fullWidth={true}
              type="password"
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Stack direction="row" spacing={2}>
              <AppButton
                variant="contained"
                loading={isChangingPassword}
                disabled={
                  !currentPassword ||
                  !newPassword ||
                  !confirmPassword ||
                  newPassword !== confirmPassword
                }
                onClick={() => {
                  changePassword({
                    userID: loggedInUser?.id,
                    password: currentPassword,
                    newPassword,
                    confirmPassword,
                  });
                }}
              >
                Change Password
              </AppButton>
              <AppButton
                variant="outlined"
                onClick={() => {
                  setCurrentPassword("");
                  setNewPassword("");
                  setConfirmPassword("");
                }}
              >
                Cancel
              </AppButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </PrivatePageLayout>
  );
};

export default Profile;
