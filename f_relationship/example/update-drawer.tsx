import {
  Button,
  Drawer,
  Grid,
  Space,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setNetworkUpdateOpened } from "features/themeSlice";
import { dispatchNetwork, selectNetwork } from "app/utils";

export default function NetworkUpdateDrawer() {
  const theme = useMantineTheme();
  const opened = useAppSelector((state) => state.theme.NetworkUpdateOpened);
  const dispatch = useAppDispatch();
  let data = selectNetwork();

  return (
    <>
      <Drawer
        color="blue"
        opened={opened}
        onClose={() => dispatch(setNetworkUpdateOpened(false))}
        title="Relation"
        padding="xl"
        size="xl"
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              placeholder="Your name"
              value={data.name}
              label="Full name"
              radius="md"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              placeholder="Your gender"
              value={data.gender}
              label="Gender"
              radius="md"
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4}>
            <TextInput
              placeholder="Your education"
              value={data.education}
              label="Education"
              radius="md"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              placeholder="Your address"
              value={data.address}
              label="Address"
              radius="md"
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4}>
            <TextInput
              placeholder="Your qq"
              value={data.qq}
              label="qq"
              radius="md"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              placeholder="Your wechat"
              value={data.wechat}
              label="Wechat"
              radius="md"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              placeholder="Your phone"
              value={data.phone}
              label="Phone"
              radius="md"
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col>
            <TextInput
              placeholder="Your relation"
              value={data.relation}
              label="Relation"
              radius="md"
            />
          </Grid.Col>
        </Grid>
        <Space h="md" />
        <Button
          uppercase
          onClick={() => {
            dispatchNetwork(dispatch, data, "PUT");
          }}
        >
          Update
        </Button>
      </Drawer>
    </>
  );
}
