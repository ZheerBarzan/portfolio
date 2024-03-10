<script setup>
import {ref} from "vue"
import front from "../data/experince.json"



const frontEnd = ref(front)


</script>

<template>
<section id="experience">
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Experience</h1>
        <div class="experience-details-container">
            <div class="about-containers">
                <!--front-end section-->
                <div class="details-container">
                    <h2 class="experience-sub-title">
                        Technologies
                    </h2>
                    <div class="article-container">
                        <article v-for="data in frontEnd" :key="data.id">
                            <img :src="data.img" style="height: 90%; width: 50%; ;" alt="" class="icon">
                            <div>
                                <h3 class="topic">{{data.tech}}</h3>
                                <p>{{data.ex}}</p>
                            </div>
                        </article>
                     
                    </div>
                </div>
             
            </div>

        </div>
        <img src="/assets/img/arrow.png" alt="" class="icon arrow" onclick="location.href='#projects'">

    </section>

</template>

<style src="/assets/main.css"></style>