import * as THREE from "three";

/**
 * 球体をオブジェクトを作り出す関数
 * @param pos 配置する座標
 * @param color 球の色(16進数で指定)
 */
const createSpehre = (pos:THREE.Vector3, color:number) => {
  const geometry = new THREE.SphereGeometry(100, 100, 100);
  const material = new THREE.MeshPhongMaterial({ color });
  const box = new THREE.Mesh(geometry, material);
  box.position.x = pos.x;
  box.position.y = pos.y;
  box.position.z = pos.z;
  return box;
}

const createKeyFrameTruckForPosition = (positions:number[][]) => {
  const keys:number[] = [];
  const datas:number[] = [];

  positions.map((d) => {
    keys.push(d[0]);
    datas.push(d[1], d[2], d[3])
  });

  return new THREE.VectorKeyframeTrack(".position", keys, datas, THREE.InterpolateLinear);
}

const createKeyFrameTruckForRotation = (rotations:number[][]) => {
  const keys:number[] = [];
  const datas:number[] = [];

  rotations.map((d) => {
    keys.push(d[0]);
    datas.push(d[1]);
  });

  return new THREE.NumberKeyframeTrack(".rotation[x]", keys, datas, THREE.InterpolateLinear);
}

/**
 * ページが読み込まれた後に呼ばれる処理。
 * ここから処理が始まる。
 */
window.addEventListener("DOMContentLoaded", () => 
{
  //---------------------------------------------------------------------------
  // レンダラー、シーン、カメラ、ライトを準備

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer();

  // レンダラーのサイズを設定
  renderer.setSize(800, 600);

  // canvasをbodyに追加
  document.body.appendChild(renderer.domElement);

  // シーンを作成
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 10000);
  camera.position.set(0, 0, 1000);

  // 平行光源を生成
  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);  

  //---------------------------------------------------------------------------
  // 3D空間に適当にオブジェクトを配置

  // 球体を何個か作成
  scene.add(createSpehre(new THREE.Vector3(-5, 0, 0), 0xfff000));
  scene.add(createSpehre(new THREE.Vector3(-5, 500, -2000), 0xff0000));

  //---------------------------------------------------------------------------
  // カメラを動かすアニメーションデータを用意
  const lastFrame = 200;

  // カメラのポジションに関するアニメーションデータ
  // [keyframe, x, y, z]
  const positions = [
    [0        , 0,    0,  1000],
    [100      , 0,  500,   100], 
    [lastFrame, 0, 1000, -1900]
  ];

  // カメラの回転に関するアニメーションデータ  
  // [keyframe, rotX]
  const rotations = [
    [0  , 0],
    [100, -1],
    [170, 0],
    [lastFrame, -1.5],
  ];

  // アニメーショントラックを作成(再生用のデータ)
  const tracks = [
    createKeyFrameTruckForPosition(positions),
    createKeyFrameTruckForRotation(rotations),
  ]

  // トラックをまとめてアニメーションクリップを作成(CDみたいなもの)
  const clip = new THREE.AnimationClip("camera animation", lastFrame, tracks);

  // Mixerにアニメーションさせる対象、ここではカメラを設定し
  // 予め用意しておいてアニメーションクリップを設定して再生
  const mixer = new THREE.AnimationMixer(camera);
  mixer.clipAction(clip).play();

  //---------------------------------------------------------------------------
  // スクロール量をシミュレートするための仮処理
  let scroll   = 0;

  // キー入力でスクロール量の変化をシミュレート
  // 最終的にブラウザのスクロール量を取得する処理に変更すればよい。
  document.addEventListener("keydown", (e:KeyboardEvent) => 
  {
    const keyCode = e.keyCode;
  
    // 矢印キー↑が推されたらスクロール量を増加
    if (keyCode === 38) {
      scroll += 10;
    }

    // 矢印キー↓が推されたらスクロール量を減少
    if (keyCode === 40) {
      scroll -= 10;
    }

    // スクロール量が0から最終フレーム以内に収まるようにしている。
    scroll = Math.max(0, scroll);
    scroll = Math.min(scroll, lastFrame);

    console.log(scroll);
  }, false);

  //---------------------------------------------------------------------------
  // 常に呼ばれ続ける処理(メインループ)

  // アニメーションを再生するためのキーフレーム(スクロール量から決定する)
  let keyframe = 0;
  
  const tick = (): void => 
  {
    requestAnimationFrame(tick);

    // スクロール量をそのままkeyframeとして使ってしまうと動きがカクカクするので
    // 現在のkeyframeからscrollに向かって滑らかに数値が変化するように補間処理をする。
    keyframe = keyframe + (scroll - keyframe) * 0.01;
    mixer.setTime(keyframe);

    // 描画
    renderer.render(scene, camera);
  };
  tick();
});