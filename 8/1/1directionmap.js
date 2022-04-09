function GetMap() {
    const map = new Microsoft.Maps.Map('#mainMap', {
        credentials: 'AshiSHdUHwtfydwTsPUfKxm1vPXpVUTSMFaFzZZTSFNTEOoYaiyBUWpTxq1mbrG1',
        center: new Microsoft.Maps.Location(51.11, 17.0325),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 12
    });

    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function() {

        const directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

        const ii = new Microsoft.Maps.Directions.Waypoint({ address: 'ii', location: new Microsoft.Maps.Location(51.11094, 17.05318) });
        directionsManager.addWaypoint(ii);
        const nh = new Microsoft.Maps.Directions.Waypoint({ address: 'nh', location: new Microsoft.Maps.Location(51.10942412540616, 17.02639485006396) });
        directionsManager.addWaypoint(nh);

        directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

        directionsManager.calculateDirections();
    });
}