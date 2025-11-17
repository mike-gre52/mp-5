"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";
import { LinkProps } from "@/types"
import {isValidURL} from "@/lib/isValidURL";

export default async function createNewLinks(
    url: string,
    alias: string,
): Promise<LinkProps> {
    const link ={
        url: url,
        alias: alias,
    };


    const postCollection = await getCollection(LINKS_COLLECTION);

    //Check if alias already exists
    const foundAliasInDB = await postCollection.findOne({alias})
    if (foundAliasInDB) {
        throw new Error("Alias already exists");
    }

    //Check if URL is valid
    if (!isValidURL(url)) {
        throw new Error("Invalid URL entered");
    }



    // insert into mongoDB
    const res = await postCollection.insertOne({...link});
    if (!res.acknowledged) {
        throw new Error("Failed to insert into DB");
    }


    return {...link, id: res.insertedId.toHexString()};
}