import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}

          {/* Secondary navigation */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <div className="font-light text-white">carisurau</div>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  {/* Logo (lg-) */}
                  <div className="font-bold text-white">carisurau</div>

                  <div className="flex flex-1 items-center justify-end">
                    <Link
                      href="#"
                      className="hidden text-sm font-medium text-white lg:block"
                    >
                      Sign in
                    </Link>

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      <Link
                        href="#"
                        className="text-sm font-medium text-white lg:hidden "
                      >
                        Sign in
                      </Link>
                      <a href="#" className="p-2 text-white lg:hidden">
                        <span className="sr-only">Help</span>
                        <QuestionMarkCircleIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        href="#"
                        className="hidden text-sm font-medium text-white lg:block"
                      >
                        Help
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
