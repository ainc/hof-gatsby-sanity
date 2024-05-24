import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from '../../images/favicon.ico'

function SEO({ description, lang, meta, keywords, title, path, jsImports }) {

    return(
        <Helmet
        /*Lots of things */
        meta={[]}
        >
        <link rel="icon" type="image/x-icon" href={favicon} sizes="16x16" />
        </Helmet>

    )
}
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