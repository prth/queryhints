import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby"
import { Button } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SnippetsOutlined, DatabaseOutlined } from '@ant-design/icons';

const QueryViewer = (props) => (
  <div>
    <pre className={`language-${props.language}`}>
      <code className={`language-${props.language}`}>
        {props.query.trim()}
      </code>
    </pre>
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
