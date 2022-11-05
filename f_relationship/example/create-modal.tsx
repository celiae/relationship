import { useState } from "react";
import { Modal, Button, Group, Grid, TextInput, Stack } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setNetworkCreateOpened } from "features/themeSlice";
import { dispatchNetwork, selectNetwork } from "app/utils";
import Network from "types/network";
export default function CreateModal() {
  const opened = useAppSelector((state) => state.theme.NetworkCreateOpened);
  const dispatch = useAppDispatch();
  let data: Network;
  return (
    <>
      <Modal
        opened={true}
        onClose={() => dispatch(setNetworkCreateOpened(false))}
        title="Create network"
      >
        <Stack>
          <Grid>
            <Grid.Col span={7}>
              <TextInput placeholder="Your name" />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput placeholder="Your gender" />
            </Grid.Col>
          </Grid>
          <TextInput placeholder="Your education" />
          <TextInput placeholder="Your address" />
          <TextInput placeholder="Your qq" />
          <TextInput placeholder="Your wechat" />
          <TextInput placeholder="Your phone" />
          <TextInput placeholder="Your relation" />
          <Grid>
            <Grid.Col span={3}>
              <Button
                onClick={() => {
                  dispatchNetwork(dispatch, data, "POST");
                }}
              >
                Create
              </Button>
            </Grid.Col>
          </Grid>
        </Stack>
      </Modal>
    </>
  );
}
