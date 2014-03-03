var app = {

    submitAndGetNextQuestion: function() {
        console.log('submitAndGetNextQuestion');
        this.store.submitAndGetNextQuestion($('.questionId').val(), $('.option').val(), function(questionId, question, options) {

            $('.questionId').val(questionId);

            $('.question').empty();
            $('.question').append(question);

            var l = options.length;
            var e;
            $('.options-list').empty();
            for (var i=0; i<l; i++) {
                e = options[i];
                $('.options-list').append('<input class="option" name="option" value=' + e.id + '>' + e.value + '</input>');
            }
        });
    },

    initialize: function() {
        this.store = new MemoryStore();
        $('.submit').on('onclick', $.proxy(this.submitAndGetNextQuestion, this));
    }

};

app.initialize();