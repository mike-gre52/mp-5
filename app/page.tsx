import LinkDisplay from "@/app/components/LinkDisplay";
import getAllLinks from "@/lib/getAllLinks";

export default async function Home() {
    const links = await getAllLinks()
  return (
      <div className="flex flex-col items-center bg-blue-200 p-4">
          <LinkDisplay inputLinks={links}/>
      </div>
  );
}
