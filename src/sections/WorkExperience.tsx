import { Card } from "@/components/Card";

export const WorkExperience = () => {
  return (
    <div className="px-7 ">
      <Card className="px-8 flex-1 flex flex-col ">
        <h1 className="font-serif text-3xl md:text-2xl text-left mt-8 tracking-wide">
          Work Experience
        </h1>
        <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 sm:flex gap-8 mb-8">
          <div className="col-span-1">
            <h1 className="font-serif text-3xl md:text-xl text-left mt-5 tracking-wide">
              MLTech Soft
            </h1>
            <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
              Full Front End Developer
            </p>
            <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
              (Mobile and Web)
            </p>
            <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
              09/2022- Present
            </p>
          </div>
          <div className="col-span-2 md:block lg:block sm:hidden">
            <div>
              <h1 className="font-serif text-3xl md:text-xl text-left mt-5 tracking-wide">
                Mobile Development (React Native & Flutter):
              </h1>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Designed scalable app architectures, optimized performance,
                and integrated third-party APIs.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Developed cross-platform mobile apps ensuring consistency
                across iOS and Android.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Configured Gradle, Xcode, and Swift integration for seamless
                builds.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Used Git for version control (branching, merging, resolving
                conflicts).
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Debugged and optimized apps for better performance.
              </p>
            </div>
            <div>
              <h1 className="font-serif text-3xl md:text-xl text-left mt-8 tracking-wide">
                Front-end Development (React):
              </h1>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Built responsive, user-focused React applications, improving
                UX.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Optimized websites for speed and accessibility, increasing
                traffic.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Translated UX wireframes into interactive features, boosting
                engagement.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Integrated REST APIs using Axios and maintained optimal
                performance.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Used Git for collaboration and issue resolution.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 sm:flex gap-8 mb-8 mt-5">
          <div className="col-span-1">
            <h1 className="font-serif text-3xl md:text-xl text-left mt-5 tracking-wide">
              AziWorld
            </h1>
            <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
              Mobile dev (Flutter)
            </p>
            <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
              03/2022- 09/2022
            </p>
          </div>
          <div className="col-span-2 md:block lg:block sm:hidden">
            <div>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Implemented app architectures using Flutter.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Translated the design team’s UX wireframes and mockups into
                responsive, interactive features using Flutter.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Troubleshot and maintained the app, ensuring fast and optimal
                performance.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Understand the basic concepts of using Git at work, including
                branching and merging, resolving conflicts, and correctly
                commenting.
              </p>
              <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                - Worked with REST APIs using the Dio package.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
