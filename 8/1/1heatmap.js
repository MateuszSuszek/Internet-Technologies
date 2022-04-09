function GetMap() {
    const map = new Microsoft.Maps.Map('#mainMap', {
        credentials: 'AshiSHdUHwtfydwTsPUfKxm1vPXpVUTSMFaFzZZTSFNTEOoYaiyBUWpTxq1mbrG1',
        center: new Microsoft.Maps.Location(51.11, 17.0325),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 13
    });

    const locs = Microsoft.Maps.TestDataGenerator.getLocations(100, map.getBounds());

    Microsoft.Maps.loadModule(['Microsoft.Maps.HeatMap'], () => {
        const heatmap = new Microsoft.Maps.HeatMapLayer(locs, {
            intensity: 0.7,
            radius: 20
        });
        map.layers.insert(heatmap);
    });
}