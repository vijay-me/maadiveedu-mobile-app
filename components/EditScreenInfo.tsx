import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";
import Button from "./Button";
import { Dialog } from "./Dialog";
import Paper from "./Paper";
import CheckBox from "./CheckBox";
import RadioGroup from "./RadioGroup";
import Stack from "./Stack";
import Chip from "./Chip";
import Select from "./Select";
import Stepper from "./Stepper"; // Add this line to import the Stopper component

export default function EditScreenInfo({ path }: { path: string }) {
  let checked = false;

  return (
    <View style={{padding:16}}>
      {/* <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
        >
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View> */}
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Button
          title={"Text"}
          variant="text"
          onPress={() => console.log("Button pressed")}
        ></Button>
        <Button
          title={"Contained"}
          variant="contained"
          onPress={() => console.log("Button pressed")}
        ></Button>
        <Button
          title="Outlined"
          variant="outlined"
          onPress={() => console.log("Button pressed")}
        ></Button>
      </View>
      <Dialog
        open={false}
        onClose={() => {
          console.log("Dialog closed");
        }}
      >
        <Text>Dialog</Text>
      </Dialog>

      <CheckBox
        label="Check me"
        checked={checked}
        onChange={(e) => console.log(e)}
      ></CheckBox>

      <Select
        options={[
          { label: "Select", value: "select" },
          { label: "Option", value: "option" },
          { label: "Dropdown", value: "dropdown" },
        ]}
        value={"option"}
        onChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />

      <RadioGroup
        options={[{ label: "Radio", value: "radio" }]}
        value={"radio"}
        onChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      ></RadioGroup>
      <Stack direction="row" spacing={1}>
        <Text>Hello</Text>
        <Text>World</Text>
      </Stack>

      <Chip label={"Chip"}></Chip>

      <View style={styles.helpContainer}>
        <Paper>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </Paper>
        <Stepper
          steps={["Step 1", "Step 2", "Step 3", "Step 4"]}
          activeStep={2}
          completedSteps={[0, 1]}
        ></Stepper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
