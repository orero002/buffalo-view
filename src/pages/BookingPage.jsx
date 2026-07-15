import { useState } from 'react'
import heroBooking from '../Assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg'
import { supabase } from '../lib/supabase'

function BookingPage() {
  const [selectedTime, setSelectedTime] = useState('19:00')
  const [reservation, setReservation] = useState({
    date: '2026-10-24',
    guests: '2',
    time: '19:00',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveError, setSaveError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSaving(true)
    setSaveError('')

    try {
      const { error } = await supabase.from('reservations').insert([
        {
          date: reservation.date,
          guests: Number(reservation.guests),
          time: reservation.time,
        },
      ])

      if (error) {
        throw error
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Reservation save failed:', error)
      setSaveError('We could not save your reservation yet. Please create the table in Supabase first.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBooking} alt="Booking hero" className="hidden h-full w-full object-cover lg:block" />
          <div
            className="block h-full w-full bg-cover bg-center lg:hidden"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_Qi8TNJWA3ofwHPGJwDXl70RNq3qG9pzAte3_ZFlreet9C1RMCNyvaPFpFFd6RbEqH56bVzMckBvf9MfMEjTyRprKEIS1XqM9L-oQwOxn7D702ceA5pOQuSW1Klhjau5YqVAyLHH8PeBlBobmeFudPTqzHASUiEJWAEFWvb31RhgAm1BnhprgrrBCw7ZIrf-y41bZ1sVFkBjdHLQ4zOp5comtxkMMZhnFHIPt0dEWjoM8-LGr8ph4')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 px-4 text-center sm:px-6">
          <h2 className="mb-3 text-4xl font-semibold text-[#ffb77d] sm:text-5xl">Secure Your Table</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#dbc2b0]">
            Join us at the frontier for an evening of artisanal spirits and culinary heritage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-16">
        <div className="relative overflow-hidden rounded-lg border border-[#554336] bg-[#282a2c] p-8 shadow-2xl sm:p-12">
          {!submitted ? (
            <div>
              <div className="mb-10 text-center">
                <div className="mb-4 flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ffb77d]"></span>
                  <span className="h-2 w-2 rounded-full bg-[#554336]"></span>
                  <span className="h-2 w-2 rounded-full bg-[#554336]"></span>
                </div>
                <h3 className="text-2xl font-semibold text-[#f3efe7]">Reservation Details</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">Select Date</span>
                    <div className="flex items-center border-b border-[#554336] py-3">
                      <input
                        required
                        type="date"
                        value={reservation.date}
                        onChange={(event) => setReservation({ ...reservation, date: event.target.value })}
                        className="w-full bg-transparent text-[#f3efe7] outline-none"
                      />
                      <span className="material-symbols-outlined text-[#dbc2b0]">calendar_today</span>
                    </div>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">Number of Guests</span>
                    <div className="flex items-center border-b border-[#554336] py-3">
                      <select
                        value={reservation.guests}
                        onChange={(event) => setReservation({ ...reservation, guests: event.target.value })}
                        className="w-full bg-transparent text-[#f3efe7] outline-none"
                      >
                        <option value="1" className="bg-[#282a2c]">1 Guest</option>
                        <option value="2" className="bg-[#282a2c]">2 Guests</option>
                        <option value="3" className="bg-[#282a2c]">3 Guests</option>
                        <option value="4" className="bg-[#282a2c]">4 Guests</option>
                        <option value="5" className="bg-[#282a2c]">5 Guests</option>
                        <option value="6" className="bg-[#282a2c]">6+ (Contact us)</option>
                      </select>
                      <span className="material-symbols-outlined text-[#dbc2b0]">group</span>
                    </div>
                  </label>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">Preferred Time</span>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                      {['17:00', '18:30', '19:00', '20:30', '21:00'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => {
                            setSelectedTime(time)
                            setReservation({ ...reservation, time })
                          }}
                          className={`rounded border px-3 py-2 text-sm font-semibold transition-all ${
                            selectedTime === time
                              ? 'border-[#ffb77d] bg-[#ffb77d]/10 text-[#ffb77d]'
                              : 'border-[#554336] text-[#dbc2b0] hover:bg-[#ffb77d]/10 hover:text-[#ffb77d]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#554336]/40 pt-8">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ffb77d] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#4d2600] transition-all hover:bg-[#ffca95] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSaving ? 'Saving Reservation…' : 'Confirm Availability'}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  {saveError ? <p className="mt-3 text-sm text-[#ffb77d]">{saveError}</p> : null}
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#ffb77d]/20">
                <span className="material-symbols-outlined text-5xl text-[#ffb77d]">check_circle</span>
              </div>
              <h3 className="mb-2 text-3xl font-semibold text-[#f3efe7]">Reservation Confirmed</h3>
              <p className="mb-8 text-lg text-[#dbc2b0]">We’ve saved a spot for you by the hearth.</p>
              <div className="mx-auto mb-8 max-w-sm rounded-lg border border-[#554336] bg-[#111415] p-6 text-left">
                <div className="mb-4 flex items-end justify-between gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">Date</span>
                  <div className="h-[1px] flex-1 border-b border-dotted border-[#554336]"></div>
                  <span className="text-lg font-semibold text-[#f3efe7]">{reservation.date}</span>
                </div>
                <div className="mb-4 flex items-end justify-between gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">Time</span>
                  <div className="h-[1px] flex-1 border-b border-dotted border-[#554336]"></div>
                  <span className="text-lg font-semibold text-[#f3efe7]">{reservation.time}</span>
                </div>
                <div className="flex items-end justify-between gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d]">Party</span>
                  <div className="h-[1px] flex-1 border-b border-dotted border-[#554336]"></div>
                  <span className="text-lg font-semibold text-[#f3efe7]">{reservation.guests} Guests</span>
                </div>
              </div>
              <div className="mx-auto flex max-w-sm flex-col gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setReservation({ date: '2026-10-24', guests: '2', time: '19:00' })
                    setSelectedTime('19:00')
                  }}
                  className="rounded-lg border-2 border-[#ffb77d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb77d] transition-all hover:bg-[#ffb77d]/10"
                >
                  Modify Booking
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default BookingPage
