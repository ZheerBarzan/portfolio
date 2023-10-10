<template>

<footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Zheer Barzan. All rights reserved.</p>
    </footer>

</template>


<style scoped>



@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}

p {
  color: rgb(85, 85, 85);
}

a,
nav, .nav-links {
  display: flex;
}

nav {
  justify-content: space-around;
  align-items: center;
  height: 17vh;
}

.nav-links {
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;
}

a {
  color: black;
  text-decoration: none;
  text-decoration-color: white;
}

a:hover {
  color: grey;
  text-decoration: underline;
  text-underline-offset: 1rem;
  text-decoration-color: rgb(181, 181, 181);
}
#profile {
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
}
#about {
  position: relative;
}
#experience {
  position: relative;
}
#projects {
  position: relative;
}
#contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
}
footer {
  height: 26vh;
  margin: 0 1rem;
}
footer p {
  text-align: center;
}



@media screen and (max-width: 600px) {
  #contact,
  footer {
    height: 40vh;
  }
  #profile {
    height: 50vh;
    margin-bottom: 0;
  }
  article {
    font-size: 1rem;
  }
  footer nav {
    height: fit-content;
    margin-bottom: 2rem;
  }

  .contact-info-container p,
  .nav-links li a {
    font-size: 1rem;
  }
  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>