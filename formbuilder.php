<!doctype html>
<html>
    <head>
        <title>StealthSeminar - Form Builder</title>
        <style type="text/css">
            .myWebinarForm .strike { text-decoration: line-through; }
        </style>
    </head>
    <body>

        <p>&nbsp;</p>

        <h2>StealthSeminar Form Builder</h2>
        <p>
            Enter the form's ID in the box below and press "Grab". It will grab the form's HTML code, and automatically
            edit the placeholder tags and add appropriate id's and classes, to make it easier to work with. Then all you
            have to do is style it with your own CSS rules.
        </p>

        <p>
            <input type="text" name="webinarid" id="inputWebinarId" value="j7z3624mvo" /> <button id="btnGrab">Grab</button>
        </p>

        <textarea name="formsourcecode" id="formsourcecode" rows="30" cols="200"></textarea>

        <p>&nbsp;</p>

        <hr />

        <p>&nbsp;</p>

        <h2>Form Preview</h2>
        <p>This is a baseline preview of the above code.</p>

        <div id="formpreview"><strong>Click "Update Preview" to see the form live!</strong></div>

        <div style="margin-top:20px;text-align:center;">
            <button id="removePreview">Remove Preview</button> <button id="updatePreview">Update Preview</button>
        </div>
        <!-- ?id=j7z3624mvo -->

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <!-- jQuery 2.2.4 -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

        <!-- my custom StealthSeminar jQuery library -->
        <script type="text/javascript" src="lib/js/jquery.StealthSeminar.js"></script>

        <!-- my custom StealthSeminar Form Builder library -->
        <script type="text/javascript" src="lib/js/jquery.formbuilder.js"></script>

        <script>
        // Document Ready
        $(function(){
            setDebugMode(true);
            $('button#btnGrab').click(function(){
                var grabId = $('input#inputWebinarId').val();
                console.log('Grabbing ID: ' + grabId);

                updateFormBuilderTextarea(grabId);
            });

            $('button#removePreview').click(function(){
                console.log('Removing Preview');
                var previewDiv = $('div#formpreview');
                previewDiv.html('');

            });

            $('button#updatePreview').click(function(){
                console.log('Updating Preview');

                var grabId = $('input#inputWebinarId').val();

                var previewDiv = $('div#formpreview');
                previewDiv.html('');

                var textareaSource = $('textarea#formsourcecode').val();
                previewDiv.html(textareaSource);

                updateFormBuilderLivePreviewCounts(grabId);
            });

            $('button#decodeTextarea').click(function(){
                decodeTextarea();
            });

        });
        </script>
        <!--<script type="text/javascript" src="lib/js/script.js"></script>-->

    </body>
</html>
