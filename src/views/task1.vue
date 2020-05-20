<template>
  <div class="block">
    <div class="item" :class="itemClass" v-for="(item, index) in items" :key="index"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variant: 1
    }
  },
  computed: {
    items () {
      let items = 8
      switch (this.variant) {
        case 1:
          items = 8
          break;
        case 2:
        case 3:
          items = 6
          break;
        case 4:
          items = 5
          break;
        case 5:
        case 6:
          items = 4
          break;
        case 7:
          items = 3
          break;
        case 8:
        case 9:
          items = 2
          break;
        case 10:
        case 11:
          items = 1
          break;
        default:
          break;
      }
      return items
    },
    itemClass () {
      let style = 'flex-25 height-416'
      switch (this.variant) {
        case 1:
          style = 'flex-25 height-416'
          break;
        case 2:
          style = 'flex-25 flex-50-4n height-416'
          break;
        case 3:
          style = 'flex-33 height-416'
          break;
        case 4:
          style = 'flex-20 height-494'
          break;
        case 5:
          style = 'flex-25 height-496'
          break;
        case 6:
          style = 'flex-50 height-416'
          break;
        case 7:
          style = 'flex-33 height-496'
          break;
        case 8:
          style = 'flex-50 height-496'
          break;
        case 9:
          style = 'flex-50 height-800'
          break;
        case 10:
          style = 'flex-100 height-496'
          break;
        case 11:
          style = 'flex-100 height-800'
          break;
        default:
          break;
      }
      return style
    }
  },
}
</script>
<style lang="scss">
  .block {
    display: flex;
    flex-wrap: wrap;
    width: 1632px;
    margin: -10px -8px;
    padding: 100px 152px;
  }

  .item.height-416 {
    height: 416px;
  }

  .item.height-494 {
    height: 494.86px;
  }

  .item.height-496 {
    height: 496px;
  }

  .item.height-800 {
    height: 800px;
  }

  .block .item {
    flex-basis: auto;
  }

  .block .item {
    background-color: #C4C4C4;
    margin: 10px 8px;
  }

  .block .item.flex-100 {
    width: calc(100% - 16px);
  }
  .block .item.flex-50 {
    width: calc(50% - 16px);
  }
  .block .item.flex-25 {
    width: calc(25% - 16px);
  }
  .block .item.flex-33 {
    width: calc(100% / 3 - 16px);
  }
  .block .item.flex-20 {
    width: calc(20% - 16px);
  }
  .block .item.flex-50-4n:nth-child(4n-3) {
    width: calc(50% - 16px);
  }
</style>
