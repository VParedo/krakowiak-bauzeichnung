import React from "react";
import LeistungsCard from "./LeistungsCard";

const content1 = [
  {
    icon: "",
    title: "Architektur",
    text: "Entwurfs-, Genehmigungs- und Ausführungspläne, Detailzeichnungen, Bestandspläne inkl. Aufmass, Digitalisieren von Archivplänen, Flucht- und Rettungspläne, Farbkonzepte",
  },
  {
    icon: "",
    title: "Fachplaner",
    text: "Zeichnungen für Elektroplanung, Zeichnungen für Ingenieure, Datenwandlung / Konvertierung",
  },
  {
    icon: "",
    title: "Bauherren / Makler",
    text: "Aufmass von Immobilien, Erstellung von Grundrissen und Ansichten zur Einbindung in Internetportale, Aufbereitung bereits vorhandener Grundrisse, Farbgestaltung / Exposès",
  },
];
const content2 = [
  {
    icon: "",
    title: "Plotservice",
    text: "Plotten bis DIN A0, Länge unendlich (Rolle), farbig oder schwarzweiss, Plotten auf Transparent, Schneiden (Maschine) und Falten",
  },
  {
    icon: "",
    title: "Berechnungen",
    text: "Berechnung von Wohn- und Nutzflächen (ggf. inkl. Aufmasserstellung), Berechnung des umbauten Raumes, Berechnung von GRZ und GFZ, sonstige Berechnungen",
  },
  {
    icon: "",
    title: "Gutachter",
    text: "Mithilfe bei Gutachten und Bestandsaufnahmen und Erstellung der kompletten Gutachtendokumentation",
  },
];

const Section1 = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-6">
        {content1.map((c) => (
          <LeistungsCard title={c.title} text={c.text} />
        ))}
      </div>
      <div className="flex gap-6">
        {content2.map((c) => (
          <LeistungsCard title={c.title} text={c.text} />
        ))}
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Section1;
