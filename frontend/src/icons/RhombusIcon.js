import { Link } from "react-router-dom";

const Rhombus = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "blueviolet",
          height: "100%",
          width: "100%"
        }}
      >
        <svg
          width="100%"
          height="99%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5757 1.42426C11.81 1.18995 12.1899 1.18995 12.4243 1.42426L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42426 12.4243C1.18995 12.19 1.18995 11.8101 1.42426 11.5757L11.5757 1.42426Z"
            stroke="white"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <defs>
          <path fill="#444" d="M0 7h16v1h-16v-1z" id="line" transform="translate(0 5)"></path>
          </defs>

          <text x="50%" alignmentBaseline="middle" fontSize="1.19" strokeWidth="0.1" stroke="#000" textAnchor="middle"><textPath href="#line" ><Link to='/obj-list'>View Object List</Link></textPath></text>

          <circle r="0.7" fill="red">
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M11.5757 1.42426C11.81 1.18995 12.1899 1.18995 12.4243 1.42426L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42426 12.4243C1.18995 12.19 1.18995 11.8101 1.42426 11.5757L11.5757 1.42426Z"
            />
          </circle>
        </svg>
      </div>
    </>
  );
};

export default Rhombus;
