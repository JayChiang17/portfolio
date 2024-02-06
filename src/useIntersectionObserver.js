import { useEffect, useState } from "react";

// 定义自定义钩子 useIntersectionObserver
const useIntersectionObserver = (ref, options) => {
  // 使用 useState 钩子创建一个状态变量 isVisible，用于跟踪元素是否可见
  const [isVisible, setIsVisible] = useState(false);

  // 使用 useEffect 钩子来观察 ref 元素
  useEffect(() => {
    // 获取当前 ref 指向的 DOM 元素
    const target = ref.current;

    // 创建一个 IntersectionObserver 实例，用于监听元素是否进入视口
    const observer = new IntersectionObserver(([entry]) => {
      // 当观察的元素进入或离开视口时，更新 isVisible 状态
      setIsVisible(entry.isIntersecting);
    }, options);

    // 如果 target 存在，则开始观察该元素
    if (target) {
      observer.observe(target);
    }

    // 当组件卸载或者 ref 变化时，停止观察元素
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
    // 依赖项数组：当 ref 或 options 变化时，重新运行 useEffect 钩子
  }, [ref, options]);

  // 返回元素是否可见的状态
  return isVisible;
};

// 导出自定义钩子，以便在其他组件中使用
export default useIntersectionObserver;
