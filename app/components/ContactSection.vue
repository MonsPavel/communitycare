<template>
  <section class="contact">

<div class="container">
<div class="row">
<div class="col-xl-4">
<div class="contact-item-wrapper">
<div class="row">
<div class="col-12 col-md-6 col-xl-12">
<div class="contact-item">
<div class="contact-icon">
<i class="lni lni-phone"></i>
</div>
<div class="contact-content">
<h4>Contact</h4>
<p>0984537278623</p>
<p>yourmail@gmail.com</p>
</div>
</div>
</div>
<div class="col-12 col-md-6 col-xl-12">
<div class="contact-item">
<div class="contact-icon">
<i class="lni lni-map-marker"></i>
</div>
<div class="contact-content">
<h4>Address</h4>
<p>175 5th Ave, New York, NY 10010</p>
<p>United States</p>
</div>
</div>
</div>
<div class="col-12 col-md-6 col-xl-12">
<div class="contact-item">
<div class="contact-icon">
<i class="lni lni-alarm-clock"></i>
</div>
<div class="contact-content">
<h4>Schedule</h4>
<p>24 Hours / 7 Days Open</p>
<p>Office time: 10 AM - 5:30 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-8">
<div class="contact-form-wrapper">
<div class="row">
<div class="col-xl-10 col-lg-8 mx-auto">
<div class="section-title text-center">
<span> Get in Touch </span>
<h2>
                    Ready to Get Started
                  </h2>
<p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    quiblanditiis praesentium
                  </p>
</div>
</div>
</div>
<form action="#" class="contact-form">
<div class="row">
<div class="col-md-6">
<input id="name" name="name" placeholder="Name" required="" type="text"/>
</div>
<div class="col-md-6">
<input id="email" name="email" placeholder="Email" required="" type="email"/>
</div>
</div>
<div class="row">
<div class="col-md-6">
<input id="phone" name="phone" placeholder="Phone" required="" type="text"/>
</div>
<div class="col-md-6">
<input id="email" name="subject" placeholder="Subject" required="" type="text"/>
</div>
</div>
<div class="row">
<div class="col-12">
<textarea id="message" name="message" placeholder="Type Message" rows="5"></textarea>
</div>
</div>
<div class="row">
<div class="col-12">
<div class="button text-center rounded-buttons">
<button class="btn primary-btn rounded-full" type="submit">
                      Send Message
                    </button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>

  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// Scripts from original template (if needed) will be initialized in layout or component-specific onMounted
onMounted(()=>{
  // Initialize JS plugins if present (glightbox, tiny-slider) - handled globally in layout
})
</script>
