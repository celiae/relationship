import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Menu,
  ScrollArea,
} from "@mantine/core";
import {
  IconPencil,
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
} from "@tabler/icons";
import Network from "types/network";
import NetworkUpdateDrawer from "example/update-drawer";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useRouter } from "next/router";
import { selectScrollPosition, setScrollPosition } from "features/themeSlice";
import { useRef, useState } from "react";

interface UsersStackProps {
  data: Network[];
}

export function UsersStack({ data }: UsersStackProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} radius={40} />
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
            <Text color="dimmed" size="xs">
              {item.birthday.toString()}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Text size="sm">{item.relation}</Text>
        <Text size="xs" color="dimmed">
          Relation
        </Text>
      </td>
      <td>
        <Text size="sm">{item.phone}</Text>
        <Text size="xs" color="dimmed">
          Phone
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon
            onClick={() => {
              router.push(`/network/update/${item.id}`);
            }}
          >
            <IconPencil size={16} stroke={1.5} />
          </ActionIcon>
          <Menu transition="pop" withArrow position="bottom-end">
            <Menu.Target>
              <ActionIcon>
                <IconDots size={16} stroke={1.5} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconMessages size={16} stroke={1.5} />}>
                Send message
              </Menu.Item>
              <Menu.Item icon={<IconNote size={16} stroke={1.5} />}>
                Add note
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  router.push(`/network/show/${item.id}`);
                }}
                icon={<IconReportAnalytics size={16} stroke={1.5} />}
              >
                Analytics
              </Menu.Item>
              <Menu.Item
                icon={<IconTrash size={16} stroke={1.5} />}
                color="red"
              >
                Terminate contract
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <NetworkUpdateDrawer />
      <Table sx={{ minWidth: 800 }} verticalSpacing="md">
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
