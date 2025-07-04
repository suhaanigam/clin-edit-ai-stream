import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(true);
  const [form, setForm] = useState({
    username: "",
    identifier: "", // email or phone
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isValidEmail = (email) =>
    /^\S+@\S+\.\S+$/.test(email);

  const isValidPhone = (phone) =>
    /^\+?[0-9]{7,15}$/.test(phone);

  const validateIdentifier = (id) =>
    isValidEmail(id) || isValidPhone(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateIdentifier(form.identifier)) {
      setError("Please enter a valid email or phone number.");
      return;
    }

    try {
      const baseURL = "http://localhost:4000";
      const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login";
      const body = isRegister
        ? { username: form.username, password: form.password, email: isValidEmail(form.identifier) ? form.identifier : undefined, phone: isValidPhone(form.identifier) ? form.identifier : undefined }
        : { identifier: form.identifier, password: form.password };

      const res = await fetch(baseURL + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error occurred");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-24">
        <div className="max-w-md w-full mt-20 p-8 bg-gray-800 rounded-xl text-gray-300 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isRegister ? "Register" : "Sign In"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isRegister && (
              <input
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            )}

            <input
              name="identifier"
              placeholder="Email or Phone Number"
              value={form.identifier}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              name="password"
              type="password"
              placeholder="Password (min 8 chars)"
              value={form.password}
              onChange={handleChange}
              minLength={8}
              required
              className="w-full p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {error && (
              <div className="text-red-500 text-sm font-semibold">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded font-semibold transition"
            >
              {isRegister ? "Register" : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            {isRegister
              ? "Already have an account? "
              : "Don't have an account? "}
            <button
              onClick={() => {
                setError("");
                setIsRegister(!isRegister);
              }}
              className="text-cyan-400 hover:underline font-semibold"
            >
              {isRegister ? "Sign In" : "Register"}
            </button>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
