import { Box, Center } from "@mantine/core";
import { IconMan, IconQuestionMark, IconWoman } from "@tabler/icons";

export const Gender = [
  {
    label: (
      <Center>
        <IconMan />
        <Box ml={10}>男</Box>
      </Center>
    ),
    value: "男",
  },
  {
    label: (
      <Center>
        <IconQuestionMark />
        <Box ml={10}>未知</Box>
      </Center>
    ),
    value: "未知",
  },
  {
    label: (
      <Center>
        <IconWoman />
        <Box ml={10}>女</Box>
      </Center>
    ),
    value: "女",
  },
];
