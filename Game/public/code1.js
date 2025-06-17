gdjs.LoadingScreenCode = {};
gdjs.LoadingScreenCode.localVariables = [];
gdjs.LoadingScreenCode.GDLoadingBarObjects1= [];
gdjs.LoadingScreenCode.GDLoadingBarObjects2= [];
gdjs.LoadingScreenCode.GDNew3DModelObjects1= [];
gdjs.LoadingScreenCode.GDNew3DModelObjects2= [];
gdjs.LoadingScreenCode.GDLoadingTextObjects1= [];
gdjs.LoadingScreenCode.GDLoadingTextObjects2= [];
gdjs.LoadingScreenCode.GDLoadingMaskObjects1= [];
gdjs.LoadingScreenCode.GDLoadingMaskObjects2= [];


gdjs.LoadingScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getChild("Next").getAsString());
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Cooking.mp3");
}}

}


};gdjs.LoadingScreenCode.asyncCallback20244308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getChild("Next").getAsString(), false);
}gdjs.LoadingScreenCode.localVariables.length = 0;
}
gdjs.LoadingScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LoadingScreenCode.asyncCallback20244308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingMask"), gdjs.LoadingScreenCode.GDLoadingMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.LoadingScreenCode.GDNew3DModelObjects1);
{for(var i = 0, len = gdjs.LoadingScreenCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.LoadingScreenCode.GDNew3DModelObjects1[i].getBehavior("Animation").setAnimationName("Tomato_Run");
}
}{for(var i = 0, len = gdjs.LoadingScreenCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.LoadingScreenCode.GDNew3DModelObjects1[i].setY(906);
}
}{for(var i = 0, len = gdjs.LoadingScreenCode.GDLoadingMaskObjects1.length ;i < len;++i) {
    gdjs.LoadingScreenCode.GDLoadingMaskObjects1[i].setPosition(340,828);
}
}
{ //Subevents
gdjs.LoadingScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LoadingBar"), gdjs.LoadingScreenCode.GDLoadingBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("LoadingMask"), gdjs.LoadingScreenCode.GDLoadingMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.LoadingScreenCode.GDNew3DModelObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.LoadingScreenCode.GDLoadingBarObjects1.length ;i < len;++i) {
    gdjs.LoadingScreenCode.GDLoadingBarObjects1[i].SetValue(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getChild("Next").getAsString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LoadingScreenCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.LoadingScreenCode.GDNew3DModelObjects1[i].setX(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getChild("Next").getAsString()) * ((( gdjs.LoadingScreenCode.GDLoadingBarObjects1.length === 0 ) ? 0 :gdjs.LoadingScreenCode.GDLoadingBarObjects1[0].getWidth()) - 50) + (( gdjs.LoadingScreenCode.GDLoadingBarObjects1.length === 0 ) ? 0 :gdjs.LoadingScreenCode.GDLoadingBarObjects1[0].getX()) + 25);
}
}{for(var i = 0, len = gdjs.LoadingScreenCode.GDLoadingMaskObjects1.length ;i < len;++i) {
    gdjs.LoadingScreenCode.GDLoadingMaskObjects1[i].setX(340 + Math.floor(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 4)) * 31);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9).getChild("Next").getAsString());
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoadingScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LoadingScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingScreenCode.GDLoadingBarObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingBarObjects2.length = 0;
gdjs.LoadingScreenCode.GDNew3DModelObjects1.length = 0;
gdjs.LoadingScreenCode.GDNew3DModelObjects2.length = 0;
gdjs.LoadingScreenCode.GDLoadingTextObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingTextObjects2.length = 0;
gdjs.LoadingScreenCode.GDLoadingMaskObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingMaskObjects2.length = 0;

gdjs.LoadingScreenCode.eventsList2(runtimeScene);
gdjs.LoadingScreenCode.GDLoadingBarObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingBarObjects2.length = 0;
gdjs.LoadingScreenCode.GDNew3DModelObjects1.length = 0;
gdjs.LoadingScreenCode.GDNew3DModelObjects2.length = 0;
gdjs.LoadingScreenCode.GDLoadingTextObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingTextObjects2.length = 0;
gdjs.LoadingScreenCode.GDLoadingMaskObjects1.length = 0;
gdjs.LoadingScreenCode.GDLoadingMaskObjects2.length = 0;


return;

}

gdjs['LoadingScreenCode'] = gdjs.LoadingScreenCode;
