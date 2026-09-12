
import { useEffect,useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import type { Technology } from "./types";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies.");
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Stack cleared.");
  };

  return (
    <>
      <Nav />
      <Banner />

      <ToastContainer position="bottom-right" autoClose={2000} />

      <main className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Explore the{" "}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-gray-500 mt-1 mb-8">
          Pick one technology per category to build your ideal stack.
        </p>

        {loading ? (
          <div className="flex justify-center py-24">
            <span className="loading loading-spinner loading-lg text-gray-400" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            <div className="lg:col-span-3">
              <TechGrid technologies={technologies} stack={stack} onAdd={handleAdd} />
            </div>
            <div className="lg:col-span-1">
              <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;