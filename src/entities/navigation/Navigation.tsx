import { Link } from "react-router-dom";
import { navigation } from "./config/config";
import { useState } from "react";

type TypeNavigation = {
  id: number;
  name: string;
  path: string;
};

export default function Navigation() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list" style={{ transition: "all ease 0.5s" }}>
        {navigation.map((link: TypeNavigation) => (
          <li
            className={`header__link ${
              active === link.id ? "header__link_active" : ""
            }`}
            key={link.id}
          >
            <Link to={link.path} onClick={() => setActive(link.id)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
