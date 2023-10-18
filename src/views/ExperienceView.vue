<script setup>
import {ref} from "vue"
import front from "../data/front-end.json"
import back from "../data/back-end.json"



const frontEnd = ref(front)
const backEnd = ref(back)


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
                            <img :src="data.img" style="height: 50px; width: 50px;" alt="" class="icon">
                            <div>
                                <h3>{{data.tech}}</h3>
                                <p>{{data.ex}}</p>
                            </div>
                        </article>
                     
                    </div>
                </div>
                <!-- back-end section -->
                <!-- <div class="details-container">
                    <h2 class="experience-sub-title">
                        Back-End Development
                    </h2>
                    <div class="article-container">
                        <article v-for="datax in backEnd" :key="datax.id">
                            <img :src="datax.img"  alt="" class="icon">
                            <div>
                                <h3>{{datax.tech}}</h3>
                                <p>{{datax.ex}}</p>
                            </div>
                        </article>
                        
                    </div>
                </div> -->
            </div>

        </div>
        <img src="../assets/img/arrow.png" alt="" class="icon arrow" onclick="location.href='#projects'">

    </section>

</template>

<style src="../assets/main.css"></style>