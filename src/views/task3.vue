<template>
  <div class="card-container">
    <div class="card">
      <div class="card-footer">
        <div class="card-title">Title</div>
        <div class="card-price">$222</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .card-container {
    padding: 40px;
    width: 800px;
    height: 416px;
    display: flex;
  }
  .card {
    position: relative;
    flex: 1;
    background-color: #C4C4C4;
  }
  .card-footer {
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 100px;
    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 18px;
    background-image:
      linear-gradient(180deg, rgba(0, 41, 255, 0) 0%, rgba(0, 22, 136, .4) 95.83%, rgba(#000000, .4) 100%);
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
  }
  .card-title {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 15px;
  }
  .card-price {
    flex: none;
  }
</style>
