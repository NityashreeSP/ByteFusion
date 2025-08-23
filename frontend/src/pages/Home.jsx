import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  getOutgoingFriendReqs,
  getRecommendedUsers,
  getUserFriends,
  sendFriendRequest,
} from "../lib/api";
import { Link } from "react-router-dom";
import { CheckCircleIcon, MapPinIcon, UserPlusIcon, UsersIcon } from "lucide-react";
import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";
import { CameraIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer"; 

const HomePage = () => {
  const queryClient = useQueryClient();
  const [outgoingRequestsIds, setOutgoingRequestsIds] = useState(new Set());

  // ✅ Fetch Friends
  const {
    data: friends = [],
    isLoading: loadingFriends,
    isError: errorFriends,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
    retry: false,
  });

  // ✅ Fetch Recommended Users
  const {
    data: recommendedUsers = [],
    isLoading: loadingUsers,
    isError: errorUsers,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getRecommendedUsers,
    retry: false,
  });

  // ✅ Fetch Outgoing Friend Requests
  const { data: outgoingFriendReqs = [] } = useQuery({
    queryKey: ["outgoingFriendReqs"],
    queryFn: getOutgoingFriendReqs,
    retry: false,
  });

  // ✅ Mutation for sending friend request
  const { mutate: sendRequestMutation, isPending } = useMutation({
    mutationFn: sendFriendRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["outgoingFriendReqs"] });
    },
  });

  // ✅ Update outgoing request IDs
  useEffect(() => {
    const outgoingIds = new Set();
    if (outgoingFriendReqs.length > 0) {
      outgoingFriendReqs.forEach((req) => outgoingIds.add(req.recipient._id));
      setOutgoingRequestsIds(outgoingIds);
    }
  }, [outgoingFriendReqs]);

  // ✅ Error Handling
  if (errorFriends || errorUsers) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Failed to load data</h2>
        <p className="text-gray-500 mb-4">Please try logging in again.</p>
        <Link to="/login" className="btn btn-primary">Go to Login</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 lg:p-10">
      <div className="container mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Your Friends
          </h2>
          <Link
            to="/notifications"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-400/50 font-semibold text-blue transition-all duration-300"
          >
            <UsersIcon className="size-5" />
            Friend Requests
          </Link>
        </div>

        {/* Friends List */}
        {loadingFriends ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : friends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {friends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        )}

        {/* Recommended Users */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              Meet New Learners
            </h2>
            <p className="text-gray-400">
              Discover perfect language exchange partners based on your profile
            </p>
          </div>

          {loadingUsers ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg" />
            </div>
          ) : recommendedUsers.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-md p-6 text-center rounded-2xl border border-gray-700 shadow-md">
              <h3 className="font-semibold text-lg mb-2">No recommendations available</h3>
              <p className="text-gray-400">
                Check back later for new language partners!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedUsers.map((user) => {
                const hasRequestBeenSent = outgoingRequestsIds.has(user._id);

                return (
                  <div
                    key={user._id}
                    className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 space-y-4">
                      {/* Avatar */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 flex items-center justify-center bg-gray-800">
                          {user?.profilePic ? (
                            <img
                              src={user.profilePic}
                              alt={user.fullName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <CameraIcon className="w-8 h-8 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{user.fullName || "Unknown User"}</h3>
                          {user.location && (
                            <div className="flex items-center text-sm text-blue-400 mt-1">
                              <MapPinIcon className="w-4 h-4 mr-1" />
                              {user.location}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bio */}
                      {user.bio && <p className="text-blue-300 text-sm">{user.bio}</p>}

                      {/* Action */}
                      <button
                        type="button"
                        className={`w-full px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 ${
                          hasRequestBeenSent
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-400/50"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sendRequestMutation(user._id);
                        }}
                        disabled={hasRequestBeenSent || isPending}
                      >
                        {hasRequestBeenSent ? (
                          <div className="flex items-center justify-center gap-2">
                            <CheckCircleIcon className="w-5 h-5" />
                            Request Sent
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <UserPlusIcon className="w-5 h-5" />
                            Send Friend Request
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
