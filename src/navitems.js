import {
  FiHome,
  FiDollarSign,
  FiLayout,
  FiAlignJustify,
  FiSettings,
} from "react-icons/all";

export const navitems = [
  { id: 1, path: "/", icon: <FiHome size={30} />, title: "Dashboard" },
  { id: 2, path: "/Patients", icon: <FiDollarSign size={30} />, title: "Patients" },
  { id: 3, path: "/Doctors", icon: <FiLayout size={30} />, title: "Doctors" },
  {id: 4, path: "/AddDoctors",icon: <FiAlignJustify size={30} />,title: "AddDoctors",},
  { id: 5, path: "/Setting", icon: <FiSettings size={30} />, title: "Settings" },
  { id: 5, path: "/Settings", icon: <FiSettings size={30} />, title: "Settings" },
];
