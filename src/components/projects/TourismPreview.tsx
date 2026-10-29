
import {
  ArrowUpRight,
  Compass,
  Heart,
  MapPin,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";

import "./TourismPreview.css";

const destinations = [
  {
    name: "Hunza Valley",
    region: "Northern Pakistan",
    className: "tourism-preview__destination--hunza",
  },
  {
    name: "Skardu",
    region: "Gilgit-Baltistan",
    className: "tourism-preview__destination--skardu",
  },
];

export default function TourismPreview() {
  return (
    <div className="tourism-preview">
      <div className="tourism-preview__header">
        <div className="tourism-preview__brand">
          <span className="tourism-preview__brand-icon">
            <Compass size={19} strokeWidth={1.8} />
          </span>

          <div>
            <strong>TRAVEL SMART</strong>
            <small>DISCOVER YOUR WORLD</small>
          </div>
        </div>

        <span className="tourism-preview__header-label">
          EXPLORE
          <ArrowUpRight size={14} />
        </span>
      </div>

      <div className="tourism-preview__window">
        <div className="tourism-preview__eyebrow">
          <MapPin size={12} />
          TOURISM RECOMMENDATION
        </div>

        <h4 className="tourism-preview__headline">
          Find your next
          <span> favourite place.</span>
        </h4>

        <div className="tourism-preview__search">
          <Search size={15} strokeWidth={1.9} />
          <span>Explore destinations...</span>
          <ArrowUpRight size={15} />
        </div>

        <div className="tourism-preview__section-heading">
          <div>
            <span>DISCOVER DESTINATIONS</span>
            <small>Personalised travel exploration</small>
          </div>
          <Heart size={17} />
        </div>

        <div className="tourism-preview__destinations">
          {destinations.map((destination) => (
            <div
              className={`tourism-preview__destination ${destination.className}`}
              key={destination.name}
            >
              <div className="tourism-preview__landscape">
                <span className="tourism-preview__sun" />
                <span className="tourism-preview__mountain tourism-preview__mountain--back" />
                <span className="tourism-preview__mountain tourism-preview__mountain--front" />
              </div>

              <div className="tourism-preview__destination-info">
                <strong>{destination.name}</strong>
                <span>{destination.region}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="tourism-preview__features">
          <div>
            <Heart size={15} />
            <span>Favourites</span>
          </div>

          <div>
            <ShieldCheck size={15} />
            <span>Safety insights</span>
          </div>

          <div>
            <Star size={15} />
            <span>Reviews</span>
          </div>
        </div>
      </div>

      <div className="tourism-preview__footer">
        <span>EXPLORE · SAVE · DISCOVER</span>
        <ArrowUpRight size={17} />
      </div>
    </div>
  );
}
