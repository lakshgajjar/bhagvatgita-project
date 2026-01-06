let chaptersData = [];

fetch('https://vedicscriptures.github.io/chapters')
    .then(response => response.json())
    .then(data => {
        let output = "";

        data.forEach(ch => {
            output += `
            <div class="col-6">
                <div class="card mb-6 mt-3 me-3">
                    <div class="card-body">
                            <h5 class="fw-bold mb-3 card-title">  ${ch.chapter_number}   ${ch.name}</h5>

                            <h6 class="card-subtitle mb-2 text--body-secondary"> ${ch.translation}</h6>

                            <p class="card-text">${ch.summary.en.substring(0,120)}....</p>
                            <a href="./solo-chapter.html" class="card-link btn btn-danger text-decoration-none"> Read Chapters</a>
                    </div>     
                </div>
            </div>
        `
        });
        document.getElementById("chapters").innerHTML = output;
}); 


