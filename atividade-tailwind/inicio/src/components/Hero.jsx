// EXERCÍCIO 3: seção hero
export default function Hero() {
  return (
    <section id="inicio" className="bg-amber-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
        O café que abraça a sua manhã
      </h1>
      <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
        Grãos selecionados de pequenos produtores, torrados artesanalmente e
        servidos com carinho desde 2010.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#cardapio" className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors">
          Ver cardápio
        </a>
        <a href="#sobre" className="border border-amber-700 text-amber-700 px-6 py-3 rounded-lg hover:bg-amber-100 transition-colors">
          Nossa história
        </a>
      </div>
    </section>
  )
}