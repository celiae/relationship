import { createStyles, Avatar, Text, Group, Space } from "@mantine/core";
import { IconPhoneCall, IconAt, IconAlbum, IconCake } from "@tabler/icons";
import { selectNetwork } from "app/utils";
const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export function UserInfoIcons() {
  const { classes } = useStyles();

  const data = selectNetwork();

  return (
    <>
      <div>
        <Group noWrap>
          <Avatar size={94} radius="md" />
          <div>
            <Group>
              <Text size="lg" weight={500} className={classes.name}>
                {data.name}
              </Text>
              <Text
                size="xs"
                sx={{ textTransform: "uppercase" }}
                weight={700}
                color="dimmed"
              >
                {data.gender}
              </Text>
            </Group>
            <Group noWrap spacing={10} mt={3}>
              <IconAt stroke={1.5} size={16} className={classes.icon} />
              <Text size="xs" color="dimmed">
                {data.email}
              </Text>
            </Group>

            <Group noWrap spacing={10} mt={5}>
              <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
              <Text size="xs" color="dimmed">
                {data.phone}
              </Text>
            </Group>

            <Group noWrap spacing={10} mt={5}>
              <IconCake stroke={1.5} size={16} className={classes.icon} />
              <Text size="xs" color="dimmed">
                {data.birthday}
              </Text>
            </Group>
          </div>
        </Group>
      </div>
      <Space h="md" />
      <Group>
        <Text size="md">wechat:</Text>
        <Text size="md" color="blue">
          {data.wechat}
        </Text>
      </Group>
      <Group>
        <Text size="md">qq:</Text>
        <Text size="md" color="blue">
          {data.qq}
        </Text>
      </Group>
      <Group>
        <Text size="md">address:</Text>
        <Text size="md" color="blue">
          {data.address}
        </Text>
      </Group>
      <Group>
        <Text size="md">relation:</Text>
        <Text size="md" color="blue">
          {data.relation}
        </Text>
      </Group>
    </>
  );
}
