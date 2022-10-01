import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewListIcon from "@mui/icons-material/ViewList";

export const menuItems = [
  {
    id: "home",
    title: "Home",
    url: "/app/home",
    icon: HomeIcon,
  },
  {
    id: "project",
    title: "Project",
    url: "/app/project",
    icon: ViewListIcon,
  },
  {
    id: "dashboard",
    title: "Dashboard",
    url: "/app/dashboard",
    icon: DashboardIcon,
  },
  {
    id: "message",
    title: "Message",
    url: "/app/message",
    icon: MessageIcon,
  },
  {
    id: "documents",
    title: "Documents",
    url: "/app/documents",
    icon: AssignmentIcon,
  },
  {
    id: "organizations",
    title: "Organizations",
    url: "/app/organizations",
    icon: CorporateFareIcon,
  },

  {
    id: "settings",
    title: "Settings",
    url: "/app/settings",
    icon: SettingsIcon,
  },
];
