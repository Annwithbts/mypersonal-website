let hasFallen = false; // 标志是否已经触发坠落
let fallEnabled = false; // 标志是否允许坠落

// 禁用滚动功能
const disableScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none';
};

// 启用滚动功能
const enableScroll = () => {
  document.body.style.overflow = 'auto';
  document.body.style.pointerEvents = 'auto';
};

// 监听触发按钮点击事件
document.getElementById('triggerButton').addEventListener('click', function () {
  fallEnabled = true; // 允许坠落
});

// 监听滚动事件
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY; // 当前滚动距离
  const viewportHeight = window.innerHeight; // 视口高度
  const fallingGirl = document.getElementById('fallingGirl'); // 少女元素
  const overlay = document.getElementById('overlay'); // 黑屏覆盖层
  const app = document.getElementById('app'); // 加载动画容器
  const longPage = document.querySelector('.long-page'); // 长页面容器

  // 图层的视差滚动效果
  document.getElementById('layer2').style.transform = `translateY(${-scrollPosition * 0.7}px)`;
  document.getElementById('layer3').style.transform = `translateY(${-scrollPosition * 0.4}px)`;
  document.getElementById('layer4').style.transform = `translateY(${-scrollPosition * 0.2}px)`;

  // 少女的向下移动
  fallingGirl.style.transform = `translateY(${scrollPosition * 1}px)`;

  // 触发坠落动画
  if (fallEnabled && !hasFallen && scrollPosition >= viewportHeight / 3) {
    hasFallen = true; // 标记坠落已触发

    // 立即禁用滚动
    disableScroll();

    // 获取少女的当前位置
    const fallingGirlPosition = fallingGirl.getBoundingClientRect().top + window.scrollY;

    // 设置加载动画的位置，确保其与坠落停止位置对齐
    app.style.top = `${fallingGirlPosition}px`;
    app.style.position = 'absolute'; // 固定加载动画位置

    // 开始少女的坠落动画
    fallingGirl.style.animation = 'fall 2s forwards';

    // 在坠落动画触发后 0.2 秒显示黑屏
    setTimeout(() => {
      overlay.classList.add('active');
    }, 200);

    // 黑屏后显示加载动画
    setTimeout(() => {
      overlay.classList.remove('active'); // 移除黑屏
      app.classList.remove('hidden'); // 显示加载动画
    }, 1000); // 黑屏显示 0.8 秒后显示加载动画

    // 加载动画完成后，淡入长页面并恢复滚动
    setTimeout(() => {
      app.classList.add('hidden'); // 隐藏加载动画
      overlay.classList.remove('active'); // 隐藏黑屏
      longPage.classList.remove('hidden'); // 显示长页面
      enableScroll(); // 恢复滚动
    }, 5200); // 2秒坠落动画 + 3秒加载动画 + 淡入
  }
});

document.addEventListener('mousemove', (event) => {
  const character = document.querySelector('.character');
  const container = document.querySelector('.water-container');
  const containerRect = container.getBoundingClientRect();

  // 计算鼠标位置相对于容器的偏移量
  const mouseX = event.clientX - containerRect.left;
  const mouseY = event.clientY - containerRect.top;

  // 确保鼠标位置在容器范围内
  if (mouseX >= 0 && mouseX <= containerRect.width && mouseY >= 0 && mouseY <= containerRect.height) {
    character.style.left = `${mouseX}px`;
    character.style.top = `${mouseY}px`;
  }
});

document.addEventListener('keydown', (event) => {
  const character = document.querySelector('.character');
  const step = 10; // 每次移动的像素数
  let left = parseInt(character.style.left) || 50;
  let top = parseInt(character.style.top) || 50;

  // 根据键盘方向键移动
  switch (event.key) {
    case 'ArrowUp':
      top -= step;
      character.style.animationName = 'walk-up';
      break;
    case 'ArrowDown':
      top += step;
      character.style.animationName = 'walk-down';
      break;
    case 'ArrowLeft':
      left -= step;
      character.style.animationName = 'walk-left';
      break;
    case 'ArrowRight':
      left += step;
      character.style.animationName = 'walk-right';
      break;
  }

  // 确保小人不会移出容器
  const container = document.querySelector('.water-container');
  const containerRect = container.getBoundingClientRect();

  left = Math.max(0, Math.min(left, containerRect.width - character.offsetWidth));
  top = Math.max(0, Math.min(top, containerRect.height - character.offsetHeight));

  character.style.left = `${left}px`;
  character.style.top = `${top}px`;
});

// 滚动事件监听
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY; // 当前滚动距离
  const viewportHeight = window.innerHeight; // 视口高度
  const fallingCharacter = document.getElementById('falling-character'); // 获取小人元素

  // 控制掉落逻辑，使小人尽量保持在屏幕中央
  if (scrollPosition >= viewportHeight / 3) {
    const fallSpeed = 1.5; // 调整下落速度
    const fallDistance = (scrollPosition - viewportHeight / 3) * fallSpeed; // 根据滚动距离计算掉落位置
    fallingCharacter.style.transform = `translate(-50%, calc(${fallDistance}px - 50%))`; // 动态调整小人位置
  }
});