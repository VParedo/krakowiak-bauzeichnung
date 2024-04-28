import Section1 from "@/components/template/1Section";
import Section2 from "@/components/template/2Section";
import Section3 from "@/components/template/3Section";
import Section4 from "@/components/template/4Section";
import ButtonLink from "@/components/template/ButtonLink";
import Footer from "@/components/template/Footer";
import Hero from "@/components/template/Hero";
import SectionTitle from "@/components/template/SectionTitle";

const content = [
  {
    h1: "Wie ich Sie unterstützen kann",
    h2: "Leistungen",
    page: <Section1 />,
    id: "section1",
    withTitle: true,
    withButton: false,
  },
  {
    h1: "Bereits abgeschlossene Projekte",
    h2: "Galerie",
    page: <Section2 />,
    id: "section2",
    withTitle: true,
    withButton: false,
  },
  {
    h1: "Meine Qualifikationen",
    h2: "Über mich",
    page: <Section3 />,
    id: "section3",
    withTitle: true,
    withButton: false,
  },
  {
    h1: "Wie kann ich Sie unterstützen?",
    h2: "Kontakt aufnehmen",
    page: <Section4 />,
    id: "section4",
    withTitle: true,
    withButton: false,
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      {content.map((c, i) => (
        <section
          id={c.id}
          className={`my_section ${
            i % 2 === 0 && "bg-my_color_light_background"
          }`}
        >
          <div className="my_container">
            {c.withTitle && <SectionTitle h1={c.h1} h2={c.h2} />}
            {c.page}
            <div className="flex self-start">
              {c.withButton && <ButtonLink text="Click" />}
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </main>
  );
}
