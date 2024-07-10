import "./NewHeader.scss";
import PropTypes from "prop-types";
import Cart from "../Cart/Cart";

function NewHeader({
  cartItems,
  showCart,
  toggleCartShow,
  toggleNavShow,
  closeCart,
  deleteFromCart,
  isCheckOutPage
}) {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo-container">
          <img src="/icons/logo.svg" alt="Logo" className="header__logo" />
        </div>
        <form className="header__form form">
          <div className="form__button">
            <img src="/icons/icon-search.svg" />
          </div>
          <input type="text" className="form__input" placeholder="Search" />
        </form>
      </div>

      <div className="header__icon-container">
        <div
          className="header__icon header__icon--big"
          onClick={toggleCartShow}
        >
          <img
            style={isCheckOutPage && { display: "none" }}
            src="/icons/icon-cart-added.svg"
            alt="Icon-cart-added"
          />
        </div>
        <div className="header__icon header__search">
          <img src="/icons/icon-search.svg" alt="Icon-search" />
        </div>
        <div
          className="header__icon header__icon--small"
          onClick={toggleCartShow}
        >
          <img
            style={isCheckOutPage && { display: "none" }}
            src="/icons/icon-cart-small.svg"
            alt="Icon-cart-added"
          />
        </div>
        <div onClick={toggleNavShow}>
          <img
            className="header__icon-menu"
            src="/icons/icon-menu.svg"
            alt="Icon-menu"
          />
        </div>
      </div>
      {/* Conditionally render the showCart */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          close={closeCart}
          deleteFromCart={deleteFromCart}
        />
      )}
    </header>
  );
}

NewHeader.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  showCart: PropTypes.bool.isRequired,
  toggleCartShow: PropTypes.func.isRequired,
  toggleNavShow: PropTypes.func.isRequired,
  closeCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  isCheckOutPage: PropTypes.bool
};

export default NewHeader;
