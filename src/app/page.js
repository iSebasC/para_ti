import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: "#ff69b4", backgroundImage: "url('/pngwing.com.png')", backgroundSize: "cover", backgroundPosition: "center" }}>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="p-8 lg:p-0 lg:col-span-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">💕Hola💕</h2>
            <h2 className="text-lg mb-8">💖Querida Samantha💖</h2>
          </div>
          <p className="text-lg mb-8 text-left">
            Quiero contarte cómo fue que nuestras vidas se cruzaron, cómo desde el primer contacto supe que eras alguien especial. Recuerdo claramente el momento en que nuestras manos se encontraron por primera vez, y en ese instante, una sensación de calidez y conexión recorrió mi ser. Desde entonces, cada interacción contigo ha sido como un rayo de sol en mi día, irradiando buena energía y amabilidad. 😍
          </p>
          <p className="text-lg mb-8 text-left">
            Aquella vez que compartimos risas fue como si el universo conspirara para que nuestras sonrisas se encontraran. Ver tu rostro iluminado por esa hermosa sonrisa y tus ojos brillantes fue un momento mágico que quedó grabado en mi corazón. 🥰
          </p>
          <p className="text-lg mb-8 text-left">
            Con el paso del tiempo, he tenido el privilegio de conocerte más profundamente, y en cada detalle descubro nuevas razones para admirarte. Desde aquel primer beso que selló el inicio del año 2024, hasta cada salida compartida y esos breves encuentros en el parque que nos hacen sentir vivos y enamorados. 😍
          </p>
          <p className="text-lg mb-8 text-left">
            Quiero que sepas que para mí no hay nadie más hermosa que tú. Mi amor por ti trasciende cualquier explicación, es un sentimiento que supera las palabras. Quiero confesarte que no solo me gustas, sino que me encantas de una manera que me deja sin aliento. 🌹
          </p>
          <p className="text-lg mb-8 text-left">
            Mis pensamientos están constantemente llenos de ti, y mis acciones reflejan lo profundo de mis sentimientos. Te quiero más de lo que puedo expresar, y cada mirada en tus ojos es como un bálsamo para mi alma necesitada de luz. 💐
          </p>
          <p className="text-lg mb-8 text-left">
            En resumen, tú eres la luz que ilumina mi camino, la sonrisa que alegra mis días y el amor que llena mi corazón. Te quiero con una intensidad que va más allá de lo imaginable. 🌺
          </p>
          <p className="text-lg mb-8 text-left">
            Con todo mi amor,
          </p>
          <p className="mb-5 text-lg text-left">
            Sebastian tu bebe ❤️
          </p>
          <div className="flex justify-center w-full"> {/* Utiliza "w-full" para ocupar todo el ancho disponible */}
          <img
            src="/foto.png"
            alt="Descripción de la imagen"
            className="mx-auto mb-8 rounded-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        </div>
        
      </div>
    </main>
  );
}
