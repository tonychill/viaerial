import { FC } from "react";
import GoogleMapReact from "google-map-react";

interface MarkerProps {
  lat: number;
  lng: number;
}
interface MapProps {
  lat?: number;
  lng?: number;
}
const Marker: FC<MapProps> = () => <img src="/media/icons/marker.png" />;
const Map: FC<MapProps> = ({ lat, lng }) => {
  const APIKEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return (
    <div style={{ height: "300px", width: "100%", borderRadius: 8, overflow: "hidden" }}>
      {lat === undefined || lng === undefined ? (
        "There seems to be an error with our mapping service."
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKEY ? APIKEY : "" }}
          defaultCenter={{ lat, lng }}
          defaultZoom={15}
          // yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
          //mapId: "a32a1eea3edaee8d"
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default Map;

/*** Notes ***
 * Notes go here.
 */
