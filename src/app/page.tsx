export const metadata = {
  title: "Home - Tiago Rodrigues",
};

export default function Home() {
  return (
    <div className="flex pt-20 pb-16 w-full h-full px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold text-lg mb-8">Hello 👋</h1>
        <p className="text-[var(--color-white)]">I&apos;m Tiago, a software engineer based in Braga, Portugal — 🇵🇹</p>
        <p className="text-[var(--color-white)]">
          I build things as a Fullstack Software Engineer @{" "}
          <a href="https://mobileum.com" target="_blank" className="font-bold">
            Mobileum
          </a>
          .
        </p>
      </div>
    </div>
  );
}
