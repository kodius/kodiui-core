import { Suspense } from "react";
import { BadExample } from "./components/bad-example";
import { GoodExample } from "./components/good-example";

const ParrallelAndSequentialPage = () => {
  return (
    <div className="grid grid-cols-2 gap-lg">
      <div>
        <Suspense fallback="bad example loading..">
          <BadExample />
        </Suspense>
      </div>
      <div>
        <Suspense fallback="good example loading..">
          <GoodExample />
        </Suspense>
      </div>
    </div>
  );
};

export default ParrallelAndSequentialPage;
