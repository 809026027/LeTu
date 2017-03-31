<template>
  <div class="container">
    <navbar title="计算距离"></navbar>
    <weex-amap class="map" ref="map2017" :scale="true" geolocation="true" :sdk-key="keys" :zoom="zoom" :center="pos">
      <weex-amap-marker :position="marker1.position" :title="marker1.title"></weex-amap-marker>
      <weex-amap-marker :position="marker2.position" :title="marker2.title"></weex-amap-marker>
    </weex-amap>
    <div class="map-control">
      <text class="title">Methods: getDistanceBetweenMarkers</text> 
      <text class="tips">getDistanceBetweenMarkers，可以获取地图上两个坐标点的距离</text>
      <text class="distance" v-if="distance">{{distance}}</text>
      <text class="distance" v-if="location">{{location}}</text>
      <div @click="getDistance" class="btnbox"><text class="btn" >Get Distance</text></div>
      <div @click="getUserLocation" class="btnbox"><text class="btn" >Get Location</text></div>
    </div>
  </div>
</template>

<style>
  .container{
    position: relative;
    flex:1; 
    background-color: #fff;
  }
  .map{
    flex: 1;
    position: relative;
    background-color: #fff;
    min-height: 600px;
    border-bottom-width: 10px;
    border-bottom-color: #fff;
  }
  .map-control{
    padding-top: 20px;
    min-height: 600px;
  }
  .title{
    margin-left: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 36px;
    border-left-width: 6px;
    border-left-color: #0f89f5;
    color: #222;
    text-align: left;
  }
  .tips{
    margin: 20px;
    padding: 10px;
    color:#666;
    font-size: 20px;
  }
  .btn{
    margin: 20px;
    padding: 20px;
    background-color: #1ba1e2;
    border-radius: 5px;
    color: #fff; 
    text-align:center;
    cursor: pointer;
    font-size: 28px;
  }
  .distance{
    padding: 5px;
    margin: 20px;
    font-size: 22px;
    background-color: #f1c40f;
    color: #000;
  }
</style>

<script>
    import Navbar from '../include/navbar.vue'
  var Amap = null;
  try {
    Amap = weex.requireModule('amap');
  } catch(err) {
    console.log(err);
  }

  export default {
      components: { Navbar},
    data() {
        return {
            keys: {
                h5: 'f4b99dcd51752142ec0f1bdcb9a8ec02',
                ios: '',
                android: 'db6a973159cb0c2639ad02c617a786ae'
            },
            marker1: {
                position: [116.368904, 39.923423],
                title: '标记点1'
            },
            marker2: {
                position: [116.387271, 39.922501],
                title: '标记点2'
            },
            zoom: 13,
            pos: [116.387271, 39.922501],
            distance: false,
            location: false
        }
    },
    
    methods: {
      getDistance() {
        Amap.getLineDistance(this.marker1.position, this.marker2.position, (res) => {
          if(res.result == 'success') {
            this.distance = '两点相距' + res.data.distance + '米';
          } else {
            console.log('计算失败');
          }
        })    
      },
      getUserLocation() {
          var modal = weex.requireModule('modal');
          modal.alert(
              {
                  message: this.$refs.map2017,
                  okTitle: '确定'
              }
          );
          Amap.getUserLocation(this.$refs.map2017.ref,(res) => {
              modal.alert(
                  {
                      message: 222,
                      okTitle: '确定'
                  }
              );

              if(res.result == 'success') {
                  modal.alert(
                      {
                          message: 333,
                          okTitle: '确定'
                      }
                  );
                  this.location = '用户定位：' + res.data.position[0] +"_"+res.data.position[1];
              } else {
                  modal.alert(
                      {
                          message: 444,
                          okTitle: '确定'
                      }
                  );
              }
          })
      }
    }
  }
</script>