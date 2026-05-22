var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
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
                interactive: false,
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
var format_duikerWaterschappen_3 = new ol.format.GeoJSON();
var features_duikerWaterschappen_3 = format_duikerWaterschappen_3.readFeatures(json_duikerWaterschappen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_duikerWaterschappen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_duikerWaterschappen_3.addFeatures(features_duikerWaterschappen_3);
var lyr_duikerWaterschappen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_duikerWaterschappen_3, 
                style: style_duikerWaterschappen_3,
                popuplayertitle: 'duiker Waterschappen',
                interactive: true,
                title: '<img src="styles/legend/duikerWaterschappen_3.png" /> duiker Waterschappen'
            });
var format_Duikers_4 = new ol.format.GeoJSON();
var features_Duikers_4 = format_Duikers_4.readFeatures(json_Duikers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Duikers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Duikers_4.addFeatures(features_Duikers_4);
var lyr_Duikers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Duikers_4, 
                style: style_Duikers_4,
                popuplayertitle: 'Duikers',
                interactive: true,
                title: '<img src="styles/legend/Duikers_4.png" /> Duikers'
            });
var group_Duikers = new ol.layer.Group({
                                layers: [lyr_duikerWaterschappen_3,],
                                fold: 'open',
                                title: 'Duikers'});
var group_Overig = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Overig'});
var group_BraakscheAkkers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Braaksche Akkers'});
var group_BGT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'BGT'});

