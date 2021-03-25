import { withDocus } from 'docus'

export default withDocus({
  i18n: {
    locales: () => [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }, {
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