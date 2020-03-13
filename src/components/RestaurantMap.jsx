import React, { Component } from 'react';
import Axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import './map.css';

const center = [45.188529, 5.724524];

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
      <Map center={center} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />

        {data.allRestaurants.map( (restaurant, index) =>
          <Marker position={[restaurant.location.latitude, restaurant.location.longitude]} key={index}>
            <Popup>
              <h2>{restaurant.name}</h2>
              <div><FontAwesomeIcon icon={faMapMarkerAlt} /> {restaurant.address}</div>
              <div><FontAwesomeIcon icon={faPhone} />{' '}
                {restaurant.phone.split(/(\d{2})/)
                .filter(item => item !== '')
                .join(' ')}
              </div>
            </Popup>
          </Marker>
        )}
      </Map>
    );
  }
}
