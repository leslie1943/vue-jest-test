<template>
  <div class="position-card" :id="`view_${position.id}`" :style="{ opacity: getOpacity(), color: getColor() }">
    <h1>This is base component</h1>
    <div>{{ position }}</div>
    <div>selectedChapters >>>>>>> {{ selectedChapters }}</div>
    <div>selectedTypeFromTribe >>>>>>> {{ selectedTypeFromTribe }}</div>
    <div>showAnalytics >>>>>>> {{ showAnalytics ? 'true' : 'false' }}</div>
    <div>middlePropName >>>>>>> {{ middlePropName }}</div>
    <div>isVisible is true in Business component {{ isVisible }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class BasePositionCard extends Vue {
  // overwrite by PositionHomeViewCard.vue
  isVisible = 'isVisible in BasePostiionCard.vue'

  get detail(): string {
    return ''
  }

  getColor(): string {
    return ''
  }

  getOpacity(): number {
    return 1
  }
}
</script>

<style lang="scss" scoped>
.location__container {
  border-top: 1px solid #e0e0e0;
  padding: 16px 0;
  margin: 0 16px;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    line-height: 21px;
    + div {
      margin-top: 8px;
    }
    .detail__label {
      color: #666;
      white-space: nowrap;
      margin-right: 8px;
    }
    .detail__value {
      color: #000;
      text-align: right;
      display: flex;
      align-items: center;
      .theme--light.v-image {
        display: inline-block;
        margin-right: 8px;
      }
    }
  }
}
.v-sheet.v-card--hover {
  cursor: default;
}
.position-card {
  min-width: 300px;
  text-align: left;
  &.current-highlighted {
    .v-card {
      border: 1px solid #568200;
      box-shadow: 0 2px 6px rgba(86, 130, 0, 0.8);
    }
  }
}

.summary__title {
  font-size: 16px;
  color: #929292;
  letter-spacing: 0.2px;
  line-height: 24px;
  padding: 12px 12px 0px 12px;
}

.summary__name {
  font-size: 16px;
  color: #568200;
  font-weight: 700;
  line-height: 20px;
  text-transform: capitalize;
}
.v-card__actions {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}

.position__code {
  font-size: 14px;
  color: #7a7a7a;
  letter-spacing: 0.17px;
  line-height: 20px;
}
.summary__detail {
  font-size: 14px;
  color: #0e67a9;
  letter-spacing: 0.17px;
  line-height: 20px;
  padding: 0px 8px 8px;
}
</style>
