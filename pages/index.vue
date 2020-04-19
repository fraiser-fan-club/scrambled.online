<template>
  <div>
    <h1>Scrambled</h1>
    <ul>
      <li v-for="category in categories" :key="category">
        <nuxt-link :to="category">
          {{ category }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
const unique = (value, index, arr) => {
  return arr.indexOf(value) === index;
};

const toCategories = module => {
  return module.match(/^\.\/(?<category>.*?)\/.*$/).groups.category;
};

export default {
  async asyncData() {
    const categories = require
      .context("~/articles")
      .keys()
      .map(toCategories)
      .filter(unique);
    return { categories };
  }
};
</script>
