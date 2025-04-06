import { JOBS } from "@/lib/constants";
import { Job } from "@/lib/types";

export default function CV() {
  return (
    <div className="flex pt-20 pb-16 w-full h-full px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold text-lg mb-8">CV</h1>
        {JOBS.map((job: Job, index) => {
          return (
            <div key={`${job.role}-${index}`}>
              <span className="font-bold mb-1 text-[var(--color-white)]">
                {job.role}
              </span>
              <p className="text-[var(--color-white)]">
                {job.startDate}{" "}
                {job.endDate ? ` — ${job.endDate}` : " — Present"}
              </p>

              <ul className="mb-4 flex list-disc flex-col gap-0.5 pl-6 ">
                {job.achievments.map((achievement: string) => {
                  return (
                    <li
                      className="list-disc"
                      key={`${job.role}-${achievement}`}
                    >
                      {achievement}
                    </li>
                  );
                })}
              </ul>
              <span className="font-bold text-[var(--color-white)]">
                Stack: {job.technologies.join(", ")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function generateMetadata() {
  const title = "CV";
  const siteUrl = "/cv";

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
