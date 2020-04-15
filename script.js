TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "video": [
   {
    "bitrate": 9787,
    "width": 3000,
    "framerate": 29.97,
    "type": "video/mp4",
    "url": "media/media_745D6E27_7F1E_01B3_419A_329153384B3F.mp4",
    "posterURL": "media/media_745D6E27_7F1E_01B3_419A_329153384B3F_poster.jpg",
    "class": "Video360Resource",
    "height": 1500
   }
  ],
  "hfovMin": 60,
  "vfov": 180,
  "loop": true,
  "id": "media_745D6E27_7F1E_01B3_419A_329153384B3F",
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/media_745D6E27_7F1E_01B3_419A_329153384B3F_t.jpg",
  "label": "Room_2_AE",
  "class": "Video360",
  "adjacentPanoramas": [
   {
    "yaw": 93.96,
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "video": [
      {
       "bitrate": 9787,
       "width": 3000,
       "framerate": 29.97,
       "type": "video/mp4",
       "url": "media/media_7045B838_7F2A_019D_41C9_004308F3A72C.mp4",
       "posterURL": "media/media_7045B838_7F2A_019D_41C9_004308F3A72C_poster.jpg",
       "class": "Video360Resource",
       "height": 1500
      }
     ],
     "hfovMin": 60,
     "vfov": 180,
     "loop": true,
     "id": "media_7045B838_7F2A_019D_41C9_004308F3A72C",
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/media_7045B838_7F2A_019D_41C9_004308F3A72C_t.jpg",
     "label": "Perpustakaan_3_AE",
     "class": "Video360",
     "adjacentPanoramas": [
      {
       "yaw": -15.53,
       "class": "AdjacentPanorama",
       "panorama": "this.media_745D6E27_7F1E_01B3_419A_329153384B3F",
       "backwardYaw": 93.96,
       "distance": 1
      }
     ],
     "overlays": [
      {
       "maps": [],
       "data": {
        "label": "Image"
       },
       "enabledInCardboard": true,
       "areas": [
        {
         "mapColor": "image",
         "class": "HotspotPanoramaOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0); this.MainViewerPanoramaPlayer.play(); this.startPanoramaWithCamera(this.media_745D6E27_7F1E_01B3_419A_329153384B3F, this.camera_6C6BBCA0_7F3E_02AD_41C0_F800E536A2A8)"
        }
       ],
       "useHandCursor": true,
       "id": "overlay_6FD96F88_7F2E_FF7E_41C7_D9C5AF63AD85",
       "rollOverDisplay": false,
       "class": "HotspotPanoramaOverlay",
       "items": [
        {
         "pitch": 0,
         "image": {
          "levels": [
           {
            "url": "media/media_7045B838_7F2A_019D_41C9_004308F3A72C_HS_0_0.png",
            "width": 728,
            "class": "ImageResourceLevel",
            "height": 724
           }
          ],
          "class": "ImageResource"
         },
         "yaw": 0,
         "class": "HotspotPanoramaOverlayImage",
         "playbackPositions": [
          {
           "timestamp": 0,
           "hfov": 7.03,
           "pitch": -1.84,
           "opacity": 1,
           "yaw": -15.53,
           "class": "PanoramaOverlayPlaybackPosition",
           "roll": 0
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 140
    },
    "backwardYaw": -15.53,
    "distance": 1
   }
  ],
  "overlays": [
   {
    "maps": [],
    "data": {
     "label": "Image"
    },
    "enabledInCardboard": true,
    "areas": [
     {
      "mapColor": "image",
      "class": "HotspotPanoramaOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 1); this.MainViewerPanoramaPlayer.play(); this.startPanoramaWithCamera(this.media_7045B838_7F2A_019D_41C9_004308F3A72C, this.camera_6C12FC93_7F3E_0293_41B6_96810CD5C579)"
     }
    ],
    "useHandCursor": true,
    "id": "overlay_6FF0ECF8_7F2E_029D_41D4_4CB6578E4BE6",
    "rollOverDisplay": false,
    "class": "HotspotPanoramaOverlay",
    "items": [
     {
      "pitch": 0,
      "image": {
       "levels": [
        {
         "url": "media/media_745D6E27_7F1E_01B3_419A_329153384B3F_HS_1_0.png",
         "width": 728,
         "class": "ImageResourceLevel",
         "height": 724
        }
       ],
       "class": "ImageResource"
      },
      "yaw": 0,
      "class": "HotspotPanoramaOverlayImage",
      "playbackPositions": [
       {
        "timestamp": 0,
        "hfov": 7.6,
        "pitch": -6.25,
        "opacity": 1,
        "yaw": 93.96,
        "class": "PanoramaOverlayPlaybackPosition",
        "roll": 0
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 140
 },
 {
  "buttonPlayLeft": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41C2_06F386847CFE_pressed.png",
   "borderSize": 0,
   "mode": "push",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41C2_06F386847CFE.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41C2_06F386847CFE_rollover.png",
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41C2_06F386847CFE",
   "data": {
    "name": "Button2423"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  },
  "buttonPause": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41BD_DBB259E36C46_pressed.png",
   "borderSize": 0,
   "mode": "toggle",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41BD_DBB259E36C46.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41BD_DBB259E36C46",
   "data": {
    "name": "Button2427"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  },
  "buttonMoveUp": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D3_A09190CC98B5_pressed.png",
   "borderSize": 0,
   "mode": "push",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D3_A09190CC98B5.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D3_A09190CC98B5_rollover.png",
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41D3_A09190CC98B5",
   "data": {
    "name": "Button2426"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  },
  "buttonPlayRight": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41B6_7BA2E806A7E1_pressed.png",
   "borderSize": 0,
   "mode": "push",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41B6_7BA2E806A7E1.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41B6_7BA2E806A7E1_rollover.png",
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41B6_7BA2E806A7E1",
   "data": {
    "name": "Button2430"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  },
  "buttonRestart": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D3_935C0A72A2B5_pressed.png",
   "borderSize": 0,
   "mode": "push",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D3_935C0A72A2B5.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D3_935C0A72A2B5_rollover.png",
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41D3_935C0A72A2B5",
   "data": {
    "name": "Button2422"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  },
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonMoveLeft": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D2_1E928572CCF8_pressed.png",
   "borderSize": 0,
   "mode": "push",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D2_1E928572CCF8.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D2_1E928572CCF8_rollover.png",
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41D2_1E928572CCF8",
   "data": {
    "name": "Button2424"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "buttonZoomIn": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41B5_A1A1F547F9B6_pressed.png",
   "borderSize": 0,
   "mode": "push",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41B5_A1A1F547F9B6.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41B5_A1A1F547F9B6_rollover.png",
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41B5_A1A1F547F9B6",
   "data": {
    "name": "Button2432"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  },
  "buttonZoomOut": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D3_569FA7656E21_pressed.png",
   "borderSize": 0,
   "mode": "push",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D3_569FA7656E21.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D3_569FA7656E21_rollover.png",
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41D3_569FA7656E21",
   "data": {
    "name": "Button2421"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  },
  "buttonMoveDown": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D6_CDBE2F3D66AB_pressed.png",
   "borderSize": 0,
   "mode": "push",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D6_CDBE2F3D66AB.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41D6_CDBE2F3D66AB_rollover.png",
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41D6_CDBE2F3D66AB",
   "data": {
    "name": "Button2428"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveRight": {
   "horizontalAlign": "center",
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41A8_66B7AAAD648A_pressed.png",
   "borderSize": 0,
   "mode": "push",
   "backgroundOpacity": 0,
   "width": 40,
   "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41A8_66B7AAAD648A.png",
   "height": 40,
   "paddingTop": 0,
   "paddingRight": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41A8_66B7AAAD648A_rollover.png",
   "shadow": false,
   "id": "IconButton_52A1B269_5EE9_0F41_41A8_66B7AAAD648A",
   "data": {
    "name": "Button2429"
   },
   "verticalAlign": "middle",
   "class": "IconButton",
   "propagateClick": false,
   "minWidth": 0
  }
 },
 {
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "id": "media_745D6E27_7F1E_01B3_419A_329153384B3F_camera",
  "class": "RotationalCamera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 120,
   "pitch": 0,
   "class": "RotationalCameraPosition"
  }
 },
 "this.media_7045B838_7F2A_019D_41C9_004308F3A72C",
 {
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "id": "media_7045B838_7F2A_019D_41C9_004308F3A72C_camera",
  "class": "RotationalCamera",
  "initialPosition": {
   "yaw": 0,
   "hfov": 120,
   "pitch": 0,
   "class": "RotationalCameraPosition"
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.media_745D6E27_7F1E_01B3_419A_329153384B3F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0, this.media_745D6E27_7F1E_01B3_419A_329153384B3F)",
    "media": "this.media_745D6E27_7F1E_01B3_419A_329153384B3F",
    "class": "Video360PlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"
   },
   {
    "camera": "this.media_7045B838_7F2A_019D_41C9_004308F3A72C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1, this.media_7045B838_7F2A_019D_41C9_004308F3A72C)",
    "media": "this.media_7045B838_7F2A_019D_41C9_004308F3A72C",
    "class": "Video360PlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"
   }
  ]
 },
 {
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "id": "camera_6C12FC93_7F3E_0293_41B6_96810CD5C579",
  "class": "RotationalCamera",
  "initialPosition": {
   "yaw": 164.47,
   "hfov": 120,
   "pitch": 0,
   "class": "RotationalCameraPosition"
  }
 },
 {
  "manualRotationSpeed": 1800,
  "automaticZoomSpeed": 10,
  "manualZoomSpeed": 1,
  "automaticRotationSpeed": 10,
  "id": "camera_6C6BBCA0_7F3E_02AD_41C0_F800E536A2A8",
  "class": "RotationalCamera",
  "initialPosition": {
   "yaw": -86.04,
   "hfov": 120,
   "pitch": 0,
   "class": "RotationalCameraPosition"
  }
 }
], "children": [
 {
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadow": true,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBorderRadius": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBackgroundOpacity": 1,
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "progressBottom": 1,
  "progressBorderSize": 2,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressHeight": 20,
  "playbackBarHeight": 20,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "progressBorderRadius": 4,
  "playbackBarHeadWidth": 6,
  "shadow": false,
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressLeft": 10,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "playbackBarBorderSize": 2,
  "class": "ViewerArea",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "paddingLeft": 0,
  "progressBarBorderSize": 0,
  "borderSize": 0,
  "toolTipShadowSpread": 0,
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarBorderColor": "#AAAAAA",
  "paddingTop": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "width": "100%",
  "height": "100%",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "top": 0,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "paddingBottom": 0,
  "id": "MainViewer",
  "playbackBarHeadHeight": 30,
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "transitionMode": "blending",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBarBorderRadius": 4,
  "propagateClick": false,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBottom": 10,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1,
  "left": 0,
  "progressRight": 10
 },
 {
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "children": [
     "this.IconButton_52A1B269_5EE9_0F41_41D3_569FA7656E21",
     "this.IconButton_52A1B269_5EE9_0F41_41D3_935C0A72A2B5",
     "this.IconButton_52A1B269_5EE9_0F41_41C2_06F386847CFE",
     "this.IconButton_52A1B269_5EE9_0F41_41D2_1E928572CCF8",
     {
      "scrollBarVisible": "rollOver",
      "children": [
       "this.IconButton_52A1B269_5EE9_0F41_41D3_A09190CC98B5",
       "this.IconButton_52A1B269_5EE9_0F41_41BD_DBB259E36C46",
       "this.IconButton_52A1B269_5EE9_0F41_41D6_CDBE2F3D66AB"
      ],
      "horizontalAlign": "center",
      "contentOpaque": false,
      "paddingLeft": 0,
      "borderRadius": 0,
      "borderSize": 0,
      "backgroundOpacity": 0,
      "width": 40,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "gap": 4,
      "creationPolicy": "delayed",
      "height": "100%",
      "paddingRight": 0,
      "layout": "vertical",
      "scrollBarColor": "#000000",
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "scrollBarMargin": 2,
      "paddingBottom": 0,
      "shadow": false,
      "id": "Container_52A1B269_5EE9_0F41_41D1_88386173F35D",
      "data": {
       "name": "Container2425"
      },
      "verticalAlign": "middle",
      "class": "Container",
      "propagateClick": false,
      "overflow": "hidden",
      "minWidth": 20
     },
     "this.IconButton_52A1B269_5EE9_0F41_41A8_66B7AAAD648A",
     "this.IconButton_52A1B269_5EE9_0F41_41B6_7BA2E806A7E1",
     {
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "borderRadius": 0,
      "pressedIconURL": "skin/IconButton_52A1B269_5EE9_0F41_41A6_E54F5EB147A3_pressed.png",
      "borderSize": 0,
      "mode": "toggle",
      "backgroundOpacity": 0,
      "width": 40,
      "iconURL": "skin/IconButton_52A1B269_5EE9_0F41_41A6_E54F5EB147A3.png",
      "height": 40,
      "paddingTop": 0,
      "paddingRight": 0,
      "transparencyActive": false,
      "cursor": "hand",
      "minHeight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "id": "IconButton_52A1B269_5EE9_0F41_41A6_E54F5EB147A3",
      "data": {
       "name": "Button2431"
      },
      "verticalAlign": "middle",
      "class": "IconButton",
      "propagateClick": false,
      "minWidth": 0
     },
     "this.IconButton_52A1B269_5EE9_0F41_41B5_A1A1F547F9B6"
    ],
    "horizontalAlign": "center",
    "contentOpaque": false,
    "paddingLeft": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "backgroundOpacity": 0,
    "width": "23.76%",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "gap": 4,
    "creationPolicy": "delayed",
    "height": "100%",
    "paddingRight": 0,
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_52A1B269_5EE9_0F41_41B5_25EA76FD6038",
    "data": {
     "name": "Container2420"
    },
    "verticalAlign": "middle",
    "class": "Container",
    "propagateClick": false,
    "overflow": "hidden",
    "minWidth": 392
   }
  ],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "backgroundOpacity": 0,
  "width": "100%",
  "height": 185,
  "scrollBarWidth": 10,
  "paddingTop": 0,
  "gap": 1,
  "creationPolicy": "delayed",
  "layout": "horizontal",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "bottom": "0%",
  "scrollBarMargin": 2,
  "minHeight": 1,
  "paddingBottom": 0,
  "shadow": false,
  "data": {
   "name": "Container16156"
  },
  "verticalAlign": "top",
  "class": "Container",
  "propagateClick": false,
  "overflow": "scroll",
  "left": "0%",
  "minWidth": 1
 }
], 
 "mouseWheelEnabled": true,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scripts": {
  "getKey": function(key){  return window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } }
 },
 "buttonToggleMute": "this.IconButton_52A1B269_5EE9_0F41_41A6_E54F5EB147A3",
 "contentOpaque": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "gap": 10,
 "creationPolicy": "delayed",
 "height": "100%",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "data": {
  "name": "Player14994"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "propagateClick": false,
 "overflow": "visible",
 "minWidth": 20,
 "start": "this.mainPlayList.set('selectedIndex', 0)"
})