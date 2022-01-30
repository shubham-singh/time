document.addEventListener("DOMContentLoaded", () => {
    const heading = document.createElement('div');
    heading.className = 'heading';

    const h1 = document.createElement('h1');
    h1.innerText = 'The clock is ticking';
    heading.append(h1);
    document.body.append(heading);

    const tick = document.createElement('h1');
    tick.innerText = 'Tick';

    const tock = document.createElement('h1');
    tock.innerText = 'Tock';
    
    const timerId = setTimeout(() => {
        heading.removeChild(h1);
        clearTimeout(timerId);
        heading.className = 'time';
        tick.className = 'ticker';
        tock.className = 'hidden';
        heading.append(tick, tock);
    }, 2000);
    
    const tockId = setTimeout(() => {
        tock.className = 'ticker';
        clearTimeout(tockId);
    }, 3000);

})