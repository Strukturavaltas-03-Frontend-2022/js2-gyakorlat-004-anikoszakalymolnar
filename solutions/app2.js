/* Fájl: solutions/app2.js
Függvény neve: countOfWorkingDays
Írj egy függvényt, amelynek a visszatérési értéke az adott évben 08. 31-ig eltelt munkanapok (hétfő-péntek) száma! */


function countOfWorkingDays() {
    const beginTime = new Date('2000.01.01.');
    const endTime = new Date('2000.08.31');

    const now = new Date();
    const year = now.getFullYear();

    beginTime.setFullYear(year);
    endTime.setFullYear(year);

    let workdays = 0;

    while (endTime.getTime() >= beginTime.getTime()) {
        const dayType = beginTime.getDay();
        if (dayType != 0 && dayType != 6) workdays++;
        beginTime.setDate(beginTime.getDate() + 1);
    }

    return workdays;
}


export default countOfWorkingDays;
