"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";
//import { LinkProps } from "@/types"
import {isValidURL} from "@/lib/isValidURL";

export default async function createNewLinks(
    url: string,
    alias: string,
) {
    const link ={
        url: url,
        alias: alias,
    };

    //Check if URL is valid
    if (!isValidURL(url)) {
        console.log("Throw error for invalud url");
        return { error: true, message: "Invalid URL entered" };
        //throw new Error("Invalid URL entered");
    }

    const postCollection = await getCollection(LINKS_COLLECTION);

    //Check if alias already exists
    const foundAliasInDB = await postCollection.findOne({alias})
    if (foundAliasInDB) {
        console.log("Throw error  alias already exists");
        return { error: true, message: "Alias already exists" };
        //throw new Error("Alias already exists");
    }

    // insert into mongoDB
    const res = await postCollection.insertOne({...link});
    if (!res.acknowledged) {
        throw new Error("Failed to insert into the DB");
    }


    return { error: false, data: { url, alias, id: res.insertedId.toHexString(),},};
}