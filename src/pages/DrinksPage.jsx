import heroDrinks from '../Assets/istockphoto-1404412754-1024x1024.jpg'

const signatureCocktails = [
  {
    name: 'The Buffalo Trace Old Fashioned',
    price: '$18',
    description: 'Small batch bourbon, cedar-smoked maple syrup, black walnut bitters, and a hand-carved ice sphere.',
    tags: ['Smoky', 'Bold'],
  },
  {
    name: 'Midnight Prairie',
    price: '$16',
    description: 'Rye whiskey, activated charcoal, muddled blackberries, lemon juice, and a sprig of fresh sage.',
    tags: ['Tart', 'Earthy'],
  },
  {
    name: 'Desert Rose Gimlet',
    price: '$15',
    description: 'Botanical gin, hibiscus-infused agave, fresh lime, and a saline drop. Served up with a dried rose petal.',
    tags: ['Floral', 'Refining'],
  },
]

const beers = [
  ['Badlands Double IPA', '$10', 'Cloudy, hop-forward with notes of pine and grapefruit. 8.2% ABV'],
  ['Iron Range Stout', '$9', 'Nitro pour. Roasted cocoa nibs, dark espresso, and a creamy head. 6.5% ABV'],
  ['Prairie Wheat', '$8', 'Crisp and bright with citrus peel and a soft honeyed finish. 5.0% ABV'],
]

const spirits = [
  ['High Plains Single Malt', '$14', 'Rich barley sweetness with toasted oak and orchard fruit.'],
  ['Cedar Reserve Rye', '$13', 'Spice-led and polished, finished with a whisper of smoke.'],
  ['Northwind Amaro', '$12', 'Herbal bitterness balanced by dark cherry and orange peel.'],
]

function DrinksPage() {
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[280px] items-center justify-center overflow-hidden md:h-[50vh]">
        <div className="absolute inset-0 z-0">
          <img src={heroDrinks} alt="Drinks menu hero" className="hidden h-full w-full object-cover opacity-70 lg:block" />
          <div
            className="block h-full w-full bg-cover bg-center opacity-70 lg:hidden"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLw362dIApBWV6Lq9a3xNUGAna9JA2kQjt2Euk-6VjmdpnKiZcxvGOW2LAcp45iEin443Q7fR6d6Hv81ZDlBOkFbECBjFTgf0slRauSDid8vGOUxfM9s-tg9X6Xd6Vb0lwVNx8DnnJDGea5qZIztpbztM3oOnMfeMWdfaxNn_Rm8aW1aDB4V6e1xB5fBHf_56EX4DUCel0bVNdovmw8J6A6nS7RxH4Jq-jmOdcRto40ihPMwZ4p4ei')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111415]/60 to-[#111415]"></div>
        </div>

        <div className="relative z-10 px-4 text-center sm:px-6">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-[#ffb77d]">
            The Spirit of the Frontier
          </span>
          <h2 className="text-4xl font-semibold text-[#f3efe7] sm:text-5xl lg:text-6xl">Beverage Program</h2>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-16">
        <div className="mb-12 flex flex-wrap justify-center gap-4 rounded-full border border-[#554336] bg-[#111415]/80 p-3 backdrop-blur-md">
          <a href="#signature" className="rounded-full border border-[#ffb77d]/20 bg-[#ffb77d]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">
            Signature Cocktails
          </a>
          <a href="#beers" className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#dbc2b0] transition hover:text-[#ffb77d]">
            Craft Beers
          </a>
          <a href="#spirits" className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#dbc2b0] transition hover:text-[#ffb77d]">
            Fine Spirits
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 pb-24 sm:px-6 lg:px-16">
        <section id="signature" className="mb-24">
          <div className="mb-10 flex items-center gap-4">
            <h3 className="text-3xl font-semibold text-[#ffb77d]">Signature Cocktails</h3>
            <div className="h-[1px] flex-1 bg-[#554336]"></div>
          </div>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="group relative overflow-hidden border border-[#554336] bg-[#282a2c] lg:col-span-7 lg:h-[500px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAT2cSs-qxo3PkjCcyiWPZ7hm1fuo5WbkBSNItrjkR_LIIEAsR0W-lY5Ue7ZlWwZfL1CbQQu1jMniPNMxa8Gayl4Q8y9SIyGDjF8kBKju3o0tuFxp0hoaO2XYnbg13qGMCNaXbKrGXsHjSnJJPj_mSc0Xc-AvQW4XYSXHNHeD1eDkUmm64C4Y03J73kMfPtT58_7-wi3Dzuu-8n3xkaCXFVl9uju9FoMO2_s6DAUZUsc3vtdznsWzeE')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111415] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-[#d17a4f] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4c1a00]">
                      House Favorite
                    </span>
                    <h4 className="text-2xl font-semibold text-[#f3efe7]">The Buffalo Trace Old Fashioned</h4>
                  </div>
                  <span className="text-2xl font-semibold text-[#ffb77d]">$18</span>
                </div>
                <p className="max-w-lg text-[#dbc2b0]">
                  Our house hallmark. Small batch bourbon, cedar-smoked maple syrup, black walnut bitters, and a hand-carved ice sphere. Finished with a charred orange zest.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              {signatureCocktails.slice(1).map((drink) => (
                <div key={drink.name} className="border border-[#554336] bg-[#282a2c] p-8">
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <h4 className="text-2xl font-semibold text-[#f3efe7]">{drink.name}</h4>
                    <div className="h-[1px] flex-1 border-b border-dotted border-[#554336]"></div>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">{drink.price}</span>
                  </div>
                  <p className="mb-4 text-[#dbc2b0]">{drink.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {drink.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#111415] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb77d]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="beers" className="mb-24">
          <div className="mb-10 flex items-center gap-4">
            <h3 className="text-3xl font-semibold text-[#ffb77d]">Craft Beers</h3>
            <div className="h-[1px] flex-1 bg-[#554336]"></div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {beers.map((beer) => (
              <div key={beer[0]} className="border border-[#554336] bg-[#282a2c] p-8">
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <h4 className="text-2xl font-semibold text-[#f3efe7]">{beer[0]}</h4>
                  <div className="h-[1px] flex-1 border-b border-dotted border-[#554336]"></div>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">{beer[1]}</span>
                </div>
                <p className="text-[#dbc2b0]">{beer[2]}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="spirits">
          <div className="mb-10 flex items-center gap-4">
            <h3 className="text-3xl font-semibold text-[#ffb77d]">Fine Spirits</h3>
            <div className="h-[1px] flex-1 bg-[#554336]"></div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {spirits.map((spirit) => (
              <div key={spirit[0]} className="border border-[#554336] bg-[#282a2c] p-8">
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <h4 className="text-2xl font-semibold text-[#f3efe7]">{spirit[0]}</h4>
                  <div className="h-[1px] flex-1 border-b border-dotted border-[#554336]"></div>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">{spirit[1]}</span>
                </div>
                <p className="text-[#dbc2b0]">{spirit[2]}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default DrinksPage
