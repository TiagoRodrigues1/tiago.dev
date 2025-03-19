import { STACK_ITEMS } from "@/lib/constants";
import { StackItem } from "@/lib/types";

export const metadata = {
  title: "Stack",
};

export default function Stack() {
  return (
    <div className="flex pt-20 pb-16 w-full h-full px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold mb-8 text-2xl">Stack</h1>
        <p className="text-[var(--color-white)]">
          Here is my go-to list of tools and software I use on a daily bases.
        </p>
        <ul className="mb-4 flex list-disc flex-col gap-0.5 pl-6 ">
          {STACK_ITEMS.map((item: StackItem, idx: number) => {
            return (
              <li className="flex stack" key={idx}>
                <a
                  href={item.url}
                  target="_blank"
                  className="link after:content-['_↗']"
                >
                  {item.title}
                </a>
                <span className="pl-1"> — {item.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
