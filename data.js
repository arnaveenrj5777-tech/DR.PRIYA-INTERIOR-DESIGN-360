var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking-portico",
      "name": "PARKING PORTICO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.2120658715981563,
          "pitch": -0.007330776582799459,
          "rotation": 6.283185307179586,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.601229708882739,
          "pitch": 0.16277030887401267,
          "rotation": 1.5707963267948966,
          "target": "2-living-room"
        },
        {
          "yaw": 1.5684950954466546,
          "pitch": -0.036899725860283894,
          "rotation": 4.71238898038469,
          "target": "3-dinning-cum-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0037898963235996,
          "pitch": 0.021830235899397366,
          "rotation": 0,
          "target": "3-dinning-cum-living"
        },
        {
          "yaw": -2.300250406690804,
          "pitch": -0.12874044754653902,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dinning-cum-living",
      "name": "DINNING CUM LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.150115996449042,
          "pitch": -0.000004687679806991696,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        },
        {
          "yaw": 2.091090098963205,
          "pitch": 0.025982684225539288,
          "rotation": 1.5707963267948966,
          "target": "1-foyer"
        },
        {
          "yaw": 2.051759959483711,
          "pitch": -0.11744481562225317,
          "rotation": 4.71238898038469,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.576532854620904,
          "pitch": -0.059925150620081524,
          "rotation": 0,
          "target": "3-dinning-cum-living"
        },
        {
          "yaw": -2.930141784363615,
          "pitch": 0.06650382473918981,
          "rotation": 2.356194490192345,
          "target": "1-foyer"
        },
        {
          "yaw": -2.9066036542912457,
          "pitch": 0.2525652936615863,
          "rotation": 1.5707963267948966,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-study-room",
      "name": "STUDY ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 4.71238898038469,
          "target": "5-study-room"
        },
        {
          "yaw": 0.9012928721697175,
          "pitch": 0.04407004252490765,
          "rotation": 0,
          "target": "6-1st-floor-living-room"
        },
        {
          "yaw": 2.0190763270099206,
          "pitch": 0.03207348998604864,
          "rotation": 3.141592653589793,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-1st-floor-living-room",
      "name": "1ST FLOOR LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0202424145038744,
          "pitch": 0.25637378193739835,
          "rotation": 1.5707963267948966,
          "target": "5-study-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
