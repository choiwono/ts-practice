import * as React from 'react';

export const List: React.FC = ({ children }) => {
    return (
        <ul style={{
            listStyle: 'none',
            paddingLeft: '0'
        }}>
            { children }
        </ul>
    )
}