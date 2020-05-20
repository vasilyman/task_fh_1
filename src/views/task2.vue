<template>
  <div class="with-sidebar">
    <div class="sidebar">
      <div :id="`country-${index}`" v-for="(item, index) in countries" :key="index" @mouseenter="goto(item)" @click="goto(item), scrollto(index)">{{item.text}}</div>
    </div>
    <div class="map">
      <div id="map"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map_key: 'AIzaSyC2kQCr7OQevDYMDMdCxYQNGrpa0VOc5Ls',
      mapboxToken: 'pk.eyJ1IjoidmFzaWx5bWFuIiwiYSI6ImNrYWY4Nm1rMjAwd2QyeG52OTBqN3dqZzAifQ.0X2SfpNNtk1tefIPx0uw7w',
      map: null,
      geocoder: null,
      countryNames: [
        'russia',
        'poland',
        'germany',
        'france',
        'italy'
      ],
      countries: [],
      marker: null,
      infoWindow: null
    }
  },
  mounted() {
    this.add_google_map()
    window.initMap = this.map_init

    this.get_countries()  
  },
  destroyed() {
    this.remove_google_map()
  },
  computed: {
    map_url () {
      return `https://maps.googleapis.com/maps/api/js?key=${this.map_key}&callback=initMap`
    }
  },
  methods: {
    add_google_map () {
      // add to document map script
      let mapScript = document.createElement('script')
      mapScript.setAttribute('src', this.map_url)
      mapScript.async = true
      mapScript.defer = true
      document.body.appendChild(mapScript)
    },
    remove_google_map () {
      const map_script = document.querySelector(`[src="${this.map_url}"]`)
      map_script.remove()
    },
    map_init () {
      // init googlemap
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 5
      })

      this.infoWindow = new window.google.maps.InfoWindow({
        content: '',
        pixelOffset: new window.google.maps.Size(0, 13)
      })
    },
    get_countries () {
      this.countries = []
      this.countryNames.forEach(el => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${el}.json?types=country&language=en&limit=1&access_token=${this.mapboxToken}`
        this.$axios.get(url)
          .then(res => {
            try {
              let country = res.data.features[0]
              if (country) this.countries.push(country)
            } catch (error) {
              console.log(error)
            }
          })
      })
    },
    setMarker (country) {
      // Create markers.
      const icon = {
        path: 'M 0, 0 m -13, 0 a 13,13 0 1,0 26,0 a 13,13 0 1,0 -26,0',
        fillColor: 'white',
        fillOpacity: 1,
        scale: 1,
        strokeColor: 'gold',
        strokeWeight: 0
      }
      const position = new window.google.maps.LatLng(country.geometry.coordinates[1], country.geometry.coordinates[0])
      this.marker = new window.google.maps.Marker({
        position,
        icon,
        map: this.map
      })
    },
    delMarker () {
      if (this.marker) this.marker.setMap(null)
    },
    goto (country) {
      const latLng = new window.google.maps.LatLng(country.geometry.coordinates[1], country.geometry.coordinates[0])
      this.map.panTo(latLng)

      // remove old marker
      this.delMarker()

      // set new marker
      this.setMarker(country)

      // open window
      const content = `<div class="map-popup">${country.text}</div>`
      this.infoWindow.setContent(content)
      this.infoWindow.open(this.map, this.marker)
    },
    scrollto (index) {
      const sidebar = document.querySelector('.sidebar')
      const nav = document.querySelector('nav.is-top')
      const country = document.querySelector(`.sidebar #country-${index}`)
      if (country && sidebar) {
        const offset = nav ? nav.offsetHeight : 0
        const padding = parseInt(window.getComputedStyle(sidebar).getPropertyValue("padding-top"))
        const top = country.offsetTop - offset - padding
        sidebar.scrollTo({
          top,
          behavior: 'smooth'
        })
      }
    }
  },
}
</script>
<style lang="scss">
  $nav-height: 3rem;

  .with-sidebar {
    display: flex;
  }

  .map-popup {
    width: 250px;
    line-height: 100px;
    text-transform: uppercase;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }

  .sidebar {
    flex: none;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 40px 16px 40px 40px;
  }
  .sidebar::-webkit-scrollbar {
    width: 2px;
  }
  .sidebar::-webkit-scrollbar-track {
    background-color: #cccccc;
  }
  .sidebar::-webkit-scrollbar-thumb {
    background-color: black;
  }
  .sidebar div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 596px;
    height: 212px;
    background-color: #C4C4C4;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    cursor: pointer;
  }
  .sidebar div:not(:last-child) {
    margin-bottom: 178px;
  }
  .map {
    flex: 1 0 auto;
    box-sizing: border-box;
    padding: 40px;
    display: flex;
  }

  #map {
    flex: 1;
  }

  .has-fixed-top {
    .sidebar {
      height: calc(100vh - #{$nav-height});
    }
    .map {
      min-height: calc(100vh - #{$nav-height});
    }
  }
  
  .has-fixed-top.nav-fixed-bottom {
    .sidebar {
      height: calc(100vh - #{$nav-height * 2});
      margin-top: $nav-height;
      margin-bottom: $nav-height;
    }
    .map {
      min-height: calc(100vh - #{$nav-height * 2});
    }
  }
</style>
