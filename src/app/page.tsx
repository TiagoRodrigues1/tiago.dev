export default function Home() {
  return (
    <div className="flex pt-20 pb-16 w-full h-full px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold text-lg mb-8">Hello 👋</h1>
        <p className="text-[var(--color-white)]">
          I&apos;m Tiago, a software engineer based in Braga, Portugal — 🇵🇹
        </p>
        <p className="text-[var(--color-white)]">
          I build things as a Fullstack Software Engineer @{" "}
          <a
            href="https://mobileum.com"
            target="_blank"
            className="font-bold hover:underline"
          >
            Mobileum
          </a>
          .
        </p>
        <p className="text-white">
          I enjoy working with TypeScript, React, Node.js and Java, and I&apos;m
          always curious about backend architecture and performance.{" "}
        </p>
        <p className="text-white">
          {" "}
          On the side, I tinker with side projects and occasionally contribute
          to open source. Outside of code, I&apos;m probably hiking, traveling,
          sipping coffee, or gaming.
        </p>
      </div>
    </div>
  );
}
export async function generateMetadata() {
  const title = "Home - Tiago Rodrigues";
  const siteUrl = "/";

  return {
    title,
    openGraph: {
      title,
      url: siteUrl,
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}
