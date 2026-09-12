import { useRef, useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./admin/Login";
import Admin from "./admin/Admin";
import { supabase } from "./lib/supabase";
import Navigation from "./components/Navigation";
import InvitationIntro from "./components/InvitationIntro";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Event from "./components/Event";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Countdown from "./components/Countdown";
import RSVP from "./components/RSVP";

function ProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (session === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
        <p className="font-['Poppins'] text-sm text-[#777]">
          Chargement...
        </p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  const guestName = "Jean-Pierre";

  const audioRef = useRef(null);

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Démarrer la musique
  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.volume = 0.5;
      await audio.play();

      setIsMusicPlaying(true);
    } catch (error) {
      console.log("Impossible de démarrer la musique.");
    }
  };

  // Ouverture de l'invitation
  const handleOpenInvitation = async () => {
    // Le clic sur "Ouvrir mon invitation" autorise la lecture
    await startMusic();

    // Afficher l'invitation
    setInvitationOpened(true);
  };



  return (

    <BrowserRouter>
      <Routes>

        {/* Invitation */}
        <Route
          path="/"
          element={
            <>
      {/* MUSIQUE */}
      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        loop
        preload="auto"
      />

      {/* INTRODUCTION */}
      {!invitationOpened && (
        <InvitationIntro
          guestName={guestName}
          onOpen={handleOpenInvitation}
        />
      )}

      {/* CONTENU DE L'INVITATION */}
      {invitationOpened && (
        <>
          <Navigation />

          {/* BOUTON MUSIQUE */}
          <button
            onClick={async () => {
              const audio = audioRef.current;

              if (!audio) return;

              if (isMusicPlaying) {
                audio.pause();
                setIsMusicPlaying(false);
              } else {
                try {
                  await audio.play();
                  setIsMusicPlaying(true);
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

          {/* SECTIONS */}
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
      )}
        </>
          }
        />
        {/* Login */}
        <Route
          path="/admin/login"
          element={<Login />}
        />
        {/* Administration protégée */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* Toute URL inconnue */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>

  );
}

export default App;