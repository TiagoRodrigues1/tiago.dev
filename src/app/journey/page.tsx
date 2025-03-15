import { JourneyCard } from "@/components/JourneyCard";
import { ImageType } from "@/components/JourneyCard";

type YearLog = {
  year: number;
  logs: Log[];
};

type Log = {
  title: string;
  description: string;
  image?: ImageType;
};

const journeyData: YearLog[] = [
  {
    year: 2025,
    logs: [
      {
        title: "New UI for my portfolio",
        description: "Gave it a new minimalist look, using mainly shadcn",
      },
    ],
  },
  {
    year: 2024,
    logs: [
      {
        title: "Went to Budapeste",
        description: "Had lots of fun! 🇭🇺",
        image: {
          url: "https://u73kp26vd1.ufs.sh/f/3FmnM8A0jrV22TEzV1voVw7hWFQzNXqevDfZ9BdiSjPkLxGY",
          width: 620,
          height: 620,
          title: "budapeste parlament",
        },
      },
      {
        title: "Visited Milan",
        description: "Frst time in Italy 🇮🇹",
        image: {
          url: "https://u73kp26vd1.ufs.sh/f/3FmnM8A0jrV20bjLXJNIVc5x6Ny4zmOG8jwbJMgHPaBfrQud",
          width: 620,
          height: 620,
          title: "Lago di como italy",
        },
      },
    ],
  },
  {
    year: 2021,
    logs: [
      {
        title: "Joined Mobieum",
        description: "First job after graduation, exited!",
        image: {
          url: "https://u73kp26vd1.ufs.sh/f/3FmnM8A0jrV2brx02EwSHZgLePu6E8dRQ3mFqD0wiY4vXGkO",
          width: 620,
          height: 620,
          title: "Mobileum logo",
        },
      },
      {
        title: "Graduates from University",
        description: "3 years after, its done! :)",
      },
    ],
  },
  {
    year: 2018,
    logs: [
      {
        title: "Started at Universidade Fernando Pessoa",
        description: "Feeling lucky to study Software Engineering",
      },
    ],
  },
];

export const metadata = {
  title: "Journey",
};

export default function Journey() {
  return (
    <div className="flex pt-20 pb-16 w-full h-full px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold text-lg mb-8">Journey</h1>
        {journeyData.map((yearLog: YearLog, itemIndex: number) => (
          <div
            key={`data_${itemIndex}`}
            className="flex flex-col items-baseline gap-8 md:flex-row md:gap-12 mb-6"
          >
            <h2 className="w-16">{yearLog.year}</h2>
            <section>
              {yearLog.logs.map((log, logIndex) => (
                <div
                  key={`data_${itemIndex}_log_${logIndex}`}
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
                    <JourneyCard
                      index={logIndex}
                      {...log}
                      priority={itemIndex === 0 && logIndex === 0}
                    />
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
