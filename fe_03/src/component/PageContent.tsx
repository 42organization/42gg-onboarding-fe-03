import React from "react";


interface contentsProps {
    title: string;
}

function PageContents(props: contentsProps) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>빈 컨텐츠</h3>
        </div>
    )
}

export default PageContents;