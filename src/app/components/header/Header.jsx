import { Link } from "react-router-dom";
import { useDarkMode } from "../../DarkModeContext";


/* eslint-disable react/prop-types */

export const Header = () => {
    const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <div className={`transition ${darkMode ? "dark" : ""}`} >
      <div
        className={`flex flex-row justify-between  py-6 px-4 md:px-14 shadow-md `}
      >
        <Link to={'/'} className="text-sm md:text-2xl font-bold dark:text-white text-darkBlueT" >
          Where in the world?
        </Link>
        <div className="text-sm font-light md:text-lg text-population hover:cursor-pointer">
          {darkMode ? (
            <div className="flex flex-row gap-2">
              <span>
                <ion-icon name="moon" onClick={toggleDarkMode} style={{color: 'white'}}></ion-icon>
                
              </span>
              <span className="dark:text-white text-darkBlueT" onClick={toggleDarkMode} >Light Mode</span>
            </div>
          ) : (
            <div className="flex flex-row gap-2 ">
              <span>
                <ion-icon
                  name="moon-outline"
                  color="white"
                  onClick={toggleDarkMode}
                ></ion-icon>
              </span>

              <span onClick={toggleDarkMode} >Dark Mode</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
