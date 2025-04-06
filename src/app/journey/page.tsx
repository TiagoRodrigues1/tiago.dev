import { JourneyCard } from "@/components/journey-card";
import { JOURNEY_ITEMS } from "@/lib/constants";
import { YearLog } from "@/lib/types";

export default function Journey() {
  return (
    <div className="flex pt-20 pb-16 w-full h-full px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold text-lg mb-8">Journey</h1>
        {JOURNEY_ITEMS.map((yearLog: YearLog, itemIndex: number) => (
          <div
            key={`data_${itemIndex}${yearLog.logs[0].title}`}
            className="flex flex-col items-baseline gap-8 md:flex-row md:gap-12 mb-6"
          >
            <h2 className="w-16">{yearLog.year}</h2>
            <section>
              {yearLog.logs.map((log, logIndex) => (
                <div
                  key={`data_${itemIndex}_log_${logIndex}_${log.title}`}
                  className="relative flex pb-8 last:pb-0"
                >
                  {logIndex !== yearLog.logs.length - 1 && (
                    <div className="absolute inset-0 flex w-5 items-center justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                  )}
                  <div className="z-0 grid size-5 shrink-0 place-items-center rounded-full border bg-white text-white shadow-xs">
                    <div className="size-2 rounded-full bg-blue-600" />
                  </div>
                  <div className="grow pl-4 lg:pl-8">
                    <JourneyCard {...log} />
                  </div>
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata() {
  const title = "Journey";
  const siteUrl = "/journey";

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
