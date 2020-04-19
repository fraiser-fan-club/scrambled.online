<template>
  <div>
    <h1>{{ category }}</h1>
    <ul>
      <li v-for="article in articles" :key="article">
        <nuxt-link :to="article" append>
          {{ article }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
const onlyCategory = category => {
  return module => module.includes(`/${category}/`);
};

const toArticles = module => {
  return module.match(/^\.\/.*?\/(?<article>.*)\.md$/).groups.article;
};

export default {
  async asyncData({ params }) {
    const category = params.category;
    const articles = require
      .context("~/articles", true, /^\.\/.*$/, "lazy")
      .keys()
      .filter(onlyCategory(category))
      .map(toArticles);
    return { category, articles };
  }
};
</script>
