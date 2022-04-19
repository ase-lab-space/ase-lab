<template>
  <div id="globeViz"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import ThreeGlobe from 'three-globe';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import { api } from 'src/boot/axios';
// import TrackballControls from 'three/examples/js/controls/TrackballControls';

class GlobeManager {
  private _globe!: ThreeGlobe;
  private _renderer!: THREE.WebGLRenderer;
  private _scene!: THREE.Scene;
  private _camera!: THREE.PerspectiveCamera;

  constructor() {
    this._initGlobe();
    this._initRenderer();
    this._initScene();
    this._initCamera();

    // kickoff renderer
    this._tick();
  }

  private async _initGlobe() {
    const res = await api.get(
      'https://vasturiano.github.io/three-globe/example/hexed-polygons/ne_110m_admin_0_countries.geojson'
    );
    const countries = res.data;

    // Gen random data
    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
    }));

    this._globe = new ThreeGlobe()
      // .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.3)
      .hexPolygonColor(
        () =>
          `#${Math.round(Math.random() * Math.pow(2, 24))
            .toString(16)
            .padStart(6, '0')}`
      )
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(4)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(1000);

    const globeMaterial =
      this._globe.globeMaterial() as THREE.MeshPhongMaterial;
    globeMaterial.color = new THREE.Color(0xf0e5c9);
  }

  private _initRenderer() {
    this._renderer = new THREE.WebGLRenderer({ alpha: true });
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globeViz')?.appendChild(this._renderer.domElement);
  }

  private _initScene() {
    this._scene = new THREE.Scene();
    this._scene.add(this._globe);
    this._scene.add(new THREE.AmbientLight(0xbbbbbb));
    this._scene.add(new THREE.DirectionalLight(0xffffff, 0.3));
  }

  private _initCamera() {
    this._camera = new THREE.PerspectiveCamera();
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._camera.position.z = 500;
  }

  private _tick() {
    requestAnimationFrame(this._tick);

    this._globe.rotateY(0.003);
    this._renderer.render(this._scene, this._camera);
  }
}

export default defineComponent({
  setup() {
    onMounted(async () => {
      new GlobeManager();
    });
  },
});
</script>
