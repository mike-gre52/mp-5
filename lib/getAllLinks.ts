import {LinkProps} from "@/types";
import getCollection, {LINKS_COLLECTION} from "@/db";

export default async function getAllLinks(): Promise<LinkProps[]> {
    const linksCollection = await getCollection(LINKS_COLLECTION);
    const data = await linksCollection.find().toArray();

    const links: LinkProps[] = data.map((p) => ({
        id: p._id.toHexString(),
        url: p.url,
        alias: p.alias,
    }));

    return links.reverse()
}
