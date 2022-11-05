import React, { useState } from "react";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  useMantineTheme,
  Text,
} from "@mantine/core";
import RelationNavbar from "./navbar";
import HeaderMiddle from "./header";
import { HEAD_LINK } from "app/constant";

interface Props {
  children: React.ReactElement;
}
export default function Layout({ children }: Props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      padding="md"
      navbar={<RelationNavbar />}
      header={<HeaderMiddle links={HEAD_LINK} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
