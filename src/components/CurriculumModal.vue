<template>
  <div class="modal-container">
    <div class="modal-wrapper">
      <div class="modal-content" ref="modal-content-area">
        <div
          class="modal-close-icon"
          @click="closeModalEvent()"
          @keypress="closeModalEvent()">
          <svg
            viewPort="0 0 12 12" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="11"
                  x2="11" y2="1"
                  stroke="black"
                  stroke-width="2"/>
            <line x1="1" y1="1"
                  x2="11" y2="11"
                  stroke="black"
                  stroke-width="2"/>
          </svg>
        </div>
        <img class="modal-image" :src="image" :alt="title">
        <span class="modal-title big-text">{{ title }}</span>
        <ul>
          <li
            class="modal-curriculum"
            v-for="(curriculumItem, index) in curriculumItems"
            :key="index">
            {{ curriculumItem }}
        </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    curriculumItems: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutsideModal);
  },
  methods: {
    closeModalEvent() {
      this.$emit('close-modal');
    },
    handleClickOutsideModal(event) {
      const modalArea = this.$refs['modal-content-area'];
      const teachersArea = window.document.getElementById('about-us-teachers');

      if (modalArea && !modalArea.contains(event.target)
        && teachersArea && !teachersArea.contains(event.target)) {
        this.closeModalEvent();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: table;
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    .modal-content {
      position: relative;
      width: 90%;
      max-width: 680px;
      margin: 0px auto;
      padding: 32px 16px;
      background-color: $white;
      border-radius: 15px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      overflow: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      .modal-close-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
        svg {
          height: 12px;
          width: 12px;
        }
      }
      .modal-image {
        max-width: 180px;
        border-radius: 100%;
        margin-bottom: 8px;
      }
      .modal-title {
        font-weight: 500;
        margin-bottom: 16px;
      }
      .modal-curriculum {
        margin-bottom: 8px;
      }
    }
  }
}
@media (min-width: map-get($grid-breakpoints, 'lg')) {
  .modal-container {
    .modal-wrapper {
      .modal-content {
        padding: 40px;
      }
    }
  }
}
</style>
