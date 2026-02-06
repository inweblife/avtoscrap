import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: "2em",
        padding: "1.5em",
        textAlign: "center",
        background: "azure",
        borderTop: "2px solid brown",
      }}
    >
      <p>&copy; {currentYear} Коли за скрап София. Всички права запазени.</p>
      <p style={{ fontSize: "0.9em", color: "#666", margin: "0.5em 0 0 0" }}>
        Регистриран лицензиран център за разкомплектоване на ИУМПС
      </p>
    </footer>
  );
};

export default Footer;
