import React from "react";
import Section from "./components/Section/Section";

import {
  scoreRecord1,
  scoreRecord2,
  scoreRecord3,
  section1Header,
  section2Header,
  section3Header,
  questions1,
  questions2,
  questions3,
} from "./components/Data/Data";
export default function App() {
  return (
    <>
      <Section
        scoreRecord={scoreRecord1}
        header={section1Header}
        questions={questions1}
      />
      <Section
        scoreRecord={scoreRecord2}
        header={section2Header}
        questions={questions2}
      />
      <Section
        scoreRecord={scoreRecord3}
        header={section3Header}
        questions={questions3}
      />
    </>
  );
}
