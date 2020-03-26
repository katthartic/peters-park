import React from 'react'
import { connect } from 'react-redux'
import CatCard from './CatCard'

// why are we exporting so much stuff you might ask?
// and I would say good question
// long story short, I need access to this stuff to test it
// so we export it
// by calling it disconnected (from the redux store), it's clear that
// this is not the correct import you want generally
// you want the default export
// don't worry about it too much
export class DisconnectedAllCats extends React.Component {
  render() {
    const { cats } = this.props
    return (
      <div className="all-cats">
        <h1>Peter's Park</h1>
        <ul>
          {cats.map(cat => (
            <li key={cat.id}>
              <CatCard {...cat} key={cat.id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = ({ cats }) => {
  return { cats }
}

export const mapDispatchToProps = dispatch => {
  return { goGetCats: () => dispatch() }
}

// don't touch this line
// but this is the component you probably want in most cases
// so if you're using DisconnectedAllCats somewhere else in your program
// you're gonna have a bad time
export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllCats)
