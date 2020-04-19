import React from "react"
import { Tag, Select, Typography, Row, Col } from 'antd';

import QueryViewer from "../Query/QueryViewer";

const { Option } = Select;
const { Title } = Typography;

class UseCases extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTags: [],
      allPossibleTags: ['select', 'order', 'limit'],
      allQueries: props.queries,
      visibleQueries: props.queries,
    }
    this.filterList = this.filterList.bind(this);
  }

  filterList(value) {
    value = value || '';

    if (!value.length) {
      this.setState({ visibleQueries: this.state.allQueries, selectedTags: [] });
      return;
    }

    const { allPossibleTags } = this.state;

    let matchedTags = allPossibleTags.filter(possibleTag => {
      return value.includes(possibleTag);
    })

    const updatedList = this.state.allQueries.filter(query => {
      return (
        query.node.frontmatter.tags.filter(tag => matchedTags.includes(tag))
          .length > 0
      )
    })

    this.setState({ visibleQueries: updatedList, selectedTags: matchedTags });
  }

  render() {
    const { allPossibleTags, selectedTags, visibleQueries } = this.state;
    const { db } = this.props;

    const filteredOptions = allPossibleTags.filter(o => !selectedTags.includes(o));

    return (
      <div>
        <Title level={4}># Queries</Title>

        <Select
          size="large"
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Search"
          onChange={this.filterList}
        >
          {filteredOptions.map(tag => (
            <Option key={tag}>{tag}</Option>
          ))}
        </Select>

        <Row gutter={[16, 36]} style={{ marginTop: "20px" }}>

          {visibleQueries.map((query) => (
            <Col span={24}>
              <div style={{ fontSize: "18px", color: "#111" }}>
                ~ {query.node.frontmatter.title}
              </div>
              <div>
                {query.node.frontmatter.tags.map((tag, tagIndex) => (
                  <Tag
                    key={tagIndex}
                    {...(selectedTags.includes(tag) ? { color: '#626262' } : {})}
                  >{tag}</Tag>
                ))}
              </div>
              <div>
                <QueryViewer language={db.frontmatter.queryViewerLanguage}
                  clipboard={true}
                  querySlug={query.node.frontmatter.slug}>
                  {query.node.frontmatter[db.frontmatter.slug].trim()}
                </QueryViewer>
              </div>
            </Col>
          ))}

        </Row>
      </div>
    )
  }
}

export default UseCases
