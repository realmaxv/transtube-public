import wrongLogo from "@/assets/image.png";
import { Link } from "react-router";

function WrongPage() {
  return (
    <main className="flex flex-col items-center  gap-20 justify-center  p-4 motion-delay-400 motion-preset-fade-md motion-duration-1500 ">
      <img
        className="motion-preset-pulse-sm max-w-sm"
        src={wrongLogo}
        alt="transtube-logo"
      />
      <h2 className="text-4xl font-extrabold">
        Sry, diese Seite existiert nicht...
      </h2>
      <Link
        to={"/"}
        className="px-8 py-3 text-white bg-blue-600/90 rounded-full backdrop-blur-sm hover:bg-blue-700 transition-all duration-300"
      >
        Zurück
      </Link>
    </main>
  );
}

export default WrongPage;
