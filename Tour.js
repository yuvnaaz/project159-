AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },
  hideEL: function(ellist){
    ellist.map(el=>{
      el.setAttribute("visible", false)
    })

  },
  showView: function(){
    const {selectedCard} = this.data
    const sky = document.querySelector("#main-container")
    sky.setAttribute("material",{src:`virtual-tour-159-images-main/360_images/${selectedCard}/place-0.jpg`})

  },
  
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "superman",
        title: "superman",
        url: "./assets/posters/superman-poster.jpg",
      },
      {
        id: "spiderman",
        title: "spiderman",
        url: "./assets/posters/spiderman-poster.jpg",
      },

      {
        id: "outer-space",
        title: "outer space",
        url: "./assets/posters/outer-space-poster.jpg",
      },
      {
        id: "captain-aero",
        title: "captain aero",
        url: "./assets/posters/captain-aero-poster.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 0;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)
      
      // Thumbnail Element
     const thumbnail = this.createthumbnail(item)
     borderEl.appendChild(thumbnail)

      // Title Text Element
      const textEl = this.createText(position,item)
      borderEl.appendChild(textEl)
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id){
    var entity = document.createElement("a-entity")
    entity.setAttribute("id", id)
    entity.setAttribute("visible", true)
    entity.setAttribute("geometry", {
      primitive: "plane", width: 22, height: 30
    })
    entity.setAttribute("position", position)
    entity.setAttribute("material", {
      color: "#0077cc"
    })
    entity.setAttribute("cursor-listener",{})
    return entity

  },
  createthumbnail: function (item) {
    var entity = document.createElement("a-entity")
    entity.setAttribute("visible", true)
    entity.setAttribute("geometry", {
      primitive: "plane", width: 20, height: 28
    })
    entity.setAttribute("material", {
      src: item.url
    })
    entity.setAttribute("position",{x: 0, y:0, z:0.1})
    return entity

  },

  createText: function (position, item){
    var entity = document.createElement("a-entity")
    entity.setAttribute("visible", true)
    const pos = position
    pos.y = -20
    entity.setAttribute("position", pos)
    entity.setAttribute("text", {
      font: "exo2bold", align: "center", width: 70, color: "#e65100", value: item.title
    })
    return entity
  }


});
