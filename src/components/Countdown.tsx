import React, { useState, useEffect, useRef } from 'react';

const Countdown = () => {
    const initialMinutes = 5;
    const initialSeconds = 0;

    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef<number | null | any>(null);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsActive(false);
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
    };

    useEffect(() => {
        if (isActive) {
            intervalRef.current = window.setInterval(() => {
                if (minutes === 0 && seconds === 0) {
                    resetTimer();
                } else {
                    if (minutes === 0 && seconds === 0) {
                        setMinutes(59);
                        setSeconds(59);
                    } else if (minutes === 0 && seconds === 0) {
                        setMinutes(59);
                        setSeconds(59);
                    } else if (seconds === 0) {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    } else {
                        setSeconds(seconds - 1);
                    }
                }
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isActive, minutes, seconds]);

    return (
        <>
        <h2 className='text-xl lg:text-2xl text-gray-600 dark:text-gray-200 mx-4 lg:mx-10'>Timer</h2>
        <div className='flex flex-col md:flex-row items-center md:justify-center py-8 text-gray-700 dark:text-gray-100 bg-neutral-200 dark:bg-gray-700 rounded-2xl shadow-sm mb-12 mt-2 text-center auto-cols-max'>
            <div className="flex items-center justify-center mb-6 mx-2 mr-2 ml-6">
                <div className="flex mr-2">
                    <span className="countdown mr-2 font-mono text-4xl lg:text-5xl">{minutes}</span> min
                </div>
                <div className="flex">
                    <span className="countdown mr-2 font-mono text-4xl lg:text-5xl">{seconds}</span> sec
                </div>
            </div>

            <div className="flex items-center w-full justify-center lg:ml-8">
                <button
                    className={`bg-green-600 hover:bg-green-700 text-white rounded-md lg:w-1/3 mr-2 px-4 py-2 ${isActive ? 'hidden' : ''
                        }`}
                    onClick={toggleTimer}
                >
                    Start
                </button>
                <button
                    className={`bg-red-500 hover:bg-red-600 text-white rounded-md lg:w-1/3 mr-2 px-4 py-2 ${!isActive ? 'hidden' : ''
                        }`}
                    onClick={toggleTimer}
                >
                    Pause
                </button>
                <button
                    className="bg-neutral-800 hover:bg-neutral-900 text-neutral-content rounded-md lg:w-1/3 px-4 py-2"
                    onClick={resetTimer}
                >
                    Reset
                </button>
            </div>

        </div>
        </>
    );
};

export default Countdown;
