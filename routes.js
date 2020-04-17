import globby from "globby";
import path from "path";

export default async function() {
  const config = {
    onlyFiles: true,
    deep: 2
  };
  return globby("articles/**/*.md", config).then(articles => {
    return articles.map(article => {
      const category = article.split(path.sep)[1];
      const name = path.basename(article, ".md");
      return `/${category}/${name}`;
    });
  });
}
