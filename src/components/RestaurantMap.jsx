import React, { Component } from 'react';
import Axios from 'axios';

const query = `
query MyQuery {
  allRestaurants {
    name
    address
    phone
    description(markdown: true)
    location {
      latitude
      longitude
    }
  }
}
`;

export default class RestaurantMap extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    Axios.post(
      'https://graphql.datocms.com/',
      { query },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`,
        }
      },
    )
    .then(response => this.setState({ data: response.data.data }))
    .catch(error => { throw error });
  }

  render = () => {
    const { data } = this.state;

    if (data === null) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {data.allRestaurants.map( (restaurant, index) =>
          <li key={index}>
            {restaurant.name}
          </li>
        )}
      </ul>
    );
  }
}
