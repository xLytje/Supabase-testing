import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import BackButton from "@/components/BackButton";

export default async function Names() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: names } = await supabase.from("De seje").select();

  return (
    <>
      <div className="flex flex-wrap align-middle justify-around">
        <h1 className="text-4xl font-bold m-8 mb-16 w-full text-center">
          De seje
        </h1>
        <section className="dark:bg-white bg-gray-800 w-52 p-4 rounded-lg">
          {names?.map((name) => (
            <p className="text-white dark:text-black font-bold">{name.Names}</p>
          ))}
        </section>

        <BackButton href="/notes" text="Tilbage" />
      </div>
    </>
  );
}
