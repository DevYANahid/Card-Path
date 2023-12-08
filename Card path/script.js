
// ----------------Get Global Access------------

const filewrapper = document.getElementById("filewrapper");
const filetypeElement = document.querySelector(".filetype");
const file__nameElement = document.getElementById("file__name");
const uploadedImagesLength = document.getElementById("uploadedImagesLength")


// ----------Get Function Show------------

window.addEventListener('load',()=>{
    const input = document.getElementById("forimage");
    let numberOfFiles = 0;
    input.addEventListener("change",(e)=>{
        const files = e.target.files;
        // ----------sum the number of length------------
        numberOfFiles += files.length;
        if(!files) return alert("Empty file!")
        for(const file of files) {
            fileshow(file?.name, file?.type.split("/")[1], numberOfFiles)
        }
    })

    // --------------get params ------------

    /**
     * @param {string} fileName
     * @param {string} fileType 
     * @returns {void}
     */
    const fileshow= (fileName, fileType)=>{
        const boxEle = document.createElement("div");

        // ---------Inner Html section------------
        
        boxEle.innerHTML = `
        <div class="showfilebox">
                <p class="filetype">${fileType.toUpperCase()}</p>
                <h3 id="file__name">${fileName.split(".")[0].slice(0, 15)}.${fileType}</h3>
            
        </div>
        `;
        filewrapper.appendChild(boxEle)

        
        // -------------show number of image--------------


        uploadedImagesLength.innerText = `${numberOfFiles ?? 0}`;
    }
})