import React, { useState } from "react";

function Header(){
    const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick({onDarkModeClick}) {
    setIsDarkMode((isDarkMode) => !isDarkMode);
}

return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      </div>
);
}



export default Header;