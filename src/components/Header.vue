<template>
  <div class="header-container" ref="header">
    <div class="header-content-container limit-container">
      <img
        v-scroll-to="'#home-container'"
        src="/assets/logo-symbol.png"
        @click="goTo({ link: '/' })"
        @keypress.enter="goTo({ link: '/' })"
        alt="logo-symbol.png">

      <div class="header-nav-items">
        <div
          class="header-nav-item"
          v-for="(nav, index) in navItems"
          v-scroll-to="nav.ref || ''"
          @click="goTo(nav)"
          @keypress.enter="goTo(nav)"
          :key="index">
            {{ nav.name }}
        </div>
        <button @click="goToWhatsApp()" class="button size-small">Contate-nos</button>
      </div>

      <div class="header-nav-items-mobile">
        <button @click="goToWhatsApp()" class="button size-small">Contate-nos</button>
        <div ref="header-menu-area">
          <div @click="toggleMenu()" @keypress="toggleMenu()">
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="15" rx="10"></rect>
              <rect y="30" width="100" height="15" rx="10"></rect>
              <rect y="60" width="100" height="15" rx="10"></rect>
            </svg>
          </div>
          <div class="header-nav-items" v-show="isMenuOpen">
            <div
              class="header-nav-item"
              v-for="(nav, index) in navItems"
              v-scroll-to="nav.ref || ''"
              @click="goTo(nav)"
              @keypress.enter="goTo(nav)"
              :key="index">
                {{ nav.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      navItems: [
        {
          name: 'Sobre nós',
          ref: '#home-about-us',
        },
        {
          name: 'Preços',
          ref: '#home-prices',
        },
        {
          name: 'Depoimentos',
          ref: '#home-depositions',
        },
        {
          name: 'Perguntas frequentes',
          ref: '#home-faq',
        },
        {
          name: 'Conteúdo',
          link: '/conteudo',
        },
      ],
      isMenuOpen: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutsideMenuBox);
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    goTo(nav) {
      if (nav.link) {
        this.$router.push(nav.link);
      } else {
        this.$router.push('/');
      }
    },
    goToWhatsApp() {
      window.open('https://api.whatsapp.com/send?phone=5588997787949&text=Ol%C3%A1%2C+gostaria+de+falar+sobre+o+curso+de+ingl%C3%AAs.', '_blank');
    },
    handleScroll() {
      const { header } = this.$refs;
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleClickOutsideMenuBox(event) {
      const menuArea = this.$refs['header-menu-area'];

      if (menuArea && !menuArea.contains(event.target)) {
        this.closeMenu();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  height: 75px;
  width: 100%;
  background: $white;
  z-index: 999;
  transition: all 0.15s linear;
  &.active {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  .header-content-container {
    display: flex;
    justify-content: space-between;
    padding: 16px 32px;
    width: 100%;
    height: 100%;
    img {
      cursor: pointer;
    }
    .header-nav-items {
      display: none;
    }
    .header-nav-items-mobile {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        display: none;
        margin-right: 24px;
      }
      svg {
        cursor: pointer;
        width: 100%;
        max-width: 30px;
      }
      .header-nav-items {
        position: absolute;
        top: 50px;
        right: 0;
        background: $white;
        display: flex;
        flex-direction: column;
        padding: 16px 24px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: max-content;
        .header-nav-item {
          cursor: pointer;
          border-bottom: 1px solid $grey20;
          margin-bottom: 8px;
          padding-bottom: 8px;
        }
      }
    }
  }
}
@media (min-width: map-get($grid-breakpoints, 'xl')) {
  .header-container {
    height: 100px;
    .header-content-container {
      padding: 16px 70px;
      .header-nav-items {
        display: flex;
        justify-content: center;
        align-items: center;
        .header-nav-item {
          margin: 0 16px;
          cursor: pointer;
          color: $primary;
          font-weight: 500;
        }
        .button {
          margin-left: 16px;
        }
      }
      .header-nav-items-mobile {
        display: none;
      }
    }
  }
}
@media (min-width: map-get($grid-breakpoints, 'md')) {
  .header-container {
    .header-content-container {
      .header-nav-items-mobile {
        button {
          display: block;
        }
      }
    }
  }
}
</style>
