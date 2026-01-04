<template>
  <div id="blog" class="latest-news-area section">
    <!--======  Start Section Title Five ======-->
    <div class="section-title-five">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h2 class="fw-bold">Кому мы можем помочь</h2>
              <p>
                Мы оказываем поддержку людям, оказавшимся в сложных жизненных 
                ситуациях. Каждый человек заслуживает шанс на новую жизнь.
              </p>
            </div>
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!--======  End Section Title Five ======-->
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <!-- Single News -->
          <div class="single-news">
            <div class="image">
              <a href="javascript:void(0)"><img class="thumb" src="assets/images/blog/1.png" alt="Blog" ></a>
            </div>
            <div class="content-body">
              <h4 class="title">
                <a href="javascript:void(0)"> Помощь людям без жилья </a>
              </h4>
              <p>
                Мы предоставляем временное проживание, базовую поддержку и помощь 
                в восстановлении документов и социальной адаптации.
              </p>
            </div>
          </div>
          <!-- End Single News -->
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <!-- Single News -->
          <div class="single-news">
            <div class="image">
              <a href="javascript:void(0)"><img class="thumb" src="assets/images/blog/2.png" alt="Blog" ></a>
            </div>
            <div class="content-body">
              <h4 class="title">
                <a href="javascript:void(0)">
                  Помощь безработным
                </a>
              </h4>
              <p>
                Мы помогаем с поиском работы, подготовкой резюме, консультациями и 
                восстановлением навыков для трудоустройства.
              </p>
            </div>
          </div>
          <!-- End Single News -->
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <!-- Single News -->
          <div class="single-news">
            <div class="image">
              <a href="javascript:void(0)"><img class="thumb" src="assets/images/blog/3.png" alt="Blog" ></a>
            </div>
            <div class="content-body">
              <h4 class="title">
                <a href="javascript:void(0)">
                  Помощь оказавшимся на улице
                </a>
              </h4>
              <p>
                Мы оказываем экстренную поддержку людям, попавшим на улицу: 
                питание, одежда, жильё и помощь выхода из кризиса.
              </p>
            </div>
          </div>
          <!-- End Single News -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// Scripts from original template (if needed) will be initialized in layout or component-specific onMounted
onMounted(()=>{
  // Initialize JS plugins if present (glightbox, tiny-slider) - handled globally in layout
})
</script>
