import React, { useState } from 'react';
import PasswordForm from 'C:/Users/Dell/Documents/GitHub/weekly-test-react1/password-generator/src/component/passwordFrom';
import PasswordGenerator from 'C:/Users/Dell/Documents/GitHub/weekly-test-react1/password-generator/src/component/passwordgenerator';

function App() {
  const [password, setPassword] = useState('');

  const handleGeneratePassword = ({ length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars }) => {
    // Logic to generate the password based on user preferences
    const generatedPassword = generatePassword({ length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars });
    setPassword(generatedPassword);
  };

  const generatePassword = ({ length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars }) => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecialChars) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    return generatedPassword;
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <PasswordForm onGenerate={handleGeneratePassword} />
      <PasswordGenerator password={password} />
    </div>
  );
}

export default App;
