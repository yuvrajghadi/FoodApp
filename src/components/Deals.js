import "./Deals.css";

const Deals = () => {
  const deals = [
    {
      logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2025/7/31/dd5f09dd-4637-49b8-9f8a-e81bff2d9c96_Axis.png",
      title: "Flat ₹150 Off",
      code: "USE AXISREWARDS",
    },
    {
      logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2025/8/1/2881dedf-2c3a-473e-8ec9-6f0e3b101c39_ICICIMenuLogo.png",
      title: "Flat ₹150 Off",
      code: "USE AMEX150",
    },
{
  logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2025/8/1/9a5725ac-075c-4897-a6e3-e87d8d3015b0_AMEXMenuLogo.png",
  title: "Extra 20% Cashback",
  code: "USE AMEX20",
}

  ];

  return (
    <div className="deals-container">
      <h2>Deals for you</h2>
      <div className="deals-wrapper">
        {deals.map((deal, index) => (
          <div className="deal-card" key={index}>
            <img src={deal.logo} alt="bank logo" className="deal-logo" />
            <div className="deal-text">
              <p className="deal-title">{deal.title}</p>
              <p className="deal-code">{deal.code}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
