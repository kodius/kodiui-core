import { Suspense } from "react";
import { ParrallelFetching } from "./components/parallel-fetching";
import { SequentialFetching } from "./components/sequential-fetching";

const ParrallelAndSequentialPage = () => {
  return (
    <div className="grid grid-cols-2  gap-xl">
      <div>
        <Suspense fallback="sequential example loading..">
          <SequentialFetching />
        </Suspense>
      </div>
      <div>
        <Suspense fallback="parrallel rxample loading..">
          <ParrallelFetching />
        </Suspense>
      </div>
    </div>
  );
};

export default ParrallelAndSequentialPage;
