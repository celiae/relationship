import { NavLink, Navbar, Title, Grid, Avatar, Group } from "@mantine/core";
import { IconNavigation } from "@tabler/icons";
import { useAppSelector } from "app/hooks";

import { useRouter } from "next/router";
import { useState } from "react";
import { data } from "./navbar-data";

export default function RelationNavbar() {
  const navbarOpened = useAppSelector((state) => state.theme.NavBarOpened);

  const router = useRouter();
  const [active, setActive] = useState(0);
  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size={16} stroke={1.5} />}
      onClick={() => {
        setActive(index);
        router.push(item.href);
      }}
    />
  ));
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!navbarOpened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section>
        <Grid>
          <Grid.Col span={2}>
            <IconNavigation />
          </Grid.Col>
          <Grid.Col span="auto">
            <Title order={6}>Navigation</Title>
          </Grid.Col>
        </Grid>
      </Navbar.Section>

      <Navbar.Section grow mt="md">
        {items}
      </Navbar.Section>
      <Navbar.Section>
        <Group>
          <Avatar />
          程亮
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}
