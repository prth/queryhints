import React from "react"
import { Typography, Row, Col } from 'antd';
import QueryViewer from "../Query/QueryViewer";

const { Title } = Typography;

const Cheatsheets = (props) => {
  const { cheatsheets, language } = props;

  return (
    <div>
      <Title level={4}># Cheatsheet</Title>
      <Row gutter={[16, 16]} style={{ marginTop: "5px" }}>

        {cheatsheets.map((sheet) => (
          <Col span={24} key={sheet.slug}>
            <div>
              <div level={4} style={{ fontSize: "20px", color: "#222" }}>
                {sheet.node.frontmatter.title}
              </div>
            </div>
            <div>
              <QueryViewer language={language} clipboard={false}>
                {sheet.node.frontmatter.content.trim()}
              </QueryViewer>
            </div>
          </Col>
        ))}

      </Row>
    </div>
  )
}

export default Cheatsheets
