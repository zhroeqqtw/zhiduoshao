<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  components: {
    Hello,
  },  
};
</script>

<style  rel="stylesheet/scss" lang="scss">
html {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #ddd;
  font-family: 'Microsoft YaHei', 'Arial';
  font-size: 14px;
}

a {
  text-decoration: none;
  &:active,
  &:focus,
  &:visited {
    color: inherit;
  }
}

.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  clear: both;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
.mb-8 {
  margin-bottom: 8px;
}
.color-gray {
  color: #999;
}

body .mint-header {
    background: #fff;
    color: #333;
}
</style>
