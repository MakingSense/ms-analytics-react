
import "./Header.css";

const Header = () => {
  return (
    <div className="g-sign">
      <span onClick={() => window.scroll(0, 0)} className="header">
        🎬 Entertainment Hub 🎥
      </span>
    </div>
  );
};
export default Header;