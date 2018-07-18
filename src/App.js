import React, {Component} from 'react';
//import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import Cesium from "cesium/Source/Cesium"
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentDidMount() {
        //this.viewer = new Viewer(this.cesiumContainer);
        var viewer = new Cesium.Viewer('cesiumContainer', {
            geocoder: false,//查找
            homeButton: false,//视角返回初始位置
            sceneModePicker: false,//2D 3D 哥伦布切换
            baseLayerPicker: false,//图层选择
            navigationHelpButton: false,//导航帮助按钮
            animation: false,//动画器件
            creditContainer: "credit",//版权显示
            timeline: false,//时间线
            fullscreenButton: false,//全屏
            vrButton: false,//VR
            //创建地形服务提供者的实例，url为SuperMap iServer发布的TIN地形服务
            terrainProvider: new Cesium.CesiumTerrainProvider({
                url: 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles',
                requestWaterMask: true,
                requestVertexNormals: true
                //isSct: true//地形服务源自SuperMap iServer发布时需设置isSct为true
            }),
        });
        viewer.scene.globe.enableLighting = true;
        viewer.scene.debugShowFramesPerSecond = true;
        /*viewer.scene.camera.setView({
            destination : new Cesium.Cartesian3(-1206939.1925299785, 5337998.241228442, 3286279.2424502545),
            orientation : {
                heading : 1.4059101895600987,
                pitch : -0.20917672793046682,
                roll : 2.708944180085382e-13
            }
        });*/
        /*viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(86.889152, 27.991369, 10000),
            orientation: {
                heading: Cesium.Math.toRadians(20.0),
                pitch: Cesium.Math.toRadians(-90.0),
                roll: 0
            }
        });*/

        /*var postion = [0, 45,125, 45];
        var dynamicLine = viewer.entities.add({
            name : 'RED dynamic line',
            polyline : {
                positions : Cesium.Cartesian3.fromDegreesArray(postion),
                width : 10,
                hMax:500000,
                material : new Cesium.PolylineDynamicMaterialProperty({
                    color : Cesium.Color.RED,
                    outlineWidth : 0,
                    outlineColor : Cesium.Color.BLACK
                })
            }
        });
        var dynamicLine2 = viewer.entities.add({
            name : 'ORANGE dynamic line',
            polyline : {
                positions : Cesium.Cartesian3.fromDegreesArray(postion),
                width : 5,
                hMax:550000,
                material : new Cesium.PolylineDynamicMaterialProperty({
                    color : Cesium.Color.ORANGE,
                    outlineWidth : 0,
                    outlineColor : Cesium.Color.BLACK
                })
            }
        });
        var dynamicLine3 = viewer.entities.add({
            name : 'Yellow dynamic line',
            polyline : {
                positions : Cesium.Cartesian3.fromDegreesArray(postion),
                width : 5,
                hMax:600000,
                material : new Cesium.PolylineDynamicMaterialProperty({
                    color : Cesium.Color.YELLOW,
                    outlineWidth : 0,
                    outlineColor : Cesium.Color.BLACK
                })
            }
        });
        var dynamicLine4 = viewer.entities.add({
            name : 'GREEN dynamic line',
            polyline : {
                positions : Cesium.Cartesian3.fromDegreesArray(postion),
                width : 5,
                hMax:650000,
                material : new Cesium.PolylineDynamicMaterialProperty({
                    color : Cesium.Color.GREEN,
                    outlineWidth : 0,
                    outlineColor : Cesium.Color.BLACK
                })
            }
        });
        var dynamicLine5 = viewer.entities.add({
            name : 'BLUE dynamic line',
            polyline : {
                positions : Cesium.Cartesian3.fromDegreesArray(postion),
                width : 5,
                hMax:700000,
                material : new Cesium.PolylineDynamicMaterialProperty({
                    color : Cesium.Color.BLUE,
                    outlineWidth : 0,
                    outlineColor : Cesium.Color.BLACK
                })
            }
        });
        var dynamicLine6 = viewer.entities.add({
            name : 'CYAN dynamic line',
            polyline : {
                positions : Cesium.Cartesian3.fromDegreesArray(postion),
                width : 5,
                hMax:750000,
                material : new Cesium.PolylineDynamicMaterialProperty({
                    color : Cesium.Color.CYAN,
                    outlineWidth : 0,
                    outlineColor : Cesium.Color.BLACK
                })
            }
        });
        var dynamicLine7 = viewer.entities.add({
            name : 'purple dynamic line',
            polyline : {
                positions : Cesium.Cartesian3.fromDegreesArray(postion),
                width : 5,
                hMax:800000,
                material : new Cesium.PolylineDynamicMaterialProperty({
                    color : Cesium.Color.PURPLE,
                    outlineWidth : 0,
                    outlineColor : Cesium.Color.BLACK
                })
            }
        });*/
        /*动态线材质*/
        viewer.zoomTo(viewer.entities);
    }

    render() {
        return (
            <div id="cesiumContainer">
                <div id="credit"></div>
            </div>
        );
    }
}

export default App;
