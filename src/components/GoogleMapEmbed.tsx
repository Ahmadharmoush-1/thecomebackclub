interface GoogleMapEmbedProps {
  address: string;
  name: string;
  className?: string;
}

const GoogleMapEmbed = ({ address, name, className = "" }: GoogleMapEmbedProps) => {
  // Encode the address for Google Maps embed URL
  const encodedAddress = encodeURIComponent(`${name}, ${address}, Beirut, Lebanon`);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}&zoom=15`;
  
  // For demonstration, we'll use a placeholder URL since no API key is provided
  const placeholderSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.089!2d35.5018!3d33.8938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzM3LjciTiAzNcKwMzAnMDYuNSJF!5e0!3m2!1sen!2slb!4v1640000000000!5m2!1sen!2slb`;
  
  return (
    <div className={`relative bg-muted rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={placeholderSrc}
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
        title={`Map showing location of ${name}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-lg" />
      <div className="absolute bottom-2 left-2 text-white text-xs bg-black/60 px-2 py-1 rounded">
        📍 {name}
      </div>
    </div>
  );
};

export default GoogleMapEmbed;