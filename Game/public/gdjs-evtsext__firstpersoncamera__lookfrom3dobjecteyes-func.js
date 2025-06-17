
if (typeof gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes !== "undefined") {
  gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes = {};
gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1= [];
gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects2= [];


gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1[0] : null), true, eventsFunctionContext.getArgument("Layer"), 0);
}{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()), eventsFunctionContext.getArgument("Layer"), 0);
}{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, -((( gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY())) + 90, eventsFunctionContext.getArgument("Layer"), 0);
}{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationX()), eventsFunctionContext.getArgument("Layer"), 0);
}{gdjs.evtTools.camera.setCameraRotation(runtimeScene, (( gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1[0].getAngle()) + 90, eventsFunctionContext.getArgument("Layer"), 0);
}}

}


};

gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.func = function(runtimeScene, Object, Object3D, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Object3D": Object3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FirstPersonCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FirstPersonCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1.length = 0;
gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects2.length = 0;

gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects1.length = 0;
gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.registeredGdjsCallbacks = [];