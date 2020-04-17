import routes from "./routes";

export default {
  plugins: ["~/plugins/payload-injection.js"],
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
