<!-- GIS地图 -->
<template>
  <div class="gis-map">
    <div class="content">
      <div class="detail">
        <div class="weather">
          <div class="weather-item">
            <span class="weather-label">天气</span>
            <div class="weather-value">
              <img :src="weatherImg">
              <span>{{ weather }}</span>
            </div>
          </div>
          <div class="weather-item">
            <span class="weather-label">温度</span>
            <div class="weather-value">{{ temperature }}</div>
          </div>
          <div class="weather-item">
            <span class="weather-label">风速</span>
            <div class="weather-value">{{ winkSpeed }}</div>
          </div>
          <div class="weather-item">
            <span class="weather-label">空气指数</span>
            <div class="weather-value">{{ airIndex }}</div>
          </div>
        </div>
        <div class="map-container">
          <baidu-map
            class="map"
            ak="goTEzpftx3ZSYgKlAsf5pRjsVEsSqg6T"
            :center="center"
            :zoom="zoom"
            :min-zoom="9"
            scroll-wheel-zoom
            @ready="onMapReady"
          >
            <!--地图缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{height: 40}"></bm-navigation>
            <bm-marker
              :position="center"
              dragging
              animation="BMAP_ANIMATION_BOUNCE"
              @click="handleMarkClick"
            ></bm-marker>
            <bm-boundary name="扬州市" :strokeWeight="2" strokeColor="#B9D0E6" fillColor=""></bm-boundary>
          </baidu-map>
        </div>
        <div class="user">
          <div class="online">
            <span>当前用户数</span>
            <a><count-to :startVal="0" :endVal="currentUser" :duration="2000"></count-to></a>
          </div>
          <div class="all">
            <span>总用户数</span>
            <a><count-to :startVal="0" :endVal="allUser" :duration="2000"></count-to></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BaiduMap,
  BmMarker,
  BmBoundary,
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
    BmBoundary,
    countTo
  },
  data () {
    return {
      zoom: 9,
      center: {
        lng: 119.607563,
        lat: 32.428131
      },
      showMarker: false,
      active: false,
      currentUser: 200,
      allUser: 1000,
      winkSpeed: '西风<3级',
      temperature: '20~25℃',
      weather: '小雨',
      airIndex: '36',
      weatherImg: require('assets/images/rain.png')
    }
  },
  methods: {
    onMapReady ({ BMap, map }) {
      var bdary = new BMap.Boundary()
      bdary.get('扬州市', function (rs) { // 获取行政区域
        var EN_JW = '180, 90;' // 东北角
        var NW_JW = '-180,  90;' // 西北角
        var WS_JW = '-180, -90;' // 西南角
        var SE_JW = '180, -90;' // 东南角
        // 4.添加环形遮罩层
        var ply1 = new BMap.Polygon(rs.boundaries[0] + SE_JW + SE_JW + WS_JW + NW_JW + EN_JW + SE_JW,
          { strokeColor: 'none', fillColor: 'rgb(5, 31, 48)', fillOpacity: 0.8, strokeOpacity: 0.5 }) // 建立多边形覆盖物
        const mapStyle = [
          // 陆地
          {
            featureType: 'land',
            elementType: 'all',
            stylers: {
              color: '#073763'
            }
          },
          // 水系
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#073763',
              lightness: -54
            }
          },
          // 国道与高速
          {
            featureType: 'highway',
            elementType: 'all',
            stylers: {
              color: '#45818e'
            }
          },
          // 边界线
          {
            featureType: 'boundary',
            elementType: 'all',
            stylers: {
              color: '#ffffff',
              lightness: -62,
              visibility: 'on'
            }
          },
          // 行政标注
          {
            featureType: 'label',
            elementType: 'labels.text.fill',
            stylers: {
              color: '#ffffff',
              visibility: 'on'
            }
          },
          {
            featureType: 'label',
            elementType: 'labels.text.stroke',
            stylers: {
              color: '#444444',
              visibility: 'on'
            }
          }
        ]
        map.setMapStyle({
          styleJson: mapStyle
        })
        map.addOverlay(ply1)
      })
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
      .content {
        background: url("~assets/images/box-bg-3.png") no-repeat;
        background-size: 100% 100%;
      }
      .detail {
        padding: 10px;
        display: flex;
        height: 100% !important;
        .map-container {
          flex: 1;
          overflow: hidden;
          .map {
            width: 100%;
            height: 100%;
          }
        }
        .weather {
          color: #005cb9;
          font-weight: 600;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          margin-right: 5px;
          .weather-item {
            flex: 1;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            margin-bottom: 10px;
            padding: 5px;
            &:last-child {
              margin-bottom: 0;
            }
            &:first-child {
              .weather-value {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                  width: 2rem;
                }
                span {
                  color: #fff;
                }
              }
            }
            .weather-label {
              color: #fff;
              font-weight: 600;
              margin-right: 0.5rem;
            }
            .weather-value {
              font-weight: 600;
              color: #EBB51C;
            }
          }
        }
        .user {
          display: flex;
          flex-direction: column;
          color: #005cb9;
          font-size: 0.8rem;
          line-height: 0.8rem;
          margin-left: 5px;
          .online,
          .all {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.1);
            padding: 10px;
            & > span {
              color: #fff;
            }
            span {
              font-weight: 600;
              margin-right: 0.5rem;
            }
            a {
              color: #EBB51C;
            }
          }
          .online {
            margin-bottom: 10px;
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
