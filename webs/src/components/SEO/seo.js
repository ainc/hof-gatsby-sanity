import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from '../../images/favicon.ico'

function SEO({ description, lang, meta, keywords, title, path, jsImports }) {
    const data = useStaticQuery(
        graphql`
          query DefaultSEOQuery {
            site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
              title
              description
              keywords
            }
          }
          `
        )

        
        const metaDescription = description || (data.site && data.site.description) || "";
        const siteTitle = (data.site && data.site.title) || "";
      return (
        <Helmet
          htmlAttributes={{ lang }}
          titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
          meta={[
            {
              name: "description",
              content: metaDescription
            },
            {
              property: "og:description",
              content: metaDescription
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              name: "twitter:card",
              content: "summary"
            },
            {
              name: "twitter:description",
              content: metaDescription
            },
            {
              name:"og:image",
              content: {favicon}
            }
          ]
            .concat(
              keywords && keywords.length > 0
                ? {
                    name: "keywords",
                    content: keywords.join(", ")
                  }
                : []
            )
            .concat(meta)}
        >
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <jsImports />
        
        </Helmet>
      );
    }
    
    SEO.defaultProps = {
      lang: "en",
      meta: [],
      keywords: []
    };
SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    jsImports: PropTypes.arrayOf(PropTypes.string)
};

export default SEO;