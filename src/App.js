import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState(
    '## markdown review \n > The greatest glory in living lies not in never falling, but in rising every time we fall - **Nelson Mandela**  \n ```\n Console.log("' +
      "Hello World" +
      '")  \n ``` \n ###### -> Hello world \n [github](https://github.com/Llydo1)'
  );
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
