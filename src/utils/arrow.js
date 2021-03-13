export const prevClick = (size, counter, lengthStore) => {
    const newSizeWidth = size.current.offsetWidth;
    const lastCounter = lengthStore - 1;
    const resetCounter = counter === 0;
    const newCounter = resetCounter ? lastCounter : counter - 1;

    return { newSizeWidth, newCounter };
};

export const nextClick = (size, counter, lengthStore) => {
    const newSizeWidth = size.current.offsetWidth;
    const lastCounter = lengthStore - 1;
    const resetCounter = counter === lastCounter
    const newCounter = resetCounter ? 0 : counter + 1;

    return { newSizeWidth, newCounter };
};
