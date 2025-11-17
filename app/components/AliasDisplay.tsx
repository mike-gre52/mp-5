import {LinkProps} from "@/types";
import Link from "next/link";

export default function AliasDisplay({link}: {link: LinkProps}){
    return (
        <Link href={`/${link.alias}`}>
            <div className="bg-white p-4 rounded-xl shadow w-full text-center space-y-2 mb-4">
                <h4 className="font-light text-1/2xl text-gray-800">Here is the alias url for: {link.url}</h4>
                <h4 className="font-bold text-3xl text-gray-600">https://mp-5-zeta-gray.vercel.app/{link.alias}</h4>
            </div>
        </Link>
    );
}
