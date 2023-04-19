$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoLi = $(`<li>${novaTarefa}</li>`);
        $(novoLi).appendTo('ul');
        $('#nome-tarefa').val('');
        $("li").click(function(){
            $(this).addClass("tachado");
        })
    })
})