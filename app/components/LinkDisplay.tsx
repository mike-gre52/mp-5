"use client";

//import NewPostForm from "@/app/component/NewPostForm";
import {LinkProps} from "@/types";
import {useState} from "react";
import NewLinkForm from "@/app/components/NewLinkForm";
import AliasDisplay from "@/app/components/AliasDisplay";
//import PostPreview from "./PostPreview";

export default function LinkDisplay({
     inputLinks,
     }: {inputLinks: LinkProps[];}){
    const [links, setLinks] = useState(inputLinks);

    return (
        <div className="flex flex-col items-center">
            {/*Add URL*/}
            <NewLinkForm
                append={(newLinks: LinkProps) => {
                    setLinks([...links, newLinks]);
                }}
            />
            {/*Show already added urls*/}
            {links.map((link) => (
                <AliasDisplay key={link.id} link={link} />
            ))}

        </div>
    );
}