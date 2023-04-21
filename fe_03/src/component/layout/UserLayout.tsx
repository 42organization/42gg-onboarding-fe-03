import React from "react";
import TopNav from "./TopNav";
import SideBar from "./SideBar";

interface MyLayoutProps {
    children: React.ReactNode;
}

const MyLayout = (props: MyLayoutProps): JSX.Element => {
    return (
        <>
            <TopNav />
            <main>
                {props.children}
            </main>
            <SideBar />
        </>
    )
}

export default MyLayout;