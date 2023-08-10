<template>
  <div class="slider">
    <div class="cursor">
      <div class="cursor-inner">
        <p>Klick</p>
      </div>
    </div>
    <div class="logo-container">
      <img src="~/assets/logo.svg" alt="ideenlabor-logo" />
      <div class="background-shadow"></div>
    </div>
    <div class="slideIndicator" @click="translateContainer()">
      <img src="./../assets/arrow.svg" :style="currentSlide == items.length - 1 ? 'transform: rotate(180deg)' : ''" alt="arrow" width="30px" />
    </div>
    <a
      :href="item.href"
      class="slide"
      v-for="item in items"
      :key="item.id"
      :style="
        'background: linear-gradient(0deg, #0D2A44 0%, #0F416108 65%, #0F436400 100%) 0% 0% no-repeat padding-box, url(' +
        item.src +
        ')'
      "
    >
      <div class="content">
        <h1>{{ item.title }}</h1>
        <p>{{ item.text }}</p>
      </div>
    </a>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          src: "./ideenlabor-agentur.png",
          href: "https://khri8.com",
          title: "agentur",
          text: "Kreativ denken. Erfolgreich umsetzen. Ihre Fullservice - Werbeagentur für außergewöhnliche Markenerlebnisse.",
          alt: "image",
        },
        {
          id: 2,
          src: "./ideenlabor-coworking.png",
          href: "https://ideenlabor-sonntag.de",
          title: "coworking",
          text: "Konzentriert arbeiten. Inspiration finden. Ihr idealer Ort für flexible Arbeitsplätze und erstklassige Meetingräume.",
          alt: "image",
        },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    translateContainer() {
      const slider = document.querySelectorAll(".slide");

      this.currentSlide++;

      if (this.currentSlide >= slider.length) {
        this.currentSlide = 0;
      }

      slider.forEach((slide) => {
        slide.style.transform = `translateX(-${this.currentSlide * 100}%)`;
      });
    },
    setHeight() {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    },
  },
  mounted() {
    //create a div element that is following the mouse pointer
    if (window.innerWidth > 768) {
      const cursor = document.querySelector(".cursor");

      //append the div element to the body
      document.querySelector(".slider").appendChild(cursor);

      //listen for mouse move event
      document.querySelector(".slider").addEventListener("mousemove", (e) => {
        //set the position of the div element to the position of the mouse pointer
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      });

      //listen for mouse enter event
      document.querySelector(".slider").addEventListener("mouseenter", () => {
        //add a class to the div element
        cursor.style.display = "flex";
        cursor.classList.add("cursor-active");
      });

      //listen for mouse leave event
      document.querySelector(".slider").addEventListener("mouseleave", () => {
        //remove the class from the div element
        cursor.classList.remove("cursor-active");
        cursor.style.display = "none";
      });

      document
        .querySelector(".logo-container")
        .addEventListener("mouseover", () => {
          cursor.querySelector("p").innerHTML = "Scroll";
        });

      document
        .querySelector(".logo-container")
        .addEventListener("mouseleave", () => {
          cursor.querySelector("p").innerHTML = "Klick";
        });
    }
    this.setHeight();
    window.addEventListener("resize", this.setHeight);
  },
};
</script>
  
  <style scoped>
:root {
  --doc-height: 100%;
}
.slider {
  width: 100vw;
  height: 100vh;
  height: var(--doc-height);
  display: flex;
  position: relative;
}

.cursor {
  position: absolute;
  border-radius: 50%;
  background-color: #f8f8f8;
  transform: translate(-50%, -50%);
  pointer-events: none;
  min-width: 50px;
  min-height: 50px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cursor-inner {
  color: var(--primary-color);
  font-weight: 700;
}

.cursor-inner p {
  margin: 0;
  font-size: 16px;
}

.slide {
  width: 100%;
  background-size: cover !important;
  background-position: center !important;
  height: 100%;
  position: relative;
}

.slide .content {
  padding: 100px 150px;
  position: absolute;
  bottom: 0;
}

.slide .content h1 {
  font-size: 70px;
  color: #fff;
  margin-bottom: 10px;
}

.slide .content p {
  font-size: 23px;
  line-height: 40px;
  color: #fff;
  margin: 0;
}

.logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  z-index: 1;
}

.slideIndicator {
  display: none;
}

@media screen and (max-width: 765px) {
  .cursor {
    display: none;
  }
  .slider {
    overflow: hidden;
  }
  .logo-container {
    position: absolute;
    top: 100px;
    left: 50% !important;
    left: unset;
    display: grid;
    place-items: center;
    z-index: 1;
  }

  .slide {
    min-width: 100vw;
    transition: 0.5s ease-in-out;
  }

  .slideIndicator {
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    min-width: 100px;
  }

  .slide .content {
    padding: 50px 50px 100px 50px;
    position: absolute;
    bottom: 0;
  }

  .slide .content h1 {
    font-size: 50px;
    color: #fff;
    margin-bottom: 20px;
  }

  .slide .content p {
    font-size: 15px;
    line-height: 30px;
    color: #fff;
    margin: 0;
  }
}
</style>
  