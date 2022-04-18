<template>
  <div id="globeViz"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import ThreeGlobe from 'three-globe';
import * as THREE from 'three';
import { api } from 'src/boot/axios';
// import TrackballControls from 'three/examples/js/controls/TrackballControls';

export default defineComponent({
  setup() {
    onMounted(async () => {
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

      const Globe = new ThreeGlobe()
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

      const globeMaterial = Globe.globeMaterial() as THREE.MeshPhongMaterial;
      globeMaterial.color = new THREE.Color(0xf0e5c9);

      // Setup renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('globeViz')?.appendChild(renderer.domElement);

      // Setup scene
      const scene = new THREE.Scene();
      scene.add(Globe);
      scene.add(new THREE.AmbientLight(0xbbbbbb));
      scene.add(new THREE.DirectionalLight(0xffffff, 0.3));

      // Setup camera
      const camera = new THREE.PerspectiveCamera();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      camera.position.z = 500;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // const tbControls = new THREE.TrackballControls();
      // tbControls.minDistance = 101;
      // tbControls.rotateSpeed = 5;
      // tbControls.zoomSpeed = 0.8;

      // Kick-off renderer
      (function animate() {
        // tbControls.update();
        Globe.rotateY(0.003);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      })();
    });
  },
});
</script>
