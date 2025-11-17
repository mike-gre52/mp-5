import LinkDisplay from "@/app/components/LinkDisplay";
import getAllLinks from "@/lib/getAllLinks";

export default async function Home() {
    const links = await getAllLinks()
  return (
      <div className="flex flex-col items-center p-4">
          <div className="bg-yellow-100 p-4 rounded-2xl w-3/4">
              <LinkDisplay inputLinks={links}/>
          </div>
      </div>

  );
}
