<template>
    <div class="top_block">
        <div>
          <span class="title_big">{{ title }}</span>
          <span class="subtitle">{{ subtitle }}</span>
        </div>
      </div>
</template>

<script>
export default {
    props : ['title', 'subtitle']
}
</script>

<style>
    .top_block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid red; */
    margin: 20px 30px;
  }
  .top_block > div {
    display: flex;
    flex-direction: column;
  }
  .title_big {
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 5px;
    width: 500px;
  }
  .subtitle {
    font-weight: 200;
    font-size: 16px;
  }
  .subtext_searchbar {
    background: #EEF0F4;
    border-radius: 20px;
    padding: 10px 15px;
    width: 250px;
    font-weight: 400;
    font-style: italic;
    font-size: 12px;
    color: #a1a1a1;
    display: flex;
    justify-content: space-between;
  }
  .subtext_searchbar img {
    width: 15px;
  }
</style>