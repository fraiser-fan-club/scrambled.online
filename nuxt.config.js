import routes from "./routes";

export default {
  generate: {
    routes
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.md$/i,
        loader: "frontmatter-markdown-loader",
        options: {
          mode: ["html"]
        }
      });
    }
  }
};
