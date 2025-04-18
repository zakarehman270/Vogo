'use client';
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const pages = [
    {
        title: "Hello, Future Trailblazer!",
        subtitle: "Ready to level up your career?",
        content: `I'm Martha, your AI-powered career sidekick. Whether you're chasing your dream opportunity, polishing your resume, or just testing the waters — I'm here to make job hunting smarter, faster, and way less stressful. Let's get you hired!`,
    },
    {
        title: "Speed Round",
        content: "It's the fast lane to figuring out how I can make your job hunt smoother than your Monday coffee. Answer fast, and I'll pretend there's a dramatic game show timer ticking in the background!",
    },
    {
        title: "Throwback Vibes",
        content: "Which throwback hits define your era—vinyl classics, 90s mixtapes, or TikTok bangers? Translation: what generation are you part of: Boomer, Gen X, Gen Y/Millennial, Gen Z, Gen Alpha.",
    },
    {
        title: "Motivation Check",
        content: "What's motivating your job or service search right now? Is it faith, meaningful employment, a new beginning, or income that aligns with your values?",
    },
    {
        title: "Calling or Job?",
        content: "Would you say your current work or mission feels like a calling? Deeply committed, somewhat connected, still figuring it out, or not really?",
    },
    {
        title: "Fresh Vibes",
        content: "Feeling a new vibe? Want to switch up the background and give this page a fresh coat of digital paint? (Translation: I'm trying to show off)",
    },
    {
        title: "Faith & Work",
        content: "How important is your faith in shaping the work you want to do? Central to everything, important but not everything, open to incorporating, or prefer not to discuss?",
    },
    {
        title: "All Set!",
        content: "Data downloaded, curiosity satisfied! I've got what I need to align you with the kind of impact that speaks your language.",
    },
];

const backgroundColors = [
    "#6A5ACD", // Slate Blue
    "#20B2AA", // Light Sea Green
    "#FF6347", // Tomato
    "#9370DB", // Medium Purple
    "#3CB371", // Medium Sea Green
    "#FF4500", // Orange Red
    "#DA70D6", // Orchid
    "#1E90FF", // Dodger Blue
    "#FF69B4" , // Hot Pink
    "#FF7F50", // Coral
];

export default function Page() {
    const [step, setStep] = useState(0);
    const [message, setMessage] = useState('');
    const [direction, setDirection] = useState(0); // 1 = forward, -1 = back
    const [bgColor, setBgColor] = useState('#0CB5E8');
    const [isChangingColor, setIsChangingColor] = useState(false);
    const inputRef = useRef(null); // Create a ref for the input

    const handleBack = () => {
        if (step > 0) {
            setDirection(-1);
            setStep(step - 1);
            setMessage('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the user typed "back"
        if (message.trim().toLowerCase() === 'back') {
            handleBack();
            return;
        }

        // Check if we're on the Fresh Vibes step and user typed "yes"
        if (step === 5 && message.trim().toLowerCase() === 'yes') {
            setIsChangingColor(true);
            // Get a random color from our array (including the requested #FF7F50)
            const randomColor = backgroundColors[
                Math.floor(Math.random() * backgroundColors.length)
            ];

            // Change the color immediately, then fade the content
            setBgColor(randomColor);
            setTimeout(() => {
                setIsChangingColor(false);
            }, 500);
        }

        if (step < pages.length - 1 && message.trim().toLowerCase() !== 'back') {
            setDirection(1);
            setStep(step + 1);
        }
        setMessage('');
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Backspace' && !message && step > 0) {
                // Only trigger back action if the input is empty and backspace is pressed
                handleBack();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [step, message]);

    const slideVariants = {
        enter: (direction) => ({
            y: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            y: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            y: direction > 0 ? -100 : 100,
            opacity: 0,
        }),
    };

    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    // Focus the input whenever step changes
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [step, isChangingColor]);

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center text-white transition-colors duration-500"
            style={{ backgroundColor: bgColor }}
        >
            <Head>
                <title>Martha - AI Career Assistant</title>
                <meta name="description" content="Your AI-powered career sidekick" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-5xl px-4 sm:px-6 pt-4 sm:pt-16 pb-4 sm:pb-8 w-full flex flex-col flex-grow overflow-hidden">
                <motion.div
                    initial={false}
                    animate={isChangingColor ? "hidden" : "visible"}
                    variants={fadeVariants}
                    className='flex mb-2 sm:mb-8 mt-1 sm:mt-4 items-center gap-2 group cursor-pointer w-[20px]'
                    onClick={handleBack}
                >
                    {step > 0 && (
                        <>
                            <img src="/assets/backArrow.svg" alt="backArrow" className='' />
                            <button
                                className="text-white text-xs sm:text-sm md:text-base font-[300] cursor-pointer transition-transform duration-300 group-hover:translate-x-1"
                            >
                                Back
                            </button>
                        </>
                    )}
                </motion.div>

                {/* Animated content section */}
                <div className="relative h-[180px] sm:h-[280px] md:h-[300px]">
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={step}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 left-0 w-full"
                        >
                            {/* Small screens (< 640px): Bot icon on top */}
                            <div className="sm:hidden flex flex-col items-center mb-4">
                                <div className="flex justify-center mb-2">
                                    <Image
                                        src="/assets/botIcon.svg"
                                        alt="Bot Icon"
                                        width={40}
                                        height={40}
                                        className="w-12 h-12"
                                    />
                                </div>
                                <h1 className="text-xl font-[400] mb-2 text-center">
                                    {pages[step].title}
                                </h1>
                                <p className="text-sm font-[300] whitespace-pre-line text-start">
                                    {pages[step].content}
                                </p>
                                {step === 0 && (
                                    <p className="text-sm font-[300] mt-2 text-start w-full">
                                        {pages[step].subtitle}
                                    </p>
                                )}
                            </div>

                            {/* Large screens (≥ 640px): Original layout - completely unchanged */}
                            <div className="hidden sm:block">
                                <div className="flex mb-2">
                                    <div className="bg-transparent rounded-full -ml-[15px] mr-3">
                                        <Image
                                            src="/assets/botIcon.svg"
                                            alt="Bot Icon"
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 md:w-16 md:h-16"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl md:text-5xl font-[400] mb-2 sm:mb-4 mt-2 sm:mt-4">
                                            {pages[step].title}
                                        </h1>
                                    </div>
                                </div>
                                <p className="text-xl md:text-2xl font-[300] whitespace-pre-line text-left">
                                    {pages[step].content}
                                </p>
                                {step === 0 && (
                                    <p className="text-xl md:text-2xl font-[300] mt-2 sm:mt-4">
                                        {pages[step].subtitle}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Input field - only mobile changes */}
                <motion.form
                    initial={false}
                    animate={isChangingColor ? "hidden" : "visible"}
                    variants={fadeVariants}
                    onSubmit={handleSubmit}
                    className="mt-auto pt-4 sm:mt-0 sm:pt-0"
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-white text-base sm:text-3xl md:text-4xl font-[300] caret-opacity-0 placeholder-white placeholder-opacity-70"
                        aria-label="Type your message"
                        placeholder='Type your message...'
                        autoFocus
                    />
                    <button type="submit" className="sr-only">Send</button>
                </motion.form>
            </main>
        </div>
    );
}