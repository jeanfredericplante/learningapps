const apps = [
  {
    name: "Rhyme Time",
    description: "Focuses on phonological awareness, helping users identify and create rhyming patterns. It leverages pattern-seeking strengths to build foundations for reading and language.",
    link: "https://g.co/gemini/share/cfd579a3536d",
    visualIdea: "Two colorful boxes where matching rhyming word tiles are placed.",
    image: "rhymetime.png"
  },
  {
    name: "Focus Reading",
    description: "Designed to enhance reading comprehension. It uses \"show, not tell\" strategies, minimizing overwhelming language and focusing on key textual patterns or visual supports.",
    link: "https://g.co/gemini/share/87a3f71600b2",
    visualIdea: "A clean reader view with a magnifying glass icon over a highlighted sentence.",
    image: "focus_reading.png"
  },
  {
    name: "Vocabulary Match-up Game",
    description: "A gamified tool for learning and reinforcing vocabulary. It requires users to connect words with meanings, categories, or images, catering to a pattern-based learning style.",
    link: "https://g.co/gemini/share/99db7dfe24b5",
    visualIdea: "A classic matching grid with lines connecting words to icons.",
    image: "vocabulary_matchup.png"
  },
  {
    name: "Describe The Picture",
    description: "Encourages expressive language development by prompting users to describe visual scenes. It provides functional sentence starters or \"gestalts\" (e.g., \"I see...\") to help model communication.",
    link: "https://gemini.google.com/share/60bf4ab07498",
    visualIdea: "A framed picture of a simple landscape with a speech bubble coming from it.",
    image: "describe_picture.png"
  },
  {
    name: "Adverb Adventure",
    description: "A targeted grammar app for understanding and using adverbs. It uses interactive examples to demonstrate how adverbs modify actions, which is helpful for students who struggle with abstract grammatical concepts.",
    link: "https://g.co/gemini/share/cda394d71fd9",
    visualIdea: "An \"action\" scene (like a character running) with a slider to change the adverb (e.g., \"quickly\" vs. \"silently\").",
    image: "adverb_adventure.png"
  },
  {
    name: "Interactive Image Describer",
    description: "A collaborative descriptive tool where the AI generates or analyzes descriptions alongside the user. This supports language modeling by providing immediate feedback and visual-textual associations.",
    link: "https://gemini.google.com/share/8146480688ec",
    visualIdea: "Chat bubbles + image.",
    image: "interactive_describer.png"
  },
  {
    name: "Word Transformers",
    description: "Focuses on word morphology and spelling. It allows users to \"transform\" words into different forms (e.g., changing prefixes or suffixes), utilizing a student's hyperlexic strengths in spelling.",
    link: "https://gemini.google.com/share/d6b61415f148",
    visualIdea: "A \"machine\" graphic where a word enters one side and comes out with a new suffix or prefix on the other.",
    image: "word_transformers.png"
  },
  {
    name: "Break The Code",
    description: "Generate secret message worksheets with math problems. Engages logical thinking and math skills to decode hidden messages.",
    link: "https://jeanfredericplante.github.io/breakthecode/",
    visualIdea: "Mathematical symbols forming a lock or code.",
    image: "break_the_code.png"
  },
  {
    name: "Scrambled Book",
    description: "Create handwriting worksheets for children. Helps practice spelling and handwriting by rearranging scrambled letters to form words.",
    link: "https://jeanfredericplante.github.io/scrambled_book/",
    visualIdea: "Scrambled letters being arranged on lined paper.",
    image: "scrambled_book.png"
  },
  {
    name: "Step2Step",
    description: "Interactive practice for solving two-step algebraic equations. visualizes the process of isolating the variable to solve for x.",
    link: "https://gemini.google.com/share/f366748ae3ac",
    visualIdea: "Algebraic equation being solved step-by-step.",
    image: "step2step.png"
  },
  {
    name: "MathMover",
    description: "Interactive practice for solving one-step algebraic equations. Helps students visualize the movement of numbers across the equals sign.",
    link: "https://gemini.google.com/share/00e82511cb88",
    visualIdea: "Simple one-step equation like x + 5 = 12.",
    image: "mathmover.png"
  }
];

document.querySelector('#app').innerHTML = `
  <header>
    <h1>Learning Adventures</h1>
    <p class="subtitle">Neurodiversity-affirming educational apps powered by AI</p>
  </header>
  <main>
    <div class="app-grid">
      ${apps.map(app => `
        <article class="app-card">
          <div class="card-image-container">
            ${app.image
    ? `<img src="${app.image}" alt="${app.name}" class="card-image" onerror="this.onerror=null;this.src='https://placehold.co/600x400/202c44/FFF?text=${encodeURIComponent(app.name)}'">`
    : `<div style="width:100%;height:100%;background:linear-gradient(45deg, var(--primary-accent), var(--secondary-accent));opacity:0.2;"></div>`
  }
          </div>
          <div class="card-content">
            <h2 class="app-title">${app.name}</h2>
            <p class="app-description">${app.description}</p>
            <a href="${app.link}" class="glow-button" target="_blank">Launch App</a>
          </div>
        </article>
      `).join('')}
    </div>
  </main>
`;
