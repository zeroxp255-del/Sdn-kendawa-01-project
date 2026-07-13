const beritaContainer = document.getElementById("berita-list");

fetch("data.json")
.then(res => res.json())
.then(data => {

    data.forEach(item => {

        const card = document.createElement("div");
        card.className = "news";

        card.innerHTML = `
            <img src="${item.image}" style="width:100%;height:200px;object-fit:cover;border-radius:12px;">
            <h3 style="margin:15px 0;">${item.title}</h3>
            <p>${item.description}</p>
            <br>
            <small>${item.date}</small>
        `;

        beritaContainer.appendChild(card);

    });

});

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section,.card,.gallery img").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all .7s ease";

observer.observe(el);

});
