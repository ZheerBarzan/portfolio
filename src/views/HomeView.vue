<script setup>
import Navbar from '../components/Navbar.vue';
import profile from "../views/profileView.vue"
import About from '../views/AboutView.vue'
import Experience from "../views/ExperienceView.vue"
import Project from "../views/ProjectView.vue"
import Contact from "../views/ContactView.vue" 
import Footer from "../components/Footer.vue"
</script>

<template>
  <main>
    <Navbar/>
    <profile />
    <About />
    <Experience />
    <Project />
    <Contact />
    <Footer />
  </main>
</template>

<style >


@media screen and (max-width: 1400px) {
  #profile {
    height: 83vh;
    margin-bottom: 6rem;
  }
  .about-containers {
    flex-wrap: wrap;
  }
  #contact,
  #projects {
    height: fit-content;
  }
}

@media screen and (max-width: 1200px) {
  #desktop-nav {
    display: none;
  }
  #hamburger-nav {
    display: flex;
  }
  #experience,
  .experience-details-container {
    margin-top: 2rem;
  }
  #profile,
  .section-container {
    display: block;
  }
  .arrow {
    display: none;
  }
  section,
  .section-container {
    height: fit-content;
  }
  section {
    margin: 0 5%;
  }
  .section__pic-container {
    width: 275px;
    height: 275px;
    margin: 0 auto 2rem;
  }
  .about-containers {
    margin-top: 0;
  }
}

@media screen and (max-width: 600px) {
  #contact,
  footer {
    height: 40vh;
  }
  #profile {
    height: 50vh;
    margin-bottom:6rem ;
  }
  article {
    font-size: 1rem;
  }
  footer nav {
    height: fit-content;
    margin-bottom: 2rem;
  }
  .about-containers,
  .contact-info-upper-container,
  .btn-container {
    flex-wrap: wrap;
  }
  .contact-info-container {
    margin: 0;
  }
  .contact-info-container p,
  .nav-links li a {
    font-size: 1rem;
  }
  .experience-sub-title {
    font-size: 1.25rem;
  }
  .logo {
    font-size: 1.5rem;
  }
  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  .section__pic-container {
    width: auto;
    height: 46vw;
    justify-content: center;
  }
  .section__text__p2 {
    font-size: 1.25rem;
  }
  .title {
    font-size: 2rem;
  }
  .text-container {
    text-align: justify;
  }
}
</style>