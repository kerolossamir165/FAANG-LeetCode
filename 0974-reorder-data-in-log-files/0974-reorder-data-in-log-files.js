/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letterLogs = [];
    const digitLogs = [];

    // Separate
    for (const log of logs) {
        const firstSpace = log.indexOf(' ');
        const content = log.slice(firstSpace + 1);
        if (content[0] >= '0' && content[0] <= '9') {
            digitLogs.push(log);     // Preserve original order
        } else {
            letterLogs.push(log);
        }
    }

    // Sort letter logs: by content first, then by identifier for ties
    letterLogs.sort((a, b) => {
        const aSpace = a.indexOf(' ');
        const bSpace = b.indexOf(' ');
        const aContent = a.slice(aSpace + 1);
        const bContent = b.slice(bSpace + 1);
        const aId = a.slice(0, aSpace);
        const bId = b.slice(0, bSpace);

        const contentCompare = aContent.localeCompare(bContent);
        if (contentCompare !== 0) return contentCompare;
        return aId.localeCompare(bId);
    });

    return [...letterLogs, ...digitLogs];
};
