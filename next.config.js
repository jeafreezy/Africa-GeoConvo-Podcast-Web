module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },

    i18n:{
      locales:['en','nl'],
      defaultLocale:'en'
    }
  }
  