import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ videoId }) {
  if (!videoId) {
    return null; // Si no hay un videoId, no se mostrará nada
  }

  return (
    <div
      className="videoPlayer_container"
      style={{ width: "100%", background: "#000", height: "100%" }}
    >
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        playing={true} // Iniciar automáticamente la reproducción
        muted={true} // Reproducir sin sonido
        // controls={true}
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
            },
          },
        }}
        width={"100%"}
        height={"50vh"}
      />
    </div>
  );
}
