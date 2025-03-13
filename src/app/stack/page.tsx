export const metadata = {
  title: 'Stack',
};

type StackItem = {
  title: string;
  url: string;
  description: string;
};

const items: StackItem[] = [
  {
    title: "Tabby",
    url: "https://tabby.sh/",
    description:
      "Infinitely customizable cross-platform terminal app for local shells, serial, SSH and Telnet connections.",
  },
  {
    title: "Ulauncher",
    url: "https://ulauncher.io/",
    description: "Application launcher for Linux.",
  },
  {
    title: "Raycast",
    url: "https://www.raycast.com/",
    description:
      "Application laucher currenly only for macOS. Looking forward to use it on Windows.",
  },
  {
    title: "Cursor",
    url: "https://www.cursor.com/",
    description: "Been trying cursor for personal projects and it's so good!",
  },
  {
    title: "Notion",
    url: "https://www.notion.com/",
    description: "Everyone know this one! :)"
  }
];

export default function Stack() {
  return (
    <div className="flex pt-20 pb-16 w-full h-full px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold mb-8 text-2xl">Stack</h1>
        <p>
          Here is my go-to list of tools and software i use on a daily bases.
        </p>
        <ul className="mb-4 flex list-disc flex-col gap-0.5 pl-6 ">
          {items.map((item: StackItem, idx: number) => {
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
