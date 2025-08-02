import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f8f8f8",
      textAlign: "center"
    },
    heading: {
      fontSize: "48px",
      color: "#ff6b00",
      marginBottom: "10px"
    },
    message: {
      fontSize: "18px",
      color: "#444",
      marginBottom: "20px"
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "orange",
      border: "none",
      color: "white",
      fontSize: "16px",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops!</h1>
      <p style={styles.message}>Something went wrong. We're working on it!</p>
      <a href="/" style={styles.button}>Go Back Home</a>
    </div>
  );
};

export default Error;
