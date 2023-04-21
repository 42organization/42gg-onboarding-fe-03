import React from "react";
import PageContents from "@/component/PageContent";
import { withManagerAdmin } from "@/component/PrivateRoute";

const ProductManage = (): JSX.Element => {
    withManagerAdmin();

    return (
        <>
            <PageContents title="ProductManage"/>
        </>
    )
}

export default ProductManage;