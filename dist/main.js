/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n/**\r\n * 球体をオブジェクトを作り出す関数\r\n * @param pos 配置する座標\r\n * @param color 球の色(16進数で指定)\r\n */\r\nvar createSpehre = function (pos, color) {\r\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(100, 100, 100);\r\n    var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({ color: color });\r\n    var box = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\r\n    box.position.x = pos.x;\r\n    box.position.y = pos.y;\r\n    box.position.z = pos.z;\r\n    return box;\r\n};\r\nvar createKeyFrameTruckForPosition = function (positions) {\r\n    var keys = [];\r\n    var datas = [];\r\n    positions.map(function (d) {\r\n        keys.push(d[0]);\r\n        datas.push(d[1], d[2], d[3]);\r\n    });\r\n    return new three__WEBPACK_IMPORTED_MODULE_0__.VectorKeyframeTrack(\".position\", keys, datas, three__WEBPACK_IMPORTED_MODULE_0__.InterpolateLinear);\r\n};\r\nvar createKeyFrameTruckForRotation = function (rotations) {\r\n    var keys = [];\r\n    var datas = [];\r\n    rotations.map(function (d) {\r\n        keys.push(d[0]);\r\n        datas.push(d[1]);\r\n    });\r\n    return new three__WEBPACK_IMPORTED_MODULE_0__.NumberKeyframeTrack(\".rotation[x]\", keys, datas, three__WEBPACK_IMPORTED_MODULE_0__.InterpolateLinear);\r\n};\r\n/**\r\n * ページが読み込まれた後に呼ばれる処理。\r\n * ここから処理が始まる。\r\n */\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n    //---------------------------------------------------------------------------\r\n    // レンダラー、シーン、カメラ、ライトを準備\r\n    // レンダラーを作成\r\n    var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\r\n    // レンダラーのサイズを設定\r\n    renderer.setSize(800, 600);\r\n    // canvasをbodyに追加\r\n    document.body.appendChild(renderer.domElement);\r\n    // シーンを作成\r\n    var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\n    scene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffffff);\r\n    // カメラを作成\r\n    var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, 800 / 600, 1, 10000);\r\n    camera.position.set(0, 0, 1000);\r\n    // 平行光源を生成\r\n    var light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff);\r\n    light.position.set(1, 1, 1);\r\n    scene.add(light);\r\n    //---------------------------------------------------------------------------\r\n    // 3D空間に適当にオブジェクトを配置\r\n    // 球体を何個か作成\r\n    scene.add(createSpehre(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-5, 0, 0), 0xfff000));\r\n    scene.add(createSpehre(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-5, 500, -2000), 0xff0000));\r\n    scene.add(createSpehre(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-500, 0, -3000), 0x00ff00));\r\n    scene.add(createSpehre(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(500, 0, -4000), 0x0000ff));\r\n    scene.add(createSpehre(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -2000, -5000), 0x00ffff));\r\n    //---------------------------------------------------------------------------\r\n    // カメラを動かすアニメーションデータを用意\r\n    var lastFrame = 600;\r\n    // カメラのポジションに関するアニメーションデータ\r\n    // [keyframe, x, y, z]\r\n    var positions = [\r\n        [0, 0, 0, 1000],\r\n        [100, 0, 500, 100],\r\n        [200, 0, 1000, -1500],\r\n        [300, -500, 0, -2500],\r\n        [400, 500, 0, -3500],\r\n        [450, 0, 0, -5000],\r\n        [500, 0, -1500, -5000],\r\n        [lastFrame, 0, 0, -5000]\r\n    ];\r\n    // カメラの回転に関するアニメーションデータ  \r\n    // [keyframe, rotation.x]\r\n    var rotations = [\r\n        [0, 0],\r\n        [100, -1],\r\n        [170, 0],\r\n        [200, -1],\r\n        [300, 0],\r\n        [400, 0],\r\n        [500, -Math.PI / 2],\r\n        [lastFrame, Math.PI],\r\n    ];\r\n    // アニメーショントラックを作成(再生用のデータ)\r\n    var tracks = [\r\n        createKeyFrameTruckForPosition(positions),\r\n        createKeyFrameTruckForRotation(rotations),\r\n    ];\r\n    // トラックをまとめてアニメーションクリップを作成(CDみたいなもの)\r\n    var clip = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationClip(\"camera animation\", lastFrame, tracks);\r\n    // Mixerにアニメーションさせる対象、ここではカメラを設定し\r\n    // 予め用意しておいてアニメーションクリップを設定して再生\r\n    var mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(camera);\r\n    mixer.clipAction(clip).play();\r\n    //---------------------------------------------------------------------------\r\n    // スクロール量をシミュレートするための仮処理\r\n    var scroll = 0;\r\n    // キー入力でスクロール量の変化をシミュレート\r\n    // 最終的にブラウザのスクロール量を取得する処理に変更すればよい。\r\n    document.addEventListener(\"keydown\", function (e) {\r\n        var keyCode = e.keyCode;\r\n        // 矢印キー↑が推されたらスクロール量を増加\r\n        if (keyCode === 38) {\r\n            scroll += 10;\r\n        }\r\n        // 矢印キー↓が推されたらスクロール量を減少\r\n        if (keyCode === 40) {\r\n            scroll -= 10;\r\n        }\r\n        // スクロール量が0から最終フレーム以内に収まるようにしている。\r\n        scroll = Math.max(0, scroll);\r\n        scroll = Math.min(scroll, lastFrame);\r\n        console.log(scroll);\r\n    }, false);\r\n    //---------------------------------------------------------------------------\r\n    // 常に呼ばれ続ける処理(メインループ)\r\n    // アニメーションを再生するためのキーフレーム(スクロール量から決定する)\r\n    var keyframe = 0;\r\n    var tick = function () {\r\n        requestAnimationFrame(tick);\r\n        // スクロール量をそのままkeyframeとして使ってしまうと動きがカクカクするので\r\n        // 現在のkeyframeからscrollに向かって滑らかに数値が変化するように補間処理をする。\r\n        keyframe = keyframe + (scroll - keyframe) * 0.05;\r\n        mixer.setTime(keyframe);\r\n        // 描画\r\n        renderer.render(scene, camera);\r\n    };\r\n    tick();\r\n});\r\n\n\n//# sourceURL=webpack://three-primer/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;