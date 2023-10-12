<script setup>
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


</script>
<template>
    <nav id="desktop-nav">
      <div class="logo">Zheer Barzan</div>
      <div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <nav id="hamburger-nav">
      <div class="logo">Zheer Barzan</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" @click="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" @click="toggleMenu()">About</a></li>
          <li><a href="#experince" @click="toggleMenu()">Experience</a></li>
          <li><a href="#projects" @click="toggleMenu()">Projects</a></li>
          <li><a href="#contact" @click="toggleMenu()">Contact</a></li>
        </div>
      </div>
    </nav>
</template>

<style src="../assets/main.css"></style>