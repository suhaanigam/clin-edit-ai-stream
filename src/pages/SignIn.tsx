import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SignIn = () => {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) return setError(data.error);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (err) {
      setError("Login failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col text-gray-300">
      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-24">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-10 rounded-xl w-full max-w-lg space-y-6 shadow-lg"
        >
          <h1 className="text-3xl font-bold text-center">Sign In</h1>

          <input
            name="identifier"
            placeholder="Email or Phone"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
          >
            Sign In
          </Button>

          <p className="text-sm text-center text-gray-400">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-cyan-400 hover:underline"
            >
              Register
            </button>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default SignIn;
