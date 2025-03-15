export const metadata = {
  title: "CV",
};

type Job = {
  company: string;
  startDate: string;
  endDate: string | undefined;
  role: string;
  achievments: string[];
  technologies: string[];
};

const jobs: Job[] = [
  {
    company: "Mobileum",
    startDate: "October 2021",
    endDate: undefined,
    role: "Software Engineer @ Mobileum",
    achievments: [
      "Migrated legacy JavaScript modules from NPM 12 to NPM 20+ and upgraded Webpack to version 5, ensuring better performance and maintainability.",
      "Integrated the front-end team for 1 year where I contributed to a complete front-end overhaul using React, improving UI performance by 40%, reducing issues by 10%, and delivering a cleaner, more modern user experience.",
      "Implemented a key-value store feature for efficient data distribution across multiple instances while optimizing resource sharing.",
      "Designed a real-time event processing system using an H2 database for rapid storage, transformation, and analytics.",
      "Integrated Keycloak for OAuth2.0 and OpenID-based Single Sign-On across backend and frontend applications.",
      "Led the development of microservices for customer-facing documentation, improving search performance and user experience.",
      "Built and maintained CI/CD pipelines with Jenkins, automating documentation generation, unit testing, and product builds.",
      "Integrated AWS for deploying Docker images, streamlining cloud-based product delivery.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Javascript",
      "Typescript",
      "AWS",
      "Jenkins",
      "Docker",
      "PostgreSQL",
      "OracleDB",
      "MongoDB",
      "Kafka",
      "Git",
      "Hadoop",
    ],
  },
];

export default function CV() {
  return (
    <div className="flex pt-20 pb-16 w-full h-full px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold text-lg mb-8">CV</h1>
        {jobs.map((job: Job, index) => {
          return (
            <div key={`${job.role}-${index}`}>
              <span className="font-bold mb-1">{job.role}</span>
              <p>
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
              <span className="font-bold">Stack: {job.technologies.join(", ")}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
