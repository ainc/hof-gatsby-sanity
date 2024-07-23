import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
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
            allSanityPageTitles {
              edges {
                  node {
                      filePath
                      pageTitle
                  }
                }
              }
            }
          `
        )
    
        const pageTitle = title !== undefined ? 
        (
          //If there is a title prop, use that
          title 
        ) : (
          data.allSanityPageTitles.edges.find(page => page.node.filePath === useLocation().pathname + "/") !== undefined ? 
          (
            //if there is a page title for the current page from sanity, use that
            data.allSanityPageTitles.edges.find(page => page.node.filePath === useLocation().pathname+ "/").node.pageTitle 
          ) : (
            //if there is no page title for the current page from sanity, use the default title
            "Kentucky Entrepreneur Hall Of Fame"
          )
    
        );
        
        const metaDescription = description || (data.site && data.site.description) || "";
        const siteTitle = (data.site && data.site.title) || "";
        const siteAuthor = (data.site && data.site.author && data.site.author.name) || "";
        const salesIQPages = ['/learn/', '/learn/adults/', '/learn/youth/', '/bootcamp/', '/bootcamp/apply/']
        const includeSalesIQ = salesIQPages.includes(useLocation().pathname)
      return (
        <Helmet
          htmlAttributes={{ lang }}
          title={pageTitle}
          titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
          meta={[
            {
              name: "description",
              content: metaDescription
            },
            {
              property: "og:title",
              content: pageTitle
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
              name: "twitter:creator",
              content: siteAuthor
            },
            {
              name: "twitter:title",
              content: pageTitle
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