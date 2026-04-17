module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
        './src/**/*.html'
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:.*:\sNx)/g) || [],
      safelist: {
        standard: [/^vue-enter/, /^fade-/, /^router-link/, /^col-/],
        deep: [
          /data-v-/,
          /pure/,
          /scrolling/,
          /owl-/,
          /slick/,
          /aos-/,
          /^is-/
        ]
      }
    })
  ]
}