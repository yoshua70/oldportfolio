function Section({ children, title, text }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full bg-white p-4 drop-shadow-sm transition ease-in-out delay-150 hover-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-xl">
      <h1 className="text-2xl text-gray-500">{title}</h1>
      <p>{text}</p>
    </div>
  )
}

export default function OfferSection() {
  return (
    <div className="flex flex-col min-h-screen gap-10">
      <h1 className="text-3xl text-emerald-500">What I offer</h1>
      <Section
        title="Votre site e-commerce avec Wordpress"
        text="Lancez votre site e-commerce avec Wordpress et WooCommerce. Ajoutez des moyens de paiement tel que CinetPay."
      />
      <Section
        title="Votre application web avec Next.js"
        text="Toute la puissance du framework Next.js pour le développement de votre plateforme. Ajoutez un blog, une base de données, authentifiez vos utilisateurs, importez vos contenus depuis Wordpress, les possibilités sont infinies."
      />
    </div>
  )
}
