import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const FilterFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatText = () => {
    const formatted = input
      .split(" ")
      .filter((line) => line.trim() !== "")
      .join("\n");
    setOutput(formatted);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Filter Properties Formatter</CardTitle>
        <CardDescription>
          Przekształca tekst z postmana w format z nowymi liniami
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Wejście (wklej tekst z postmana):
          </label>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-32"
          />
        </div>

        <div className="flex space-x-2">
          <Button onClick={formatText}>Formatuj</Button>
          <Button variant="outline" onClick={copyToClipboard}>
            Kopiuj wynik
          </Button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Wynik:</label>
          <Textarea value={output} readOnly className="h-32" />
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterFormatter;
