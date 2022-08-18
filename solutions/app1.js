/* Fájl: solutions/app1.js
Függvény neve: getSecondsOfThisYearUntilNow
Írj egy függvényt, amelynek a visszatérési értéke az adott év 01. 01-től 08. 31-ig eltelt másodperceinek a száma!
Kerekítést használj, amikor osztasz 1000-rel! (Math.round()) */


/* function getSecondsOfThisYearUntilNow() {
    const beginTime = new Date('2022.01.01.');
    const endTime = new Date('2022.08.31');
    return Math.round((endTime.getTime() - beginTime.getTime()) / 1000);
}
 */

function getSecondsOfThisYearUntilNow() {
    const beginTime = new Date('2000.01.01.');
    const endTime = new Date('2000.08.31');

    const now = new Date();
    const year = now.getFullYear();

    beginTime.setFullYear(year);
    endTime.setFullYear(year);

    return Math.round((endTime.getTime() - beginTime.getTime()) / 1000);
}

export default getSecondsOfThisYearUntilNow;