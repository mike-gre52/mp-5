import getCollection, { LINKS_COLLECTION } from "@/db";
import { LinkProps } from "@/types";
export default async function getLinkFromAlias(alias: string): Promise<LinkProps | null> {
    // const pos\
    // tId = ObjectId.createFromHexString(id);
    const linksCollection = await getCollection (LINKS_COLLECTION);

    console.log(alias);

    const data = await linksCollection.findOne({ alias });

    if (!data){
        return null;
    }

    return {
        id: data._id.toString(),
        url: data.url,
        alias: data.alias,
    }

}