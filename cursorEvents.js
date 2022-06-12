AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemID:{default: "", type: "string"}
    },
    init: function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
        this.handleClickEvents()
    },
    handleClickEvents: function (){
        this.el.addEventListener("click", ()=>{
        const placesContainer = document.querySelector("#places-container")
        const {state} = placesContainer.getAttribute("tour")
        if (state === "places-list"){
            const id = this.el.getAttribute("id")
            var placesID = ["superman", "spiderman", "outer-space", "captain-aero"]
            if(placesID.includes(id)){
                placesContainer.setAttribute("tour", {
                    state: "view",
                    selectedCard: id
                })
            }
        }

        })

    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", ()=>{
            var id = this.el.getAttribute("id")
            var placesID = ["superman", "spiderman", "outer-space", "captain-aero"]
            if (placesID.includes(id)){
                const placesContainer = document.querySelector("#places-container")
                placesContainer.setAttribute("cursor-listener", {
                    selectedItemID: id
                })
            this.el.setAttribute("material",{
                color: "#d76b30"
            })
            }
        })
    },
    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave", ()=>{
            var {selectedItemID} = this.data
            if(selectedItemID){
                var el = document.querySelector(`#${selectedItemID}`)
                var id = el.getAttribute("id")
                if(id === selectedItemID){
                    el.setAttribute("material", {color:"#0077cc"})
                }
            }

        })
    }
})