lyr_OpenStreetMap_0.setVisible(true);lyr_WaterschapAenB_1.setVisible(true);lyr_2026Slotenbestek_2.setVisible(true);lyr_duikerWaterschappen_3.setVisible(true);lyr_Duikers_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WaterschapAenB_1,lyr_2026Slotenbestek_2,group_Duikers,lyr_Duikers_4];
lyr_WaterschapAenB_1.set('fieldAliases', {'gml_id': 'gml_id', 'creationDa': 'creationDa', 'LV-publica': 'LV-publica', 'relatieveH': 'relatieveH', 'inOnderzoe': 'inOnderzoe', 'tijdstipRe': 'tijdstipRe', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'bronhouder': 'bronhouder', 'bgt-status': 'bgt-status', 'plus-statu': 'plus-statu', 'class': 'class', 'plus-type': 'plus-type', 'terminatio': 'terminatio', 'eindRegist': 'eindRegist', });
lyr_2026Slotenbestek_2.set('fieldAliases', {'MAAIEN': 'MAAIEN', 'MAAIEN_OPM': 'MAAIEN_OPM', 'MAAIEN_ZIJ': 'MAAIEN_ZIJ', 'gml_id': 'gml_id', 'Shape_Area': 'Shape_Area', 'Lengte': 'Lengte', 'Type': 'Type', 'ID': 'ID', });
lyr_duikerWaterschappen_3.set('fieldAliases', {'fid': 'fid', 'aantaldoorstroomopeningen': 'aantaldoorstroomopeningen', 'breedteopening': 'breedteopening', 'categoriewaterkering': 'categoriewaterkering', 'guid': 'guid', 'hoogtebinnenonderkantbenedenstrooms': 'hoogtebinnenonderkantbenedenstrooms', 'hoogtebinnenonderkantbovenstrooms': 'hoogtebinnenonderkantbovenstrooms', 'hoogteopening': 'hoogteopening', 'indicatiewaterkerend': 'indicatiewaterkerend', 'lengte': 'lengte', 'nen3610id': 'nen3610id', 'objectbegintijd': 'objectbegintijd', 'opmerking': 'opmerking', 'soortmateriaal': 'soortmateriaal', 'statuslegger': 'statuslegger', 'statusobject': 'statusobject', 'tijdstipregistratie': 'tijdstipregistratie', 'typewaterkerendeconstructie': 'typewaterkerendeconstructie', 'url': 'url', 'vormkoker': 'vormkoker', });
lyr_Duikers_4.set('fieldAliases', {'ID': 'ID', 'GEOVISIA_I': 'GEOVISIA_I', 'OBJECTNUMM': 'OBJECTNUMM', 'TYPE': 'TYPE', 'OBJECTTYPE': 'OBJECTTYPE', 'TYPEONDERD': 'TYPEONDERD', 'KL_BUISLEN': 'KL_BUISLEN', 'BEGINPUTNU': 'BEGINPUTNU', 'BREEDTE': 'BREEDTE', 'MATERIAAL': 'MATERIAAL', 'HOOGTE': 'HOOGTE', 'TYPE_DETAI': 'TYPE_DETAI', 'VOEGMATERI': 'VOEGMATERI', 'EINDPUTNUM': 'EINDPUTNUM', 'VERBINDING': 'VERBINDING', 'JAARLAATST': 'JAARLAATST', 'LININGMATE': 'LININGMATE', 'JAARVANAAN': 'JAARVANAAN', 'BOBBEGIN': 'BOBBEGIN', 'BEHEERLAAG': 'BEHEERLAAG', 'RIOLERINGS': 'RIOLERINGS', 'AFWATERING': 'AFWATERING', 'VOLGENDEIN': 'VOLGENDEIN', 'BOBEIND': 'BOBEIND', 'VERHOOGDRI': 'VERHOOGDRI', 'SOORT_LINI': 'SOORT_LINI', 'LENGTE': 'LENGTE', 'VORM': 'VORM', 'TYPESTELSE': 'TYPESTELSE', 'KL_FUNCTIE': 'KL_FUNCTIE', 'TOEGANKELI': 'TOEGANKELI', 'IMKLTHEMA': 'IMKLTHEMA', 'WIJK': 'WIJK', 'BEHEERDER_': 'BEHEERDER_', 'WATERSCHAP': 'WATERSCHAP', 'WOONPLAATS': 'WOONPLAATS', 'BRONHOUDER': 'BRONHOUDER', 'INTEGRAALP': 'INTEGRAALP', 'DOCUMENTLO': 'DOCUMENTLO', 'ONDERHOUDS': 'ONDERHOUDS', 'REVISIETEK': 'REVISIETEK', 'BEHEERAFSP': 'BEHEERAFSP', 'GRONDSOORT': 'GRONDSOORT', 'EIGENAAR_D': 'EIGENAAR_D', 'STATUS': 'STATUS', 'MEMO': 'MEMO', 'AANMAAKDAT': 'AANMAAKDAT', 'EIGENAAR': 'EIGENAAR', 'BEHEERGEBI': 'BEHEERGEBI', 'LIGGING': 'LIGGING', 'AANGEMAAKT': 'AANGEMAAKT', 'MUTATIEDAT': 'MUTATIEDAT', 'BUURT': 'BUURT', 'VERWIJDERD': 'VERWIJDERD', 'OPENBARERU': 'OPENBARERU', 'BESTEK': 'BESTEK', 'GEBIEDSTYP': 'GEBIEDSTYP', 'GEWIJZIGDD': 'GEWIJZIGDD', 'GV_OMTREK': 'GV_OMTREK', });
lyr_WaterschapAenB_1.set('fieldImages', {'gml_id': 'TextEdit', 'creationDa': 'TextEdit', 'LV-publica': 'TextEdit', 'relatieveH': 'TextEdit', 'inOnderzoe': 'CheckBox', 'tijdstipRe': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'TextEdit', 'bronhouder': 'TextEdit', 'bgt-status': 'TextEdit', 'plus-statu': 'TextEdit', 'class': 'TextEdit', 'plus-type': 'TextEdit', 'terminatio': 'TextEdit', 'eindRegist': 'TextEdit', });
lyr_2026Slotenbestek_2.set('fieldImages', {'MAAIEN': 'TextEdit', 'MAAIEN_OPM': 'TextEdit', 'MAAIEN_ZIJ': 'TextEdit', 'gml_id': 'TextEdit', 'Shape_Area': 'TextEdit', 'Lengte': 'TextEdit', 'Type': 'TextEdit', 'ID': '', });
lyr_duikerWaterschappen_3.set('fieldImages', {'fid': 'TextEdit', 'aantaldoorstroomopeningen': 'TextEdit', 'breedteopening': 'TextEdit', 'categoriewaterkering': 'TextEdit', 'guid': 'TextEdit', 'hoogtebinnenonderkantbenedenstrooms': 'TextEdit', 'hoogtebinnenonderkantbovenstrooms': 'TextEdit', 'hoogteopening': 'TextEdit', 'indicatiewaterkerend': 'TextEdit', 'lengte': 'TextEdit', 'nen3610id': 'TextEdit', 'objectbegintijd': 'TextEdit', 'opmerking': 'TextEdit', 'soortmateriaal': 'TextEdit', 'statuslegger': 'TextEdit', 'statusobject': 'TextEdit', 'tijdstipregistratie': 'TextEdit', 'typewaterkerendeconstructie': 'TextEdit', 'url': 'TextEdit', 'vormkoker': 'TextEdit', });
lyr_Duikers_4.set('fieldImages', {'ID': 'TextEdit', 'GEOVISIA_I': 'TextEdit', 'OBJECTNUMM': 'TextEdit', 'TYPE': 'TextEdit', 'OBJECTTYPE': 'TextEdit', 'TYPEONDERD': 'TextEdit', 'KL_BUISLEN': 'TextEdit', 'BEGINPUTNU': 'TextEdit', 'BREEDTE': 'TextEdit', 'MATERIAAL': 'TextEdit', 'HOOGTE': 'TextEdit', 'TYPE_DETAI': 'TextEdit', 'VOEGMATERI': 'TextEdit', 'EINDPUTNUM': 'TextEdit', 'VERBINDING': 'TextEdit', 'JAARLAATST': 'Range', 'LININGMATE': 'TextEdit', 'JAARVANAAN': 'Range', 'BOBBEGIN': 'TextEdit', 'BEHEERLAAG': 'TextEdit', 'RIOLERINGS': 'TextEdit', 'AFWATERING': 'TextEdit', 'VOLGENDEIN': 'TextEdit', 'BOBEIND': 'TextEdit', 'VERHOOGDRI': 'TextEdit', 'SOORT_LINI': 'TextEdit', 'LENGTE': 'TextEdit', 'VORM': 'TextEdit', 'TYPESTELSE': 'TextEdit', 'KL_FUNCTIE': 'TextEdit', 'TOEGANKELI': 'TextEdit', 'IMKLTHEMA': 'TextEdit', 'WIJK': 'TextEdit', 'BEHEERDER_': 'TextEdit', 'WATERSCHAP': 'TextEdit', 'WOONPLAATS': 'TextEdit', 'BRONHOUDER': 'TextEdit', 'INTEGRAALP': 'TextEdit', 'DOCUMENTLO': 'TextEdit', 'ONDERHOUDS': 'TextEdit', 'REVISIETEK': 'TextEdit', 'BEHEERAFSP': 'TextEdit', 'GRONDSOORT': 'TextEdit', 'EIGENAAR_D': 'TextEdit', 'STATUS': 'TextEdit', 'MEMO': 'TextEdit', 'AANMAAKDAT': 'DateTime', 'EIGENAAR': 'TextEdit', 'BEHEERGEBI': 'TextEdit', 'LIGGING': 'TextEdit', 'AANGEMAAKT': 'TextEdit', 'MUTATIEDAT': 'DateTime', 'BUURT': 'TextEdit', 'VERWIJDERD': 'DateTime', 'OPENBARERU': 'TextEdit', 'BESTEK': 'TextEdit', 'GEBIEDSTYP': 'TextEdit', 'GEWIJZIGDD': 'TextEdit', 'GV_OMTREK': 'TextEdit', });
lyr_WaterschapAenB_1.set('fieldLabels', {'gml_id': 'no label', 'creationDa': 'no label', 'LV-publica': 'no label', 'relatieveH': 'no label', 'inOnderzoe': 'no label', 'tijdstipRe': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'bronhouder': 'no label', 'bgt-status': 'no label', 'plus-statu': 'no label', 'class': 'no label', 'plus-type': 'no label', 'terminatio': 'no label', 'eindRegist': 'no label', });
lyr_2026Slotenbestek_2.set('fieldLabels', {'MAAIEN': 'header label - visible with data', 'MAAIEN_OPM': 'hidden field', 'MAAIEN_ZIJ': 'hidden field', 'gml_id': 'hidden field', 'Shape_Area': 'header label - visible with data', 'Lengte': 'header label - visible with data', 'Type': 'header label - visible with data', 'ID': 'hidden field', });
lyr_duikerWaterschappen_3.set('fieldLabels', {'fid': 'no label', 'aantaldoorstroomopeningen': 'no label', 'breedteopening': 'no label', 'categoriewaterkering': 'no label', 'guid': 'no label', 'hoogtebinnenonderkantbenedenstrooms': 'no label', 'hoogtebinnenonderkantbovenstrooms': 'no label', 'hoogteopening': 'no label', 'indicatiewaterkerend': 'no label', 'lengte': 'no label', 'nen3610id': 'no label', 'objectbegintijd': 'no label', 'opmerking': 'no label', 'soortmateriaal': 'no label', 'statuslegger': 'no label', 'statusobject': 'no label', 'tijdstipregistratie': 'no label', 'typewaterkerendeconstructie': 'no label', 'url': 'no label', 'vormkoker': 'no label', });
lyr_Duikers_4.set('fieldLabels', {'ID': 'no label', 'GEOVISIA_I': 'no label', 'OBJECTNUMM': 'no label', 'TYPE': 'no label', 'OBJECTTYPE': 'no label', 'TYPEONDERD': 'no label', 'KL_BUISLEN': 'no label', 'BEGINPUTNU': 'no label', 'BREEDTE': 'no label', 'MATERIAAL': 'no label', 'HOOGTE': 'no label', 'TYPE_DETAI': 'no label', 'VOEGMATERI': 'no label', 'EINDPUTNUM': 'no label', 'VERBINDING': 'no label', 'JAARLAATST': 'no label', 'LININGMATE': 'no label', 'JAARVANAAN': 'no label', 'BOBBEGIN': 'no label', 'BEHEERLAAG': 'no label', 'RIOLERINGS': 'no label', 'AFWATERING': 'no label', 'VOLGENDEIN': 'no label', 'BOBEIND': 'no label', 'VERHOOGDRI': 'no label', 'SOORT_LINI': 'no label', 'LENGTE': 'no label', 'VORM': 'no label', 'TYPESTELSE': 'no label', 'KL_FUNCTIE': 'no label', 'TOEGANKELI': 'no label', 'IMKLTHEMA': 'no label', 'WIJK': 'no label', 'BEHEERDER_': 'no label', 'WATERSCHAP': 'no label', 'WOONPLAATS': 'no label', 'BRONHOUDER': 'no label', 'INTEGRAALP': 'no label', 'DOCUMENTLO': 'no label', 'ONDERHOUDS': 'no label', 'REVISIETEK': 'no label', 'BEHEERAFSP': 'no label', 'GRONDSOORT': 'no label', 'EIGENAAR_D': 'no label', 'STATUS': 'no label', 'MEMO': 'no label', 'AANMAAKDAT': 'no label', 'EIGENAAR': 'no label', 'BEHEERGEBI': 'no label', 'LIGGING': 'no label', 'AANGEMAAKT': 'no label', 'MUTATIEDAT': 'no label', 'BUURT': 'hidden field', 'VERWIJDERD': 'hidden field', 'OPENBARERU': 'hidden field', 'BESTEK': 'hidden field', 'GEBIEDSTYP': 'hidden field', 'GEWIJZIGDD': 'hidden field', 'GV_OMTREK': 'hidden field', });
lyr_Duikers_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});