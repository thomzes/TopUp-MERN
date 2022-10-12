import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;
  const classTItle = cx({
    "nav-link": true,
    active: active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTItle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
