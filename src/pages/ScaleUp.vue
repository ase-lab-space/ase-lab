<template>
  <div class="date-analytices">
    <div class="column items-center text-container">
      <p class="title">ASE-Lab.の衛星データ解析コンテンツ</p>
      <p class="subtitle">Scale Up!</p>
      <p class="message">Webページ準備中！</p>
    </div>

    <div class="row items-center justify-evenly button-container">
      <a
        href="https://drive.google.com/drive/folders/1415adZQ1zJU6ojHebPChtxOg-9HEyAB_?usp=drive_link"
        class="button1"
        target="_blank"
        rel="noopener noreferrer"
        >Mission 0</a
      >
      <a
        href="https://drive.google.com/drive/folders/1txCZOhUDdQeTm8PTamWfutAemE62jKB2?usp=drive_link"
        class="button2"
        target="_blank"
        rel="noopener noreferrer"
        >Mission 1</a
      >
      <a
        href="https://drive.google.com/drive/folders/1V7Xo9rL4nU9ZsNIUQSs4PcGrGSHk2eeo?usp=drive_link"
        class="button3"
        target="_blank"
        rel="noopener noreferrer"
        >Mission 2</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateAnalytices',
};
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.text-container {
  padding: 100px;
  color: #ffffff;
}

.title {
  font-size: 40px;
  color: #ffffff;
}

.subtitle {
  font-family: 'Lobster';
  font-size: 150px;
  color: #ffffff;
}

.message {
  font-size: 40px;
}
.button-container {
  padding-bottom: 100px;
}

.button1 {
  font-size: 20px;
  padding: 15px 30px;
  background-color: #3498db;
  color: #ffffff;
  border-radius: 10px;
  text-decoration: none;
}

.button2 {
  font-size: 20px;
  padding: 15px 30px;
  background-color: #2ecc71;
  color: #ffffff;
  border-radius: 10px;
  text-decoration: none;
}

.button3 {
  font-size: 20px;
  padding: 15px 30px;
  background-color: #9b59b6;
  color: #ffffff;
  border-radius: 10px;
  text-decoration: none;
}
</style>
