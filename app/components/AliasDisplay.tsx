import {LinkProps} from "@/types";
import Link from "next/link";

export default function AliasDisplay({link}: {link: LinkProps}){
    return (
        <Link href={`/${link.alias}`}>
            <div className="">
                <h4 className="font-bold text-3xl">Here is the alias url for: {link.url}</h4>
                <h4 className="font-bold text-3xl">URL + {link.alias}</h4>
            </div>
        </Link>
    );
}
