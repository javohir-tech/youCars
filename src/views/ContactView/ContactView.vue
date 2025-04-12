<template>
  <div class="container">
    <a-breadcrumb class="mt-3">
      <a-breadcrumb-item>
        <RouterLink to="/">{{ $t('navbar.pages.home') }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/contact">{{ $t('navbar.pages.contact') }}</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <a-row :gutter="[10, 10]" class="mt-3" align="stretch">
      <a-col :xs="{ span: 24, order: 2 }" :md="{ span: 10, order: 1 }">
        <div class="contacts-box">
          <h1 class="main-header mb-3">{{ $t('pages.contact.header') }}</h1>
          <div class="contacts">
            <a href="tel:+998771232904" target="_blank">
              <div class="contact-item">
                <i class="bi bi-telephone"></i>
                <p class="mb-0">+998 77 123 29 04</p>
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=suvonovjavohir625@gmail.com"
              target="_blank"
            >
              <div class="contact-item">
                <i class="bi bi-envelope"></i>
                <p class="mb-0">suvonovjavohir625@gmail.com</p>
              </div>
            </a>

            <a href="https://maps.app.goo.gl/WCHb5oYscuVwDPH2A" target="_blank">
              <div class="contact-item">
                <i class="bi bi-geo-alt"></i>
                <p class="mb-0">{{ $t('pages.contact.location') }}</p>
              </div>
            </a>
          </div>
          <div class="social-medias">
            <a href="https://t.me/Suvonov_Javoh1r" target="_blank">
              <i class="bi bi-telegram"></i>
            </a>
            <a
              href="https://www.instagram.com/suvonov_javohir1/"
              target="_blank"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a href="">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </a-col>
      <a-col :xs="{ span: 24, order: 1 }" :md="{ span: 14, order: 2 }">
        <div class="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.59854203195!2d69.11455762018232!3d41.282479929544316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1743678669623!5m2!1sen!2s"
            class="map"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup></script>
<style scoped>
.contact-item {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;

  i {
    width: 57px;
    height: 57px;
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: all 0.3s ease-in;
    color: #050b20;
    font-size: 24px;
  }

  p {
    font-weight: 500;
    font-size: 17px;
    transition: all 0.3s ease-in;
    color: #5a5a5a;
  }
}

.contact-item:hover {
  i {
    background-color: #e0e0e0;
  }

  p {
    color: #757575;
  }
}

.social-medias {
  display: flex;
  gap: 10px;
  margin-top: 30px;

  i {
    font-size: 24px;
  }
}

.map-box,
.contacts-box {
  height: 100%;
}

.map {
  height: 100%;
  width: 100%;
}
</style>
