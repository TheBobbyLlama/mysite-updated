import EntryBanner from "../../components/EntryBanner/EntryBanner";
import About from "../../components/About/About";
import Summary from "../../components/Summary/Summary";
import Projects from "../../components/Projects/Projects";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Home() {
  return (
    <>
      <EntryBanner />
      <About />
      <Summary />
      <Projects />
      <ContactForm />
    </>
  );
}
