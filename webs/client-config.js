const enableDev = process.env.enableDev === 'true';

if (enableDev) {
module.exports = {
    sanity: {
      projectId: 'b1gnc6rj',
      dataset: process.env.GATSBY_SANITY_DATASET || 'development'
    }
  }
} else {
  module.exports = {
    sanity: {
      projectId: 'b1gnc6rj',
      dataset: process.env.GATSBY_SANITY_DATASET || 'production'
    }
  }
}
