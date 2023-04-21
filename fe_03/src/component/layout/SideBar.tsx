import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { isNormal, isManager, isAdmin } from "../LoginAtom";
import { useRecoilValue } from "recoil";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"

const SideBar = (): JSX.Element | null => {
    const [drawer, setDrawer] = useState<boolean>(false);
    const [linkName, setLinkName] = useState<string>("Normal");
    const isN: boolean = useRecoilValue<boolean>(isNormal);
    const isM: boolean = useRecoilValue<boolean>(isManager);
    const isA: boolean = useRecoilValue<boolean>(isAdmin);

    useEffect(() => {
        if (isN === true) {
            setLinkName("Normal");
        } else if (isM === true) {
            setLinkName("Manager");
        } else if (isA === true) {
            setLinkName("Admin");
        }
    }, [isN, isM, isA]);

    const DrawerOpen = () => {
        setDrawer(true);
    };
    const DrawerClose = () => {
        setDrawer(false);
    };

    if (isN || isM || isA) {
        return (
            <aside>
                <Button size="medium" variant="text" startIcon={drawer ? <ArrowLeftOutlined/> : <ArrowRightOutlined />} onClick={drawer ? DrawerClose : DrawerOpen}></Button>
                <div className={ drawer ? "isOpen" : "isClose" }>
                    <Link className="link" href="/home">{linkName}</Link>
                    <Link className="link" href="/home">{linkName}</Link>
                    <Link className="link" href="/home">{linkName}</Link>
                    <Link className="link" href="/home">{linkName}</Link>
                    <Link className="link" href="/home">{linkName}</Link>
                </div>
            </aside>
        )
    } else {
        return null;
    }
}

export default SideBar;