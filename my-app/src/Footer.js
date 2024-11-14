export const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        backgroundColor: "#f1f1f1",
        textAlign: "center",
      }}
    >
      <p>&copy; 2024 MY Company Name. All rights reserved.</p>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
};
