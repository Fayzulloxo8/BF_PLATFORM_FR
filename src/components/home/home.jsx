import { useState, useEffect } from 'react';
import './home.scss';
import YandexAd from '../yandexAd/yandexAd';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/movies/')
      .then(response => response.json())
      .then(data => {
        console.log("Keldi:", data); // <-- Tekshiruv uchun
        setItems(data);
      })
      .catch(error => console.error('Xatolik:', error));
  }, []);

  const filteredItems = items.filter(item =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='home'>
      <YandexAd />
      <div className='input'>
        <input
          type='text'
          placeholder='Qidirish...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='container'>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className='kino' key={item.id} id={`category-${item.category?.id}`}>

              {item.movie?.startsWith("http") ? (
                <video src={item.movie} controls controlsList="nodownload" poster='https://images.uzmovi.tv/2025-06-30/cc456b7a26c6a061aa3d6de73b194480.jpg'></video>

              ) : (
                <p style={{ color: 'red' }}>❌ Video URL noto‘g‘ri</p>
              )}
              <p>
                <strong>{item.name}</strong><br />
                {item.title && <span>{item.title}</span>}
              </p>
            </div>
          ))
        ) : (
          <h1>Hech nima topilmadi...</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
