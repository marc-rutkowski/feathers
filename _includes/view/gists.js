(function(views) {

    // Users' gist collection view
    views.Gists = Backbone.View.extend({
        
        el: '#main',

        template: _.template($('script[name=gists]').html()),
        
        initialize: function() {
            console.log('[v]gists initializing');
            this.collection.on( 'change', this.render, this );
        },

        render: function() {
            console.log('[v] rendering Gists', this.el);
            $(this.el).html(this.template({collection: this.collection.toJSON()}));
            return this;
        }

    });

}).call(this, window.app.views);
