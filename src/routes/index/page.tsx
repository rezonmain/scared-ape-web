import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
            Welcome to scared ape 🦍
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Scared ape is a project of mine, to manage different scrapers, and
            make my life easier by having a central place to see all the data
            that I consult on a daily basis and that I want to be notified about
            when it changes.
          </p>
          <h2 className="text-gray-900 dark:text-white text-3xl md:text-xl font-bold mb-2">
            Why scared ape?
          </h2>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Because it kind of sounds link <em>scrape</em>, and also I tend to
            name all my projects with animal names.
          </p>
          <Link
            to="/scraper"
            className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            See scrapers
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Who am I?
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              Hey I'm <code>rezonmain</code> and I'm a software engineer. If
              you're interested in my other work please check out my portfolio
              website
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://rezonmain.dev"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              My portfolio
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <a
              href="https://github.com/rezonmain/scared-ape"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Code
            </a>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Scared ape is open source
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              All my projects are opens source so people can judge my code
            </p>
            <a
              href="https://github.com/rezonmain/scared-ape"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              See the code
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HomePage };
