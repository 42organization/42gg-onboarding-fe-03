import React from "react";
import PageContents from "@/component/PageContent";
import { withAdmin } from "@/component/PrivateRoute";

const AuthManage = (): JSX.Element => {
    withAdmin();

    return (
        <>
            <PageContents title="AuthManage"/>
        </>
    )
}

export default AuthManage;