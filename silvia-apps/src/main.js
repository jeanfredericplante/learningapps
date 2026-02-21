import './style.css'

const apps = [
  {
    name: "Rhyme Time",
    description: "Focuses on phonological awareness, helping users identify and create rhyming patterns.",
    link: "https://g.co/gemini/share/cfd579a3536d",
    icon: "🎵"
  },
  {
    name: "Focus Reading",
    description: "Designed to enhance reading comprehension. It uses \"show, not tell\" strategies.",
    link: "https://g.co/gemini/share/87a3f71600b2",
    icon: "🔍"
  },
  {
    name: "Vocabulary Match-up Game",
    description: "A gamified tool for learning and reinforcing vocabulary by connecting words with meanings.",
    link: "https://g.co/gemini/share/99db7dfe24b5",
    icon: "🧩"
  },
  {
    name: "Describe The Picture",
    description: "Encourages expressive language development by prompting users to describe visual scenes.",
    link: "https://gemini.google.com/share/60bf4ab07498",
    icon: "🖼️"
  },
  {
    name: "Adverb Adventure",
    description: "A targeted grammar app for understanding and using adverbs modifying actions.",
    link: "https://g.co/gemini/share/cda394d71fd9",
    icon: "🏃"
  },
  {
    name: "Interactive Image Describer",
    description: "A collaborative descriptive tool where the AI generates or analyzes descriptions alongside the user.",
    link: "https://gemini.google.com/share/8146480688ec",
    icon: "🤖"
  },
  {
    name: "Word Transformers",
    description: "Focuses on word morphology and spelling by transforming words into different forms.",
    link: "https://gemini.google.com/share/d6b61415f148",
    icon: "✨"
  },
  {
    name: "Scrambled Book",
    description: "Create handwriting worksheets for children to practice spelling and handwriting.",
    link: "https://jeanfredericplante.github.io/scrambled_book/",
    icon: "📝"
  },
  {
    name: "Finish the Analogy",
    description: "A language logic game where players identify relationships between words.",
    link: "https://gemini.google.com/share/b46c965d668d",
    icon: "⚖️"
  }
];

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-slate-900 text-slate-100 selection:bg-pink-500 selection:text-white">
    <div class="relative overflow-hidden">
      <!-- Decorative background blur -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 blur-[100px] rounded-full"></div>
      </div>

      <header class="relative pt-24 pb-16 px-6 max-w-7xl mx-auto text-center z-10">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span class="gradient-text">Silvia Laspalas</span><br/><span class="text-3xl md:text-5xl mt-2 block">Learning Apps</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mt-4">
          A dedicated collection of interactive language and literacy tools designed to empower neurodivergent learners.
        </p>
      </header>

      <main class="relative pb-24 px-6 max-w-7xl mx-auto z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${apps.map(app => `
            <article class="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 pb-24 hover:bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1 flex flex-col h-full">
              <div class="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-violet-600/20 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300">
                ${app.icon}
              </div>
              <h2 class="text-2xl font-bold mb-3 text-slate-100 group-hover:text-pink-400 transition-colors">${app.name}</h2>
              <p class="text-slate-400 mb-8 leading-relaxed">${app.description}</p>
              
              <a href="${app.link}" target="_blank" class="absolute bottom-8 left-8 right-8 inline-flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-transparent hover:shadow-pink-500/25">
                <span>Launch App</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </article>
          `).join('')}
        </div>
      </main>
      
      <footer class="py-10 text-center text-slate-500 border-t border-slate-800/50 relative z-10 mt-10">
        <p>© ${new Date().getFullYear()} Silvia Laspalas · Built for Language & Literacy Support.</p>
      </footer>
    </div>
  </div>
`
