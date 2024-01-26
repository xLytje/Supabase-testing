import Link from "next/link";

interface BackButtonProps {
  href: string;
  text: string;
}

export default function BackButton(props: BackButtonProps) {
  return (
    <>
      <Link
        href={props.href}
        className="w-full flex align-middle justify-center m-4"
      >
        <button className="bg-purple-600 text-white dark:bg-purple-400 py-2 px-4 rounded-[4px] mt-8">
          {props.text}
        </button>
      </Link>
    </>
  );
}
