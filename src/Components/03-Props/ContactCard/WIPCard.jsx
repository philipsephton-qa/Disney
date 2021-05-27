const WIPCard = ({image,name,phone,email}) => {
  return (
    <div className="contact-card">
      <img src={image} />
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default WIPCard;
