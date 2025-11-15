"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Container } from "./Container";

const markers: {
  name: string;
  coordinates: [number, number];
  info: string;
  markerOffset: number;
}[] = [
  {
    name: "Baja California",
    coordinates: [-115.4675, 31],
    info: "Baja California",
    markerOffset: -10,
  },
  {
    name: "Sonora",
    coordinates: [-110.9559, 29.2972],
    info: "Sonora",
    markerOffset: -10,
  },
  {
    name: "Chihuahua",
    coordinates: [-106.0516, 28.632],
    info: "Chihuahua",
    markerOffset: -10,
  },
  {
    name: "Nuevo Leon",
    coordinates: [-100.3161, 25.5922],
    info: "Nuevo León",
    markerOffset: -10,
  },
  {
    name: "Jalisco",
    coordinates: [-103.3188, 20.6597],
    info: "Jalisco",
    markerOffset: -10,
  },
];

function Map() {
  const geoUrl =
    "https://raw.githubusercontent.com/leenoah1/mexicod3project/refs/heads/master/geo-data.json";
  return (
    <div data-tooltip-id="" className="w-full ">
      {/* <img src={Mapa} alt="" /> */}
      <ComposableMap
        projection="geoMercator"
        className="w-full h-fit"
        projectionConfig={{
          center: [-102, 23], // centro aproximado de México
          scale: 1400, // zoom apropiado
        }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      outline: "none",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map((marker) => (
            <Marker key={marker.name} coordinates={marker.coordinates}>
              <FaMapMarkerAlt
                className="text-primary drop-shadow-md"
                size={35}
              />
              <text
                textAnchor="middle"
                y={marker.markerOffset}
                style={{ fill: "#5D5A6D" }}
              >
                {marker.name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export function Presence() {
  return (
    <section
      id="presence"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-white py-10"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display font-bold text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
            Presencia
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Actualmente contamos con presencia en 5 estados de la republica.
          </p>
        </div>
        <div className="mt-10">
          <Map />
        </div>
      </Container>
    </section>
  );
}
