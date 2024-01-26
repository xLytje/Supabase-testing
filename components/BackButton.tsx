import Link from "next/link";

interface BackButtonProps {
  href: string;
  text: string;
}

export default function BackButton(props: BackButtonProps) {
  return (
    <>
      <div className="w-full flex align-middle justify-center m-4 mt-8">
        <Link href={props.href}>
          <button className="bg-purple-600 text-white dark:bg-purple-400 py-2 px-4 rounded-[4px]">
            {props.text}
          </button>
        </Link>
      </div>
    </>
  );
}
