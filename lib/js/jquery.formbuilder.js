
    function updateFormBuilderTextarea(id, selector)
    {
        if ( id === undefined ) {
            console.log('ID Not Found. Abort!');
            return false;
        }

        var url = getProxyUrl(id);
        console.log('AJAX Url: ' + url);

        $.ajax({
            url: url,
            type: 'GET',

            success: function(data, textStatus, jqXHR) {

                var sel = 'form[action^="?id=' + id + '"]';     // default selector

                if ( selector !== undefined ) {
                    console.log('Selector overridden: ' + selector);
                    sel = selector;
                }

                console.log('Remote Selector: ' + sel);

                var html = $($(data).find(sel).attr('id', 'webinar-1').addClass('myWebinarForm')[0].outerHTML);  // gets only the forms html code, add id and class, and Keeps DOM

                var formAction = $(html).attr('action', 'http://www.onlinemeetingnow.com/register/?id=' + id);     // set form's action url to our process

                var options = $(html).find('input[name="date_option"]').closest('p').addClass('webinarOption');    // finds p surrounding each option and adds class

                var submitBtn = $(html).find('input[type="submit"]').attr('value', 'Submit');   // fix because submit button is empty

                var p = $(html).find('p.webinarOption');    // get option wraps

                var optionData = [];

                $(p).each(function(i){
                    var strike = $(this).find('.strike');

                    var seatsTotal = strike.html('<span class="webinarSeatsTotal"></span>');
                    var seatsLeft = $(this).find('.strike')[0].nextSibling.nodeValue = ' spots left';
                    var elSeatsLeft = $('<span class="webinarSeatsLeft"></span>').insertAfter(strike);

                    var temp = document.createTextNode(' ');    // hack to add a space
                    $(temp).insertBefore(elSeatsLeft);          // hack to add a space

                    var eventTime = $(this).find('input[name="date_option"]')[0].nextSibling.nodeValue = '';    // remove event time text
                    var elEventTime = $('<span class="webinarEventTime"></span>').insertAfter( $(this).find('input[name="date_option"]') );
                    //console.log('(' + i + ')Time: [' + eventTime + ']');

                    optionData.push({
                        "available" : seatsLeft,
                        "total" : seatsTotal,
                        "time" : eventTime
                    });

                });

                var text = html[0].outerHTML;
                text = text.replace(/&amp;/g, '&');
                updateTextArea( 'formsourcecode', text );

            },

            error: function(jqXHR, textStatus, errorThrown) {
                // error
                console.log('AJAX Failed: ' + errorThrown);
            },

            complete: function() {
                // complete
            }
        });
    }


    function updateFormBuilderLivePreviewCounts(id, selector)
    {
        if ( id === undefined ) {
            console.log('ID Not Found. Abort!');
            return false;
        }

        var url = getProxyUrl(id);
        console.log('AJAX Url: ' + url);

        $.ajax({
            url: url,
            type: 'GET',

            success: function(data, textStatus, jqXHR) {
                //manipulateSource( data , id );
                var obj = $(data); //$.parseHTML(source);
                var sel = 'form[action^="?id=' + id + '"]';     // default selector

                if ( selector !== undefined ) {
                    console.log('Selector overridden: ' + selector);
                    sel = selector;
                }

                console.log('Remote Selector: ' + sel);
                //return false;


                var html = $($(data).find(sel).attr('id', 'webinar-1').addClass('myWebinarForm')[0].outerHTML);  // gets only the forms html code, add class, and Keeps DOM

                var form = $(html).find('input[name="date_option"]').closest('p').addClass('webinarOption');    // html

                var p = $(html).find('p.webinarOption');    // html

                var optionData = [];

                $(p).each(function(i){
                    var strike = $(this).find('.strike');
                    //var seatsTotal = $(this).find('.strike').text().trim();
                    var seatsTotal = strike.text().trim();
                    //console.log('(' + i + ')Total: ' + seatsTotal);

                    //var seatsLeft = $(this).find('.strike')[0].nextSibling.nodeValue.match(/\d+/)[0];
                    var seatsLeft = strike[0].nextSibling.nodeValue.match(/\d+/)[0];
                    //console.log('(' + i + ')Left: ' + seatsLeft);

                    var eventTime = $(this).find('input[name="date_option"]')[0].nextSibling.nodeValue.trim();
                    //console.log('(' + i + ')Time: [' + eventTime + ']');

                    optionData.push({
                        "available" : seatsLeft,
                        "total" : seatsTotal,
                        "time" : eventTime
                    });

                });

                $('.webinarOption').each(function(index, element) {
                    var objTotal = $(element).find('.webinarSeatsTotal').text( optionData[index]['total'] );
                    var objLeft  = $(element).find('.webinarSeatsLeft').text( optionData[index]['available'] );
                    var objTime  = $(element).find('.webinarEventTime').text( optionData[index]['time'] );
                });

            },

            error: function(jqXHR, textStatus, errorThrown) {
                // error
                console.log('AJAX Failed: ' + errorThrown);
            },

            complete: function() {
                // complete
            }
        });
    }
