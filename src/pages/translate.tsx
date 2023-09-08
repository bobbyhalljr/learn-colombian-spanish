import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TranslatePage = () => {
    const [text, setText] = useState('I am a robot');
    const [voiceIndex, setVoiceIndex] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(0.7);
    const onEnd = () => {
        // You could do something here after speaking has finished
    };
    const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
        onEnd,
    });

    const voice = voices[voiceIndex] || null;

    const englishVoice = voices.filter((voice: any) => voice.voiceURI === 'Google US English')
    const spanishVoice = voices.filter((voice: any) => voice.voiceURI === 'Google español')

    const newVoices = [...englishVoice, ...spanishVoice]

    console.log('english', englishVoice)
    console.log('spanish', spanishVoice)

    return (
        <div className="container mx-auto p-4">
            <div className="flex space-x-4">
                {speaking ? (
                    <>
                        <label className="swap">
                            <input type="checkbox" />
                            <svg onClick={cancel} className="swap-off w-10 h-10 text-gray-700" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" /></svg>
                        </label>
                    </>
                ) : (
                    <svg onClick={() => speak({ text, voice, rate, pitch })} className="swap-on  w-10 h-10 text-gray-700" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>
                )}
            </div>
            <form className="space-y-4">
                <h2 className="text-2xl font-bold">Speech Synthesis</h2>
                {!supported && (
                    <p className="text-red-500">
                        Oh no, it looks like your browser doesn't support Speech Synthesis.
                    </p>
                )}
                {supported && (
                    <React.Fragment>
                        <p>
                            {`Type a message below then click 'Speak'
                and SpeechSynthesis will read it out.`}
                        </p>

                        <label htmlFor="message" className="font-bold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={text}
                            onChange={(event) => {
                                setText(event.target.value);
                            }}
                            className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
                        />

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="voice" className="font-bold">
                                Pick a language
                            </label>
                            <select
                                id="language"
                                name="language"
                                value={voiceIndex || ''}
                                onChange={(event: any) => {
                                    setVoiceIndex(event.target.value);
                                }}
                                className="border select w-full max-w-xs rounded-md p-2 shadow-sm border-gray-200 focus:outline-none focus:outline-gray-500"
                            >
                                <option disabled selected>Pick a language</option>
                                {newVoices
                                    .map((option, index) => (
                                        <option key={option.voiceURI} value={index}>
                                            {`${option.name.replace('Google', '')}`}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </React.Fragment>
                )}
            </form>
        </div>
    );
};

export default TranslatePage;
