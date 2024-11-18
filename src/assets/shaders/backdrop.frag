#ifdef GL_ES
precision lowp float;
#endif

uniform vec3 iResolution;
varying vec2 vUv;
uniform float uTime;   
// Movimiento

const float estiramientoX = 0.0;
const float estiramientoZ = 55.0;
const float estiramientoY = 33.0;
const float estiramientoW = 0.0;

// Tamaño

const float fSaturacion = 0.1;
const float fTamanyo =0.1;
const float fGrosor = 0.4;
const float fLongitudDegradado = 0.29;
const float fCorteSeccion = 5.0;

// Huecos

const float fIntensidadTensor = 0.5;
const float fConcavidadTensor = 1.0;

// Detalles

const float fElevacionZEfectoDeformacion = 1.5;
const float fSuavidadEfectoDegradado = 10.0;
const float fBrilloEfectoDegradado = 0.8;
const float fFondo = 0.2;
const float fSuavidadLineasEfectoDegradado = 0.3;

// Colores
// Color 1
const float fColorR1 = 0.1;
const float fColorG1 = 0.1;
const float fColorB1 = 0.4;
// Color 2
const int iColorR2 = 10;
const int iColorG2 = 5;
const int iColorB2 = 6;

//Posicion
const float fPosicion = 0.5; // 0.5 es el centro de la pantalla

void main() {

    
    gl_FragColor = vec4(0.0,1.0,1.0, 1.0);
}