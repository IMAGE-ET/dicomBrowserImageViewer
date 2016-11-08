Session = Backbone.Model.extend({

    initialize: function(){
        this.images = new Images();
    },
    
    setImages: function(images){
        this.images = images;
    },
    
    getImages: function(){
        return this.images;
    },
    
    urlRoot: '/session',
    
    defaults: function(){
        return {sessionId: ''};
    }

});

Sessions = Backbone.Collection.extend({

    model: Session,

});
