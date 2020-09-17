<!-- GIS地图 -->
<template>
  <div class="gis-map">
    <div class="content">
      <div class="title">GIS地图</div>
      <div class="detail">
        <div class="weather">{{ weather }}</div>
        <div class="user">
          <div class="online">
            <span>当前用户数:</span>
            <a><count-to :startVal="0" :endVal="currentUser" :duration="2000"></count-to></a>
          </div>
          <div class="all">
            <span>总用户数:</span>
            <a><count-to :startVal="0" :endVal="allUser" :duration="2000"></count-to></a>
          </div>
        </div>
        <baidu-map
            class="map"
            ak="goTEzpftx3ZSYgKlAsf5pRjsVEsSqg6T"
            :center="center"
            :zoom="zoom"
            scroll-wheel-zoom
            @ready="onMapReady"
        >
          <!--地图缩放-->
          <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{
            height: 40
          }"></bm-navigation>
          <bm-marker
              :position="center"
              dragging
              animation="BMAP_ANIMATION_BOUNCE"
              @click="handleMarkClick"
          ></bm-marker>
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BaiduMap,
  BmMarker,
  BmNavigation
} from 'vue-baidu-map'
import countTo from 'vue-count-to'
export default {
  name: 'GisMap',
  mixins: [],
  components: {
    BaiduMap,
    BmMarker,
    BmNavigation,
    countTo
  },
  data () {
    return {
      zoom: 15,
      center: {
        lng: 119.419251,
        lat: 32.400703
      },
      showMarker: false,
      active: false,
      weather: '20~25℃ 小雨 西风<3级 PM2.5 36 优',
      currentUser: 200,
      allUser: 1000
    }
  },
  methods: {
    onMapReady ({ BMap, map }) {
      this.showMarker = true
    },
    draw ({ el, BMap, map }) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(119.41, 32.40))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    },
    handleMarkClick () {
      console.log('点击了')
    }
  },
  computed: {},
  watch: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
    .gis-map {
      flex: 1;
      padding-left: 0 !important;
      padding-right: 0 !important;
      .detail {
        padding: 10px;
        position: relative;
        .map {
          width: 100%;
          height: 100%;
        }
        .weather,
        .user {
          position: absolute;
          top: 20px;
          z-index: 1000;
          padding: 10px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 4px;
        }
        .weather {
          left: 20px;
          color: #005cb9;
          font-weight: 600;
          font-size: 0.8rem;
        }
        .user {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          justify-content: space-between;
          color: #005cb9;
          font-size: 0.8rem;
          line-height: 0.8rem;
          .online,
          .all {
            display: flex;
            & > span {
              font-weight: 600;
            }
            a {
              color: #2700ff;
              span {
                font-weight: 600;
              }
            }
          }
          .online {
            margin-right: 10px;
          }
        }
      }
    }

    ::v-deep {
      .BMap_cpyCtrl {
        display: none;
      }
      .anchorBL {
        display: none;
      }
    }
</style>
