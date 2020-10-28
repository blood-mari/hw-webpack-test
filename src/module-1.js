export const getTags = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) { acc[tag] = 0; }
    acc[tag] += 1;

    return acc;
}
