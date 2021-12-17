import './App.css';
import Header from "./Header/header";
import Main from "./Main/main";
import Skills from "./Skills/skills";
import Projects from "./MyProjects/projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
