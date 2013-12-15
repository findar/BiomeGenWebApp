Examples:

RGB = [int, int, int]

skyOption = {
	"mainColor": RGB,
	"morningColors": array(RGB),
	"dayColors": array(RGB),
	"eveningColors": array(RGB),
	"nightColors": array(RGB),
	"morningLightColor": RGB,
	"dayLightColor": RGB,
	"eveningLightColor": RGB,
	"nightLightColor": RGB
}

weather = {
	"type":"acidrain",
	"severityBounds":[
	  50,
	  75
	]
}

// Item is a unique case in which the itemTypes is determined by type.
// ex: if you specify type: "treasureBox", you should use "treasureBoxSets"
// objects::objectSets
// treasureBox::treasureBoxSets
// microdungeon::microdungeons
item = {
	"mode" : string,
	"priority": int,
	"variants": int,
	"distribution": path,
	"type": itemType,
	matchingType*: array
}


/*
**  This is a generic template for the .surfacebiome file.  
**  It is intended for development purposes only, not to be used directly.
**
**
**	Starbound version: Irritated Koala
**
**	12/08/2013
*/
{
	"name": string,
	"caveLiquidType": string,
	"oceanLiquidType": string,
	"allowedDetachedBiomes": array(string),
	"hueShiftOptions": array(int),
	"skyOptions": array(skyOption)
	"surfaceParameters": {
		"mainBlock": string,
		"subBlocks": array(string),
		"ores": string,
		"parallax": fileName,
		"undergroundParallax": fileName,
		"weather": array(weather), //Length 1 every time it appears
		"ambientNoises":{
			"day":{
				"tracks": array(path)
			},
			"night":{
				"tracks": array(path)
			}
		},
		"undergroundAmbientNoises":{
			"day":{
				"tracks": array(path)
			},
			"night":{
				"tracks": array(path)
			}
		},
		"musicTrack":{
			"day":{
				"tracks": array(path)
			},
			"night":{
				"tracks": array(path)
			}
		},
		"undergroundMusicTrack":{
			"day":{
				"tracks": array(path)
			},
			"night":{
				"tracks": array(path)
			}
		},
		"surfacePlaceables":{
			"items": array(item)
		},
		"statusParameters":{
			"temperatureBounds": array(int),
			"dayNightTemperatureVariability": int,
			"temperatureVariability": int
		},
		"undergroundPlaceables":{
			"items": array(item)
		}
	},
	"subSurfaceParameters":{
		"mainBlock": string,
		"subBlocks": array(string),
		"ores": string,
		"undergroundPlaceables":{
			"items": array(item)
		},
		"statusParameters":{
			"temperatureBounds": array(int),
			"dayNightTemperatureVariability": int,
			"temperatureVariability": int
		}
	}
}

