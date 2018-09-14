import React from 'react';

export default class Group extends React.Component {
  static async getInitialProps ({query}) {
    const photosResponse = await fetch(`http://localhost:3000/api/groups/${query.id}/photos`)
    const photos = await photosResponse.json()
    return { photos }
  }
  render () {
    const { photos } = this.props;
    return (
      <div>
        {photos.map( photo => (
          <div key={photo.id}>
            {photo.name}
            <img alt={photo.name} src={`http://localhost:3000/images/${photo.id}.png`} />
          </div>
        ))}
      </div>
    )
  }
}