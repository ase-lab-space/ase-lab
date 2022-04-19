<template>
  <div id="globeViz">
    <canvas id="globe-canvas" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import ThreeGlobe from 'three-globe';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import { api } from 'src/boot/axios';
import { sleep } from 'src/utils/PromiseUtil';
// import TrackballControls from 'three/examples/js/controls/TrackballControls';

class GlobeManager implements IStartable, ITickable {
  private _globe!: ThreeGlobe;
  private _renderer!: THREE.WebGLRenderer;
  private _scene!: THREE.Scene;
  private _camera!: THREE.PerspectiveCamera;

  private _scaleMultiplier = 1;
  private _allowScaleUpdating = false;

  async start() {
    await this._initGlobe();
    this._initRenderer();
    this._initScene();
    this._initCamera();

    // initialization
    this.onResize();

    window.addEventListener('resize', () => this.onResize());
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

    this._globe.scale.set(0, 0, 0);

    const globeMaterial =
      this._globe.globeMaterial() as THREE.MeshPhongMaterial;
    globeMaterial.color = new THREE.Color(0xf0e5c9);
  }

  private _initRenderer() {
    const canvas = document.getElementById('globe-canvas');
    if (canvas !== null) {
      this._renderer = new THREE.WebGLRenderer({
        alpha: true,
        canvas,
      });
    }
  }

  private _initScene() {
    this._scene = new THREE.Scene();
    this._scene.add(this._globe);
    this._scene.add(new THREE.AmbientLight(0xbbbbbb));
    this._scene.add(new THREE.DirectionalLight(0xffffff, 0.3));
  }

  private _initCamera() {
    this._camera = new THREE.PerspectiveCamera();
    this._camera.position.z = 500;
  }

  public tweenGlobeRotation() {
    const rotation = {
      x: 0,
      y: 0,
      z: 0,
    };
    new TWEEN.Tween(rotation)
      .to({ y: 0.5 }, 1000)
      .easing(TWEEN.Easing.Back.Out)
      .onUpdate((rotation) => {
        this._globe.rotation.set(rotation.x, rotation.y, rotation.z);
      })
      .start();
  }

  public tweenGlobeScale() {
    const scale = {
      value: 0,
    };
    new TWEEN.Tween(scale)
      .to({ value: this._scaleMultiplier }, 700)
      .easing(TWEEN.Easing.Back.Out)
      .onUpdate((scale) => {
        this._globe.scale.set(scale.value, scale.value, scale.value);
      })
      .onComplete(() => (this._allowScaleUpdating = true))
      .start();
  }

  tick() {
    this._globe.rotateY(0.003);

    if (this._allowScaleUpdating) {
      this._globe.scale.set(
        this._scaleMultiplier,
        this._scaleMultiplier,
        this._scaleMultiplier
      );
    }

    // const worldPos = this._globe.getWorldPosition(new THREE.Vector3());
    // console.log(worldPos.project(this._camera));
    // const screenPos = worldPos.project(this._camera);
    // screenPos.x = -1;
    // const worldUnproject = screenPos.unproject(this._camera);
    // console.log(worldUnproject);

    this._globe.position.setX(-80 * this._scaleMultiplier);

    this._renderer.render(this._scene, this._camera);
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight * 1.2;
    this._scaleMultiplier = width / 750;

    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setSize(width, height);

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();
  }
}

interface ITickable {
  tick(): void;
}

interface IStartable {
  start(): void;
}

// FIXME: tickableの中でthisがキャプチャできない
// class LifecycleManager {
//   private _behaviours: (ITickable | IStartable)[] = [];
//   private _tickables: (() => void)[] = [];

//   public register(behaviour: ITickable | IStartable) {
//     this._behaviours.push(behaviour);
//   }

//   public async kickoff() {
//     const allStartables: (() => Promise<void>)[] = [];
//     this._behaviours.forEach((behaviour) => {
//       if ('start' in behaviour) {
//         allStartables.push(async () => behaviour.start());
//       }
//     });
//     await Promise.all(allStartables);

//     this._behaviours.forEach((behaviour) => {
//       if ('tick' in behaviour) {
//         console.log(behaviour);
//         this._tickables.push(() => {
//           behaviour.tick();
//         });
//       }
//     });

//     this.tick();
//   }

//   tick() {
//     TWEEN.update();
//     requestAnimationFrame(() => this.tick());

//     this._tickables.forEach((tickable) => tickable());
//   }
// }

const tickables: (() => void)[] = [];

function tick() {
  requestAnimationFrame(tick);
  tickables.forEach((tickable) => tickable());
  TWEEN.update();
}

export default defineComponent({
  setup() {
    onMounted(async () => {
      const globeManager = new GlobeManager();
      await globeManager.start();
      tickables.push(() => globeManager.tick());
      tick();

      await sleep(3000);

      globeManager.tweenGlobeRotation();
      globeManager.tweenGlobeScale();

      // const lifecycleManager = new LifecycleManager();

      // const globeManager = new GlobeManager();

      // lifecycleManager.register(globeManager);

      // await lifecycleManager.kickoff();
    });
  },
});
</script>
