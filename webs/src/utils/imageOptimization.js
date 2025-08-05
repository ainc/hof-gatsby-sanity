// Image optimization utilities for consistent sizing and optimization across the site

export const IMAGE_SIZES = {
  // Responsive sizes for different contexts
  thumbnail: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw",
  full: "100vw",
  sidebar: "(max-width: 768px) 100vw, 300px",
};

export const IMAGE_PLACEHOLDERS = {
  blurred: "blurred",
  dominant: "dominantColor",
  none: "none",
};

// Common image dimensions for different use cases
export const IMAGE_DIMENSIONS = {
  profile: { width: 300, height: 300 },
  card: { width: 400, height: 250 },
  hero: { width: 1200, height: 600 },
  thumbnail: { width: 150, height: 150 },
  video: { width: 430, height: 275 },
};

// Generate optimized GraphQL fragments for common image use cases
export const getOptimizedImageFragment = (dimensions = IMAGE_DIMENSIONS.card) => `
  asset {
    gatsbyImageData(
      width: ${dimensions.width}
      height: ${dimensions.height}
      placeholder: BLURRED
      formats: [AUTO, WEBP, AVIF]
    )
  }
`;

// Generate responsive image fragment
export const getResponsiveImageFragment = (sizes = IMAGE_SIZES.card) => `
  asset {
    gatsbyImageData(
      placeholder: BLURRED
      formats: [AUTO, WEBP, AVIF]
      sizes: "${sizes}"
    )
  }
`;

// Common image queries for different contexts
export const IMAGE_QUERIES = {
  profile: getOptimizedImageFragment(IMAGE_DIMENSIONS.profile),
  card: getOptimizedImageFragment(IMAGE_DIMENSIONS.card),
  hero: getOptimizedImageFragment(IMAGE_DIMENSIONS.hero),
  thumbnail: getOptimizedImageFragment(IMAGE_DIMENSIONS.thumbnail),
  video: getOptimizedImageFragment(IMAGE_DIMENSIONS.video),
  responsive: getResponsiveImageFragment(),
}; 