import React from "react";
import PageContents from "@/component/PageContent";
import { withNormal } from "@/component/PrivateRoute";

const NormalSetting = (): JSX.Element => {
    withNormal();

    return (
        <>
            <PageContents title="NormalSetting"/>
        </>
    )
}

export default NormalSetting;