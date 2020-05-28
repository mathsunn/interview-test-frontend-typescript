import React from 'react';

interface Props {
    title: string;
}

const Block: React.FC<Props> = ({ title, children }) => (
    <div className="block">
        <h2>
            {title}
        </h2>
       {children}
    </div>
);

export default Block;
