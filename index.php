<!doctype html>
<html>
    <head>
        <title>StealthSeminar - Demo</title>
        <style type="text/css">
            .myWebinarForm .strike { text-decoration: line-through; }
        </style>
    </head>
    <body>

        <h1>Demo</h1>

        <div class="wrap">
            <p>This is a demo of how the Stealth Seminar jQuery library works.</p>
            <p align="justify">
                The following form was ripped using the form builder. I have used some CSS to demonstrate how
                to modify the look and feel of the form without touching the html. The form submits to 'process.php',
                which uses cURL and just passes all the form's POST data through to your StealthWebinar form. 'process.php'
                has a default thank you page (defined in 'process.php'), and looks for a 'redirect_override' tag to
                control the redirect URL for each individual form. If none is found, it will use the default thank you page.
            </p>

            <p>&nbsp;</p>

            <!-- you should always have some sort of "wrap" around your content -->
            <!-- wrap around our ripped StealthWebinar form code (from form builder) -->
            <div id="stealthWebinarForm" style="border:1px solid black;">
                <!-- start copied code from formbuilder -->
                <form action="http://www.onlinemeetingnow.com/register/?id=j7z3624mvo" method="post" id="webinar-1" class="myWebinarForm">
                    <input type="hidden" name="listname" value="awlist4306539">


                    <p class="webinarOption">&nbsp;<input name="date_option" type="radio" value="option1|1465081233" checked=""><span class="webinarEventTime"></span><br><small><em>(Only <strong><span class="strike"><span class="webinarSeatsTotal"></span></span> <span class="webinarSeatsLeft"></span> seats left</strong> for this event time.)</em></small></p>

                    <p class="webinarOption">&nbsp;<input name="date_option" type="radio" value="option2|1465160433"><span class="webinarEventTime"></span><br><small><em>(Only <strong><span class="strike"><span class="webinarSeatsTotal"></span></span> <span class="webinarSeatsLeft"></span> seats left</strong> for this event time.)</em></small></p>

                    <p class="webinarOption">&nbsp;<input name="date_option" type="radio" value="option3|1465246833"><span class="webinarEventTime"></span><br><em><small>(Only <strong><span class="strike"><span class="webinarSeatsTotal"></span></span> <span class="webinarSeatsLeft"></span> seats left</strong> for this event time.)</small></em></p>

                    <p><label>First Name</label><br><input class="input" type="text" name="name" id="name"></p>
                    <p><label>Primary Email</label><br><input class="input" type="text" name="email" id="email"></p>
                    <p><input class="submit" value="Submit" type="submit"></p>

                    <input type="hidden" name="meta_adtracking" value="Protecting Yourself from an IRS Revenue Officer">
                    <input type="hidden" name="meta_forward_vars" value="">
                    <input type="hidden" name="meta_required" value="name,email">
                    <input type="hidden" name="meta_tooltip" value="">
                    <input type="hidden" name="custom date time" value="[[datetime]] (Eastern)">
                    <input type="hidden" name="custom event id" value="j7z3624mvo">

                    <input type="hidden" name="redirect" value="https://google.com">
                    <input type="hidden" name="meta_redirect_onlist" value="https://yahoo.com">

                    <input type="hidden" name="formredirect_z" id="formredirect_z" value="http://www.aweber.com/scripts/addlead.pl">
                    <input type="hidden" name="event_id_z" id="event_id_z" value="j7z3624mvo">
                    <input type="hidden" name="tz_z" id="tz_z" value="US/Eastern">
                    <input type="hidden" name="timestamp_z" id="timestamp_z" value="1465081233">
                    <input type="hidden" name="as_z" id="as_z" value="">
                    <input type="hidden" name="title_z" id="title_z" value="Protecting Yourself from an IRS Revenue Officer">
                    <input type="hidden" name="replay_duration_z" id="replay_duration_z" value="48">
                    <input type="hidden" name="language_z" id="language_z" value="Array">
                    <input type="hidden" name="host_z" id="host_z" value="onlinemeetingnow7.com">
                    <input type="hidden" name="replay_notify_z" id="replay_notify_z" value="1">
                    <input type="hidden" name="ver" id="ver" value="3.7">

                </form>
                <!-- end copied code from formbuilder -->
            </div>

        </div>

        <p align="center">&copy; Copyright 2016. Created by <a href="https://www.upwork.com/freelancers/~0132528fbecb9fff43">Wade Shuler</a></p>

        <!-- jQuery 2.2.4 -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

        <!-- my custom StealthSeminar jQuery library -->
        <script type="text/javascript" src="lib/js/jquery.StealthSeminar.js"></script>

        <!-- page specific jQuery -->
        <!-- you can put this in your own 'script.js' file and include after the StealthSeminar library -->
        <script>
        // Document Ready
        $(function(){
            setDebugMode(true);                             // turn on debugging
            var id = getIdFromForm('.myWebinarForm');       // get the StealthWebinar ID
            updateWebinarInfo(id, '.myWebinarForm');        // fetch real form info and replace on page
        });
        </script>

    </body>
</html>
