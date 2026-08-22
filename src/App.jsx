import { useState } from "react";

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

  return (
    <>
      {<Navigation />}

      <main>
        <Hero />
        <Story />
        <Event />
        <Location />
        <Gallery />
        <Countdown />
        <RSVP guestName={guestName} />
      </main>
    </>
  );
}

export default App;