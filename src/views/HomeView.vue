<template>
  <div class="home-container" id="home-container">
    <section class="home-banner">
      <div class="home-banner-content limit-container">
        <img src="/assets/banner-images.png" alt="banner-images.png">
        <div class="home-banner-text">
          <h1>EB Idiomas <br> Inglês fácil para todos!</h1>
          <span class="big-text">
            Nós, da EB Idiomas, iremos te ajudar a se tornar fluente em
            inglês utilizando nossa única e poderosa metodologia de ensino
            focada na conversação.
          </span>
          <button v-scroll-to="'#home-about-us'" class="button size-medium">Saiba mais</button>
        </div>
      </div>
    </section>

    <section class="home-catchphrase">
      <h1>Easy english for all</h1>
    </section>

    <section class="home-about-us" id="home-about-us">
      <div class="home-about-us-content limit-container">
        <h4>Sobre nós</h4>
        <p>
          Com o intuito de ensinar inglês de uma forma dinâmica e prática, o
          Professor Erivaldo e a Professora Zdenka Slaba criaram a metodologia
          Crazy Moon, fazendo com que o tempo de aprendizado da lingua inglesa
          diminua significativamente.
        </p>
        <p>
          A EB Idiomas foi fundada em 2015, na cidade de Crateús-CE e utiliza o
          método Crazy Moon. Desde a fundação, ensina linguas para toda a
          comunidade local e mais recentemente, para todo o mundo. Já formamos
          diversos professores e ajudamos muitos alunos a alcançarem a fluência.
        </p>

        <h6>Nossos professores:</h6>
        <div class="about-us-teachers" id="about-us-teachers">
          <div
            class="about-us-teacher"
            @click="openModal({
              image: teacher.image,
              title: teacher.name,
              curriculumItems: teacher.curriculum })"
            @keypress="openModal({
              image: teacher.image,
              title: teacher.name,
              curriculumItems: teacher.curriculum })"
            v-for="(teacher, index) in teacherData"
            :key="index">
            <img class="about-us-teacher-image" :src="teacher.image" :alt="teacher.name">
            <span class="about-us-teacher-name big-text">{{ teacher.name }}</span>
            <span class="about-us-teacher-sub normal-text">{{ teacher.sub }}</span>
          </div>
        </div>

        <h6>Aulas:</h6>
        <div class="about-us-classes">
          <div class="about-us-class"><h5>Presencial</h5></div>
          <div class="about-us-class"><h5>Online</h5></div>
        </div>
      </div>

    </section>

    <section class="home-prices"  id="home-prices">
      <div class="home-prices-content limit-container">
        <h4>Preços</h4>
        <div class="prices-cards">
          <div class="prices-card" v-for="(item, index) in pricesData" :key="index">
            <div class="prices-card-age">{{ item.age }}</div>
            <div class="prices-card-title">
              <img :src="item.title.image" alt="item.title.text">
              <h6>{{ item.title.text }}</h6>
            </div>
            <div class="prices-card-subtitle small-text">
              {{ item.subtitle }}
            </div>
            <div class="prices-card-price">
              <h2>{{ item.price }}</h2><span class="big-text">/mês</span>
            </div>
            <button @click="goToWhatsApp(item.id)" class="button">Contactar</button>
            <div class="prices-card-features">
              <p>Incluso:</p>
              <div class="prices-card-features">
                <div
                  class="prices-card-feature"
                  v-for="(feature, index) in item.features"
                  :key="index">
                  <svg width="13" height="9" viewBox="0 0 13 9" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.75L4.25 8.25L11.5 0.75" stroke="#AE252E"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-depositions" id="home-depositions">
      <div class="home-depositions-content limit-container">
        <h4>Depoimentos</h4>
        <div class="depositions-cards">
          <div
            class="depositions-card"
            v-for="(deposition, index) in depositionsData"
            :key="index">
            <img :src="deposition.image" :alt="deposition.title">
            <span class="depositions-card-title big-text">{{ deposition.title }}</span>
            <p class="depositions-card-deposition">
              {{ deposition.text }}
            </p>
          </div>
        </div>
        <button @click="goToWhatsApp()" class="button size-medium">Contactar</button>
      </div>
    </section>

    <section class="home-faq" id="home-faq">
      <div class="home-faq-content limit-container">
        <h4>Perguntas frequentes</h4>
        <div class="faq-cards">
          <div class="faq-card big-text" v-for="(faqItem, index) in faqData" :key="index">
            <div
              class="faq-card-question"
              :class="{'opened': faqItem.isFaqOpened}"
              @click="toggleQuestion(index)"
              @keypress.enter="toggleQuestion(index)">
              <span class="faq-card-question-title">{{ faqItem.question }}</span>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.125 11.625L15 19.875L22.875 11.625" stroke="#00125F"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div
              class="faq-card-answer normal-text"
              :class="{'opened': faqItem.isFaqOpened}"
              v-html="faqItem.answer">
            </div>
          </div>
        </div>
      </div>
    </section>
    <CurriculumModal
      v-show="showModal"
      v-on:close-modal="closeModal()"
      :image="modalData.image"
      :title="modalData.title"
      :curriculumItems="modalData.curriculumItems"/>
  </div>
