import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Article Preview Component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <nav>
          <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <a className="font-bold text-2xl lg:text-4xl" href="#">
              CHAIR.
            </a>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block">
              <ul className="inline-flex">
                <li>
                  <a className="px-4 hover:text-gray-800" href="/home">
                    Products
                  </a>
                </li>
                <li>
                  <a className="px-4 hover:text-gray-800" href="#">
                    Solutions
                  </a>
                </li>
                <li>
                  <a className="px-4 hover:text-gray-800" href="#">
                    Discover
                  </a>
                </li>
                <li>
                  <a className="px-4 hover:text-gray-800" href="#">
                    Reach
                  </a>
                </li>
                <li>
                  <a
                    className="px-4 bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded"
                    href="#"
                  >
                    Order
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-6 py-4 lg:flex lg:h-128 lg:py-16">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-6xl font-bold mb-2 text-white">
                E-commerce page in under 10 min
              </h2>
            </div>
          </div>
          <div className="container mx-auto lg:flex lg:h-128 lg:py-16 flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
              <h3 className="text-2xl mb-8 text-gray-200">
                Accept QR payments, select local delivery, link with Instagram,
                Tiktok and much more. Free to use under 20 orders per month.
              </h3>
              <Link href="./register">
                <button className="bg-black text-white rounded-full items-center text-center py-4 px-8 shadow-lg uppercase tracking-wider">
                  Register here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
