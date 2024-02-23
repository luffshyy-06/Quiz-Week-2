import React, { useState, useEffect } from 'react';

const ClickCounter = ({ count, setCount }) => {
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Change Counter {count} times clicked</button>
    </div>
  );
};

const Title = ({ count }) => {
  useEffect(() => {
    document.title = `${count} times clicked`; 
  }, [count]);

  return null;
};

const Identity = ({ name, npm, github }) => (
  <div style={{ textAlign: 'left' }}>
    <h2 style={{ fontSize: '40px', fontFamily: 'Times New Roman' }}>My Identity</h2>
    <ul>
      <li style={{ fontSize: '20px', fontFamily: 'Calibri' }}>{name}</li>
      <li style={{ fontSize: '20px', fontFamily: 'Calibri' }}>{npm}</li>
      <li style={{ fontSize: '20px', fontFamily: 'Calibri' }}>
        <a href={github} style={{ fontFamily: 'Calibri' }}>My GitHub</a>
      </li>
    </ul>
  </div>
);

const Form = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name || 'Default Name'}!`); 
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const RandomBackground = () => {
  const handleClick = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div>
      <br />
      <button onClick={handleClick}>Change background to a random color</button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Title count={count} />
      <ClickCounter count={count} setCount={setCount} />
      <Identity name="Siti Fatimah" npm="2327250055" github="https://github.com/luffshyy-06" />
      <Form />
      <RandomBackground />
    </div>
  );
};

export default App;
