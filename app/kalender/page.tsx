import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import BackButton from "@/components/BackButton";

export default async function Names() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: calender } = await supabase.from("Kalender").select();

  console.log(calender);

  return (
    <>
      <div className="flex flex-wrap align-middle justify-around gap-y-8">
        <h1 className="text-4xl font-bold m-8 mb-16 w-full text-center">
          Kalender
        </h1>
        {calender
          ?.sort(
            (a, b) =>
              new Date(a.DateISO).getTime() - new Date(b.DateISO).getTime()
          )
          .map((data) => (
            <section className="dark:bg-white bg-gray-800 w-52 p-4 rounded-lg">
              <h2 className="text-white dark:text-black font-bold">
                {data.Desc}:
              </h2>
              <p className="text-white dark:text-black">
                {new Date(data.DateISO).toLocaleDateString()} -{" "}
                {new Date(data.DateISO).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </section>
          ))}

        <BackButton href="/" text="Forside" />
      </div>
    </>
  );

  //   return <pre>{JSON.stringify(calender, null, 2)}</pre>;
}
