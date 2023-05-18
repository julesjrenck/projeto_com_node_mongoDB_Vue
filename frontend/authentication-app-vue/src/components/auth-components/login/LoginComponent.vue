<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
        <div class="form-group">
          <input
            aria-label="email"
            type="email"
            id="email"
            class="form-control mb-5"
            placeholder="Digite o seu E-mail"
            v-model="loginForm.email"
            :class="{
                'is-invalid': isSubmitted && $v.loginForm.email.$error,
            }"
          />
          <div
              v-if="isSubmitted && !$v.loginForm.email.required"
              class="invalid-feedback"
          >
              O campo e-mail é obrigatório!
          </div>
        </div>
        <div class="form-group">
          <input
            aria-label="password"
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Digite a sua senha"
            v-model="loginForm.password"
            :class="{
                'is-invalid': isSubmitted && $v.loginForm.password.$error,
            }"
          />
          <div
              v-if="isSubmitted && !$v.loginForm.password.required"
              class="invalid-feedback"
            >
              O campo password é obrigatório!
          </div>
        </div>
          <p class="center">
            Não tem uma conta cadastrada?<router-link to="/register">
              Cadastre Aqui</router-link
            >
          </p>
           <center>
            <button
              @click="submitLoginUser"
              class="btn btn-primary btn-block w-75 my-4"
            >
              Entrar
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style src="" scoped></style>
