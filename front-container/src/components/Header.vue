<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <img src="/Logo.png" width="250" alt="Vue.js">
      </div>
      <router-link to="/">
        <div class="header__user">
          <span>Выход</span>
          <div class="header__user-img">
            <img src="/icon-user.png" width="30" alt="User">
          </div>
        </div>
      </router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: #841911;
  padding: 10px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .header__user {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .header__user:hover {
    opacity: 0.7;
  }

  .header__user-img {

    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #ffffff;
  }

}
</style>