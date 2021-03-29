import { withDocus } from 'docus'

export default withDocus({
  i18n: {
    defaultLocale: 'fr',
    locales: () => [{
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }]
  },
  docus: {
    // primaryColor: '#E24F55'
  }
})