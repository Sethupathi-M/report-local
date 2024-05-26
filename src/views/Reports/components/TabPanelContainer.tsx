import { Box } from '@mui/material';
import React, { ReactNode, useCallback, useState } from 'react';

const TabPanelContainer = ({ children }: { children?: ReactNode }) => {
  const [offsetHeight, setOffsetHeight] = useState<number>(0);

  const onRefChange = useCallback((node: HTMLElement) => {
    if (node === null) return;

    if (node) {
      setOffsetHeight(node?.offsetTop);
    }
  }, []);

  return (
    <Box width={'100%'} height={`calc(100vh - ${offsetHeight}px)`} ref={onRefChange}>
      {children}
    </Box>
  );
};

export default TabPanelContainer;
