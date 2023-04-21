import React from "react";
import PageContents from "@/component/PageContent";
import { withAdmin } from "@/component/PrivateRoute";

const AdminSetting = (): JSX.Element => {
    withAdmin();

    return (
        <>
            <main>
                <PageContents title="AdminSetting"/>
            </main>
        </>
    )
}

export default AdminSetting;