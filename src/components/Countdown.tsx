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
        <div className='flex items-center py-8 px-6 text-gray-700 dark:text-gray-100 bg-gray-300 dark:bg-gray-700 rounded-2xl shadow-sm my-12 text-center auto-cols-max'>
            {/* <h1 className='text-2xl font-bold text-nuetral-300'>Timer</h1> */}
            <div className="flex items-center">
                <div className="flex mr-6">
                    <span className="countdown mr-2 font-mono text-5xl">{minutes}</span> min
                </div>
                <div className="flex">
                    <span className="countdown mr-2 font-mono text-5xl">{seconds}</span> sec
                </div>
            </div>

            <div className="flex items-center w-full justify-end lg:ml-8 ml-4 space-x-4 ">
                <button
                    className={`bg-green-500 text-white rounded-md lg:w-1/3 px-4 py-2 ${isActive ? 'hidden' : ''
                        }`}
                    onClick={toggleTimer}
                >
                    Start
                </button>
                <button
                    className={`bg-red-500 text-white rounded-md lg:w-1/3 px-4 py-2 ${!isActive ? 'hidden' : ''
                        }`}
                    onClick={toggleTimer}
                >
                    Pause
                </button>
                <button
                    className="bg-neutral text-neutral-content rounded-md lg:w-1/3 px-4 py-2"
                    onClick={resetTimer}
                >
                    Reset
                </button>
            </div>

        </div>
    );
};

export default Countdown;
