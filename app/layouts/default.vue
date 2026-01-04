<template>
  <div>
    <header class="navbar-area navbar-nine">
      <section class="navbar-area navbar-nine">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
      <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="index.html">
              <NuxtLink to="/" class="navbar-brand">
                <img src="/assets/images/logo.png" alt="Logo" style="height:36px">
              </NuxtLink>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine" aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
              <span class="toggler-icon"/>
              <span class="toggler-icon"/>
              <span class="toggler-icon"/>
            </button>

            <div id="navbarNine" class="collapse navbar-collapse sub-menu-bar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <NuxtLink class="page-scroll active" to="#hero-area">Home</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="page-scroll" to="#services">Services</NuxtLink>
                </li>

                <li class="nav-item">
                  <NuxtLink class="page-scroll" to="#pricing">Pricing</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="page-scroll" to="#contact">Contact</NuxtLink>
                </li>
              </ul>
            </div>

            <div class="navbar-btn d-none d-lg-inline-block">
              <a class="menu-bar" href="#side-menu-left"><i class="lni lni-menu"/></a>
            </div>
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
          <div class="row">
            <div class="col-md-4">
              <a href="/"><img src="/assets/images/logo.png" alt="Logo" style="height:32px"></a>
              <p class="mt-3 text-muted">Support and resources for people in need.</p>
            </div>
            <div class="col-md-4">
              <h5>Links</h5>
              <ul class="list-unstyled">
                <li><NuxtLink to="#services">Services</NuxtLink></li>
                <li><NuxtLink to="#pricing">Pricing</NuxtLink></li>
                <li><NuxtLink to="#contact">Contact</NuxtLink></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Contact</h5>
              <p class="mb-0">email@example.org</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-3 text-muted small">© 2025 — All rights reserved</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Global JS initialization for plugins will be executed in onMounted of root page
</script>
