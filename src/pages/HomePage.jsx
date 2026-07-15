import { useNavigate } from 'react-router-dom'
import heroHome from '../Assets/crew-szCvt1gP2d4-unsplash.jpg'
import heroDrinks from '../Assets/istockphoto-1404412754-1024x1024.jpg'
import heroBooking from '../Assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg'

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <section className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-[#554336]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111415] via-[#111415]/70 to-transparent"></div>
          <img src={heroHome} alt="Buffalo View bar interior" className="hidden h-full w-full object-cover lg:block" />
          <div
            className="block h-full w-full bg-cover bg-center lg:hidden"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZL7KT2hiT0jT167rvjc0bBer1SGwC60HrnQk-vt7kCgI3saNnk18ThD7dZIiVyRiyR2R_eql5tJl4gbaH4WzG5dxX-8KHZlG48eL8dpsiP3Fs30UZlAqnZ_pgIg3fTms2cdGs65FX_N7V6O4YiVY7Jf54xB46Jd4fYtTugH1AfHCWfA63cTnyBeOCPlvnPT6lCzdWcD3HJHDn2mf9aVKcixBu-3Qyqy7An-LNWfaZjmVUy6YxKy2c')",
            }}
          ></div>
          <div className="grain-overlay"></div>
        </div>

        <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 lg:px-16">
          <div className="max-w-2xl">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-[#ffb77d]">
              Est. 1924 • Reimagined 2024
            </span>
            <h2 className="mb-6 text-4xl font-semibold leading-tight text-[#f3efe7] sm:text-5xl lg:text-6xl">
              Where the Wilderness Meets the Glass.
            </h2>
            <p className="mb-10 max-w-lg text-lg leading-8 text-[#dbc2b0]">
              Buffalo View is more than a bar; it’s a modern hearth. We blend rugged heritage with artisanal mixology to create a sanctuary for the discerning soul.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate('/booking')}
                className="flex items-center gap-2 rounded bg-[#ffb77d] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#4d2600] transition-all hover:bg-[#ffca95]"
              >
                Secure a table
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/drinks')}
                className="rounded border-2 border-[#ffb77d] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d] transition-all hover:bg-[#ffb77d]/10"
              >
                View Drink List
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111415] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div
                className="aspect-square border border-[#554336] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmzNSq8zpSF2ITHL1PpJKIPFzMQAFCHn1xksKbbgBGfYSkiAN2bz57PNI6L7BNL5ppuwsODmoZnkp6oaqUvn0uWLd2tYgMCWgKpnFTci1W08K3P8e-ryZbUlJFoz9Cb7zhXQf0nZF4koGksI72mKzNHQMEusfWn6gBnQvoBnCUG3bV4JKhhaSDVuVaKnyPal7hoSXLwZgDG3smzIdEwCMW80IB10W-qfHHlfwWbhmEpRPEE4UJzD6x')",
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 hidden h-48 w-48 border border-[#ffb77d] bg-[#111415] p-2 md:block">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5m5KXY0CPP-iRF2yRK9E89hIVeClfwKaqMn-ek_H8G5zglwdfNdYUGFWrKy-FvccG84crlZQyNzT4qC4QCC4m7WHV_lev0d2T3Z_pOx78vo8YhX-YehbD8HF5-SoOKW1l1V3C80Lh143gGUMXiyYl4DAzowFmsDI_yUHbVzsMJgG96WR_hD7ynSp9rUiRJJvJK5dUYg0SRdT788RfEQ4SUoQ-2FElMdWHgunQO1Gijp6KV-S2vLB4')",
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="material-symbols-outlined text-[#ffb77d]">landscape</span>
                <div className="h-[1px] flex-1 bg-[#554336]"></div>
              </div>
              <h3 className="mb-6 text-3xl font-semibold text-[#f3efe7]">Crafted for the Modern Frontier</h3>
              <p className="mb-6 text-lg leading-8 text-[#dbc2b0]">
                Rooted in the spirit of the untamed wilderness, Buffalo View honors the craftsmanship of the past while pushing the boundaries of modern flavor. Every element of our space—from the reclaimed timber of the bar to the heavy, hand-blown glassware—is chosen to ground you in the physical present.
              </p>
              <p className="mb-8 text-lg leading-8 text-[#dbc2b0]">
                Our mixologists are storytellers, using rare small-batch spirits and locally foraged botanicals to create a menu that is both familiar and revelatory.
              </p>
              <button
                type="button"
                onClick={() => navigate('/drinks')}
                className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]"
              >
                Discover our story
                <span className="material-symbols-outlined">open_in_new</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#191c1e] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-semibold text-[#f3efe7]">The Seasonal Curation</h3>
            <p className="mx-auto max-w-xl text-lg text-[#dbc2b0]">
              Selected signatures that embody the essence of the current lunar cycle.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="group relative overflow-hidden border border-[#554336] bg-[#282a2c] lg:col-span-8 lg:h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKpqTpRW-vA7wMS3yl9dFvOI4uhnFlXrMqk-PIDahr1W_oG3o9Y-2uYFh8o7XeCFG_KZiHLp4YDXJC5eDNhWpKc8pX05E78MRp9tVmghLLtPVdG9PVDqnml3aqyd8iM-W-ttwRQXLBYo4MQcOMMpXBpbT9rVouw1KK7UK4aXUpWBvpYBylSh3IH4fXVkDU1_J0dgnHVZx5Asra6zpRFZloxcxVgLzHaHWC9xjw5sU6cBn9DTIpH9Wj')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="mb-3 inline-block rounded-full bg-[#d17a4f] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4c1a00]">
                      House Signature
                    </span>
                    <h4 className="text-2xl font-semibold text-[#f3efe7]">Smoky Timber Old Fashioned</h4>
                    <p className="mt-2 text-[#dbc2b0]">Hickory-smoked bourbon, maple-infused bitters, charred orange zest.</p>
                  </div>
                  <div className="text-2xl font-semibold text-[#ffb77d]">$18</div>
                </div>
              </div>
            </div>

            <div className="border border-[#554336] bg-[#282a2c] p-8 lg:col-span-4">
              <div className="mb-6 flex items-center gap-4">
                <h4 className="text-2xl font-semibold text-[#f3efe7]">Bramble & Bark</h4>
                <div className="h-[1px] flex-1 border-b border-dotted border-[#554336]"></div>
                <span className="text-[#ffb77d]">$16</span>
              </div>
              <div
                className="mb-6 aspect-square bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDj0i7VHHpRD2CyHl5OHmLRPELmVFhS7toXgWsRZApU2liLrerSoaclB50UnZCzeajyHR2IV0qeuwp5UR1IXsQDo4mcjDeZWHCMlPuApOb1glR1EsbMlBGMlrLoDfCegdgBhuvJU_w4BARzhvHlmt6rj_46qTDd7oKBIH5s0ICu4bHZafRh6TRzAKTprd6z7P6RnoqIOSajUOjQ_W34sVS2OFQji0uliCEhSKmaiMRQoZZIUwNwel1O')",
                }}
              ></div>
              <p className="text-[#dbc2b0]">Wild blackberry gin, spruce-tip reduction, lemon, fresh sage.</p>
            </div>

            <div className="border border-[#554336] bg-[#282a2c] p-8 lg:col-span-4">
              <div className="mb-6 flex items-center gap-4">
                <h4 className="text-2xl font-semibold text-[#f3efe7]">Iron Hearth</h4>
                <div className="h-[1px] flex-1 border-b border-dotted border-[#554336]"></div>
                <span className="text-[#ffb77d]">$17</span>
              </div>
              <p className="mb-6 text-[#dbc2b0]">Peated scotch, honeyed ginger, lemon, and a touch of lapsang souchong.</p>
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHvDifeaD7qf0SpJfT9t0QOdSjJocdflcX7YRvkatq6jl-EHEVnLO7p7UvuBN3Ijfg8YzRCcZM4QsutRBbsssVWnS_T8ZKEFUz7DxBIIauGgTI7yd1H-VX8pf6DxnsVz4KCdb0llsRSeLpVqLKO1CFXvEJOFzGHSJEQ2G68aZBfs5NFfrpeKQHOVT8IPAyq2Iz0UAqNZ8RnqYXEgdsK4k1ZOvtwrUR4xwGzBFyiiK6-DtsXb_AoYmU')",
                }}
              ></div>
            </div>

            <div className="flex items-center justify-center border border-[#554336] bg-[#d97707] p-12 text-center lg:col-span-8">
              <div>
                <h4 className="mb-4 text-3xl font-semibold text-[#432100]">View the Full Archive</h4>
                <p className="mx-auto mb-8 max-w-md text-lg text-[#432100]">
                  Explore over 120 whiskies and 30 house-crafted elixirs designed for the modern explorer.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/drinks')}
                  className="rounded bg-[#432100] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]"
                >
                  Open Spirits Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
