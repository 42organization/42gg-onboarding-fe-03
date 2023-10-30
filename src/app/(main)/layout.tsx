import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { ReactNode } from "react";
import "./styles/Layout.scss";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <NavBar />
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
