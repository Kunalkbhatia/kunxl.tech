"use client";

import Image from "next/image";
import monkey from "../../../public/icon.png";
import { useEffect, useState } from "react";
import { Time } from "../Time";

export interface VSCodeActivity {
  id: string;
  name: string;
  type: number;
  state: string;
  session_id: string;
  details: string;
  application_id: string;
  timestamps: {
    start: number;
  };
  assets: {
    large_image: string;
    large_text: string;
    small_image: string;
    small_text: string;
  };
  buttons: string[];
  created_at: number;
}

export interface Spotify {
  timestamps: {
    start: number;
    end: number;
  };
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  track_id: string;
}

export function Test() {
  const [vsCodeData, setVSCodeData] = useState<VSCodeActivity | null>(null);
  const [spotifyData, setSpotifyData] = useState<Spotify | null>(null);
  const [status, setStatus] = useState<string>("offline");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const socket = new WebSocket("wss://api.lanyard.rest/socket");
    let heartBeatInterval: NodeJS.Timeout | undefined;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.op === 1) {
        const initializeMessage = {
          op: 2,
          d: {
            subscribe_to_id: "714468772739678289",
          },
        };
        socket.send(JSON.stringify(initializeMessage));
        const heartBeat = data.d.heartbeat_interval;

        heartBeatInterval = setInterval(() => {
          const heartbeatMessage = {
            op: 3,
          };
          socket.send(JSON.stringify(heartbeatMessage));
        }, heartBeat);
      } else if (data.op === 0) {
        const vsCode: VSCodeActivity = data.d.activities.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (activity: any) => activity.name === "Visual Studio Code"
        );
        if (vsCode) {
          setVSCodeData(vsCode);
        } else {
          setVSCodeData(null);
        }
        setSpotifyData(data.d.spotify);
        setStatus(data.d.discord_status);
      }
    };
    return () => {
      if (heartBeatInterval !== undefined) {
        clearInterval(heartBeatInterval);
      }
      socket.close();
    };
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (spotifyData !== null) {
        const totalDuration =
          spotifyData.timestamps.end - spotifyData.timestamps.start;
        const currentTime = Date.now();
        const elapsedTime = currentTime - spotifyData.timestamps.start;

        if (elapsedTime >= totalDuration) {
          setProgress(100);
        } else {
          const newProgress = (elapsedTime / totalDuration) * 100;
          setProgress(newProgress);
        }
      }
    };

    // Update progress every 100 milliseconds
    const intervalId = setInterval(updateProgress, 100);

    // Clean up interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [spotifyData]);

  if (spotifyData !== null) {
    return (
      <div className="flex gap-5 items-center">
        <Image
          src={spotifyData?.album_art_url ?? monkey}
          alt="album cover"
          height={100}
          width={100}
          className="bg-customGreen rounded-full object-cover spin-fast"
        />
        <div className="flex flex-col gap-2">
          <div className="text-customLightBlue text-3xl">
            {spotifyData?.artist.split("; ")[0]}
          </div>
          <div className="text-customPurple text-xl">{spotifyData?.song}</div>
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div
              className="h-full bg-customRed rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          {vsCodeData && (
            <div className="flex gap-2 text-customYellow text-sm items-center">
              <div className="w-10 h-10 overflow-hidden border-customBlue border rounded-full">
                <Image
                  src={`https://cdn.discordapp.com/app-assets/${vsCodeData.application_id}/${vsCodeData.assets.small_image}.png`}
                  alt="vs code"
                  height={100}
                  width={100}
                  className="bg-customGreen rounded-full w-full h-full object-cover"
                />
              </div>

              <div>{vsCodeData.state}</div>
              <span>~</span>
              <div>{vsCodeData.details}</div>
            </div>
          )}
        </div>
      </div>
    );
  } else if (vsCodeData !== null) {
    return (
      <div className="flex gap-5 items-center">
        <Image
          src={`https://cdn.discordapp.com/app-assets/${vsCodeData.application_id}/${vsCodeData.assets.small_image}.png`}
          alt="album cover"
          height={100}
          width={100}
          className="bg-customGreen rounded-3xl object-cover"
        />
        <div className="text-2xl flex flex-col gap-1">
          <div className="text-customLightBlue">@kunxl</div>
          <div>
            <div className="text-customOrange">{vsCodeData.state}</div>
            <div className="text-customPurple">{vsCodeData.details}</div>
          </div>
          <Time />
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-5 items-center">
      <Image
        src={monkey}
        alt="monkey"
        height={100}
        width={100}
        className="bg-customGreen rounded-3xl"
      />
      <div className="text-2xl flex flex-col gap-1">
        <div className="text-customLightBlue">@kunxl</div>
        <div className="text-customPurple">{status}</div>
        <Time />
      </div>
    </div>
  );
}