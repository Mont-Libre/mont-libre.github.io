async function load_language(lang) {
    const container = document.getElementById("choose_language");
    const loaded_language = await((await fetch(lang + ".html")).text());
    container.innerHTML = loaded_language;
}