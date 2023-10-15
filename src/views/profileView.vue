<template>

<section id="profile">
      <div class="section__pic-container">
        <img src="assets/y.png" alt="" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Zheer Barzan</h1>
        <p class="section__text__p2">APP/Game Developer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="window.open('assets/Zheer_Barzan_CV.pdf')"
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='#contact'">
            Contact Me
          </button>
        </div>
        <div id="socials-container">
          <img
            src="../assets/img/linkedin.png"
            class="icon"
            onclick="location.href='' "
          />
          <img
            src="../assets/img/github.png"
            class="icon"
            onclick="location.href='' "
          />
        </div>
      </div>
    </section>

</template>

<style src="../assets/main.css"></style>