import React from "react";
import './index.css';
import Roc from './Roc.png';
import Theme from './cloud.png';


export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTheme: "bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400", // Default color 
    };
  }

  getThemeClass(theme) {
    switch (theme) {
      case "blue":
        return "from-blue-800 via-blue-600 to-blue-400";
      case "green":
        return "from-green-800 via-green-600 to-green-400";
      case "red":
        return "from-red-800 via-red-600 to-red-400";
      case "purple":
        return "from-purple-800 via-purple-600 to-purple-400";
        case "orange":
          return "from-orange-800 via-orange-600 to-orange-400";
          case "gray":
            return "from-gray-800 via-gray-600 to-gray-400";
      default:
        return "from-gray-800 via-gray-600 to-gray-400"; // Default theme
    }
  }

  handleThemeChange = (theme) => {
    this.setState({ selectedTheme: theme });
  };
  
  render() {
    const { selectedTheme } = this.state;
    const colorThemes = ["blue", "green", "red", "purple","orange","gray"];

    return (
      <div className={`bg-gradient-to-r ${this.getThemeClass(selectedTheme)} text-white min-h-screen`}>
        <nav className="flex justify-between items-center py-4 px-8">
          <div className="flex items-center space-x-4">
            <FlagIcon className="text-yellow-500 h-8 w-8" />
            <button className={`text-sm font-semibold hover:text-yellow-500 transition duration-300 ${selectedTheme !== 'gray' ? 'border-b-2 border-gray-800' : ''}`}>
              Home
            </button>
            <button className={`text-sm font-semibold hover:text-yellow-500 transition duration-300 ${selectedTheme !== 'gray' ? 'border-b-2 border-gray-800' : ''}`}>
              Documentation
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-gray-800 p-1 flex space-x-4">
              {colorThemes.map((theme) => (
                <button
                  key={theme}
                  className={`text-sm font-semibold hover:text-yellow-500 transition duration-300`}
                  onClick={() => this.handleThemeChange(theme)}
                >
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${this.getThemeClass(theme)}`} />
                </button>
              ))}
            </div>
            <img
              alt="Theme icon"
              className="h-[30px] w-[30px] rounded-3xl"
              src={Theme}
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
            <button className={`bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 ${selectedTheme !== 'gray' ? 'border border-yellow-500' : ''}`}>
              Purchase now
            </button>
          </div>
        </nav>
        <header className="px-8 py-16 border-b-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="md:mr-12">
              <h1 className="text-5xl font-extrabold leading-tight mb-4">Unlock the Future with Webbee</h1>
              <p className="text-lg mb-6">
                Elevate your product to new heights with Webbee. Modern design, powerful features, and time-saving efficiency.
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 border border-yellow-500">
                  Purchase now
                </button>
                <button className="bg-transparent text-yellow-500 px-6 py-3 rounded-md border hover:bg-gray-800 border-yellow-500 transition duration-300">
                  View documentation
                </button>
              </div>
            </div>
            <div className="ml-24">
            <div className="relative">
               <img
                alt="Rocket illustration"
                className="h-[337px] w-[400px] rounded-3xl"
                height="400"
                src={Roc}
                style={{
                aspectRatio: "400/400",
                objectFit: "cover",
           }}
               width="400"
          />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50 rounded-3xl"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-4xl font-extrabold text-white"> </h2>
    </div>
  </div>
          </div>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pt-10 pb-20">
          {featureItems.map((item, index) => (
            <FeatureItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              themeClass={this.getThemeClass(selectedTheme)}
            />
          ))}
        </section>
      </div>
    );
  }
}



const FeatureItem = ({ icon, title, description, themeClass }) => (
  <div className={`flex flex-col items-center space-y-4 ${themeClass} p-6 rounded-lg`}>
    {icon({ className: "text-yellow-500 h-12 w-12" })}
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-center">{description}</p>
  </div>
);

const featureItems = [
  {
    icon: CogIcon,
    title: "Built for Developers",
    description: "Webbee is crafted to simplify your life. It offers variables, build tooling, documentation, and reusable components.",
  },
  {
    icon: LayersIcon,
    title: "Modern Design Approach",
    description: "Designed following the latest trends, Webbee provides a modern, minimal, and beautiful user experience.",
  },
  {
    icon: FileTextIcon,
    title: "Extensive Documentation",
    description: "Comprehensive documentation for components and tools, ensuring you never have to reverse engineer anything.",
  },
]


function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function LayersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}