import { redirect } from "next/navigation";
import getLinkFromAlias from "@/lib/getLinkFromAlias";

export default async function AliasRedirectPage({ params }: { params: Promise<{ alias: string }> }) {

    const { alias } = await params;

    const link = await getLinkFromAlias(alias);

    if (!link) {
        redirect("/");
    }

    redirect(link.url);
}
