var map, infobox;

var locations = [];

$(function() {

    $('#locations li').each(function() {
        $(this).data('marked', false);
        $(this).data('inlog', false);
        $(this).data('location', null);
    });

    $('#locations').on('click', 'li', function() {
        if (!$(this).data('marked')) {
            $(this).data('marked', true);
            $(this).addClass('marked');
        } else {
            $(this).data('marked', false);
            $(this).removeClass('marked');
        }
    });

    $('#delete').click(function() {

        $('#locations li').each(function() {

            if ($(this).data('marked')) {

                $(this).data('marked', false);
                $(this).removeClass('marked');
                $(this).remove();
            }

        });
    });
});


function GetMap() {
    map = new Microsoft.Maps.Map('#mainMap', {
        credentials: 'AshiSHdUHwtfydwTsPUfKxm1vPXpVUTSMFaFzZZTSFNTEOoYaiyBUWpTxq1mbrG1',
        center: new Microsoft.Maps.Location(51.11, 17.0325),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 12
    });

    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });

    infobox.setMap(map);

    map.setOptions({ disableZooming: true });

    Microsoft.Maps.Events.addHandler(map, 'dblclick', getLatlng);


}

function getLatlng(e) {
    if (e.targetType == 'map') {
        var point = new Microsoft.Maps.Point(e.getX(), e.getY());
        var locTemp = e.target.tryPixelToLocation(point);
        var location = new Microsoft.Maps.Location(locTemp.latitude, locTemp.longitude);

        var pin = new Microsoft.Maps.Pushpin(location, { 'draggable': false });

        map.entities.push(pin);

        locations.push(location);

        console.log(locations);

        locations.forEach(element => {
            if (!$(element).data('inlog')) {
                $('#locations').append('<li>' + element.latitude + ', ' + element.longitude + '</li>');
                $(element).data('inlog', true);
                $(element).data('location', location);
            }

        });

        $('#locations li').each(function() {
            if ($(this).data('marked')) {
                console.log(this.value);
            }
        });

    }
}

function pushpinClicked(e) {
    if (e.target.metadata) {
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}