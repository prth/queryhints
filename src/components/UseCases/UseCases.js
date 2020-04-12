import React from "react"

class UseCases extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allQueries: props.queries,
      visibleQueries: props.queries,
    }
  }

  filterList(event) {
    let searchValue = event.target.value

    if (searchValue) {
      searchValue = searchValue.toLowerCase().trim()
    }

    if (!searchValue) {
      this.setState({ visibleQueries: this.state.allQueries })
    }

    const allPossibleTags = ["select", "order", "limit"]

    const matchedTags = allPossibleTags.filter(tag => {
      return tag.startsWith(searchValue)
    })

    const updatedList = this.state.allQueries.filter(query => {
      return (
        query.node.frontmatter.tags.filter(tag => matchedTags.includes(tag))
          .length > 0
      )
    })

    this.setState({ visibleQueries: updatedList })
  }

  render() {
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
        <input onChange={this.filterList.bind(this)}></input>
        {queriesRes}
      </div>
    )
  }
}

export default UseCases
