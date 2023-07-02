<template>
  <img :src="languageIcon" alt="" class="language-btn" @click="handleChangeLanguage">
  <RouterView />
</template>
<script setup lang="ts">
import {useLanguageStroe} from '@/store/language';
import languageIcon from '@/assets/images/language.svg'
const { changeLanguage } = useLanguageStroe()
const handleChangeLanguage = () => {
  changeLanguage()
}
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.title{
  width: 750px;
  font-size: 28px;
}
.language-btn{
  width: 64px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 99;
}
</style>