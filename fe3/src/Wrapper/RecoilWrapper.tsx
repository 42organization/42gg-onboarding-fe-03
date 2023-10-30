'use client'

import React from "react";
import { RecoilRoot } from "recoil";

interface RecoilRootWrapper {
    children: React.ReactNode;
}

function RecoilRootWrapper({children}: RecoilRootWrapper) {
    return (
        <RecoilRoot> {children} </RecoilRoot>
    );
}

export default RecoilRootWrapper;