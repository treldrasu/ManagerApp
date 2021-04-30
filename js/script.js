
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
        console.log(formation);

        // evtl. alten löschen
        $('div.formation #clone-container').remove();

        formation.forEach(playerAnz => {
            console.log(playerAnz);
            //reieh anlegen
            $('#helper>.row').clone().appendTo('#helper>#clone-container');
            //für jede reihe
            for (let i = 0; i < playerAnz; i++) {
                console.log(i)
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
    
});
