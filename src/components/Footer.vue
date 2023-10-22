<template>
  <div class="footer-container">
    <div class="footer-content limit-container">
      <img
        v-scroll-to="'#home-container'"
        @click="goTo({ link: '/' })"
        @keypress.enter="goTo({ link: '/' })"
        src="/assets/logo.png"
        alt="logo.png">

      <div class="footer-social-network">
        <p>Redes sociais</p>
        <div class="footer-social-network-icons">
          <Icon @click="openUrl('https://www.instagram.com/eb_idiomas/')" name="instagram"/>
          <Icon @click="openUrl('https://www.facebook.com/idiomaseb')" name="facebook"/>
        </div>
      </div>

      <div class="footer-contact">
        <p>Contato</p>
        <div class="footer-social-network-icons">
          <span>(88) 9.9778-7949</span>
          <a href="mailto:ebidiomas164@gmail.com">ebidiomas164@gmail.com</a>
        </div>
      </div>

      <div class="footer-payment-methods">
        <p>Formas de pagamento</p>
        <div class="footer-payment-methods-icons">
          <div class="d-flex-row">
            <Icon name="visa"/>
            <Icon name="mastercard"/>
            <Icon name="dinersclub"/>
          </div>

          <div class="d-flex-row">
            <Icon name="amex"/>
            <Icon name="elo"/>
            <Icon name="maestro"/>
          </div>

          <div class="d-flex-row">
            <img src="/assets/Pix.svg" alt="Pix.svg">
            <img src="/assets/Money.svg" alt="Money.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright small-text">
      © EB Idiomas 2023. Todos os direitos reservados. CNPJ: 35.081.190/0001-95
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'FooterComponent',
  components: {
    Icon,
  },
  methods: {
    openUrl(url) {
      window.open(url, '_blank');
    },
    goTo(nav) {
      if (nav.link) {
        this.$router.push(nav.link);
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  position: relative;
  width: 100%;
  .footer-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    img {
      cursor: pointer;
      max-width: 200px;
      margin-bottom: 16px;
    }
    .footer-social-network {
      text-align: center;
      margin-bottom: 16px;
      .footer-social-network-icons {
        display: flex;
        justify-content: space-between;
        > div {
          cursor: pointer;
          margin: 0 4px;
        }
      }
    }
    .footer-contact {
      text-align: center;
      margin-bottom: 16px;
    }
    .footer-payment-methods {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;
      .footer-payment-methods-icons {
        > div > div, > div > img {
          margin: 0 4px;
        }
      }
    }
  }
  .footer-copyright {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -32px;
    background: $primary;
    color: $white;
    padding: 8px 32px;
  }
}
@media (min-width: map-get($grid-breakpoints, 'lg')) {
  .footer-container {
    .footer-content {
      flex-direction: row;
      padding: 32px 70px;
      img {
        margin-bottom: unset;
      }
      .footer-social-network {
        margin-bottom: unset;
      }
      .footer-contact {
        margin-bottom: unset;
      }
      .footer-payment-methods {
        margin-bottom: unset;
      }
    }
  }
}
</style>
