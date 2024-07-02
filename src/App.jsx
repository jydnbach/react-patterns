import Accordion from './components/Accordion/Accordion';
import AccordionItem from './components/Accordion/AccordionItem';

function App() {
  return (
    <main>
      <section>
        <h2></h2>
        <Accordion className="accordion">
          <Accordion.Item
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the business of ....</p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="local-guides"
            className="accordion-item"
            title="We're working with local guides"
          >
            <article>
              <p>We are not doing this along from out office.</p>
              <p>Instead, we are working with local guides</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
