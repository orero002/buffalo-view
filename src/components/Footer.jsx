import { FiInstagram, FiPhone, FiMapPin } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="border-t border-[#554336] bg-[#0c0f10]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-16">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-[#ffb77d]">Buffalo View Bar</h2>
          <p className="max-w-md text-[#dbc2b0]">
            An upscale frontier bar with rare spirits, warm wood interiors, and a modern place for evening rituals.
          </p>
        </div>

        <div className="space-y-3 text-sm text-[#dbc2b0]">
          <div className="flex items-center gap-2">
            <FiMapPin className="text-[#ffb77d]" />
            <span>Kongoni</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-[#ffb77d]" />
            <span>0718529669</span>
          </div>
          <div className="flex items-center gap-2">
            <FiInstagram className="text-[#ffb77d]" />
            <span>@buffaloview</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
