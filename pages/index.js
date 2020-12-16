import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Hero() {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/*<!--Left Col-->*/}
        <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Food for the soul
          </h1>
          <p className="leading-normal text-2xl mb-8">Some other words ....</p>

          <Link href="/menu">
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              Our Menu
            </button>
          </Link>
        </div>
        {/*<!--Right Col-->*/}
        <div className="w-full md:w-2/5 py-6 text-center">
          <svg
            className="w-full md:w-4/5 z-50"
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg">
            <g id="g4">
              <path
                d="M 512,256 C 512,397.385 397.385,512 256,512 L 46.417,403.044 C 17.17,361.436 0,310.723 0,256 0,174.501 38.084,101.896 97.427,55.012 123.489,34.422 186.487,9.55 186.487,9.55 208.591,3.328 231.907,0 256,0 397.385,0 512,114.615 512,256 Z"
                fill="#97d729"
                id="path2"
              />
            </g>
            <path
              d="m 146.939,253.991 h 53.027 v 85.9 h -53.027 z"
              fill="#ff965a"
              id="path6"
            />
            <path
              d="M 244.476,331.185 H 102.43 c -30.929,0 -56.002,25.073 -56.002,56.002 v 15.85 C 92.744,468.93 169.338,512 256,512 c 15.172,0 30.032,-1.329 44.478,-3.86 V 387.187 c 0,-30.929 -25.073,-56.002 -56.002,-56.002 z"
              fill="#ffffff"
              id="path8"
            />
            <path
              d="M 244.476,331.185 H 212.867 V 508.378 C 226.89,510.757 241.299,512 256,512 c 15.172,0 30.032,-1.329 44.478,-3.86 V 387.187 c 0,-30.929 -25.073,-56.002 -56.002,-56.002 z"
              fill="#e1faff"
              id="path10"
            />
            <path
              d="M 123.276,331.185 H 102.43 c -30.929,0 -56.002,25.073 -56.002,56.002 v 15.85 c 6.39,9.091 13.359,17.745 20.849,25.913 v -41.763 c -0.001,-30.928 25.071,-56.001 55.999,-56.002 z"
              fill="#e1faff"
              id="path12"
            />
            <path
              d="m 135.281,319.902 h 76.925 v 17.088 h -76.925 z"
              fill="#ffffff"
              id="path14"
            />
            <g fill="#373c41" id="g36">
              <g id="g20">
                <circle cx="151.702" cy="362.655" r="7.9899998" id="circle16" />
                <circle
                  cx="195.85201"
                  cy="362.655"
                  r="7.9899998"
                  id="circle18"
                />
              </g>
              <g id="g26">
                <circle
                  cx="151.702"
                  cy="415.52701"
                  r="7.9899998"
                  id="circle22"
                />
                <circle
                  cx="195.85201"
                  cy="415.52701"
                  r="7.9899998"
                  id="circle24"
                />
              </g>
              <g id="g32">
                <circle
                  cx="151.702"
                  cy="468.39899"
                  r="7.9899998"
                  id="circle28"
                />
                <circle
                  cx="195.85201"
                  cy="468.39899"
                  r="7.9899998"
                  id="circle30"
                />
              </g>
              <path
                d="m 230.333,401.267 h 36.788 v 15.98 h -36.788 z"
                id="path34"
              />
            </g>
            <g id="g70">
              <g id="g40">
                <circle
                  cx="341.91101"
                  cy="352.12601"
                  fill="#73c8f0"
                  r="9.3940001"
                  id="circle38"
                />
              </g>
              <g id="g44">
                <path
                  d="M 462.785,502.877 C 461.051,508.311 456.002,512 450.298,512 H 233.524 c -5.704,0 -10.753,-3.689 -12.487,-9.123 l -4.403,-13.796 h 250.554 z"
                  fill="#41b4e6"
                  id="path42"
                />
              </g>
              <g id="g48">
                <path
                  d="m 256.563,502.877 -4.403,-13.796 h -35.527 l 4.403,13.796 c 1.734,5.434 6.783,9.123 12.487,9.123 h 35.527 c -5.703,0 -10.753,-3.689 -12.487,-9.123 z"
                  fill="#0091c8"
                  id="path46"
                />
              </g>
              <g id="g52">
                <path
                  d="m 342.855,358.884 c -71.907,0 -130.198,58.292 -130.198,130.198 h 260.396 c 0,-71.907 -58.291,-130.198 -130.198,-130.198 z"
                  fill="#afe6ff"
                  id="path50"
                />
              </g>
              <g id="g56">
                <path
                  d="m 367.193,392.689 c 28.548,22.431 46.884,57.271 46.884,96.393 H 454.5 c 0,-50.271 -38.297,-91.594 -87.307,-96.393 z"
                  fill="#d2f0ff"
                  id="path54"
                />
              </g>
              <g id="g60">
                <path
                  d="m 362.708,360.388 c -6.473,-0.99 -13.103,-1.504 -19.853,-1.504 -71.907,0 -130.198,58.292 -130.198,130.198 h 39.706 c 0,-65.157 47.861,-119.134 110.345,-128.694 z"
                  fill="#73c8f0"
                  id="path58"
                />
              </g>
              <g id="g64">
                <path
                  d="m 479.323,489.082 c 0,3.463 -2.807,6.269 -6.269,6.269 H 212.657 c -3.462,0 -6.269,-2.807 -6.269,-6.269 0,-3.463 2.807,-6.269 6.269,-6.269 h 260.396 c 3.463,0 6.27,2.806 6.27,6.269 z"
                  fill="#73c8f0"
                  id="path62"
                />
              </g>
              <g id="g68">
                <path
                  d="m 289.151,495.351 h -76.494 c -3.462,0 -6.269,-2.807 -6.269,-6.269 0,-3.462 2.807,-6.269 6.269,-6.269 h 76.494 c 3.462,0 6.269,2.807 6.269,6.269 10e-4,3.462 -2.807,6.269 -6.269,6.269 z"
                  fill="#afe6ff"
                  id="path66"
                />
              </g>
            </g>
            <g id="g78">
              <path
                d="m 315.522,230.213 5.8,12.611 13.786,1.619 c 4.035,0.474 5.656,5.463 2.67,8.219 l -10.201,9.413 2.72,13.611 c 0.796,3.984 -3.448,7.068 -6.991,5.079 l -12.105,-6.793 -12.105,6.793 c -3.543,1.989 -7.787,-1.095 -6.991,-5.079 l 2.72,-13.611 -10.201,-9.413 c -2.986,-2.755 -1.365,-7.745 2.67,-8.219 l 13.786,-1.619 5.8,-12.611 c 1.698,-3.692 6.944,-3.692 8.642,0 z"
                fill="#fee45a"
                id="path72"
              />
              <g id="g76">
                <path
                  d="m 318.203,277.791 -0.098,0.055 5.201,2.919 c 0.281,0.158 0.566,0.272 0.853,0.368 z"
                  fill="#faf58c"
                  id="path74"
                />
              </g>
            </g>
            <g id="g86">
              <path
                d="m 390.509,230.211 5.8,12.611 13.786,1.619 c 4.035,0.474 5.656,5.463 2.67,8.219 l -10.201,9.413 2.72,13.611 c 0.796,3.984 -3.448,7.068 -6.991,5.079 l -12.105,-6.793 -12.105,6.793 c -3.543,1.989 -7.787,-1.095 -6.991,-5.079 l 2.72,-13.611 -10.201,-9.413 c -2.986,-2.755 -1.365,-7.745 2.67,-8.219 l 13.786,-1.619 5.8,-12.611 c 1.699,-3.692 6.944,-3.692 8.642,0 z"
                fill="#fee45a"
                id="path80"
              />
              <g id="g84">
                <path
                  d="m 393.19,277.789 -0.098,0.055 5.201,2.919 c 0.281,0.158 0.566,0.272 0.853,0.368 z"
                  fill="#faf58c"
                  id="path82"
                />
              </g>
            </g>
            <g id="g94">
              <path
                d="m 353.016,155.336 5.8,12.611 13.786,1.619 c 4.035,0.474 5.656,5.463 2.67,8.219 l -10.201,9.413 2.72,13.611 c 0.796,3.984 -3.448,7.068 -6.991,5.079 l -12.105,-6.793 -12.105,6.793 c -3.543,1.989 -7.787,-1.095 -6.991,-5.079 l 2.72,-13.611 -10.201,-9.413 c -2.986,-2.755 -1.365,-7.745 2.67,-8.219 l 13.786,-1.619 5.8,-12.611 c 1.698,-3.691 6.944,-3.691 8.642,0 z"
                fill="#fee45a"
                id="path88"
              />
              <g id="g92">
                <path
                  d="m 355.697,202.915 -0.098,0.055 5.201,2.919 c 0.281,0.158 0.566,0.272 0.853,0.368 z"
                  fill="#faf58c"
                  id="path90"
                />
              </g>
            </g>
            <g id="g102">
              <path
                d="m 428.003,155.334 5.8,12.611 13.786,1.619 c 4.035,0.474 5.656,5.463 2.67,8.219 l -10.201,9.413 2.72,13.611 c 0.796,3.984 -3.448,7.068 -6.991,5.079 l -12.105,-6.793 -12.105,6.793 c -3.543,1.989 -7.787,-1.095 -6.991,-5.079 l 2.72,-13.611 -10.201,-9.413 c -2.986,-2.755 -1.365,-7.745 2.67,-8.219 l 13.786,-1.619 5.8,-12.611 c 1.698,-3.691 6.944,-3.691 8.642,0 z"
                fill="#fee45a"
                id="path96"
              />
              <g id="g100">
                <path
                  d="m 430.684,202.912 -0.098,0.055 5.201,2.919 c 0.281,0.158 0.566,0.272 0.853,0.368 z"
                  fill="#faf58c"
                  id="path98"
                />
              </g>
            </g>
            <g id="g110">
              <path
                d="m 465.496,230.208 5.8,12.611 13.786,1.619 c 4.035,0.474 5.656,5.463 2.67,8.219 l -10.201,9.413 2.72,13.611 c 0.796,3.984 -3.448,7.068 -6.991,5.079 l -12.105,-6.793 -12.105,6.793 c -3.543,1.989 -7.787,-1.095 -6.991,-5.079 l 2.72,-13.611 -10.201,-9.413 c -2.986,-2.755 -1.365,-7.745 2.67,-8.219 l 13.786,-1.619 5.8,-12.611 c 1.699,-3.691 6.944,-3.691 8.642,0 z"
                fill="#fee45a"
                id="path104"
              />
              <g id="g108">
                <path
                  d="m 468.177,277.787 -0.098,0.055 5.201,2.919 c 0.281,0.158 0.566,0.272 0.853,0.368 z"
                  fill="#faf58c"
                  id="path106"
                />
              </g>
            </g>
            <g id="g114">
              <path
                d="m 173.453,305.96 c -41.984,0 -76.018,-34.035 -76.018,-76.018 v -76.018 h 152.037 v 76.018 c -0.001,41.984 -34.035,76.018 -76.019,76.018 z"
                fill="#ffbe82"
                id="path112"
              />
            </g>
            <g id="g118">
              <path
                d="M 112.063,229.942 V 153.924 H 97.435 v 76.018 c 0,41.984 34.035,76.018 76.018,76.018 2.448,0 4.865,-0.132 7.253,-0.362 -38.522,-3.71 -68.643,-36.161 -68.643,-75.656 z"
                fill="#ff965a"
                id="path116"
              />
            </g>
            <g id="g122">
              <path
                d="m 97.435,120.819 h 152.037 v 16.552 H 97.435 Z"
                fill="#e1faff"
                id="path120"
              />
            </g>
            <g id="g126">
              <path
                d="m 249.471,219.563 v -44.742 c 9.747,0 17.649,7.902 17.649,17.649 v 9.444 c 0,9.748 -7.901,17.649 -17.649,17.649 z"
                fill="#ff965a"
                id="path124"
              />
            </g>
            <g id="g130">
              <path
                d="m 97.435,219.563 v -44.742 c -9.747,0 -17.649,7.902 -17.649,17.649 v 9.444 c 0,9.748 7.901,17.649 17.649,17.649 z"
                fill="#ff965a"
                id="path128"
              />
            </g>
            <path
              d="m 97.435,120.819 v 33.104 H 249.472 V 120.819 14.629 L 224.132,4.18 198.793,14.629 186.492,9.556 c -32.836,9.243 -62.995,24.87 -89.057,45.459 z"
              fill="#ffffff"
              id="path132"
            />
            <path
              d="m 122.774,37.362 v 83.457 h 25.339 V 23.797 c -8.722,4.06 -17.183,8.585 -25.339,13.565 z"
              fill="#e1faff"
              id="path134"
            />
            <path
              d="m 173.453,120.819 h 25.339 V 14.629 L 186.491,9.556 c -4.395,1.237 -8.742,2.587 -13.038,4.05 z"
              fill="#e1faff"
              id="path136"
            />
            <g id="g140">
              <path
                d="M 249.471,14.629 224.132,4.18 v 116.639 h 25.339 z"
                fill="#e1faff"
                id="path138"
              />
            </g>
            <g id="g144">
              <path
                d="m 147.199,210.159 c -3.462,0 -6.269,-2.807 -6.269,-6.269 v -17.146 c 0,-3.462 2.807,-6.269 6.269,-6.269 3.462,0 6.269,2.807 6.269,6.269 v 17.146 c 0,3.462 -2.807,6.269 -6.269,6.269 z"
                fill="#373c41"
                id="path142"
              />
            </g>
            <g id="g148">
              <path
                d="m 198.399,210.159 c -3.462,0 -6.269,-2.807 -6.269,-6.269 v -17.146 c 0,-3.462 2.807,-6.269 6.269,-6.269 3.462,0 6.269,2.807 6.269,6.269 v 17.146 c 0,3.462 -2.807,6.269 -6.269,6.269 z"
                fill="#373c41"
                id="path146"
              />
            </g>
            <g id="g154">
              <g id="g152">
                <path
                  d="m 155.459,177.339 h -18.284 c -3.462,0 -6.269,-2.807 -6.269,-6.269 0,-3.462 2.807,-6.269 6.269,-6.269 h 18.284 c 3.462,0 6.269,2.807 6.269,6.269 0.001,3.462 -2.806,6.269 -6.269,6.269 z"
                  fill="#965028"
                  id="path150"
                />
              </g>
            </g>
            <g id="g160">
              <g id="g158">
                <path
                  d="M 207.704,177.339 H 189.42 c -3.462,0 -6.269,-2.807 -6.269,-6.269 0,-3.462 2.807,-6.269 6.269,-6.269 h 18.284 c 3.462,0 6.269,2.807 6.269,6.269 0,3.462 -2.806,6.269 -6.269,6.269 z"
                  fill="#965028"
                  id="path156"
                />
              </g>
            </g>
            <g id="g164">
              <path
                d="m 154.893,244.006 c 0,10.25 8.309,18.56 18.559,18.56 10.25,0 18.56,-8.309 18.56,-18.56 z"
                fill="#ffffff"
                id="path162"
              />
            </g>
            <g id="g168">
              <path
                d="m 163.295,219.857 c -1.559,5.492 1.274,11.474 6.69,13.277 1.09,0.363 2.256,0.559 3.468,0.559 1.212,0 2.378,-0.196 3.468,-0.559 5.417,-1.803 8.249,-7.786 6.69,-13.277 l -7.601,-26.786 c -0.731,-2.576 -4.383,-2.576 -5.114,0 z"
                fill="#ff965a"
                id="path166"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function WaveTopSvg() {
  return (
    <div className="relative -mt-12 lg:-mt-24">
      <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="#FFFFFF"
            fillRule="nonzero">
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"></path>
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4"
              opacity="0.200000003"></path>
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="#FFFFFF"
            fillRule="nonzero">
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

function WaveBottomSvg() {
  // Change the colour #f8fafc to match the previous section colour
  return (
    <svg
      className="wave-top"
      viewBox="0 0 1439 147"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
          <g className="wave" fill="#f8fafc">
            <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <WaveTopSvg />

      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Other things
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                <Link href="/accomodation">Accomodation</Link>
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Office Catering
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                <Link href="/events">Events</Link>
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Events / Parties
                </h3>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveBottomSvg />

      <section className="container mx-auto text-center py-6 mb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Call Us
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 className="my-4 text-3xl leading-tight">
          We are happy to listen to you
        </h3>

        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
          Book Online!
        </button>
      </section>
    </>
  );
}
