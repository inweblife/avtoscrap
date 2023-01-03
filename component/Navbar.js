import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div>
        <h3 className="title">Коли за скрап</h3>
      </div>
      <div>
        <ul className="menu_list">
          <li>
            <Link href="/">Начало</Link> |
          </li>
          <li>
            <Link href="/about">За нас</Link> |
          </li>
          <li>
            <Link href="/services">Услуги</Link> |
          </li>
          <li>
            <Link href="/contact">Контакти</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
