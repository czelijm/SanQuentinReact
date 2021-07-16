export const boxStyles = (itemCount) => ({ 
    display: 'grid', 
    height: '100%',
    "@media (min-width: 801px)": {
        gridTemplateColumns: `repeat(${itemCount}, 1fr)`, // itemCount times, 1 fraction of space
        // gridTemplateRows:`repeat(1, 1fr)` 
     },
})