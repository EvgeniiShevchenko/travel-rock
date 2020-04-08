<template>
  <footer class="footer">
    <div class="container">
      <div class="about-us">
        <p class="title">This website is for demo purposes only</p>
        <p class="description">
          It demonstrates the functionality of company name Booking Engine –
          integration with GDS, flight search, booking and ticketing process.
          You cannot book real flight ticket here.
        </p>
      </div>
      <div class="general">
        <a class="logo" href="/">
          <svg class="logo-mobile">
            <use xlink:href="../../../assets/images/mobile-logo.svg#logo-footer" />
          </svg>
          <img
            class="logo-desktop"
            src="../../../assets/images/desktop-logo.svg"
            alt="Logo-desktop"
          />
        </a>
        <div class="description-company">
          <p>Travel Technology Consulting company</p>
          <a class="company" href="#">some company</a>
        </div>
      </div>
      <div class="contacts-mobile">
        <a class="phone" href="#">some phone</a>
        <a class="email" href="#">some email</a>
      </div>
      <p class="copyrights">© Copyright 2020</p>
      <div class="contacts-desktop">
        <a class="phone" href="#">some phone</a>
        <a class="email" href="#">some ref</a>
      </div>
    </div>
  </footer>
</template>

<script src="./TheFooter.js"></script>

<style lang="scss" src="./TheFooter.scss" scoped></style>
