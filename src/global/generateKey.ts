const generateKey = (findLastRecord: any[], tableKey: string) => {
    let lastRecord: any = findLastRecord[0];

    const defaultNumber = '0000';
    let fillNumber = '';

    if (lastRecord) {
        if (!lastRecord.subData) {
            fillNumber = defaultNumber.substring(
                (+lastRecord.key.substring(4) + 1).toString().length,
            );
        } else {
            fillNumber = defaultNumber.substring(
                (+lastRecord.key.substring(4)).toString().length,
            );
        }
    } else {
        fillNumber = defaultNumber.substring(1);
        lastRecord = { key: 'CL000000' };
    }

    const date = new Date();
    let shortYearTH = '';
    if (tableKey === 'OD') {
        shortYearTH = (date.getFullYear() + 543).toString().substring(2);
        fillNumber = `0${fillNumber}`;
    }

    return `${tableKey}${shortYearTH}${fillNumber}${
        +lastRecord.key.substring(4) + 1
    }`;
};

const generateId = (findLastRecord: any[]) => {
    const lastRecord = findLastRecord[0];

    if (lastRecord) {
        return lastRecord.id + 1;
    } else {
        return 1;
    }
};

export { generateKey, generateId };
