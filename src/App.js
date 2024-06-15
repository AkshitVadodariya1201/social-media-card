import "./App.css";
import Card from "./components/Card";

function App() {
  const userData = {
    name: "Akshit Vadodariya",
    location: "Ahmedabad, Gujarat",
    bio: "I am a full stack developer!",
    avatar:
      "https://avatars.githubusercontent.com/u/108290138?s=400&u=3ff00360b58cbd5fe2babec82fe0fe8c37a5405a&v=4",
  };

  const socialLinks = [
    {
      title: "GitHub",
      url: "https://github.com/AkshitVadodariya1201",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/akshit-vadodariya-2a1322201/",
    },
    {
      title: "X",
      url: "https://x.com/Akshit_Patel_12",
    },
    {
      title: "Frontend Mentor",
      url: "https://www.frontendmentor.io/profile/AkshitVadodariya1201",
    },
  ];
  return (
    <div className="App">
      <Card data={userData} socialLinks={socialLinks} />
    </div>
  );
}

export default App;
