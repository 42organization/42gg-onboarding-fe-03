import React from "react";
import PageContents from "@/component/PageContent";
import { withLogin } from "@/component/PrivateRoute";

const ProductList = (): JSX.Element => {
    withLogin();

    return (
        <>
            <PageContents title="ProductList"/>
        </>
    )
}

export default ProductList;