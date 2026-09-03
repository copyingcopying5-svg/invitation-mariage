import { useEffect, useRef, useState } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Event from "./components/Event";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Countdown from "./components/Countdown";
import RSVP from "./components/RSVP";

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  const guestName = "Jean-Pierre";
  
  const audioRef = useRef(null);
const [isMusicPlaying, setIsMusicPlaying] = useState(false);
const [musicStarted, setMusicStarted] = useState(false);
const [musicMutedByUser, setMusicMutedByUser] = useState(false);

const startMusic = async () => {
  const audio = audioRef.current;

  if (!audio || musicMutedByUser || musicStarted) return;

  try {
    audio.volume = 0.5;
    await audio.play();

    setIsMusicPlaying(true);
    setMusicStarted(true);
  } catch (error) {
    console.log("Lecture automatique bloquée.");
  }
};

useEffect(() => {
  const audio = audioRef.current;

  if (!audio) return;

  audio.volume = 0.5;

  // Première tentative automatique
  startMusic();

  // Si le navigateur bloque l'autoplay,
  // la première interaction lancera la musique.
  const handleFirstInteraction = () => {
    startMusic();
  };

  window.addEventListener("click", handleFirstInteraction, {
    once: true,
  });

  window.addEventListener("touchstart", handleFirstInteraction, {
    once: true,
  });

  window.addEventListener("scroll", handleFirstInteraction, {
    once: true,
  });

  return () => {
    window.removeEventListener("click", handleFirstInteraction);
    window.removeEventListener("touchstart", handleFirstInteraction);
    window.removeEventListener("scroll", handleFirstInteraction);
  };
}, []);

  return (
    <>

    <audio
      ref={audioRef}
      src="/music/wedding-music.mp3"
      loop
      preload="auto"
    />


    <button
      onClick={async () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (isMusicPlaying) {
          audio.pause();
          setIsMusicPlaying(false);
          setMusicMutedByUser(true);
        } else {
          try {
            await audio.play();
            setIsMusicPlaying(true);
            setMusicStarted(true);
            setMusicMutedByUser(false);
          } catch (error) {
            console.log("Impossible de relancer la musique.");
          }
        }
      }}
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-12
        h-12
        rounded-full
        bg-white/90
        backdrop-blur-sm
        shadow-lg
        flex
        items-center
        justify-center
        text-gray-700
        hover:scale-105
        transition-transform
      "
      aria-label={
        isMusicPlaying
          ? "Couper la musique"
          : "Activer la musique"
      }
    >
      {isMusicPlaying ? "🔊" : "🔇"}
    </button>


      {<Navigation />}

      <main>
        <Hero />
        <Story />
        <Location />
        <Event />
        <RSVP guestName={guestName} />
        <Countdown />
        <Gallery />
      </main>
    </>
  );
}

export default App;