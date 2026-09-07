import { useState } from "react";
import { supabase } from "../lib/supabase";

function RSVP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !name.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !attendance
  ) {
    alert("Veuillez compléter tous les champs obligatoires.");
    return;
  }

  const { error } = await supabase
    .from("rsvp")
    .insert([
      {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        attendance,
        message: message.trim() || null,
      },
    ]);

    if (error) {
      console.error("Erreur RSVP :", error);

      alert(
        `Erreur Supabase : ${error.message}`
      );

      return;
    }

  setSubmitted(true);
};

  return (
    <section
      id="confirmation"
      className="py-24 px-6 bg-[#faf8f5]"
    >
      <div className="max-w-2xl mx-auto">

        {/* TITRE */}

        <div className="text-center mb-12">

          <h2 className="text-5xl mb-6">
            RSVP
          </h2>

          <p className="
            text-gray-500
            mt-4
            max-w-md
            mx-auto
            leading-7
          ">
            Merci de bien vouloir confirmer votre présence.
          </p>

        </div>


        {/* FORMULAIRE */}

        {!submitted ? (

          <form
            onSubmit={handleSubmit}
            className="
              bg-white
              rounded-[28px]
              p-7
              md:p-10
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              border
              border-gray-100
            "
          >

            {/* NOM */}

            <div className="mb-7">

              <label className="
                block
                text-base
                text-gray-800
                mb-3
              ">
                Nom et prénom
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom et prénom"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-[#fafafa]
                  border
                  border-gray-200
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                  focus:border-[#c8a54d]
                  focus:ring-1
                  focus:ring-[#c8a54d]
                  transition
                "
              />

            </div>


            {/* EMAIL */}

            <div className="mb-7">

              <label className="
                block
                text-base
                text-gray-800
                mb-3
              ">
                Adresse e-mail
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-[#fafafa]
                  border
                  border-gray-200
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                  focus:border-[#c8a54d]
                  focus:ring-1
                  focus:ring-[#c8a54d]
                  transition
                "
              />

            </div>


            {/* TELEPHONE */}

            <div className="mb-8">

              <label className="
                block
                text-base
                text-gray-800
                mb-3
              ">
                Numéro de téléphone
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Votre numéro de téléphone"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-[#fafafa]
                  border
                  border-gray-200
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                  focus:border-[#c8a54d]
                  focus:ring-1
                  focus:ring-[#c8a54d]
                  transition
                "
              />

            </div>


            {/* PARTICIPATION */}

            <div className="mb-8">

              <label className="
                block
                text-base
                text-gray-800
                mb-4
              ">
                Participer
              </label>

              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
              ">

                {/* OUI */}

                <label
                  className={`
                    flex
                    items-center
                    gap-3
                    px-5
                    py-5
                    rounded-xl
                    border
                    cursor-pointer
                    transition
                    ${
                      attendance === "present"
                        ? "border-[#c8a54d] bg-[#faf6eb]"
                        : "border-gray-200 bg-white hover:border-[#c8a54d]"
                    }
                  `}
                >

                  <input
                    type="radio"
                    name="attendance"
                    value="present"
                    checked={attendance === "present"}
                    onChange={(e) =>
                      setAttendance(e.target.value)
                    }
                    className="
                      w-5
                      h-5
                      accent-[#c8a54d]
                      shrink-0
                    "
                  />

                  <span className="text-gray-700">
                    Oui, je serai présent(e)
                  </span>

                </label>


                {/* NON */}

                <label
                  className={`
                    flex
                    items-center
                    gap-3
                    px-5
                    py-5
                    rounded-xl
                    border
                    cursor-pointer
                    transition
                    ${
                      attendance === "absent"
                        ? "border-[#c8a54d] bg-[#faf6eb]"
                        : "border-gray-200 bg-white hover:border-[#c8a54d]"
                    }
                  `}
                >

                  <input
                    type="radio"
                    name="attendance"
                    value="absent"
                    checked={attendance === "absent"}
                    onChange={(e) =>
                      setAttendance(e.target.value)
                    }
                    className="
                      w-5
                      h-5
                      accent-[#c8a54d]
                      shrink-0
                    "
                  />

                  <span className="text-gray-700">
                    Désolé, je n'y serai pas
                  </span>

                </label>

              </div>

            </div>


            {/* MESSAGE */}

            <div className="mb-8">

              <label className="
                block
                text-base
                text-gray-800
                mb-3
              ">
                Message
              </label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message"
                rows="6"
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-[#fafafa]
                  border
                  border-gray-200
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                  focus:border-[#c8a54d]
                  focus:ring-1
                  focus:ring-[#c8a54d]
                  transition
                  resize-none
                "
              />

            </div>


            {/* BOUTON */}

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-[#c8a54d]
                text-white
                text-base
                font-medium
                tracking-wide
                hover:bg-[#b5943f]
                active:scale-[0.99]
                transition
              "
            >
              Répondre
            </button>

          </form>

        ) : (

          /* MESSAGE APRÈS RÉPONSE */

          <div
            className="
              bg-white
              rounded-[28px]
              p-10
              md:p-14
              text-center
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              border
              border-gray-100
            "
          >

            <div className="
              text-[#c8a54d]
              text-5xl
              mb-6
            ">
              ♡
            </div>

            <p className="
              uppercase
              tracking-[4px]
              text-xs
              text-[#c8a54d]
              mb-4
            ">
              Merci pour votre réponse
            </p>

            <h3 className="
              text-3xl
              md:text-4xl
              text-gray-800
              mb-5
            ">
              Merci {name} !
            </h3>

            <p className="
              text-gray-500
              leading-7
              max-w-md
              mx-auto
            ">
              {attendance === "present"
                ? "Votre présence a bien été confirmée. Nous sommes heureux de savoir que vous serez parmi nous pour partager ce moment précieux."
                : "Nous vous remercions de nous avoir informés. Votre réponse a bien été enregistrée."
              }
            </p>

            <p className="
              mt-8
              text-[#c8a54d]
              italic
              text-lg
            ">
              À très bientôt ♡
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default RSVP;