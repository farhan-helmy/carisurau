import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import AvatarMenu from "./AvatarMenu";

const Header = () => {
  const { data: session, status } = useSession();

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
                  <Link href="/" className="font-bold text-white">
                    carisurau
                  </Link>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      {status == "authenticated" ? (
                        <div>
                          <AvatarMenu />
                        </div>
                      ) : (
                        <button
                          onClick={() => void signIn()}
                          className="text-sm font-medium text-white"
                        >
                          Sign in
                        </button>
                      )}
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
