import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa6";
import Link from "next/link";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const fetchRepos = async () => {
  const res = await fetch("https://api.github.com/users/mvaibhav77/repos", {
    next: {
      revalidate: 60,
    },
    headers: {
      Authorization: `${GITHUB_TOKEN}`,
    },
  });
  await new Promise((res) => setTimeout(res, 1500));
  return await res.json();
};

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
