import React from 'react';

import { manrope_200 } from '@/styles/fonts';

function Para({ children }) {
    return (
        <p className={manrope_200.className}>{children}</p>
    );
}

export default Para;