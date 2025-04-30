import React, { useState } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState(new Date());
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setResults([
      {
        airline: 'Emirates',
        from,
        to,
        price: '$499',
        date: format(departure, 'PP'),
        duration: '14h 20m',
        stops: 'Non-stop'
      },
      {
        airline: 'Qatar Airways',
        from,
        to,
        price: '$545',
        date: format(departure, 'PP'),
        duration: '15h 10m',
        stops: '1 Stop'
      }
    ]);
    setLoading(false);
  };

  return (
    <div className="main-container">
      <header className="header">
        <h1>Skyscanner Ultimate ✈️</h1>
        <p>Find your next destination in style</p>
      </header>

      <div className="search-panel">
        <div className="input-set">
          <label>From</label>
          <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="e.g. New York (JFK)" />
        </div>
        <div className="input-set">
          <label>To</label>
          <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="e.g. Tokyo (HND)" />
        </div>
        <div className="input-set">
          <label>Departure Date</label>
          <input type="date" value={departure.toISOString().split('T')[0]} onChange={(e) => setDeparture(new Date(e.target.value))} />
        </div>
        <button className="search-btn" onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </div>

      <div className="results-area">
        {results.map((flight, idx) => (
          <div key={idx} className="flight-card">
            <div className="flight-header">{flight.airline}</div>
            <div className="flight-info">
              <div className="route">{flight.from} → {flight.to}</div>
              <div className="details">
                <span>{flight.date}</span>
                <span>{flight.duration}</span>
                <span>{flight.stops}</span>
              </div>
            </div>
            <div className="price">{flight.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
