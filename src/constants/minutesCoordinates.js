// X = Cx + (r * cosine(angle))
// Y = Cy + (r * sine(angle))

const cx = 50;
const cy = 50;
const r = 50;

export let minutesCoordinates = [];
let angle = Math.PI;
for ( let minutes = 0; minutes < 60; minutes++ ) {
    const x = cx + (r * Math.cos(angle))
    const y = cy + (r * Math.sin(angle))
    // const val = minutes % 5 === 0 ? ('0' + minutes.toString()).slice(-2) : '';
    const val = ('0' + minutes.toString()).slice(-2);
    const top = minutes % 5 === 0 ? `calc(${x}% - 12px)` : `calc(${x}% - 2px)`;
    const left = minutes % 5 === 0 ? `calc(${y}% - 12px)` : `calc(${y}% - 2px)`;

    minutesCoordinates.push({ top, left, val });

    angle -= Math.PI / 30;
}
