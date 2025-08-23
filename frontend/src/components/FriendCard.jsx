import { Link } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/outline";

const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 p-6 flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400 mb-4 flex items-center justify-center bg-gray-800">
        {friend?.profilePic ? (
          <img
            src={friend.profilePic}
            alt={friend.fullName}
            className="w-full h-full object-cover"
          />
        ) : (
          <CameraIcon className="w-10 h-10 text-gray-400" />
        )}
      </div>

      {/* Friend Name */}
      <h3 className="text-lg font-semibold text-white">{friend.fullName}</h3>
      {friend.username && (
        <p className="text-sm text-gray-400">@{friend.username}</p>
      )}

      {/* Message Button */}
      <Link
        to={`/chat/${friend._id}`}
        className="mt-4 w-full px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
      >
        Message
      </Link>
    </div>
  );
};

export default FriendCard;
