<template>
  <div v-html="article.html" />
</template>

<script>
export default {
  async asyncData({ params }) {
    const article = await import(
      `~/articles/${params.category}/${params.article}.md`
    );
    return { article };
  }
};
</script>

<style></style>
