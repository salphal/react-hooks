import { type MutableRefObject, useEffect, useRef, useState } from 'react';

const initialClientRect = {
  top: null,
  right: null,
  bottom: null,
  left: null,
  width: null,
  height: null,
  x: null,
  y: null,
};

export interface ClientRect {
  /** 元素的顶部边界相对于视口( viewport )顶部的距离 */
  top: number | null;
  /** 元素的右侧边界相对于视口左侧的距离 */
  right: number | null;
  /** 元素的底部边界相对于视口顶部的距离 */
  bottom: number | null;
  /** 元素的左侧边界相对于视口左侧的距离 */
  left: number | null;
  /** 元素的宽度 */
  width: number | null;
  /** 元素的高度 */
  height: number | null;
  /** 元素左上角的横坐标，相对于视口左侧 */
  x: number | null;
  /** 元素左上角的纵坐标，相对于视口顶部 */
  y: number | null;
}

export interface UseClientRectProps {
  [key: string]: any;

  /** 元素唯一ID */
  id?: string;
  /** 元素类名 */
  clazzName?: string;
  /** React */
  dom?: MutableRefObject<Element | null>;
}

/**
 * 获取元素计算后的最终信息
 * @param props {Object}
 */
const useClientRect = (props: UseClientRectProps = {}) => {
  const { id, clazzName, dom } = props;

  const [rect, setRect] = useState<ClientRect>(initialClientRect);
  const domRef = useRef<any>(null);

  useEffect(() => {
    windowOnResize();
    window.addEventListener('resize', windowOnResize);
    return () => {
      window.removeEventListener('resize', windowOnResize);
    };
  }, [id, clazzName, dom]);

  const windowOnResize = () => {
    let element: HTMLElement | null = null;
    if (domRef && domRef.current instanceof HTMLElement) {
      element = domRef.current;
    } else if (typeof id === 'string' && id.length) {
      element = document.getElementById(id);
    } else if (typeof clazzName === 'string' && clazzName.length) {
      element = document.querySelector(clazzName);
    } else {
      console.log(
        `[ Log ]: Please check the input parameters( id/clazzName, domRef ), htmlElement: ${element}`,
      );
    }
    if (element !== null && element.getBoundingClientRect && element instanceof HTMLElement) {
      const rect = element.getBoundingClientRect();
      setRect(rect);
    }
  };

  return {
    rect,
    domRef,
  };
};

export default useClientRect;
