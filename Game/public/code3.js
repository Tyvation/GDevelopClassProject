gdjs.TestSceneCode = {};
gdjs.TestSceneCode.localVariables = [];
gdjs.TestSceneCode.GDRedExplosionObjects1= [];
gdjs.TestSceneCode.GDRedExplosionObjects2= [];
gdjs.TestSceneCode.GDRedExplosionObjects3= [];
gdjs.TestSceneCode.GDExplosion1Objects1= [];
gdjs.TestSceneCode.GDExplosion1Objects2= [];
gdjs.TestSceneCode.GDExplosion1Objects3= [];
gdjs.TestSceneCode.GDBlueFlameObjects1= [];
gdjs.TestSceneCode.GDBlueFlameObjects2= [];
gdjs.TestSceneCode.GDBlueFlameObjects3= [];
gdjs.TestSceneCode.GDSwObjects1= [];
gdjs.TestSceneCode.GDSwObjects2= [];
gdjs.TestSceneCode.GDSwObjects3= [];
gdjs.TestSceneCode.GDNewTextObjects1= [];
gdjs.TestSceneCode.GDNewTextObjects2= [];
gdjs.TestSceneCode.GDNewTextObjects3= [];
gdjs.TestSceneCode.GDindicatorObjects1= [];
gdjs.TestSceneCode.GDindicatorObjects2= [];
gdjs.TestSceneCode.GDindicatorObjects3= [];
gdjs.TestSceneCode.GDindicator2Objects1= [];
gdjs.TestSceneCode.GDindicator2Objects2= [];
gdjs.TestSceneCode.GDindicator2Objects3= [];


