import Link from "next/link";
import HoverTextTitles from "../custom/HoverTextTitles";

const Welcome = () => {
  return (
    <section id="welcome">
      <HoverTextTitles
        title={"portfolio"}
        subtitle={"Hey I'm Sahan! Welcome to my"}
      />

      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only</p>
        <p className="font-semibold underline">
          <Link
            href={"https://sahansachintha.vercel.app"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Checkout my Mobile Portfolio
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Welcome;
