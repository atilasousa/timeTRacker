<template>
  <div :class="loginPageClass()">
    <aside :class="loginPageClass('login-data')">
      <h1 :class="loginPageClass('page-title')">Login</h1>
      <div :class="loginPageClass('login-form')">
        <BaseInput
          v-model="email"
          type="email"
          placeHolder="Digite seu email"
          leftIcon="fa-solid fa-user"
        />
        <BaseInput
          v-model="password"
          type="password"
          placeHolder="Digite a sua password"
          leftIcon="fa-solid fa-lock"
        />
      </div>
    </aside>
    <aside :class="loginPageClass('login-info')">
      <div class="content">
        <h1>Vammmos pegar</h1>
      </div>
    </aside>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseInput from "../components/BaseInput.vue";
import bem from "bem-ts";

const email = ref("");
const password = ref("");

const loginPageClass = bem("login-page", { strict: false });
</script>

<style lang="scss">
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  &__page-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &__login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    width: 80%;

    .input-holder {
      margin-bottom: 1rem;
    }
  }

  &__login-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    background-color: #fff;
  }

  &__login-info {
    height: 100%;
    width: 50%;
    background-image: url("../assets/images/background-login.jpg");
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    position: relative;

    h1 {
      z-index: 3;
    }

    .content {
      position: fixed;
      left: 0;
      right: 0;
      z-index: 9999;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
</style>
