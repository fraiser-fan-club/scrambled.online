import globby from "globby";

export default async function() {
  const config = {
    deep: 2,
    onlyFiles: false
  };
  const routePattern = /^.*?(?=\/)(?<route>.*?)(?:\.md)?$/;
  return globby("articles/**", config).then(files => {
    return files.map(file => file.match(routePattern).groups.route);
  });
}
