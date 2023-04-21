import React from "react";
import PageContents from "@/component/PageContent";
import { withLogin } from "@/component/PrivateRoute";

const Home = (): JSX.Element => {
    withLogin();

    return (
        <>
            <PageContents title="Home"/>
        </>
    )
}

export default Home;