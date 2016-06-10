    /*
     * This is just a library for fetching information from StealthSeminar webinar pages
     * You must also have script.js to actually use this library
     */

    var proxyUrl = 'proxy.php?id=';
    var consoleHolder = console;    // store console somewhere safe. keep above the console reset code!
    var isDebug = false;        // leave false - use setDebugMode(true/false) to toggle

    // leave this, it turns on/off debug mode console
    function setDebugMode(bool)
    {
        if(!bool) {
            consoleHolder = console;
            console = {};
            console.log = function(){};
        } else {
            console = consoleHolder;
        }
    }

    // set debug mode to flag at top
    setDebugMode(isDebug);

    var getProxyUrl = function getProxyUrl(id) {
        return proxyUrl + id;
    }

    // modified function to get parameter from url (either current url or string)
    var getUrlParameter = function getUrlParameter(sParam, sUrl) {
        var url = (sUrl === undefined) ? window.location.search.substring(1) : sUrl.split('?')[1];

        var sPageURL = decodeURIComponent(url),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    // Just for debugging - but left in case we need it again
    function updateTextArea(textId, source)
    {
        var textarea = $('textarea#' + textId);
        textarea.val(source);
        console.log('added source to textarea');
    }

    // grabs 'id' from the form (your ripped copy)
    function getIdFromForm(selector)
    {
        // failsafe default selector
        if (selector === undefined) {
            console.log('using failsafe selector');
            selector = 'form[action^="http://www.onlinemeetingnow.com/register/?id="]';
        }

        console.log('Selector: ' + selector);
        var form = $(selector);
        var action = form.attr('action');
        if ( action === undefined) {
            console.log('Unable to find form! Please check your selector.');
            return false;
        }
        var id = getUrlParameter('id', action);

        if (id === undefined) {
            console.log('ID not found in form action url, trying "event_id_z".');
            id = $(form).find('input[name="event_id_z"]').val();
            if ( id === undefined ) {
                console.log('Could not determine form ID. Aborting!');
                return false;
            }
        }

        return id;

    }

    // updates the placeholder tags on the page for webinarSeatsTotal, webinarSeatsLeft, and webinarEventTime
    function replacePlaceholderTags(arrEventData)
    {
        $('.webinarOption').each(function(index, element) {
            var objTotal = $(element).find('.webinarSeatsTotal').text( arrEventData[index]['total'] );
            var objLeft  = $(element).find('.webinarSeatsLeft').text( arrEventData[index]['available'] );
            var objTime  = $(element).find('.webinarEventTime').text( arrEventData[index]['time'] );
        });
    }

    // AJAX Get webinar source code (via proxy) and pass to 'manipulateSource'
    function updateWebinarInfo(id, selector)
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
                manipulateSource( data , id );
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

    function manipulateSource(source, id, selector)
    {
        var sel = 'form[action^="?id=' + id + '"]';     // default selector

        if ( selector !== undefined ) {
            console.log('Selector overridden: ' + selector);
            sel = selector;
        }

        console.log('Remote Selector: ' + sel);
        //return false;

        var html = $($(source).find(sel).attr('id', 'webinar-1').addClass('myWebinarForm')[0].outerHTML);  // gets only the forms html code, add class, and Keeps DOM

        var options = $(html).find('input[name="date_option"]').closest('p').addClass('webinarOption');    // html

        var p = $(html).find('p.webinarOption');    // html

        var optionData = [];

        $(p).each(function(i){

            var seatsTotal = $(this).find('.strike').text().trim();
            //console.log('(' + i + ')Total: ' + seatsTotal);

            var seatsLeft = $(this).find('.strike')[0].nextSibling.nodeValue.match(/\d+/)[0];
            //console.log('(' + i + ')Left: ' + seatsLeft);

            var eventTime = $(this).find('input[name="date_option"]')[0].nextSibling.nodeValue.trim();
            //console.log('(' + i + ')Time: [' + eventTime + ']');

            optionData.push({
                "available" : seatsLeft,
                "total" : seatsTotal,
                "time" : eventTime
            });

        });

        replacePlaceholderTags(optionData);
    }
