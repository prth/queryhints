import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby"
import { Button } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SnippetsOutlined, DatabaseOutlined } from '@ant-design/icons';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('sql', sql);

const QueryViewer = (props) => (
  <div>
    <SyntaxHighlighter language={props.language} style={prism}>
      {props.query.trim()}
    </SyntaxHighlighter>

    <CopyToClipboard text={props.query.trim()}
      style={{
        marginRight: "10px"
      }}>
      <Button type="dashed" icon={<SnippetsOutlined />} size="small">Copy</Button>
    </CopyToClipboard>
    {props.querySlug && <Link to={props.querySlug}
      style={{
        marginRight: '10px'
      }}>
      <Button type="dashed" icon={<DatabaseOutlined />} size="small">
        View all variations
      </Button>
    </Link>}
  </div>
)

QueryViewer.propTypes = {
  language: PropTypes.string,
  query: PropTypes.string,
  querySlug: PropTypes.string
}

export default QueryViewer
