const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(10).fill("").map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="shimmer-img" />
          <div className="shimmer-line short" />
          <div className="shimmer-line" />
          <div className="shimmer-line" />
          <div className="shimmer-line short" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
