import Image from "@/components/Image";
import Paper from "@/components/Paper";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";
import Colors from "@/constants/Colors";
import { spacing } from "@/constants/spacing";
import { Link } from "expo-router";
import React from "react";

function _layout() {
  return (
    <Stack
      style={{
        flex: 1,
        paddingHorizontal: spacing.extraSmall,
        paddingTop: spacing.huge,
        backgroundColor: Colors.secondary,
      }}
    >
      <Stack>
        <Typography variant="subtitle1" children="Welcome toto to" />
        <Typography variant="h3" children={"MaadiVeedu !"} />
      </Stack>
      <Stack
        style={{
          backgroundColor: Colors.secondary,
          marginTop: spacing.huge,
        }}
        spacing={1}
      >
        <Typography variant="body1">What are you looking for ?</Typography>

        <Stack spacing={2} style={{}}>
          {[
            {
              title: "Property Searchhh",
              caption: "Buy, Rent, PG & Commercial",
            },
            { title: "Post Property ", caption: "Sell or rent out your home" },
          ].map(({ title, caption }) => (
            <Link href="/login" asChild>
            <Paper
            key='key'
              style={{
                paddingHorizontal: spacing.medium,
                paddingVertical: spacing.large,
                borderWidth: 1,
                borderColor: Colors.disabled,
                borderRadius: spacing.extraSmall,
              }}
              //   onPress={() => path="app/(tabs)/index.tsx"}
            >
              <Typography >{title}</Typography>
              <Typography >{caption}</Typography>
            </Paper>
            </Link>
          ))}
        </Stack>
      </Stack>

      {/* <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        width={100}
        height={250}
      /> */}
    </Stack>
  );
}

export default _layout;
