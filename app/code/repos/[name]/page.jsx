import { Suspense } from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href="/code/repos">
        Back to Repositories
      </Link>

      {/* learning how to create suspense boundaries */}

      <Suspense fallback={<div>Loading repo...</div>}>
        {/* this loads super fast */}
        <Repo name={name} />
      </Suspense>

      <Suspense fallback={<div>Loading Directories...</div>}>
        {/* this loads in 3s so we suspense to load what can be loaded and wait for only that component which takes time*/}
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
