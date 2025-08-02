

const Contact = () => {
  const styles = {
    container: {
      paddingTop: "100px",
      textAlign: "center"
    },
    heading: {
      fontSize: "36px",
      marginBottom: "10px"
    },
    paragraph: {
      fontSize: "18px",
      color: "#333"
    },
    form: {
      marginTop: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    input: {
      padding: "10px",
      width: "300px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      marginBottom: "10px",
      fontSize: "16px"
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
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.paragraph}>We'd love to hear from you. Reach out to us anytime!</p>
      <div style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={{ ...styles.input, height: "120px" }} />
        <button style={styles.button}>Send Message</button>
      </div>
    </div>
 
  );
};

export default Contact;
