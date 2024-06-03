import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import GameCard from '@components/games/GameCard';
import GameCardPlaceholder from '@components/games/GameCardPlaceholder';
import gamesData from '@assets/Games.json';
import './Games.css'; // Import custom CSS for grid layout

interface Game {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  priority: number; // Add priority field
}

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[] | null>(null);
  const [sortOrder, setSortOrder] = useState<string>('featured'); // Set default sorting to featured

  useEffect(() => {
    // Simulate an API call to fetch game data
    setTimeout(() => {
      setGames(gamesData);
    }, 2000);
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const sortedGames = games?.sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOrder === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return a.priority - b.priority; // Lower number means higher priority
    }
  });

  return (
    <Container>
      <h1>Games</h1>
      <Form.Select aria-label="Sort games" value={sortOrder} onChange={handleSortChange} className="mb-3">
        <option value="featured">Featured</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </Form.Select>
      <div className="games-grid">
        {sortedGames ? (
          sortedGames.map((game, index) => (
            <div key={index} className="games-grid-item">
              <GameCard title={game.title} description={game.description} image={game.image} link={game.link} />
            </div>
          ))
        ) : (
          <>
            <div className="games-grid-item">
              <GameCardPlaceholder />
            </div>
            <div className="games-grid-item">
              <GameCardPlaceholder />
            </div>
            <div className="games-grid-item">
              <GameCardPlaceholder />
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Games;
