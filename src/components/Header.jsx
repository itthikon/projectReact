import { BsSun } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";

import "./Header.css";

const Header = ({title, theme, setTheme}) => {

    function toggleTheme(){
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
  return (
    <nav>
      <h1>{title}</h1>
      <span onClick={toggleTheme}>
            {theme==="light" ? <BsSun size={25}/> : <RiMoonClearFill size={25}/>}
      </span>
      {/* <button onClick={toggleTheme}>สลับโหมด : {theme}</button> */}
    </nav>
  );
};

export default Header;
