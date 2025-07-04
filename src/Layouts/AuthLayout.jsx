import { Outlet } from "react-router";
import BrandLogo from "../Components/SharedComponents/BrandLogo";

const AuthLayout = () => {
  return (
    <main className="w-full flex">
      <div className="fixed lg:w-1/2 flex-1 hidden items-center justify-center h-screen bg-blue-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <BrandLogo />
          <div className=" mt-10 space-y-3 text-center">
            <h3 className="text-white text-3xl font-bold">
              Your World of Knowledge, at Your Fingertips
            </h3>
            <p className="text-gray-300">
              Your ultimate platform for seamless course discovery, enrollment,
              and skill mastery. Your learning journey starts here.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center -space-x-2 overflow-hidden ">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <p className="text-sm text-gray-400 font-medium translate-x-5">
                  Join 5.000+ users
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="hidden lg:block lg:w-1/2"></div>
      <div className=" lg:w-1/2 mx-auto overflow-y-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
