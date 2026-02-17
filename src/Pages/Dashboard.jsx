import { useAuth } from "../Context/useAuth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">
        Welcome {user?.email}
      </h1>

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
}
