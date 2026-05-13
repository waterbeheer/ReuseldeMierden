var wms_layers = [];


        var lyr_XYZlaag_0 = new ol.layer.Tile({
            'title': 'XYZ-laag',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2026Slotenbestek_1 = new ol.format.GeoJSON();
var features_2026Slotenbestek_1 = format_2026Slotenbestek_1.readFeatures(json_2026Slotenbestek_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2026Slotenbestek_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026Slotenbestek_1.addFeatures(features_2026Slotenbestek_1);
var lyr_2026Slotenbestek_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026Slotenbestek_1, 
                style: style_2026Slotenbestek_1,
                popuplayertitle: '2026 Slotenbestek',
                interactive: true,
    title: '2026 Slotenbestek<br />\
    <img src="styles/legend/2026Slotenbestek_1_0.png" /> Geen onderhoud<br />\
    <img src="styles/legend/2026Slotenbestek_1_1.png" /> Sloten even jaren<br />\
    <img src="styles/legend/2026Slotenbestek_1_2.png" /> Sloten jaarlijks<br />\
    <img src="styles/legend/2026Slotenbestek_1_3.png" /> Sloten oneven jaren<br />\
    <img src="styles/legend/2026Slotenbestek_1_4.png" /> Wadi<br />\
    <img src="styles/legend/2026Slotenbestek_1_5.png" /> Vijver<br />\
    <img src="styles/legend/2026Slotenbestek_1_6.png" /> <br />' });

lyr_XYZlaag_0.setVisible(true);lyr_2026Slotenbestek_1.setVisible(true);
var layersList = [lyr_XYZlaag_0,lyr_2026Slotenbestek_1];
lyr_2026Slotenbestek_1.set('fieldAliases', {'MAAIEN': 'MAAIEN', 'MAAIEN_OPM': 'MAAIEN_OPM', 'MAAIEN_ZIJ': 'MAAIEN_ZIJ', 'gml_id': 'gml_id', 'Shape_Area': 'Shape_Area', 'Lengte': 'Lengte', 'Type': 'Type', });
lyr_2026Slotenbestek_1.set('fieldImages', {'MAAIEN': 'TextEdit', 'MAAIEN_OPM': 'TextEdit', 'MAAIEN_ZIJ': '', 'gml_id': '', 'Shape_Area': 'TextEdit', 'Lengte': 'TextEdit', 'Type': '', });
lyr_2026Slotenbestek_1.set('fieldLabels', {'MAAIEN': 'no label', 'MAAIEN_OPM': 'no label', 'MAAIEN_ZIJ': 'no label', 'gml_id': 'no label', 'Shape_Area': 'no label', 'Lengte': 'no label', 'Type': 'no label', });
lyr_2026Slotenbestek_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});