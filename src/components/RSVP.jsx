import { useState } from "react";

function RSVP() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const eventOptions = [
    {
      id: "civil",
      label: "Mariage civil",
    },
    {
      id: "religieux",
      label: "Mariage religieux",
    },
    {
      id: "soiree",
      label: "Soirée",
    },
  ];

  const [submitted, setSubmitted] = useState(false);

  const handleEventChange = (eventId) => {
    setEvents((current) => {
      if (current.includes(eventId)) {
        return current.filter((id) => id !== eventId);
      }

      return [...current, eventId];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || events.length === 0) {
      alert("Veuillez compléter tous les champs.");
      return;
    }

    console.log({
      name,
      phone,
      events,
    });

    setSubmitted(true);
  };

  return (
    <section
      id="confirmation"
      className="py-24 px-6 bg-[#faf8f5]"
    >
      <div className="max-w-xl mx-auto">

        {/* TITRE */}

        <div className="text-center mb-10">
          <p className="uppercase tracking-[4px] text-xs text-[#c8a54d] mb-3">
            Save the Date
          </p>

          <h2 className="text-3xl md:text-4xl text-gray-800">
            Votre participation
          </h2>

          <p className="text-gray-500 mt-4">
            Indiquez-nous les moments que vous souhaitez partager
            avec nous.
          </p>
        </div>



        {submitted ? (
            <div className="text-center py-12">

              <div className="text-[#c8a54d] text-5xl mb-6">
                ♡
              </div>

              <p className="uppercase tracking-[4px] text-xs text-[#c8a54d] mb-4">
                Merci pour votre réponse
              </p>

              <h3 className="text-3xl md:text-4xl text-gray-800 mb-5">
                Merci {name} !
              </h3>

              <p className="text-gray-500 leading-7 max-w-md mx-auto">
                Votre réponse a bien été enregistrée.
                Nous sommes heureux de savoir que vous
                serez parmi nous pour partager ces moments
                si précieux.
              </p>

              <p className="mt-8 text-[#c8a54d] italic text-lg">
                À très bientôt pour célébrer ensemble ♡
              </p>

            </div>
          ) : (

        <form onSubmit={handleSubmit}>

          {/* ÉVÉNEMENTS */}

          <div className="mb-10">

            <h3 className="text-lg font-medium text-gray-800 mb-5">
              À quels événements participerez-vous ?
            </h3>

            <div className="space-y-3">

              {eventOptions.map((event) => (

                <label
                  key={event.id}
                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    cursor-pointer
                    hover:border-[#c8a54d]
                    transition
                  "
                >

                  <input
                    type="checkbox"
                    checked={events.includes(event.id)}
                    onChange={() =>
                      handleEventChange(event.id)
                    }
                    className="
                      w-5
                      h-5
                      accent-[#c8a54d]
                    "
                  />

                  <span className="text-gray-700">
                    {event.label}
                  </span>

                </label>

              ))}


              {/* TOUT */}

              <label
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  bg-[#f5efe3]
                  border
                  border-[#c8a54d]
                  rounded-xl
                  cursor-pointer
                "
              >

                <input
                  type="checkbox"
                  checked={
                    events.length === eventOptions.length
                  }
                  onChange={() => {
                    if (events.length === eventOptions.length) {
                      setEvents([]);
                    } else {
                      setEvents(
                        eventOptions.map((event) => event.id)
                      );
                    }
                  }}
                  className="
                    w-5
                    h-5
                    accent-[#c8a54d]
                  "
                />

                <span className="font-medium text-gray-800">
                  Je participerai à tout
                </span>

              </label>

            </div>

          </div>


          {/* INFORMATIONS PERSONNELLES */}

          <div className="space-y-6">

            <h3 className="text-lg font-medium text-gray-800">
              Vos informations
            </h3>


            {/* NOM */}

            <div>

              <label className="block text-sm text-gray-600 mb-2">
                Nom complet
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex. Jean-Pierre Kabeya / Couple Jean-Pierre Kabeya"
                className="
                  w-full
                  px-4
                  py-4
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  outline-none
                  focus:border-[#c8a54d]
                  transition
                "
              />

            </div>


            {/* TÉLÉPHONE */}

            <div>

              <label className="block text-sm text-gray-600 mb-2">
                Numéro de téléphone
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+243 ..."
                className="
                  w-full
                  px-4
                  py-4
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  outline-none
                  focus:border-[#c8a54d]
                  transition
                "
              />

            </div>

          </div>


          {/* BOUTON */}

          <button
            type="submit"
            className="
              w-full
              mt-8
              py-4
              rounded-xl
              bg-[#c8a54d]
              text-white
              font-medium
              tracking-wide
              hover:bg-[#b5943f]
              transition
            "
          >
            Confirmer mes choix
          </button>

        </form>

        )}

      </div>
    </section>
  );
}

export default RSVP;