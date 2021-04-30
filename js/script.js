
$( document ).ready(function() {

    //saison Text
    $( "form" ).on('input', '#saison', function() {
        // console.log(this.value);
        $('#ph_saison').text(this.value);
    });

    //Team Color Style
    $( "form" ).on('input', '#color_style', function() {
        $('.color_style').css('background-color', this.value);
    });

    function createFormation(){
        var formation = this.value.split("-");
        // console.log(formation);

        // evtl. alten löschen
        $('div.formation #clone-container').remove();

        formation.forEach(playerAnz => {
            // console.log(playerAnz);
            //reieh anlegen
            $('#helper>.row').clone().appendTo('#helper>#clone-container');
            //für jede reihe
            for (let i = 0; i < playerAnz; i++) {
                // console.log(i)
                $('#helper>#player-container-helper').clone().appendTo('#helper>#clone-container>.row:last-of-type');
            }
        });
        
        //anzeigen
        $('div.formation').removeClass('d-none');
        $('#helper #clone-container').clone().prependTo('div.formation');

        //und helper leeren
        $('#helper #clone-container').empty();
    }

    //formation change
    $("form").on('change', '#formation', createFormation);


    function dateiauswahl(evt) {
        var f = evt.target.files[0]; // FileList object
        var targetName = evt.target.name; 
    
        // nur Bild-Dateien
        if (!f.type.match('image.*')) {
            return;
        }
        var reader = new FileReader();

        reader.onload = (function(theFile) {
          return function(e) {
            // erzeuge Thumbnails.
            var vorschau = document.createElement('img');
            vorschau.className = 'mx-auto d-block img-fluid';
            vorschau.src   = e.target.result;
            vorschau.title = theFile.name;
            //div leeren und bild einfügen
            $('.'+targetName).empty().append(vorschau);
          };
        })(f);

        // Bilder als Data URL auslesen.
        reader.readAsDataURL(f);
    }
    // Auf neue Auswahl reagieren und gegebenenfalls Funktion dateiauswahl neu ausführen.
    $('input[type="file"].img-file').on('change', dateiauswahl);


    function dateiauswahlBackground(evt) {
        var f = evt.target.files[0]; // FileList object
        var targetName = evt.target.name; 
    
        // nur Bild-Dateien
        if (!f.type.match('image.*')) {
            return;
        }
        var reader = new FileReader();

        reader.onload = (function(theFile) {
          return function(e) {
              console.log(e.target.result)
              $('#bg-img').css('background-image', "url(" + e.target.result + ")")
          };
        })(f);

        // Bilder als Data URL auslesen.
        reader.readAsDataURL(f);
      }
    $('input[type="file"].img-file-bg').on('change', dateiauswahlBackground);
    

    // $("div.formation").on('click', '.player-pic-wrapper', function() {
    //     console.log('click player pic wrapper')
    //     let player = ($(this).children('input[type="file"].player-pic'));
    //     player.click();
    // });

    $('div.formation').on('change', 'input[type="file"].player-pic', function(e){
        console.log('player bild gewählt', e)
        var f = e.target.files[0]; // FileList object
        var targetName = e.target; 
    
        // nur Bild-Dateien
        if (!f.type.match('image.*')) {
            return;
        }
        var reader = new FileReader();

        reader.onload = (function(theFile) {
          return function(e) {
            console.log(targetName)
            //div leeren und bild einfügen
            $(targetName).nextAll('img').first().attr("src", e.target.result)
          };
        })(f);

        // Bilder als Data URL auslesen.
        reader.readAsDataURL(f);
    });

});

function changePlayerPic(e){
    // console.log(e.firstChild.nextElementSibling)
    e.firstChild.nextElementSibling.click();
}
