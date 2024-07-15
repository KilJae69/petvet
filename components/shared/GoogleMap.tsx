/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
"use client";

// Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";

// Map's styling
export const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px 15px 15px 15px",
};

// K2's coordinates
const defaultMapCenter = {
  lat: 44.81882548951507, 
  lng: 15.86214056870005,
};

// Default zoom level, can be adjusted
const defaultMapZoom = 18;

// Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
};

const MapComponent = () => {
  return (
    <div className="size-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker position={defaultMapCenter} />
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
