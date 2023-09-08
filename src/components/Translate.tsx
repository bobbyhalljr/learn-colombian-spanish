import React, { useState } from 'react';

const Translate = () => {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const translateText = async () => {
    if (!inputText) return; // Don't translate empty text

    setIsLoading(true);

    try {
      // Send a request to your API server for translation
    //   const response = await fetch('https://libretranslate.com/translate', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ text: inputText }),
    //   });
    const res = await fetch("https://libretranslate.com/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "",
		source: "auto",
		target: "en",
		format: "text",
		api_key: ""
	}),
	headers: { "Content-Type": "application/json" }
    });

    console.log(await res.json());

      if (res.ok) {
        const data = await res.json();
        setTranslation(data.translation);
      } else {
        console.error('Translation request failed.');
      }
    } catch (error) {
      console.error('Error during translation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Translation</h1>
      <div>
        <input
          type="text"
          placeholder="Enter text to translate..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={translateText} disabled={isLoading}>
          Translate
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {translation && (
            <p>
              <strong>Translation:</strong> {translation}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Translate;
