import Document, { Html, Head, Main, NextScript } from "next/document";

function Logo() {
  return (
    <svg
      className="h-8 fill-current inline"
      enable-background="new 0 0 512 512"
      height="512"
      viewBox="0 0 512 512"
      width="32"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="m498.915 262.425c0 137.771-111.686 249.457-249.457 249.457-53.346 0-102.78-16.745-143.335-45.265-15.276-10.743-6.475-40.801-18.965-54.62-6.752-7.471-35.876 2.293-41.694-5.956-28.642-40.607-45.464-90.147-45.464-143.616 0-137.772 111.686-249.457 249.457-249.457s249.458 111.685 249.458 249.457z"
          fill="#eab14d"
        />
        <g>
          <path
            d="m312.367 233.302-31.798 31.809-122.437 122.426-33.551-33.551 122.437-122.426 31.798-31.809z"
            fill="#e7ecf6"
          />
          <path
            d="m195.19 183.525h23.723v209.533h-23.723z"
            fill="#d8e2f1"
            transform="matrix(.707 .707 -.707 .707 264.497 -61.969)"
          />
          <path
            d="m176.451 396.291-70.331 70.331c-23.536-16.555-44.079-37.077-60.654-60.583l70.362-70.362c9.974-9.974 26.129-9.974 36.093 0l24.53 24.52c9.963 9.965 9.963 26.12 0 36.094z"
            fill="#dd5790"
          />
          <path
            d="m173.16 356.917c-9.974-9.974-26.129-9.964-36.083 0l-72.73 72.72c-6.755-7.473-13.07-15.356-18.882-23.598l70.362-70.362c9.964-9.964 26.119-9.974 36.093 0z"
            fill="#c3247d"
          />
          <path
            d="m307.651 228.587c-2.337 1.035-4.849 1.548-7.36 1.548-4.685 0-9.369-1.794-12.937-5.361-5.494-5.495-6.766-13.603-3.824-20.307l-4.715-4.715-31.798 31.809 33.551 33.551 31.798-31.809z"
            fill="#d8e2f1"
          />
          <path
            d="m496.462 80.616-64.96-64.96c-20.717-20.717-54.299-20.717-75.016 0l-111.57 111.57c-20.717 20.717-20.717 54.309 0 75.026l64.95 64.949c20.717 20.717 54.309 20.717 75.026 0l111.57-111.57c20.717-20.717 20.717-54.299 0-75.015zm-222.874 95.599c-4.695 0-9.369-1.784-12.947-5.361-7.145-7.145-7.145-18.738 0-25.883l113.58-113.59c7.155-7.145 18.739-7.145 25.894 0 7.145 7.155 7.145 18.739 0 25.894l-113.59 113.579c-3.568 3.577-8.263 5.361-12.937 5.361zm40.306 40.317c-4.685 0-9.369-1.794-12.937-5.361-7.155-7.155-7.155-18.739 0-25.894l113.58-113.58c7.145-7.145 18.739-7.145 25.883 0 7.145 7.145 7.145 18.739 0 25.883l-113.58 113.59c-3.576 3.568-8.261 5.362-12.946 5.362zm166.843-78.635-113.59 113.58c-3.578 3.567-8.252 5.361-12.947 5.361-4.674 0-9.369-1.794-12.937-5.361-7.145-7.145-7.145-18.739 0-25.883l113.58-113.59c7.155-7.145 18.739-7.145 25.894 0 7.145 7.155 7.145 18.738 0 25.893z"
            fill="#e7ecf6"
          />
          <g fill="#d8e2f1">
            <path d="m440.421 97.581-113.58 113.59c-3.578 3.567-8.262 5.361-12.947 5.361-2.439 0-4.874-.498-7.156-1.468.893 2.1 2.184 4.072 3.898 5.785 3.567 3.567 8.252 5.361 12.937 5.361s9.369-1.794 12.947-5.361l113.58-113.59c7.145-7.145 7.145-18.738 0-25.883-1.712-1.712-3.684-3.002-5.785-3.894 2.829 6.665 1.538 14.666-3.894 20.099z" />
            <path d="m363.88 266.517c4.695 0 9.369-1.794 12.947-5.361l113.59-113.58c7.145-7.155 7.145-18.738 0-25.893-1.714-1.712-3.686-3.001-5.786-3.893 2.831 6.668 1.541 14.666-3.893 20.108l-113.59 113.58c-3.578 3.567-8.252 5.361-12.947 5.361-2.434 0-4.869-.498-7.152-1.468.892 2.101 2.182 4.073 3.894 5.785 3.567 3.567 8.262 5.361 12.937 5.361z" />
            <path d="m254.595 136.905 111.57-111.57c20.717-20.717 54.298-20.717 75.015-.001l-9.678-9.678c-20.717-20.717-54.299-20.717-75.016 0l-111.57 111.57c-20.717 20.717-20.717 54.309 0 75.026l9.679 9.679c-20.717-20.717-20.717-54.309 0-75.026z" />
            <path d="m404.007 37.167c2.83 6.668 1.54 14.666-3.893 20.108l-113.59 113.579c-3.567 3.578-8.262 5.361-12.937 5.361-2.444 0-4.879-.495-7.16-1.464.892 2.099 2.181 4.07 3.892 5.781 3.578 3.578 8.252 5.361 12.947 5.361 4.674 0 9.369-1.783 12.937-5.361l113.59-113.579c7.145-7.155 7.145-18.739 0-25.894-1.714-1.711-3.686-3.001-5.786-3.892z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

function Header() {
  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="toggleColour text-white no-underline hover:no-underline font-bold text-4xl lg:text-4xl"
            href="/">
            <Logo />
            <span
              className="ml-3"
              style={{ fontFamily: "Almendra, 'Source Sans Pro'" }}>
              Banarasi Kitchen
            </span>
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-orange-800 hover:text-gray-900">
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-black font-bold no-underline"
                href="#">
                Active
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#">
                link
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#">
                link
              </a>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
            Action
          </button>
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Almendra:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          className="leading-normal tracking-normal text-white gradient"
          style={{ fontFamily: "Almendra, 'Source Sans Pro', sans-serif" }}>
          <Header />
          <Main />
          <NextScript />
          <script src="scripts/menu-scroll.js" />
          <script src="scripts/nav.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
