<template>
  <myheader />
  <div class="main">
    <div class="top-bg">
      <div class="profile">
        <div class="profile-core">
        <div class="profile-icon">
          <img src="../assets/commons/avatar.png" width="200" />
        </div>
        <div class="profile-text">
          <h3>TYANMAHOU</h3>
          GAME PROGRAMMER
        </div>
        </div>           
      </div>
      <div class="catch-copy">
      <h1>MISSION</h1>
      <p>
        <span class="big"><ruby><rb>世界</rb><rt>せかい</rt></ruby></span> をつくる<span class="big2"><ruby><rb>創作活動</rb><rt>モノづくり</rt></ruby></span>
      </p>
      </div> 
    </div>

    <h2>NEWS</h2>
    <div id="text">
    </div>
  </div>
  <foot />
</template>

<script>
import myheader from "@/components/Header.vue";
import foot from "@/components/Foot.vue";
export default {
  name: "home-view",
  data() {
    return {};
  },
  components: {
    myheader,
    foot,
  },
};
</script>

<style lang="scss">
.catch-copy{
  margin: calc(50% - 50vw + 45px) 0 0 100px;
  padding: 20px;
  background:#00000080;
  h1 {
    text-decoration:underline;
  }
  p{
    padding: 50px 0 60px 40px;
    font-size: 2.5em;

    span.big {
      font-size: 2.0em;
    }
    span.big2 {
      padding: 0 0 0 0px;
      font-size: 2.0em;
    }    
  }
  rt{
    font-size: 0.3em;
  }
}
.top-bg {
  background-image: url("../assets/commons/home_top.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  color: #fff;
  height: 100vh;
  margin: -120px calc(50% - 50vw) 20px;
  padding: 120px 0 0 10px;
}
.profile {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  padding: 20px 200px 0 0;
  margin: calc(50% - 50vw + 60px) 0;
  float:right;
}
.profile-icon {
  margin: auto;
  background: #fffafa;
  min-width: 200px;
  width: 200px;
  min-height: 200px;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
}
.profile-text {
  margin: 10px 0 0 0;
  background:#00000080;  
}
</style>
