import Button from "@/components/Button";
import { ScreenDefault } from "@/components/ScreenDefault";
import Stack from "@/components/Stack";
import TextField from "@/components/TextField";
import Typography from "@/components/Typography";
import Colors from "@/constants/Colors";
import { spacing } from "@/constants/spacing";
import React, { useEffect, useRef, useState } from "react";
import { GestureResponderEvent } from "react-native";

function SignUpOrLoginScreen() {
  return (
    <ScreenDefault>
      <Stack justifyContent="flex-end" style={{ flex: 1 }}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="primary-title">Sign up to continue</Typography>
            <Stack>
              <Typography variant="caption">
                Enter the mobile number where you can be reached.
              </Typography>
              <Typography variant="caption">
                No one else will see this on your profile
              </Typography>
            </Stack>
          </Stack>
          {[
            {
              name: "email",
              // label: "Email",
              placeholder: "Enter your email",
              type: "email",
            },
            {
              name: "password",
              // label: "Password",
              placeholder: "Enter your password",
              type: "password",
            },
          ].map((input, index) => (
            <TextField key={input?.name} fullWidth {...input} />
          ))}

          <Button
            variant="contained"
            fullWidth
            onPress={function (event: GestureResponderEvent): void {
              console.log("Function not implemented.");
            }}
          >
            Continue
          </Button>
          <Typography
            variant="caption"
            align="center"
            style={{ textAlign: "center", marginTop: spacing.extraLarge }}
          >
            By sign in or sign up, you agree to our Terms of Service and Privacy
            Policy
          </Typography>
        </Stack>
      </Stack>
    </ScreenDefault>
  );
}

export default SignUpOrLoginScreen;
