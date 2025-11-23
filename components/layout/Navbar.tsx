import { navContent, navIcons, navLinks } from "@/constants";
import dayjs from "dayjs";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image {...navContent.icon} />
        <p className="font-bold">{navContent.title}</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <Image src={img} alt={`icon-${id}`} width={20} height={20} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
