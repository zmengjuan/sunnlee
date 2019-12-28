import Vue from 'vue'

const ComponentsCommons = require.context('@/components/common/', true, /\.vue$/)

const RC = rc => {
   rc.keys().forEach(filePath => {
      const componentsConfig = rc(filePath)
      const fileName = filePath.split('/').pop().replace(/\.\w+$/, '')
   Vue.component('my-'+ fileName, componentsConfig.default)
   });
}

RC(ComponentsCommons)