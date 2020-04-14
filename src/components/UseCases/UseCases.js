import React from "react"
import { Tag, Select } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Option } = Select;

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
    const { allPossibleTags, selectedTags } = this.state;
    const { db } = this.props;

    const queriesRes = this.state.visibleQueries.map((query, queryIndex) => (
      <div
        className="useCaseQuery"
        data-tags={query.node.frontmatter.tags.join()}
        key={queryIndex}
        style={{
          marginBottom: "40px"
        }}
      >
        <div style={{
          fontSize: '18px',
          color: '#0a0a0a',
          marginBottom: '4px'
        }}>
          <CaretRightFilled style={{ color: '#08c' }} />
          {query.node.frontmatter.title}
        </div>
        <div style={{
          marginBottom: "10px"
        }}>
          {query.node.frontmatter.tags.map((tag, tagIndex) => (
            <Tag key={tagIndex}>{tag}</Tag>
          ))}
        </div>
        <pre className="line-numbers">
          <code className="language-js">
            {query.node.frontmatter[db]}
          </code>
        </pre>
      </div>
    ))

    const filteredOptions = allPossibleTags.filter(o => !selectedTags.includes(o));

    return (
      <div>
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

        <div style={{
          marginTop: "30px"
        }}>
          {queriesRes}
        </div>
      </div>
    )
  }
}

export default UseCases
