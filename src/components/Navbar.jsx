import React from "react";

export default function Navbar() {
  const token = localStorage.getItem("jwt_token");

  if (window.location.pathname === "/your-ticket" && !token) {
    window.location.href = "/login";
    return;
  }

  return (
    <div className="container mx-auto">
      <nav className="fixed top-0 left-0 flex items-center justify-between flex-wrap w-full bg-third-color p-6 z-50">
        <div className="hidden lg:flex items-center flex-shrink-0 text-white mr-6">
          <a href="/">
            <span className="font-semibold text-xl tracking-tight uppercase">
              Idol Handshake
            </span>
          </a>
        </div>

        <button className="block md:hidden">
          <span className="sr-only"> Navigation Menu</span>
          <span aria-hidden="true">
            <svg
              className="w-6 fill-current text-white"
              viewBox="0 0 100 80"
              width="40"
              height="40"
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </span>
        </button>
        <div
          className="hidden md:flex items-center px-2 py-1 bg-second-color rounded-full"
          id="navigation"
        >
          <ul className="text-white w-full font-bold flex flex-wrap py-3">
            <li>
              <a
                href="/"
                className="px-8 py-3 hover:bg-fouth-color rounded-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/your-ticket"
                className="px-8 py-3 hover:bg-fouth-color rounded-full"
              >
                Your Ticket
              </a>
            </li>
            <li>
              <a
                href="https://github.com/deviate-team"
                target="_blank"
                className="px-8 py-3 hover:bg-fouth-color rounded-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          {token ? (
            <button
              className="p-1 rounded mr-5"
              onClick={() => {
                localStorage.removeItem("jwt_token");
                window.location.reload();
              }}
            >
              <a
                href="/"
                className="inline-block text-xl px-4 py-2 leading-none text-white mt-0 font-bold hover:text-second-color"
              >
                Logout
              </a>
            </button>
          ) : (
            <button className="p-1 rounded mr-5">
              <a
                href="/login"
                className="inline-block text-xl px-4 py-2 leading-none text-white mt-0 font-bold hover:text-second-color"
              >
                Login
              </a>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
