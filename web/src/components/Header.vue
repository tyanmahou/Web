<template>
  <div class="header">
      <a href="#">
    <div class="logo">
    <mylink url="/">
        <img src="../assets/commons/web_logo.png" width="300" />
        </mylink>
    </div>
      </a>
    <div class="navi">
      <ul class="core">
        <li v-for="(item, index) in navis" :key="item.name"
        v-bind:class="current == index ? 'current' : ''"
        >
        <a v-if="item.external"
        :href="item.url"
        target="_blank"
        >
         {{item.name}} <img src="@/assets/commons/icon/external_link.png" width="15" />
         </a>        
        <mylink v-else
        :url="current == index ?'#' : item.url"
        :absolute="current == index"
        >
         {{item.name}}
         </mylink>
        </li>
      </ul>
      <ul class="service">
        <li v-for="item in services">
            <serviceicon :url="item.url" :icon="item.icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import serviceicon from "@/components/ServiceIcon.vue";
import mylink from "@/components/Link.vue";
export default {
  name: "Header",
  props: {
    current: String
  },
  components: {
    serviceicon,
    mylink,
  },
  data() {
    return {
      navis:[
        {
          name:'TOP',
          url:'/',
          external: false
        },
        {
          name:'GAME',
          url:'/game',
          external: false
        },
        {
          name:'GALLERY',
          url:'/gallery',
          external: false
        },
        {
          name:'BLOG',
          url:'https://mahou-ptr.hatenablog.com',
          external: true
        },
        {
          name:'ABOUT',
          url:'/about',
          external: false
        },
      ],
      services:[
        {
          url:'https://twitter.com/tyanmahou',
          icon:'twitter.png'
        },
        {
          url:'https://github.com/tyanmahou',
          icon:'github.png'
        },
        {
          url:'https://soundcloud.com/tyanmahou',
          icon:'soundcloud.png'
        },
        {
          url:'https://www.youtube.com/user/tyanmahou',
          icon:'youtube.png'
        },
      ]
    };
  }
};
</script>
