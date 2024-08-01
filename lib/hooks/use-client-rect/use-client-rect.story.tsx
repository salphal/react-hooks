import React, { useEffect } from 'react';
import useClientRect, {
  type ClientRect,
  initialClientRect,
  type UseClientRectProps,
} from './use-client-rect';

export interface UseClientRectStoryProps {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  rect?: ClientRect;
}

export const UseClientRectStory = React.forwardRef<
  any,
  UseClientRectStoryProps & UseClientRectProps
>(({ id, clazzName, width, height, top, left, rect = initialClientRect, ...rest }: any, ref) => {
  const { domRef, rect: rectInfo } = useClientRect({});

  const props = { id, clazzName, ...rest };

  useEffect(() => {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, true);
    window.dispatchEvent(event);
  }, [width, height]);

  return (
    <div className="story-wrap relative">
      <div
        ref={domRef}
        id={'client-rect'}
        className={
          'client-rect flex flex-row flex-nowrap justify-center items-center absolute border-2'
        }
        style={{
          width,
          height,
          top,
          left,
        }}
      >
        id: rect <br />
        className: rect
      </div>
      rect: {JSON.stringify(rectInfo)}
    </div>
  );
});

UseClientRectStory.displayName = 'UseClientRectStory';

export default React.memo(UseClientRectStory);
