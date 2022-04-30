import react from 'react';
import { useEffect , useState, useRef} from 'react';
import './map.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJuYWItYXAiLCJhIjoiY2tiZm82dmgxMHA4MjJ6bXR4OWY5Z3NhciJ9.uwICcllzymONXufXGxBhBg';


function Map() {


    const mapContainerRef = useRef(null);
   
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const[display,setDisplay] = useState(false);
    const [fishName, setFish] = useState(null);

  

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            // See style options here: https://docs.mapbox.com/api/maps/#styles
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [17.554729, 56.70651],
            zoom: 5.5,
        });
      

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');


        const popup1 = new mapboxgl.Popup({ offset: 25,  }).setText(
            'Gold Fish'
        );

        const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
            'Your Location'
        );
        
        const popup3 = new mapboxgl.Popup({ offset: 25 }).setText(
            'Shark'
        );

        const popup4 = new mapboxgl.Popup({ offset: 25 }).setText(
            'Jelly Fish'
        );
        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker()
        .setLngLat([16.554729, 55.70651])
        .setPopup(popup1)
        .addTo(map);

       

        const marker2 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([17.554729, 56.70651])
        .setPopup(popup2)
        .addTo(map);
 

        const marker3 = new mapboxgl.Marker()
        .setLngLat([18.554729, 55.70651])
        .setPopup(popup3)
        .addTo(map);

        const marker4 = new mapboxgl.Marker()
        .setLngLat([19.554729, 55.70651])
        .setPopup(popup4)
        .addTo(map);


        marker1.getElement().addEventListener('click', () => {
            setDisplay(true);
            setFish("Gold Fish");
        });

    

        marker3.getElement().addEventListener('click', () => {
            setDisplay(true);
            setFish("Shark Fish");
        });

        marker4.getElement().addEventListener('click', () => {
            setDisplay(true);
            setFish("Whale Fish");
        });

       
        
        map.on('load', function() {
            map.addSource('source1', {
                type: 'geojson',
                data: geojson1
              });
             
             map.addLayer({
               id: 'layer1',
               source: 'source1',
               type: 'fill',
               paint: {
                'fill-color': 'red', // blue color fill
                'fill-opacity': 0.5
                }
             });


             map.addSource('source2', {
                type: 'geojson',
                data: geojson2
              });
             
             map.addLayer({
               id: 'layer2',
               source: 'source2',
               type: 'fill',
               paint: {
                'fill-color': 'red', // blue color fill
                'fill-opacity': 0.5
                }
             });


             map.addSource('source3', {
                type: 'geojson',
                data: geojson3
              });
             
             map.addLayer({
               id: 'layer3',
               source: 'source3',
               type: 'fill',
               paint: {
                'fill-color': 'red', // blue color fill
                'fill-opacity': 0.5
                }
             });


             map.addSource('source4', {
                type: 'geojson',
                data: geojson4
              });
             
             map.addLayer({
               id: 'layer4',
               source: 'source4',
               type: 'fill',
               color: 'red',paint: {
                'fill-color': 'red', // blue color fill
                'fill-opacity': 0.5
                }
             });
             
        });
        
        var geojson1 = {
            "type": "Polygon",
            "coordinates":[
                [
                  [
                    -341.4111328125,
                    55.2415520356525
                  ],
                  [
                    -341.3671875,
                    55.040614327716746
                  ],
                  [
                    -340.81787109375,
                    55.11608453987679
                  ],
                  [
                    -338.9501953125,
                    57.53941679447497
                  ],
                  [
                    -339.7412109375,
                    58.04300405858762
                  ],
                  [
                    -339.78515625,
                    57.302789656350086
                  ],
                  [
                    -341.312255859375,
                    56.12106042504407
                  ],
                  [
                    -341.4111328125,
                    55.2415520356525
                  ]
                ]
            ]
        }


        var geojson2 = {
            "type": "Polygon",
            "coordinates": [
                [
                  156.62109374999997,
                  47.100044694025215
                ],
                [
                  153.28125,
                  44.15068115978094
                ],
                [
                  154.68749999999997,
                  34.66935854524543
                ],
                [
                  174.0234375,
                  36.527294814546245
                ],
                [
                  170.859375,
                  48.516604348867475
                ],
                [
                  156.62109374999997,
                  47.100044694025215
                ]
              ]
        }


        var geojson3 = {
            "type": "Polygon",
            "coordinates": [
                [
                  [
                    -395.15625,
                    -54.36775852406839
                  ],
                  [
                    -413.7890625,
                    -60.759159502269895
                  ],
                  [
                    -391.64062499999994,
                    -64.01449619484471
                  ],
                  [
                    -311.1328125,
                    -62.91523303947613
                  ],
                  [
                    -253.125,
                    -47.75409797968002
                  ],
                  [
                    -324.4921875,
                    -47.75409797968002
                  ],
                  [
                    -395.15625,
                    -54.36775852406839
                  ]
                ]
            ]
        }


        var geojson4 = {
            "type": "Polygon",
            "coordinates":  [
                [
                  [
                    -514.3359375,
                    10.833305983642491
                  ],
                  [
                    -526.9921875,
                    21.616579336740603
                  ],
                  [
                    -523.4765625,
                    1.0546279422758869
                  ],
                  [
                    -513.2812499999999,
                    -34.59704151614416
                  ],
                  [
                    -488.32031249999994,
                    -51.17934297928927
                  ],
                  [
                    -472.85156249999994,
                    -42.81152174509788
                  ],
                  [
                    -472.85156249999994,
                    -4.915832801313164
                  ],
                  [
                    -514.3359375,
                    10.833305983642491
                  ]
                ]
              ]
        }
    });


    
    
   

    return (
        <div>
            <div ref={mapContainerRef} className="map-container" />
            {display ? 
                <div className="fish-detail">
                    <div>
                        <img src="/whaleShark.jfif" className="fishImage"></img>
                    </div>
                    <div className="fish-name">
                        <h3>{fishName}</h3>
                        <p>Endangered species</p>
                    </div>

                </div> 
                :
                null
            }
            
        </div>
    );
}

export default Map;