<template>
  <div>
    <header class="navbar-area navbar-nine">
      <section class="navbar-area navbar-nine">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
      <nav class="navbar navbar-expand-lg">
            <NuxtLink to="/" class="navbar-brand">
              <img src="/assets/images/logo.png" alt="Logo" style="height:36px">
            </NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine" aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
              <span class="toggler-icon"/>
              <span class="toggler-icon"/>
              <span class="toggler-icon"/>
            </button>

            <div id="navbarNine" class="collapse navbar-collapse sub-menu-bar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <NuxtLink class="page-scroll active" to="#hero-area">Главная</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="page-scroll" to="#about">О нас</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="page-scroll" to="#services">Услуги</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="page-scroll" to="#blog">Кому мы помогаем</NuxtLink>
                </li>
              </ul>
            </div>

            <!-- <div class="navbar-btn d-none d-lg-inline-block">
              <a class="menu-bar" href="#side-menu-left"><i class="lni lni-menu"/></a>
            </div> -->
          </nav>
        </div>
      </div>
    </div>
  </section>
    </header>

    <main>
      <slot />
    </main>

    <footer class="footer-area footer-eleven bg-light mt-8">
      <div class="footer-top py-6">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <a href="/">
                <img src="/assets/images/logo.png" alt="Логотип" style="height:40px; filter: brightness(0) contrast(1.2);">
              </a>
              <p class="mt-3 text-muted mb-0">Поддержка и ресурсы для людей, оказавшихся в сложных жизненных ситуациях.</p>
            </div>
            <div class="col-md-6 text-md-end">
              <h5>Контакты</h5>
              <p class="mb-0">
                <a href="tel:+79179014273" class="text-decoration-none">+7 (917) 901-42-73</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-3 text-muted small">© {{ currentYear }} — Все права защищены</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Global JS initialization for plugins will be executed in onMounted of root page
const currentYear = new Date().getFullYear()
</script>