</template>

<script>
import HomeData from '@/resources/HomeData.json';
import CurriculumModal from '@/components/CurriculumModal.vue';

export default {
  name: 'HomeView',
  components: {
    CurriculumModal,
  },
  data() {
    return {
      teacherData: HomeData.teacherData,
      pricesData: HomeData.pricesData,
      depositionsData: HomeData.depositionsData,
      faqData: HomeData.faqData,
      showModal: false,
      modalData: {
        image: '',
        title: '',
        curriculumItems: '',
      },
    };
  },
  methods: {
    toggleQuestion(faqItemIndex) {
      this.faqData[faqItemIndex].isFaqOpened = !this.faqData[faqItemIndex].isFaqOpened;
    },
    goToWhatsApp(id) {
      switch (id) {
        case 0:
          window.open('https://api.whatsapp.com/send?phone=5588997787949&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20o%20curso%20de%20ingl%C3%AAs%20para%20crian%C3%A7as%20de%203%20a%2010%20anos.', '_blank');
          break;
        case 1:
          window.open('https://api.whatsapp.com/send?phone=5588997787949&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20o%20curso%20de%20ingl%C3%AAs%20para%20crian%C3%A7as%20de%2011%20a%2012%20anos.', '_blank');
          break;
        case 2:
          window.open('https://api.whatsapp.com/send?phone=5588997787949&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20o%20curso%20de%20ingl%C3%AAs%20para%20pessoas%20com%20mais%2013%20anos.', '_blank');
          break;
        default:
          window.open('https://api.whatsapp.com/send?phone=5588997787949&text=Ol%C3%A1%2C+gostaria+de+falar+sobre+o+curso+de+ingl%C3%AAs.', '_blank');
          break;
      }
    },
    openModal(modalData) {
      this.showModal = true;
      this.modalData = modalData;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>

h4 {
  text-align: center;
  margin-bottom: 32px;
  color: $black;
}
h6 {
  color: $black;
}
.home-container {
  height: 100%;
  width: 100%;
  padding-top: 75px;
  .home-banner {
    width: 100%;
    .home-banner-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 32px 32px 48px;
      width: 100%;
      img {
        max-width: 100%;
        margin-bottom: 32px;
      }
      .home-banner-text {
        text-align: center;
        max-width: 640px;
        color: $primary;
        h1 {
          margin-bottom: 16px;
        }
        span {
          margin-bottom: 32px;
        }
        button {
          max-width: 245px;
          width: 100%;
        }
      }
    }
  }
  .home-catchphrase {
    width: 100%;
    height: 100px;
    background-color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 32px;
    @media (min-width: 400px) {
      height: 120px;
    }
    @media (min-width: map-get($grid-breakpoints, 'md')) {
      height: 150px;
    }
    h1 {
      color: $secondary;
      font-size: 28px;
      @media (min-width: 400px) {
        font-size: 36px;
      }
      @media (min-width: map-get($grid-breakpoints, 'md')) {
        font-size: 47.8px;
      }
    }
  }
  .home-about-us {
    text-align: center;
    .home-about-us-content {
      padding: 48px 32px;
      h6 {
        margin: 32px 0;
      }
      .about-us-teachers {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .about-us-teacher {
          max-width: 180px;
          margin: 0 20px;
          margin-bottom: 32px;
          cursor: pointer;
          .about-us-teacher-image {
            max-width: 100%;
            border-radius: 100%;
            margin-bottom: 8px;
          }
          .about-us-teacher-name {
            font-weight: 500;
            margin-bottom: 4px;
          }
          .about-us-teacher-sub {
            color: $grey60;
          }
        }
      }
      .about-us-classes {
        display: flex;
        flex-direction: column;
        align-items: center;
        .about-us-class {
          width: 100%;
          max-width: 280px;
          background: $grey10;
          padding: 24px 32px;
          border-radius: 10px;
          color: $secondary;
          margin-bottom: 16px;
        }
      }
    }
  }
  .home-prices {
    background: $grey20;
    .home-prices-content {
      padding: 48px 32px;
      .prices-cards {
        display: flex;
        justify-content: space-between;
        overflow-y: auto;
        .prices-card {
          position: relative;
          background: $white;
          border-radius: 15px;
          padding: 40px 32px;
          width: 100%;
          max-width: 412px;
          min-width: 350px;
          margin-right: 16px;
          .prices-card-age {
            position: absolute;
            right: 0;
            top: 0;
            padding: 8px;
            background: $secondary;
            color: $white;
            border-radius: 0 15px 0 0;
            font-weight: bold;
          }
          .prices-card-title {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            img {
              margin-right: 8px;
            }
            h6 {
              font-weight: bold;
            }
          }
          .prices-card-subtitle {
            color: $grey60;
            margin-bottom: 32px;
          }
          .prices-card-price {
            display: flex;
            margin-bottom: 32px;
            align-items: baseline;
          }
          button {
            width: 100%;
            margin-bottom: 32px;
          }
          .prices-card-features {
            .prices-card-feature {
              display: flex;
              align-items: center;
              margin-bottom: 16px;
              svg {
                margin-right: 8px;
              }
              span {
                color: $grey60;
              }
            }
          }
        }
      }
    }
  }
  .home-depositions {
    text-align: center;
    .home-depositions-content {
      padding: 48px 32px;
      .depositions-cards {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        overflow-y: auto;
        .depositions-card {
          max-width: 400px;
          min-width: 250px;
          margin-right: 16px;
          img {
            max-width: 180px;
            border-radius: 100%;
            margin-bottom: 8px;
          }
          .depositions-card-title {
            font-weight: 500;
          }
        }
      }
      button {
        width: 100%;
        max-width: 300px;
      }
    }
  }
  .home-faq {
    background: $grey20;
    .home-faq-content {
      padding: 48px 32px;
      .faq-cards {
        .faq-card {
          margin-bottom: 24px;
          .faq-card-question {
            display: flex;
            align-items: center;
            position: relative;
            height: 150px;
            width: 100%;
            background: $white;
            padding: 16px 32px;
            border-radius: 15px;
            cursor: pointer;
            @media (min-width: map-get($grid-breakpoints, 'md')) {
              height: 80px;
            }
            .faq-card-question-title {
              max-width: 85%;
              user-select: none;
              font-weight: 500;
            }
            svg {
              position: absolute;
              right: 32px;
            }
            &.opened {
              border-radius: 15px 15px 0 0;
              border-bottom: $grey20 1px solid;
              svg {
                transform: rotate(180deg);
              }
            }
          }
          .faq-card-answer {
            display: none;
            align-items: center;
            position: relative;
            width: 100%;
            min-height: 80px;
            background: $white;
            padding: 16px 32px;
            border-radius: 0 0 15px 15px;
            font-weight: 500;
            color: $black;
            &.opened {
              display: flex;
            }
          }
        }
      }
    }
  }
}
@media (min-width: map-get($grid-breakpoints, 'xl')) {
  .home-container {
    padding-top: 100px;
    .home-banner {
      .home-banner-content {
        padding: 48px 70px;
        flex-direction: row;
        img {
          margin-bottom: unset;
        }
        .home-banner-text {
          text-align: unset;
          span {
            margin-bottom: 80px;
          }
        }
      }
    }
    .home-about-us {
      .home-about-us-content {
        padding: 48px 70px;
        .about-us-teachers {
          .about-us-teacher {
            margin-bottom: unset;
          }
        }
        .about-us-classes {
          flex-direction: row;
          justify-content: center;
          .about-us-class {
            margin: 0 35px;
            margin-bottom: unset;
          }
        }
      }
    }
    .home-prices {
      .home-prices-content {
        padding: 48px 70px;
      }
    }
    .home-depositions {
      .home-depositions-content {
        padding: 48px 70px;
      }
    }
    .home-faq {
      .home-faq-content {
        padding: 48px 70px;
      }
    }
  }
}
</style>