gdjs.TestSceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TestSceneCode.GDNewTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestSceneCode.GDNewTextObjects2.length;i<l;++i) {
    if ( gdjs.TestSceneCode.GDNewTextObjects2[i].getVariableNumber(gdjs.TestSceneCode.GDNewTextObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestSceneCode.GDNewTextObjects2[k] = gdjs.TestSceneCode.GDNewTextObjects2[i];
        ++k;
    }
}
gdjs.TestSceneCode.GDNewTextObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestSceneCode.GDNewTextObjects2 */
{for(var i = 0, len = gdjs.TestSceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.TestSceneCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TestSceneCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestSceneCode.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs.TestSceneCode.GDNewTextObjects1[i].getVariableNumber(gdjs.TestSceneCode.GDNewTextObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.TestSceneCode.GDNewTextObjects1[k] = gdjs.TestSceneCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.TestSceneCode.GDNewTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestSceneCode.GDNewTextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("indicator"), gdjs.TestSceneCode.GDindicatorObjects1);
{for(var i = 0, len = gdjs.TestSceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.TestSceneCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.TestSceneCode.GDindicatorObjects1.length === 0 ) ? 0 :gdjs.TestSceneCode.GDindicatorObjects1[0].getAngle())));
}
}}

}


};gdjs.TestSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indicator2"), gdjs.TestSceneCode.GDindicator2Objects2);
{for(var i = 0, len = gdjs.TestSceneCode.GDindicator2Objects2.length ;i < len;++i) {
    gdjs.TestSceneCode.GDindicator2Objects2[i].setY(gdjs.TestSceneCode.GDindicator2Objects2[i].getY() + (-(10)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indicator2"), gdjs.TestSceneCode.GDindicator2Objects2);
{for(var i = 0, len = gdjs.TestSceneCode.GDindicator2Objects2.length ;i < len;++i) {
    gdjs.TestSceneCode.GDindicator2Objects2[i].setY(gdjs.TestSceneCode.GDindicator2Objects2[i].getY() + (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indicator2"), gdjs.TestSceneCode.GDindicator2Objects2);
{for(var i = 0, len = gdjs.TestSceneCode.GDindicator2Objects2.length ;i < len;++i) {
    gdjs.TestSceneCode.GDindicator2Objects2[i].setX(gdjs.TestSceneCode.GDindicator2Objects2[i].getX() + (-(10)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indicator2"), gdjs.TestSceneCode.GDindicator2Objects1);
{for(var i = 0, len = gdjs.TestSceneCode.GDindicator2Objects1.length ;i < len;++i) {
    gdjs.TestSceneCode.GDindicator2Objects1[i].setX(gdjs.TestSceneCode.GDindicator2Objects1[i].getX() + (10));
}
}}

}


};gdjs.TestSceneCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sw"), gdjs.TestSceneCode.GDSwObjects1);
{for(var i = 0, len = gdjs.TestSceneCode.GDSwObjects1.length ;i < len;++i) {
    gdjs.TestSceneCode.GDSwObjects1[i].getBehavior("Physics3D").setGravityScale(0);
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.TestSceneCode.eventsList1(runtimeScene);
}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indicator"), gdjs.TestSceneCode.GDindicatorObjects1);
{for(var i = 0, len = gdjs.TestSceneCode.GDindicatorObjects1.length ;i < len;++i) {
    gdjs.TestSceneCode.GDindicatorObjects1[i].setAngle(gdjs.TestSceneCode.GDindicatorObjects1[i].getAngle() + (90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.TestSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestSceneCode.GDRedExplosionObjects1.length = 0;
gdjs.TestSceneCode.GDRedExplosionObjects2.length = 0;
gdjs.TestSceneCode.GDRedExplosionObjects3.length = 0;
gdjs.TestSceneCode.GDExplosion1Objects1.length = 0;
gdjs.TestSceneCode.GDExplosion1Objects2.length = 0;
gdjs.TestSceneCode.GDExplosion1Objects3.length = 0;
gdjs.TestSceneCode.GDBlueFlameObjects1.length = 0;
gdjs.TestSceneCode.GDBlueFlameObjects2.length = 0;
gdjs.TestSceneCode.GDBlueFlameObjects3.length = 0;
gdjs.TestSceneCode.GDSwObjects1.length = 0;
gdjs.TestSceneCode.GDSwObjects2.length = 0;
gdjs.TestSceneCode.GDSwObjects3.length = 0;
gdjs.TestSceneCode.GDNewTextObjects1.length = 0;
gdjs.TestSceneCode.GDNewTextObjects2.length = 0;
gdjs.TestSceneCode.GDNewTextObjects3.length = 0;
gdjs.TestSceneCode.GDindicatorObjects1.length = 0;
gdjs.TestSceneCode.GDindicatorObjects2.length = 0;
gdjs.TestSceneCode.GDindicatorObjects3.length = 0;
gdjs.TestSceneCode.GDindicator2Objects1.length = 0;
gdjs.TestSceneCode.GDindicator2Objects2.length = 0;
gdjs.TestSceneCode.GDindicator2Objects3.length = 0;

gdjs.TestSceneCode.eventsList2(runtimeScene);
gdjs.TestSceneCode.GDRedExplosionObjects1.length = 0;
gdjs.TestSceneCode.GDRedExplosionObjects2.length = 0;
gdjs.TestSceneCode.GDRedExplosionObjects3.length = 0;
gdjs.TestSceneCode.GDExplosion1Objects1.length = 0;
gdjs.TestSceneCode.GDExplosion1Objects2.length = 0;
gdjs.TestSceneCode.GDExplosion1Objects3.length = 0;
gdjs.TestSceneCode.GDBlueFlameObjects1.length = 0;
gdjs.TestSceneCode.GDBlueFlameObjects2.length = 0;
gdjs.TestSceneCode.GDBlueFlameObjects3.length = 0;
gdjs.TestSceneCode.GDSwObjects1.length = 0;
gdjs.TestSceneCode.GDSwObjects2.length = 0;
gdjs.TestSceneCode.GDSwObjects3.length = 0;
gdjs.TestSceneCode.GDNewTextObjects1.length = 0;
gdjs.TestSceneCode.GDNewTextObjects2.length = 0;
gdjs.TestSceneCode.GDNewTextObjects3.length = 0;
gdjs.TestSceneCode.GDindicatorObjects1.length = 0;
gdjs.TestSceneCode.GDindicatorObjects2.length = 0;
gdjs.TestSceneCode.GDindicatorObjects3.length = 0;
gdjs.TestSceneCode.GDindicator2Objects1.length = 0;
gdjs.TestSceneCode.GDindicator2Objects2.length = 0;
gdjs.TestSceneCode.GDindicator2Objects3.length = 0;


return;

}

gdjs['TestSceneCode'] = gdjs.TestSceneCode;
