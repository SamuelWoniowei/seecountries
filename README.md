# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*


### Links

- Solution URL: [https://github.com/SamuelWoniowei/seecountries](https://github.com/SamuelWoniowei/seecountries)
- Live Site URL: [https://seecountries.netlify.app](https://seecountries.netlify.app)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TailwindCss


### What I learned

I learned about React Context. It made it easier for me to implement Dark mode

```js
import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }} >
      {children}
    </DarkModeContext.Provider>
  );
};

```

## Author

- Website - [seecountries](https://seecountries.netlify.app)
- Frontend Mentor - [@SamuelWoniowei](https://www.frontendmentor.io/profile/SamuelWoniowei)
- Twitter - [@yourusername](https://www.twitter.com/_sammyofficial)

