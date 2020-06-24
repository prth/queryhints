import React from "react"
import PropTypes from "prop-types"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import prism from "react-syntax-highlighter/dist/esm/styles/prism/okaidia"
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript"
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql"

SyntaxHighlighter.registerLanguage("js", js)
SyntaxHighlighter.registerLanguage("sql", sql)

const QueryViewer = ({ query }) => (
  <div>
    <SyntaxHighlighter
      language="sql"
      style={prism}
      customStyle={{
        marginTop: 0,
      }}
    >
      {query}
    </SyntaxHighlighter>
  </div>
)

QueryViewer.propTypes = {
  query: PropTypes.string,
}

export default QueryViewer
