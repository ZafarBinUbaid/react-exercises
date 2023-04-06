import { useState } from "react";
const Header = (props) => {
    const [theme, setTheme] = useState({ name: "light", style: { backgroundColor: 'white' } });
    function themeHandler() {
        if (theme.name == "dark") {
            setTheme({ name: 'light', style: { backgroundColor: 'white' } });
        } else {
            setTheme({ name: 'dark', style: { backgroundColor: 'grey' } });
        }
    }

    return (
        <div style={theme.style}>
          <p>Welcome to baham , an in campus ride sharing service </p>
          <button id = 'themeButton' onClick={themeHandler} >Switch Theme</button>
        </div>
    );

}

const Exercise4 = () => {
    return (
        <Header heading="Welcome to Baham!" slogan="Reduce your carbon footprint ...." />
    );
}

export default Exercise4;   