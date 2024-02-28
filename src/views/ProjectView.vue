<script setup>
import {ref} from "vue"
import project from "../assets/projects.json"




const projects = ref(project)

const openLinkToGithub = (link) => {
  const githubLink = link;

  window.open(githubLink, '_blank')

}


</script>


<template>
 <section id="projects">
      <p class="section__text__p1">Browse my recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
        <div v-for="project in projects" :key="project.id" class="details-container color-container">
          <div class="article-container">
            <img :src="project.img" alt="" class="project-img">
          </div>
          <h2 class="experience-sub-title project-title">{{ project.name }}</h2>
          <p>{{ project.desc }}</p>
          <br>
          <div class="tech-container">
          <button v-for="technology in project.tech" :key="technology.id" class="sp-btn"  >{{technology.name}}</button>
          </div>
          <div class="btn-container ">
            <button class="btn btn-color-2 project-btn" @click="openLinkToGithub(project.github)">Github</button>
          </div>
        </div>
       
        
      </div>
      </div>
      <img src="../assets/img/arrow.png" alt="" class="icon arrow" onclick="location.href='#contact'">

    </section>


</template>

<style src="../assets/main.css"></style>