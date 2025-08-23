import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, ShipWheelIcon, CompassIcon } from "lucide-react";
import Logout from "../hooks/Logout";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const navigate = useNavigate();
  const { logoutMutation } = Logout();

  const goToOnboarding = () => {
    navigate("/onboarding");
  };

  return (
    <nav className="bg-base-200/90 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <div className="flex items-center gap-2 group">
            <ShipWheelIcon className="size-9 text-primary group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 animate-gradient-x tracking-wider">
              Click Safe
            </span>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button
              className="btn btn-ghost btn-circle hover:bg-primary/10 transition-all"
              onClick={() => navigate("/notifications")}
            >
              <BellIcon className="h-6 w-6 text-base-content opacity-70 hover:scale-110 hover:text-primary transition-transform" />
            </button>

            {/* Onboarding Button */}
            <button
              className="btn btn-ghost btn-circle hover:bg-secondary/10 transition-all"
              title="Go to Onboarding"
              onClick={goToOnboarding}
            >
              <CompassIcon className="h-6 w-6 text-primary hover:text-secondary hover:scale-110 transition-transform" />
            </button>

            {/* Avatar */}
            <div
              className="avatar cursor-pointer hover:ring hover:ring-primary hover:ring-offset-2 transition-all duration-300"
              onClick={goToOnboarding}
            >
              <div className="w-9 rounded-full overflow-hidden hover:scale-110 transition-transform">
                <img
                  src={authUser?.profilePic || "/default-avatar.png"}
                  alt="User Avatar"
                />
              </div>
            </div>

            {/* Logout */}
            <button
              className="btn btn-ghost btn-circle hover:bg-error/10 transition-all"
              onClick={logoutMutation}
            >
              <LogOutIcon className="h-6 w-6 text-base-content opacity-70 hover:text-error hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
