import React, { useEffect, useRef } from 'react';
import { type UseClientRectProps } from './use-client-rect.tsx';
import useClientRect from './use-client-rect.tsx';

export const UseClientRectStory = React.forwardRef<any, UseClientRectProps>(
  ({ clazzName, id, ...rest }, ref) => {
    const { domRef, rect } = useClientRect();

    const props = { ...rest };

    return (
      <div className="story-wrap">
        <div
          ref={domRef}
          style={{
            width: 100,
            height: 100,
            background: 'gray',
          }}
        />
        {JSON.stringify(rect)}
      </div>
    );
  },
);

UseClientRectStory.displayName = 'UseClientRectStory';

export default React.memo(UseClientRectStory);
