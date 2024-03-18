import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://www.universal-tutorial.com/api/countries");
        console.log(response.data);
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountry();
  }, []);

  return (
    <div>
      {/* Display country data */}
      <h1>Country List</h1>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <strong>Country Name:</strong> {country.country_name} <br />
            <strong>Short Name:</strong> {country.country_short_name} <br />
            <strong>Phone Code:</strong> {country.country_phone_code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
