function Logo() {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="-75 0 2000 2000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="a" x1="75" x2="1925" gradientUnits="userSpaceOnUse">
          <stop stopColor="#11aae2" />
          <stop offset=".59" stopColor="#0880b7" />
          <stop offset="1" stopColor="#016197" />
        </linearGradient>
      </defs>
      <path
        d="M1297.93 53.81c-131.41 77.2-209.22 216.61-209.22 363.62 0 77.2 31 155 69.81 224.41 31 62 46.2 170.21-62 224.41-77.21 46.2-178.22 15.4-224.42-62-46.21-62-100.41-124-170.22-170.21-131.41-77.2-286.43-77.2-417.85 0S75 851 75 998.05s77.21 286.41 209 363.82c131.41 77.2 286.43 77.2 417.85 0 69.81-38.8 124-100.4 162.42-170.21 31-54.2 116.21-124 224.42-62 77.21 46.2 100.41 147.21 62 224.41-38.8 69.8-62 147.21-62 224.41 0 147.21 77.21 286.41 209.22 363.62 131.41 77.2 286.43 77.2 417.85 0S1925 1725.49 1925 1578.48s-77.41-286.41-209.22-363.82c-69.81-38.8-147.22-54.2-232.23-54.2-69.81 0-162.42-46.2-162.42-162.41 0-93 69.81-162.41 162.42-162.41 77.21 0 162.42-15.4 232.23-54.2C1847.19 704.24 1925 564.83 1925 417.83s-77.41-286.41-209.22-363.62c-62-38.8-139.22-54.2-209-54.2-69.41-.4-147.22 15.4-208.82 53.8"
        transform="translate(-75)"
        fill="url(#a)"
      />
    </svg>
  );
}

export default Logo;
