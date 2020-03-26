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
export class DisconnectedSingleCat extends React.Component {
  render() {
    const cat = this.props
    return (
      <div className="single-cat">
        <h2>{cat.name}</h2>
        <img src={cat.imageUrl} />
        <ul className="toys">
          {cat.toyRatings.map((toy, idx) => (
            <li key={idx}>{toy.name}</li>
          ))}
        </ul>
        <div className="friends">
          <h3>Friends</h3>
          <ul>
            {cat.friends.map(friend => (
              <li key={friend.id}>
                <CatCard {...friend} key={friend.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = ({ cat }) => {
  return { ...cat }
}

export const mapDispatchToProps = dispatch => {
  return { goGetCat: () => dispatch() }
}

// don't touch this line
// but this is the component you probably want in most cases
// so if you're using DisconnectedSingleCat somewhere else in your program
// you're gonna have a bad time
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedSingleCat)
