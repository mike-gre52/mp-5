"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";
import { LinkProps } from "@/types"

export default async function createNewLinks(
    url: string,
    alias: string,
): Promise<LinkProps> {
    console.log("Creating new post...");
    const link ={
        url: url,
        alias: alias,
    };

    // insert into mongoDB
    const postCollection = await getCollection(LINKS_COLLECTION);
    const res = await postCollection.insertOne({...link});
    if (!res.acknowledged) {
        throw new Error("Failed to insert into DB");
    }


    return {...link, id: res.insertedId.toHexString()};
}