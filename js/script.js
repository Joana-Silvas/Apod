function Start() {
    var data = $('#data').val();
    $.ajax({
        url: (`https://api.nasa.gov/planetary/apod?api_key=6VfM3A1rPxPeG8lEWa3AYq1accPX2cJyAtLvGiQ9&date=${data}`),
        success: function(dados) {
            insereDados(dados)
        },
        error: function(request, error) {
            alert(request.responseText);
        }
    })
}
function insereDados(dado) {
    var video = $('#video');
    var imagem = $('#imag');
    var urlMidia = (dado.url);
    var tipoMedia = JSON.stringify(dado.media_type);
    $('#titulo').text(dado.title);
    $('#paragrafo').text(dado.explanation);
    if (tipoMedia == '"image"') {
        video.addClass('hide');
        imagem.attr('src', urlMidia);
        imagem.removeClass('hide');
    } else {
        video.removeClass('hide')
        video.attr('src', urlMidia);
        imagem.addClass('hide');
    }
    console.log("you are the music in me...")
}
document.addEventListener("DOMContentLoaded", function() {
    Start()
})