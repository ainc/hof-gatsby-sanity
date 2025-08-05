import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";

const OptimizedImage = ({
  image,
  alt,
  className = "",
  placeholder = "blurred",
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fallbackSrc = "../../images/Logo_Square.png",
  ...props
}) => {
  // If we have a Sanity image with gatsbyImageData
  if (image?.asset?.gatsbyImageData) {
    const gatsbyImage = getImage(image.asset.gatsbyImageData);
    
    if (gatsbyImage) {
      return (
        <GatsbyImage
          image={gatsbyImage}
          alt={alt || image.alt || ""}
          className={className}
          loading={loading}
          sizes={sizes}
          placeholder={placeholder}
          {...props}
        />
      );
    }
  }

  // Fallback to static image
  return (
    <StaticImage
      src={fallbackSrc}
      alt={alt || "Placeholder"}
      className={className}
      placeholder={placeholder}
      loading={loading}
      {...props}
    />
  );
};

export default OptimizedImage; 