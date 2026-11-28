export function createHeaderFooter() {
    const h = document.getElementById('hPlace');
    const f = document.getElementById('fPlace');

    const currDate = new Date();
    const currYear = currDate.getFullYear();

    //Add logo
    h.innerHTML = `<img src="" alt="logo placeholder"> 
    <h1>Space Weather</h1>
    <nav>
    <a href="index.html">Home</a>
    <a href="learn.html">Learn More</a>
    <a href="join.html">Join us!</a>
    </nav>`;
    f.innerHTML = `<p>© ${currYear} | Adeline Scott | Space Weather</p>`
};