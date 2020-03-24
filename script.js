function initMap() {

    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), 
    {
        center: {lat: 46.89523696560368, lng: 2.8200531005859375},
        zoom: 6,
        zoomControl: false,
        scaleControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        styles: 
        [
            {
                featureType: "administrative",
                elementType: "all",
                stylers: [
                    {visibility: "on"},
                    {saturation: -100},
                    {lightness: 20}
                ]
            },
            {
                featureType: "administrative.neighborhood",
                elementType: "all",
                stylers: [
                    {
                        visibility: "simplified"
                    }
                ]
            },
            {
                featureType: "landscape.man_made",
                elementType: "all",
                stylers: [
                    {
                        visibility: "simplified"
                    },
                    {
                        saturation: -60
                    },
                    {
                        lightness: 10
                    }
                ]
            },
            {
                featureType: "landscape.natural",
                elementType: "all",
                stylers: [
                    {
                        visibility: "simplified"
                    },
                    {
                        saturation: -60
                    },
                    {
                        lightness: 60
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off"
                    },
                    {
                        saturation: -100
                    },
                    {
                        lightness: 60
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "poi.business",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "poi.business",
                elementType: "labels.text",
                stylers: [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "weight": "4.00"
                    }
                ]
            },
            {
                featureType: "poi.business",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        visibility: "on"
                    },
                    {
                        "color": "#6f5a4d"
                    }
                ]
            },
            {
                featureType: "poi.business",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "poi.park",
                elementType: "all",
                stylers: [
                    {
                        "color": "#9fd978"
                    },
                    {
                        lightness: "35"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on"
                    },
                    {
                        saturation: -100
                    },
                    {
                        lightness: 40
                    }
                ]
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off"
                    },
                    {
                        saturation: "0"
                    },
                    {
                        lightness: "0"
                    },
                    {
                        gamma: "1"
                    }
                ]
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "transit.station.airport",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "transit.station.airport",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "transit.station.bus",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "transit.station.bus",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "transit.station.rail",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "transit.station.rail",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on"
                    },
                    {
                        saturation: -10
                    },
                    {
                        lightness: 30
                    }
                ]
            }
        ]
    

    });


    var image = {
        urls: ['icons/cd-icon-location_1.svg', 'icons/cd-icon-location_2.svg', 'icons/cd-icon-location_3.svg', 'icons/cd-icon-location_4.svg'],
        size: new google.maps.Size(60, 60)
    };

    var cities = [

        // France
        ['Paris', 48.85661400000001, 2.3522219000000177],
        ['Savigny-le-temple', 48.856614, 2.3522219000000177],
        ['Moissy-Cramayel', 48.62715799999999, 2.5937059999999974],
        ['Melun', 48.542105, 2.655399999999986],
        ['Saint-Palais-Sur-Mer', 45.64290400000001, -1.0858739999999898],
        ['La Palmyre', 45.690274, -1.179728999999952],
        ['Royan', 45.623027, -1.0431820000000016],
        ['Bordeaux', 44.837789, -0.5791799999999512],
        ['Poitiers', 46.58022400000001, 0.34037499999999454],
        ['Le Monêtier-les-Bains',44.976254, 6.50783899999999],
        ['Briançon', 44.899416, 6.643179000000032],
        ['Samoëns', 46.084044, 6.72817299999997],
        ['Villarodin-Bourget (La Norma)', 45.2260931, 6.685819300000048],
        ['Berck', 50.408188, 1.5918649999999843],
        ['Le Touquet', 50.521276, 1.590675000000033],
        ['Le tréport', 50.05916999999999, 1.382472000000007],
        ['Merlimont plage', 50.46206599999999, 1.5797059999999874],
        ['Beaune', 47.02603000000001, 4.840004000000022],
        ['Chenôve', 47.29421599999999, 5.001189999999951],
        ['Résidence Parme, 43 Rue des Ateliers, 21000 Dijon, France', 47.3004681, 5.026687400000014],
        ['Rouen', 49.44323199999999, 1.0999709999999823],
        ['Orléans', 47.902964, 1.9092510000000402],
        ['Lille', 50.62924999999999, 3.057256000000052],
        ['Rennes', 48.117266, -1.6777925999999752],
        ['Biarritz', 43.483152, -1.5586260000000038],
        ['Bidart', 43.439236, -1.590061999999989],
        ['Marseille', 43.296482, 5.369779999999992],
        ['Cassis', 43.215134, 5.537119999999959],
        ['Le Barcarès', 42.798102121203804, 3.0043728],
        ['Saint-Cyprien', 42.6235603, 3.0269009],
        ['Argelès-sur-Mer', 42.5490447, 3.0300793],
        
        // Angleterre
        ['Londres', 51.5073509, -0.12775829999998223],

        // Fuerteventura
        ['Costa Calma', 28.1585283, -14.22942050000006],
        ['Ajuy', 28.3998722, -14.155682899999988],
        ['Puerto Del Rosario', 28.500821, -13.862836700000003],
        ['Corralejo', 28.7296937, -13.867149899999959],
        ['El Cotillo', 28.6855572, -14.01086250000003],
        ['Cotillo Beach Hotel', 28.68689189999999, -14.010261300000025],
        ['Morro Jable', 28.0511096, -14.35155199999997],
        ['Los Lobos', 28.7514312, -13.824524300000007],

        // Italie
        ['Magnago', 45.5777285, 8.810187799999994],
        ['Milan', 45.4654219, 9.18592430000001],

        //Suisse
        ['Genève', 46.2043907, 6.143157699999961],

        // Tunisie
        ['Hammamet', 36.4072574, 10.622470600000042],
        ['Tunis', 36.8064948, 10.181531599999971],

        // Belgique
        ['Bruxelles', 50.8503396, 4.351710300000036],

        // Espagne
        ['Barcelone', 41.38506389999999, 2.1734034999999494],
        ['Tarragone', 41.1188827, 1.2444908999999598],
        ['Salou', 41.0777465, 1.1315925999999763],
        
        // Cuba 
        ['La Havane', 23.135305, -82.3589631],
        ['Varadero', 23.149578,-81.260025],
        ['Matanzas', 23.0469365,-81.5785643],
        ['Cayo Blanco', 23.247777938842773,-80.9977798461914],
        
    ];

    for (var i = 0; i < cities.length; i++) {
        
        var city = cities[i];
        var iconAleatoire = Math.floor(Math.random(i) * image.urls.length);
        addMarkerWithTimeout(city, iconAleatoire, i * 150);
    }

   
    var currentInfoWindow = null; 

    function addMarkerWithTimeout(city, iconAleatoire, timeout){
        window.setTimeout(function() {
            var marker = new google.maps.Marker({
                position: {lat: city[1], lng: city[2]},
                map: map,
                icon: image.urls[iconAleatoire],
                animation: google.maps.Animation.DROP,
            });
            
            var infowindow = new google.maps.InfoWindow({
                content: city[0]
            });
            
            marker.addListener('click', function() {
                if (currentInfoWindow != null) { 
                    currentInfoWindow.close(); 
                } 
                infowindow.open(map, marker); 
                currentInfoWindow = infowindow; 
            });

        }, timeout);
    }


    // HTML5 API GEOLOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
      }
      
      function success(position) {
        console.log(position)
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
       
        
        var marker = new google.maps.Marker({
            position: latlng, 
            map: map, 
            title:"Vous êtes ici",
            icon: 'icons/cd-icon-avatar.svg',
            animation: google.maps.Animation.DROP
        });
    }


    // zoom control
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    function CustomZoomControl(controlDiv, map) {
    
        var controlUIzoomIn = document.getElementById('cd-zoom-in'),
            controlUIzoomOut = document.getElementById('cd-zoom-out');

        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
            map.setZoom(map.getZoom() + 1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
            map.setZoom(map.getZoom() - 1)
        });
    }

    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(zoomControlDiv);


}
