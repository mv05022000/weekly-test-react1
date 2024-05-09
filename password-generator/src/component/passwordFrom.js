import React, { useState } from 'react';
import './paswordform.css';

const PasswordForm = ({ onGenerate }) => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password Length:
        <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
      </label>
      <label>
        <input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
        Include Uppercase Letters
      </label>
      <label>
        <input type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
        Include Lowercase Letters
      </label>
      <label>
        <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
        Include Numbers
      </label>
      <label>
        <input type="checkbox" checked={includeSpecialChars} onChange={(e) => setIncludeSpecialChars(e.target.checked)} />
        Include Special Characters
      </label>
      <button type="submit">Generate Password</button>
    </form>
  );
};

export default PasswordForm;
