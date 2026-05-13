var wms_layers = [];


        var lyr_XYZlaag_0 = new ol.layer.Tile({
            'title': 'XYZ-laag',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WaterschapAenB_1 = new ol.format.GeoJSON();
var features_WaterschapAenB_1 = format_WaterschapAenB_1.readFeatures(json_WaterschapAenB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterschapAenB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterschapAenB_1.addFeatures(features_WaterschapAenB_1);
var lyr_WaterschapAenB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterschapAenB_1, 
                style: style_WaterschapAenB_1,
                popuplayertitle: 'Waterschap A en B',
                interactive: true,
                title: '<img src="styles/legend/WaterschapAenB_1.png" /> Waterschap A en B'
            });
var format_2026Slotenbestek_2 = new ol.format.GeoJSON();
var features_2026Slotenbestek_2 = format_2026Slotenbestek_2.readFeatures(json_2026Slotenbestek_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2026Slotenbestek_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026Slotenbestek_2.addFeatures(features_2026Slotenbestek_2);
var lyr_2026Slotenbestek_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026Slotenbestek_2, 
                style: style_2026Slotenbestek_2,
                popuplayertitle: '2026 Slotenbestek',
                interactive: true,
    title: '2026 Slotenbestek<br />\
    <img src="styles/legend/2026Slotenbestek_2_0.png" /> Geen onderhoud<br />\
    <img src="styles/legend/2026Slotenbestek_2_1.png" /> Sloten even jaren<br />\
    <img src="styles/legend/2026Slotenbestek_2_2.png" /> Sloten jaarlijks<br />\
    <img src="styles/legend/2026Slotenbestek_2_3.png" /> Sloten oneven jaren<br />\
    <img src="styles/legend/2026Slotenbestek_2_4.png" /> Vijver<br />\
    <img src="styles/legend/2026Slotenbestek_2_5.png" /> Wadi<br />\
    <img src="styles/legend/2026Slotenbestek_2_6.png" /> <br />' });

lyr_XYZlaag_0.setVisible(true);lyr_WaterschapAenB_1.setVisible(true);lyr_2026Slotenbestek_2.setVisible(true);
var layersList = [lyr_XYZlaag_0,lyr_WaterschapAenB_1,lyr_2026Slotenbestek_2];
lyr_WaterschapAenB_1.set('fieldAliases', {'gml_id': 'gml_id', 'creationDa': 'creationDa', 'LV-publica': 'LV-publica', 'relatieveH': 'relatieveH', 'inOnderzoe': 'inOnderzoe', 'tijdstipRe': 'tijdstipRe', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'bronhouder': 'bronhouder', 'bgt-status': 'bgt-status', 'plus-statu': 'plus-statu', 'class': 'class', 'plus-type': 'plus-type', 'terminatio': 'terminatio', 'eindRegist': 'eindRegist', });
lyr_2026Slotenbestek_2.set('fieldAliases', {'MAAIEN': 'MAAIEN', 'MAAIEN_OPM': 'MAAIEN_OPM', 'MAAIEN_ZIJ': 'MAAIEN_ZIJ', 'gml_id': 'gml_id', 'Shape_Area': 'Shape_Area', 'Lengte': 'Lengte', 'Type': 'Type', });
lyr_WaterschapAenB_1.set('fieldImages', {'gml_id': 'TextEdit', 'creationDa': 'TextEdit', 'LV-publica': 'TextEdit', 'relatieveH': 'TextEdit', 'inOnderzoe': 'CheckBox', 'tijdstipRe': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'TextEdit', 'bronhouder': 'TextEdit', 'bgt-status': 'TextEdit', 'plus-statu': 'TextEdit', 'class': 'TextEdit', 'plus-type': 'TextEdit', 'terminatio': 'TextEdit', 'eindRegist': 'TextEdit', });
lyr_2026Slotenbestek_2.set('fieldImages', {'MAAIEN': 'TextEdit', 'MAAIEN_OPM': 'TextEdit', 'MAAIEN_ZIJ': 'TextEdit', 'gml_id': 'TextEdit', 'Shape_Area': 'TextEdit', 'Lengte': 'TextEdit', 'Type': 'TextEdit', });
lyr_WaterschapAenB_1.set('fieldLabels', {'gml_id': 'no label', 'creationDa': 'no label', 'LV-publica': 'no label', 'relatieveH': 'no label', 'inOnderzoe': 'no label', 'tijdstipRe': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'bronhouder': 'no label', 'bgt-status': 'no label', 'plus-statu': 'no label', 'class': 'no label', 'plus-type': 'no label', 'terminatio': 'no label', 'eindRegist': 'no label', });
lyr_2026Slotenbestek_2.set('fieldLabels', {'MAAIEN': 'no label', 'MAAIEN_OPM': 'no label', 'MAAIEN_ZIJ': 'no label', 'gml_id': 'no label', 'Shape_Area': 'no label', 'Lengte': 'no label', 'Type': 'no label', });
lyr_2026Slotenbestek_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});