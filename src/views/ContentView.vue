<template>
  <div class="content-container">
    <div class="content-content-container limit-container">
      <div class="content-card" v-if="!selectedContent">
        <h4>Conteúdo</h4>
        <p v-if="contentData.length === 0 && !isRequesting">
          Não temos conteúdo, por enquanto. <br>
          Em breve os conteúdos serão adicionados.
        </p>
        <div
          class="content-card-texts"
          v-for="(content, index) in contentData"
          :key="index"
          @click="selectContent(content)"
          @keypress.enter="selectContent(content)">
          <span class="content-card-title big-text">{{ content.title }}</span>
          <span class="content-card-date small-text">{{ content.date }}</span>
        </div>
        <Loader v-if="isRequesting" :fullScreen="false"/>
      </div>
      <div class="content-card-content" v-if="selectedContent">
        <div class="content-card-content-title">
          <svg @click="clearSelectedContent()" @keypress.enter="clearSelectedContent()"
            width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.125 11.625L15 19.875L22.875 11.625" stroke="#00125F"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h6>{{ selectedContent.title }}</h6>
        </div>
        <span class="content-card-content-date small-text">{{ selectedContent.date }}</span>
        <span
          class="content-card-content-text small-text"
          v-html="selectedContent.text">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loader from '@/components/Loader.vue';

export default {
  name: 'ContentView',
  components: {
    Loader,
  },
  data() {
    return {
      contentData: [],
      selectedContent: undefined,
      isRequesting: false,
    };
  },
  computed: {
    ...mapGetters(['getContentData']),
  },
  mounted() {
    this.isRequesting = true;
    this.loadContentData()
      .then(() => {
        this.contentData = this.getContentData;
      }).finally(() => {
        this.isRequesting = false;
      });
  },
  methods: {
    ...mapActions(['loadContentData']),
    selectContent(content) {
      this.selectedContent = content;
    },
    clearSelectedContent() {
      this.selectedContent = undefined;
    },
  },
};
</script>

<style lang="scss" scoped>
.content-container {
  background: $grey10;
  padding-top: 75px;
  .content-content-container {
    padding: 48px 32px;
    .content-card {
      background: $white;
      width: 100%;
      max-width: 1000px;
      padding: 32px 24px;
      margin: 0 auto;
      border-radius: 15px;
      h4 {
        border-bottom: 1px solid $grey20;
        padding-bottom: 32px;
        margin-bottom: 32px;
        color: $black;
      }
      .content-card-texts {
        cursor: pointer;
        margin-bottom: 24px;
        width: fit-content;
        .content-card-title {
          color: $black;
        }
        .content-card-date {
          color: $grey60;
        }
      }
    }
    .content-card-content {
      background: $white;
      width: 100%;
      max-width: 1000px;
      padding: 32px 24px;
      margin: 0 auto;
      border-radius: 15px;
      .content-card-content-title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        svg {
          cursor: pointer;
          margin-right: 8px;
          transform: rotate(90deg);
        }
        h4 {
          color: $black;
        }
      }
      .content-card-content-date {
        color: $grey60;
        margin-bottom: 40px;
      }
    }
  }
}
@media (min-width: map-get($grid-breakpoints, 'xl')) {
  .content-container {
    padding-top: 100px;
    .content-content-container {
      padding: 48px 70px;
      .content-card {
        padding: 40px;
      }
      .content-card-content {
        padding: 40px;
      }
    }
  }
}
</style>
