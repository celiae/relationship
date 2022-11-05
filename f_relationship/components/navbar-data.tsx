import {
  IconGauge,
  IconFingerprint,
  IconChevronRight,
  IconActivity,
} from "@tabler/icons";

export const data = [
  {
    icon: IconGauge,
    label: "Home",
    href: "/",
    description: "Item with description",
  },
  {
    icon: IconGauge,
    label: "Network",
    href: "/network",
    description: "Item with description",
  },
  {
    icon: IconFingerprint,
    label: "User Infomation",
    href: "/userinfo",
    rightSection: <IconChevronRight size={14} stroke={1.5} />,
  },
  { icon: IconActivity, label: "Family", href: "/family" },
];
