import React from "react";
import PageContents from "@/component/PageContent";
import { withLogin } from "@/component/PrivateRoute";

const RecommendList = (): JSX.Element => {
    withLogin();

    return (
        <>
            <PageContents title="RecommendList"/>
        </>
    )
}

export default RecommendList;