import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default async function Names() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: names1 } = await supabase.from("De seje").select();
  const { data: names2 } = await supabase.from("Lærende").select();
  const { data: names3 } = await supabase.from("De nederen").select();
  console.log(names2);

  return (
    <>
      <div className="flex flex-wrap align-middle justify-around">
        <h1 className="text-4xl font-bold m-8 mb-16 w-full text-center">
          Tryk på et navn
        </h1>
        <Link
          href="/notes/de-seje"
          className="dark:bg-white bg-gray-800 w-52 p-4 rounded-lg"
        >
          {names1?.map((name) => (
            <p className="text-white dark:text-black">{name.Names}</p>
          ))}
        </Link>
        <Link
          href="/notes/laerende"
          className="dark:bg-white bg-gray-800 w-52 p-4 rounded-lg"
        >
          {names2?.map((name) => (
            <p className="text-white dark:text-black">{name.Names}</p>
          ))}
        </Link>
        <Link
          href="/notes/de-nederen"
          className="dark:bg-white bg-gray-800 w-52 p-4 rounded-lg"
        >
          {names3?.map((name) => (
            <p className="text-white dark:text-black">{name.Names}</p>
          ))}
        </Link>
        <BackButton href="/" text="Forside" />
      </div>
    </>
  );
  //   return <pre>{JSON.stringify(names, null, 2)}</pre>;
}
