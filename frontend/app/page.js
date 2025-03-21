import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Watchtower Home
          </h1>
        </div>
      </header>

      <main>
        <div className="bg-slate-200 mx-8 my-4 max-w-7xl px-4 py-6 sm:px-6 lg:px-8 rounded-lg">
          <p>
            Welcome to Watchtower. This is my version of a central dashboard
            system that is used to access and update other necessary
            sub-systems.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Stats />
        </div>
      </main>
    </div>
  );
}
