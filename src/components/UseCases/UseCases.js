import React from "react"
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class UseCases extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      allPossibleTags: [{
        id: 'select',
        text: 'select'
      }, {
        id: 'order',
        text: 'order'
      }, {
        id: 'limit',
        text: 'limit'
      }],
      allQueries: props.queries,
      visibleQueries: props.queries,
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    }, () => {
      this.filterList()
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }), () => {
      this.filterList()
    });
  }

  filterList() {
    const { tags, allPossibleTags } = this.state;

    if (!tags.length) {
      this.setState({ visibleQueries: this.state.allQueries });
      return;
    }

    let matchedTags = allPossibleTags.filter(possibleTag => {
      return tags.some(tag => tag.id === possibleTag.id);
    })
    matchedTags = matchedTags.map(tag => tag.id);

    const updatedList = this.state.allQueries.filter(query => {
      return (
        query.node.frontmatter.tags.filter(tag => matchedTags.includes(tag))
          .length > 0
      )
    })

    this.setState({ visibleQueries: updatedList })
  }

  render() {
    const { tags, allPossibleTags } = this.state;

    const queriesRes = this.state.visibleQueries.map((query, queryIndex) => (
      <div
        className="useCaseQuery"
        data-tags={query.node.frontmatter.tags.join()}
        key={queryIndex}
      >
        <div>{query.node.frontmatter.title}</div>
        {query.node.frontmatter.tags.map((tag, tagIndex) => (
          <span key={tagIndex}>{tag}</span>
        ))}
      </div>
    ))

    return (
      <div>
        <h3>Use cases</h3>
        <ReactTags tags={tags}
          suggestions={allPossibleTags}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          allowDragDrop={false}
          delimiters={delimiters}
          inline
          autocomplete
        />

        {queriesRes}
      </div>
    )
  }
}

export default UseCases
