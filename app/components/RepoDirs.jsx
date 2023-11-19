import Link from "next/link";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/mvaibhav77/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    }
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3 className="text-xl underline">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>
              {"> " + dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default RepoDirs;
