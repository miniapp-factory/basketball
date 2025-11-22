"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FantasyGame() {
  const [team, setTeam] = useState<string | null>(null);
  const [opponent, setOpponent] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const pickTeam = () => {
    const teams = ["Lakers", "Warriors", "Nets", "Bulls"];
    const chosen = teams[Math.floor(Math.random() * teams.length)];
    setTeam(chosen);
    setResult(null);
  };

  const pickOpponent = () => {
    const teams = ["Lakers", "Warriors", "Nets", "Bulls"];
    const chosen = teams[Math.floor(Math.random() * teams.length)];
    setOpponent(chosen);
    setResult(null);
  };

  const playGame = () => {
    if (!team || !opponent) return;
    const teamScore = Math.floor(Math.random() * 120) + 80;
    const oppScore = Math.floor(Math.random() * 120) + 80;
    setResult(
      `${team} (${teamScore}) vs ${opponent} (${oppScore}) – ${
        teamScore > oppScore ? "Winner" : "Loser"
      }`
    );
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Fantasy Basketball Game</h1>
      <div className="flex gap-4">
        <Button onClick={pickTeam}>Pick Your Team</Button>
        <Button onClick={pickOpponent}>Pick Opponent</Button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>Your Team: {team ?? "None"}</span>
        <span>Opponent: {opponent ?? "None"}</span>
      </div>
      <Button onClick={playGame} disabled={!team || !opponent}>
        Play Game
      </Button>
      {result && <p className="mt-4 font-medium">{result}</p>}
    </div>
  );
}
