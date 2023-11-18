import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const fetchRepo = async (name) => {
  const res = await fetch(`https://api.github.com/repos/mvaibhav77/${name}`, {
    next: {
      revalidate: 60,
    },
    headers: {
      Authorization: `${GITHUB_TOKEN}`,
    },
  });
  console.log(`https://api.github.com/repos/mvaibhav77/${name}`);
  return await res.json();
};

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
