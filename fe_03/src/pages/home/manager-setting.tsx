import React from "react";
import PageContents from "@/component/PageContent";
import { withManager } from "@/component/PrivateRoute";

const ManagerSetting = (): JSX.Element => {
    withManager();

    return (
        <>
            <PageContents title="ManagerSetting"/>
        </>
    )
}

export default ManagerSetting;