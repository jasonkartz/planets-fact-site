export default function HamburgerIcon({ displayMenu }) {
  const opacity = displayMenu ? "0.5" : "1";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
      style={{ opacity: opacity }}
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </svg>
  );
}
