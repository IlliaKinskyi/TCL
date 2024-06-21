import styles from "styles/header/index.module.scss";

import Logo from "components/elements/Logo/Logo";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AuthModal } from "../auth/authModal/AuthModal";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useModalCart } from "contexts/ModalCartContext";
import { RegisterForm } from "../auth/registerForm/RegisterForm";
import { SearchSvg } from "components/elements/SearchSvg/SearchSvg";
import { ModalCart } from "../ModalShoppingCart/ModalCart/ModalCart";
import { SocialRegister } from "../auth/socialRegister/SocialRegister";

const Header = () => {
  const { showModal, onOpenCartModal } = useModalCart();

  return (
    <header className={styles.header}>
      <Logo color={"#000000"} />
      <nav className={styles.header__nav}>
        <ul>
          <li>Каталог</li>
          <li>Оплата та доставка</li>
          <li>Про нас</li>
        </ul>
      </nav>
      <div className={styles.header__right}>
        <form className={styles.header__right__form}>
          <input
            type="text"
            placeholder="Пошук"
            className={styles.header__right__form__input}
          />
          <SearchSvg />
        </form>
        <div className={styles.header__right__actions}>
          <span className={styles.header__right__actions__switch}>
            <span>UA </span>/ EN
          </span>

          <MdFavoriteBorder className={styles.nav_icon} />
          <MdOutlinePersonOutline className={styles.nav_icon} />
          <MdOutlineShoppingCart
            className={styles.nav_icon}
            onClick={onOpenCartModal}
          />
        </div>
      </div>

      {/* Modal Window For Shopping Cart */}
      {showModal && <ModalCart />}

      {/* Register Modal Window  */}
      <AuthModal>
        <SocialRegister />
        
        <RegisterForm />
      </AuthModal>
    </header>
  );
};

export default Header;
