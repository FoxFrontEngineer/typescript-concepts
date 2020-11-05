const githubUrl = "https://github.com" as githubUrl;
const nodeEnv = "develop" as nodeEnv;

type Brand<T, B extends string> = T & { readonly __brand: B}

type githubUrl = Brand<string, "githubUrl">
type nodeEnv = Brand<string, "nodeEnv"> 

const fetchStarredRepos = (nodeEnv: nodeEnv, githubUrl: githubUrl) => {
    if (nodeEnv === "production") {
        // console.info(logger())
    }
    return fetch(`${githubUrl}/users/saitonakamura/starred`)
    .then(r => r.json());
}

// через брендированный тип будет ругаться на порядок аргументов
// fetchStarredRepos(githubUrl, nodeEnv).then(data => console.info(data));

// корректный вариант
fetchStarredRepos(nodeEnv, githubUrl).then(data => console.info(data));