const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DB2777] text-xs font-bold text-white">
                DS
              </span>
              <span className="text-base font-bold text-gray-900">
                Dev <span className="text-[#DB2777]">Stack</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex gap-4 text-sm text-gray-500">
              <button type="button" className="hover:text-gray-800">
                GitHub
              </button>
              <button type="button" className="hover:text-gray-800">
                Twitter
              </button>
              <button type="button" className="hover:text-gray-800">
                LinkedIn
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-gray-900">
              PRODUCT
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <button type="button" className="hover:text-gray-800">
                  Home
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-gray-800">
                  Technologies
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-gray-800">
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-gray-900">
              COMPANY
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <button type="button" className="hover:text-gray-800">
                  About
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-gray-800">
                  Contact
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-gray-800">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-gray-900">
              LEGAL
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <button type="button" className="hover:text-gray-800">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-gray-800">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <button type="button" className="hover:text-gray-600">
              Privacy
            </button>
            <button type="button" className="hover:text-gray-600">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
