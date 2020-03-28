<template>
  <div class="max-w-md w-full mx-auto mt-3">
    <div align="left" class="p-4 rounded border bg-white">
      <div class="card aui-card aui-font" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ subTitle }}</h6>
          <p class="card-text">{{ text }}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Card title",
      subTitle: "Card subtitle",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content"
    };
  },
  cssVars: {
    "aui-card-color": "#dadada"
  }
};
</script>

<style scoped>
.aui-card {
  background-color: #dadada;
  background-color: var(--aui-card-color, #dadada);
}
</style>
