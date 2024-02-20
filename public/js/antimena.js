/*
 * Plugin Name: Antimena
 * Plugin URI: https://palleon.website/js-version/
 * Version: 1.2.2
 * Description: Image Generator Addon For Palleon Javascript Image Editor
 * Author URI: http://codecanyon.net/user/egemenerd
 * License: http://codecanyon.com/licenses
 */

function antimena(selector, canvas, lazyLoadInstance) {
    "use strict";

    var usePHP = false; // If false, you can add your API keys directly into the following variables but this is not recommended. You should store your API keys on the server side to prevent them from being stolen. "getApiKeys()" function will make a request to the "get_api_keys.php" file. The PHP function will only respond if the request comes from the same domain. You can add your API keys by editing the PHP file.
    var openaiApiKey = "";
    var stabilityaiApiKey =
        "";
    var clipdropApiKey =
        "";

    /* Choose OpenAI Model */

    var openaiModel = "dall-e-3"; // This is the model you’re generating with. 'dall-e-2' or 'dall-e-3'

    /* Choose Stability.ai Engines */

    var saiEngine = "stable-diffusion-xl-1024-v1-0"; // stable-diffusion-xl-1024-v0-9, stable-diffusion-xl-1024-v1-0, stable-diffusion-v1-6, stable-diffusion-xl-beta-v2-2-2
    var saiInpaintingEngine = "stable-inpainting-512-v2-0"; // stable-inpainting-v1-0, stable-inpainting-512-v2-0

    if (usePHP === true) {
        getApiKeys();
    } else {
        main_html();
        add_new_html();
        adjust_html();
        palleon_controls();
    }

    /* Send a request to PHP function to get the API keys. */
    function getApiKeys() {
        $.ajax({
            url: "./php/get_api_keys.php",
            type: "GET",
            success: function (data) {
                data = $.parseJSON(data);
                if (data.stabilityai !== undefined && data.stabilityai != "") {
                    stabilityaiApiKey = data.stabilityai;
                }
                if (data.openai !== undefined && data.openai != "") {
                    openaiApiKey = data.openai;
                }
                if (data.clipdrop !== undefined && data.clipdrop != "") {
                    clipdropApiKey = data.clipdrop;
                }
                main_html();
                add_new_html();
                adjust_html();
                palleon_controls();
            },
            error: function (jqXHR, error, errorThrown) {
                if (jqXHR.status) {
                    toastr.error(
                        palleonParams.wrong,
                        jqXHR.status + " - " + palleonParams.error
                    );
                } else {
                    toastr.error(palleonParams.wrong, palleonParams.error);
                }
            },
        });
    }

    ///////////////* OPENAI *///////////////

    // Enable & disable generate buttons
    selector.on("input paste", "#oai-prompt", function () {
        var val = $(this).val();
        if (val.length >= 1) {
            selector.find("#oai-image-generate").prop("disabled", false);
        } else {
            selector.find("#oai-image-generate").prop("disabled", true);
        }
    });

    selector.on("input paste", "#oai-edit-prompt", function () {
        var val = $(this).val();
        if (val.length >= 1) {
            selector.find("#oai-edit").prop("disabled", false);
        } else {
            selector.find("#oai-edit").prop("disabled", true);
        }
    });

    /* GENERATE NEW IMAGE */
    selector.on("click", "#oai-image-generate", function () {
        if (openaiApiKey != "") {
            var prompt = selector.find("#oai-prompt").val();
            if (prompt.length >= 1) {
                var answer = window.confirm(
                    "Are you sure you want to send the request?"
                );
                if (answer) {
                    var size = selector
                            .find("#oai-size")
                            .find(":selected")
                            .val(),
                        data = {
                            prompt: prompt,
                            size: size,
                            n: 1,
                            response_format: "b64_json",
                        };
                    if (openaiModel == "dall-e-3") {
                        var quality = selector
                            .find("#oai-quality")
                            .find(":selected")
                            .val();
                        var style = selector
                            .find("#oai-style")
                            .find(":selected")
                            .val();
                        data = {
                            model: "dall-e-3",
                            prompt: prompt,
                            size: size,
                            quality: quality,
                            style: style,
                            n: 1,
                            response_format: "b64_json",
                        };
                    }
                    $.ajax({
                        url: "https://api.openai.com/v1/images/generations",
                        data: JSON.stringify(data),
                        contentType: false,
                        processData: false,
                        type: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + openaiApiKey,
                        },
                        beforeSend: function (xhr) {
                            selector
                                .find("#modal-ai-image")
                                .css("pointer-events", "none");
                            selector
                                .find("#antimena-loader-4")
                                .css("display", "flex");
                        },
                        success: function (data) {
                            if (data) {
                                var images = data.data;
                                if (images !== undefined && images != "") {
                                    var rand = new Date().getTime();
                                    var output = "";
                                    $.each(images, function (index, val) {
                                        rand = rand + index;
                                        var base64 = val.b64_json;
                                        output +=
                                            '<div class="palleon-masonry-item"><div class="palleon-masonry-item-inner"><div class="palleon-img-wrap"><img id="oai-' +
                                            rand +
                                            '" src="data:image/png;base64,' +
                                            base64 +
                                            '" /></div><div class="antimena-img-card"><div class="antimena-img-card-inner"><div class="antimena-img-btns"><button type="button" class="palleon-btn btn-full antimena-img-download" autocomplete="off" data-seed="oai-' +
                                            rand +
                                            '"><span class="material-icons arrow">download</span>Download</button><button type="button" class="palleon-btn btn-full antimena-img-save" autocomplete="off" data-seed="oai-' +
                                            rand +
                                            '"><span class="material-icons arrow">save</span>Save</button><button type="button" class="palleon-btn btn-full primary antimena-img-select" autocomplete="off" data-seed="oai-' +
                                            rand +
                                            '"><span class="material-icons arrow">done</span>Select</button></div></div></div></div></div>';
                                    });
                                    selector.find("#oai-images").html("");
                                    selector
                                        .find("#oai-images")
                                        .removeClass(
                                            "antimena-grid-placeholder"
                                        );
                                    selector.find("#oai-images").html(output);
                                    toastr.success(
                                        "Image processing is complete.",
                                        palleonParams.success
                                    );
                                } else {
                                    toastr.error(
                                        palleonParams.wrong,
                                        palleonParams.error
                                    );
                                }
                            } else {
                                toastr.error(
                                    palleonParams.wrong,
                                    palleonParams.error
                                );
                            }
                        },
                        error: function (jqXHR, error, errorThrown) {
                            if (jqXHR.status && jqXHR.responseText) {
                                var parsejson = JSON.parse(jqXHR.responseText);
                                toastr.error(
                                    parsejson.message,
                                    jqXHR.status + " " + palleonParams.error
                                );
                            } else if (jqXHR.status) {
                                toastr.error(palleonParams.wrong, jqXHR.status);
                            } else {
                                toastr.error(
                                    palleonParams.wrong,
                                    palleonParams.error
                                );
                            }
                            selector
                                .find("#modal-ai-image")
                                .css("pointer-events", "auto");
                            selector
                                .find("#antimena-loader-4")
                                .css("display", "none");
                        },
                    }).done(function (response) {
                        selector
                            .find("#modal-ai-image")
                            .css("pointer-events", "auto");
                        selector
                            .find("#antimena-loader-4")
                            .css("display", "none");
                    });
                }
            } else {
                toastr.error(
                    "Prompt field cannot be empty.",
                    palleonParams.error
                );
            }
        } else {
            toastr.error("OpenAI API key is required!", palleonParams.error);
        }
    });

    /* IMAGE EDIT */
    selector.on("click", "#oai-edit", function () {
        var prompt = selector.find("#oai-edit-prompt").val();
        if (prompt.length >= 1) {
            if (canvas.width != canvas.height) {
                toastr.error("Image must be square.", palleonParams.error);
                return;
            }
            var answer = window.confirm(
                "Are you sure you want to regenerate the image?"
            );
            if (answer) {
                selector.find("#palleon-canvas-loader").css("display", "flex");
                canvas.clone(function (canvas) {
                    canvas.setZoom(1);
                    selector
                        .find("#palleon-resize-width")
                        .trigger("sizeChanged");
                    selector
                        .find("#palleon-resize-height")
                        .trigger("sizeChanged");
                    canvas.setWidth(
                        selector.find("#palleon-resize-width").data("size")
                    );
                    canvas.setHeight(
                        selector.find("#palleon-resize-height").data("size")
                    );
                    var size = selector.find("#oai-edit-size").val();
                    var image = canvas.toDataURL({
                        format: "png",
                        enableRetinaScaling: false,
                    });
                    var blob = aiDataURLtoBlob(image);
                    var file = new File([blob], "image.png");
                    var form = new FormData();
                    form.append("image", file);
                    form.append("prompt", prompt);
                    form.append("size", size);
                    form.append("response_format", "b64_json");
                    form.append("n", 1);
                    fetch("https://api.openai.com/v1/images/edits", {
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + openaiApiKey,
                        },
                        body: form,
                        redirect: "follow",
                    })
                        .then(oaiHandleErrors)
                        .then((response) => response.json())
                        .then((data) => {
                            $(document).trigger("loadBase64Img", [
                                "data:image/png;base64," +
                                    data.data[0].b64_json,
                                "",
                            ]);
                        })
                        .catch((err) => {
                            toastr.error(err, palleonParams.error);
                            selector
                                .find("#palleon-canvas-loader")
                                .css("display", "none");
                        });
                    canvas.dispose();
                });
            }
        } else {
            toastr.error("Prompt field cannot be empty.", palleonParams.error);
        }
    });

    /* IMAGE VARIATION */
    selector.on("click", "#oai-variation", function () {
        if (canvas.width != canvas.height) {
            toastr.error("Image must be square.", palleonParams.error);
            return;
        }
        var canvasWidth = selector.find("#palleon-resize-width").val();
        if (canvasWidth != 1024 && canvasWidth != 512 && canvasWidth != 256) {
            toastr.error(
                "Valid image dimentions are 1024x1024px, 512x512px or 256x256px.",
                palleonParams.error
            );
            return;
        }
        var answer = window.confirm(
            "Are you sure you want to reimagine your image?"
        );
        if (answer) {
            selector.find("#palleon-canvas-loader").css("display", "flex");
            canvas.clone(function (tempCanvas) {
                var tempObjects = tempCanvas.getObjects();
                tempObjects
                    .filter((element) => element.objectType != "BG")
                    .forEach((element) => tempCanvas.remove(element));
                tempCanvas.setZoom(1);
                selector.find("#palleon-resize-width").trigger("sizeChanged");
                selector.find("#palleon-resize-height").trigger("sizeChanged");
                tempCanvas.setWidth(
                    selector.find("#palleon-resize-width").data("size")
                );
                tempCanvas.setHeight(
                    selector.find("#palleon-resize-height").data("size")
                );
                var size = tempCanvas.width + "x" + tempCanvas.width;
                var image = tempCanvas.toDataURL({
                    format: "png",
                    enableRetinaScaling: false,
                });
                var blob = aiDataURLtoBlob(image);
                var file = new File([blob], "image.png");
                var form = new FormData();
                form.append("image", file);
                form.append("size", size);
                form.append("response_format", "b64_json");
                form.append("n", 1);

                fetch("https://api.openai.com/v1/images/variations", {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + openaiApiKey,
                    },
                    body: form,
                    redirect: "follow",
                })
                    .then(oaiHandleErrors)
                    .then((response) => response.json())
                    .then((data) => {
                        selector
                            .find("#palleon-canvas-img")
                            .attr(
                                "src",
                                "data:image/png;base64," + data.data[0].b64_json
                            );
                        selector
                            .find("#palleon-canvas-img-wrap")
                            .imagesLoaded(function () {
                                var imgurl = selector
                                    .find("#palleon-canvas-img")
                                    .attr("src");
                                fabric.Image.fromURL(imgurl, function (img) {
                                    canvas.setBackgroundImage(
                                        img,
                                        canvas.renderAll.bind(canvas),
                                        {
                                            objectType: "BG",
                                            mode: "image",
                                            top: canvas.backgroundImage["top"],
                                            left: canvas.backgroundImage[
                                                "left"
                                            ],
                                            scaleX: canvas.backgroundImage[
                                                "scaleX"
                                            ],
                                            scaleY: canvas.backgroundImage[
                                                "scaleY"
                                            ],
                                            selectable: false,
                                            angle: canvas.backgroundImage[
                                                "angle"
                                            ],
                                            originX:
                                                canvas.backgroundImage[
                                                    "originX"
                                                ],
                                            originY:
                                                canvas.backgroundImage[
                                                    "originY"
                                                ],
                                            lockMovementX: true,
                                            lockMovementY: true,
                                            lockRotation: true,
                                            erasable: true,
                                        },
                                        { crossOrigin: "anonymous" }
                                    );
                                    setTimeout(function () {
                                        selector
                                            .find("#palleon-canvas-loader")
                                            .hide();
                                    }, 500);
                                });
                            });
                    })
                    .catch((err) => {
                        toastr.error(err, palleonParams.error);
                        selector
                            .find("#palleon-canvas-loader")
                            .css("display", "none");
                    });
                tempCanvas.dispose();
            });
        }
    });

    ///////////////* STABILITY.AI *///////////////

    // Check account balance button
    selector.on("click", "#sai-balance-check", function () {
        var button = $(this);
        $.ajax({
            url: "https://api.stability.ai/v1/user/balance",
            type: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + stabilityaiApiKey,
                "Stability-Client-ID": "Antimena", // Optional
                "Stability-Client-Version": "1.0", // Optional
            },
            beforeSend: function (xhr) {
                button.addClass("loading");
            },
            success: function (data) {
                if (data) {
                    var credits =
                        "You have " +
                        data.credits.toFixed(2) +
                        " credits left.";
                    selector.find("#sai-balance").html(credits);
                } else {
                    toastr.error(palleonParams.wrong, palleonParams.error);
                }
            },
            error: function (jqXHR, error, errorThrown) {
                if (jqXHR.status) {
                    toastr.error(
                        palleonParams.wrong,
                        jqXHR.status + " - " + palleonParams.error
                    );
                } else {
                    toastr.error(palleonParams.wrong, palleonParams.error);
                }
                button.removeClass("loading");
            },
        }).done(function (response) {
            button.removeClass("loading");
        });
    });

    // Image Count
    selector.on("change", "#sai-samples", function () {
        if (selector.find("#sai-images.antimena-grid-placeholder").length) {
            var count = $(this).val(),
                item = selector.find(
                    "#sai-images.antimena-grid-placeholder > .palleon-masonry-item:first-child"
                );
            selector.find("#sai-images.antimena-grid-placeholder").html("");
            for (var i = 0; i < count; i++) {
                item.clone().appendTo("#sai-images.antimena-grid-placeholder");
            }
        } else {
            return;
        }
    });

    // Enable & disable generate buttons
    selector.on("input paste", "#sai-prompt", function () {
        var val = $(this).val();
        if (val.length >= 1) {
            selector.find("#sai-image-generate").prop("disabled", false);
        } else {
            selector.find("#sai-image-generate").prop("disabled", true);
        }
    });

    selector.on("input paste", "#sai-imgtoimg-prompt", function () {
        var val = $(this).val();
        if (val.length >= 1) {
            selector.find("#sai-imgtoimg-generate").prop("disabled", false);
        } else {
            selector.find("#sai-imgtoimg-generate").prop("disabled", true);
        }
    });

    /* GENERATE NEW IMAGE */

    // Generate button
    selector.on("click", "#sai-image-generate", function () {
        var prompt = selector.find("#sai-prompt").val();
        if (prompt.length >= 1) {
            var answer = window.confirm(
                "Are you sure you want to send the request?"
            );
            if (answer) {
                var negativePrompt = selector
                        .find("#sai-negative-prompt")
                        .val(),
                    size = selector.find("#sai-size").find(":selected").val(),
                    seed = selector.find("#sai-seed").val(),
                    samples = parseInt(selector.find("#sai-samples").val()),
                    presets = selector
                        .find("#sai-style-presets")
                        .find(":selected")
                        .val(),
                    cfg = parseInt(selector.find("#sai-cfg").val()),
                    steps = parseInt(selector.find("#sai-steps").val());
                var validSizes = [
                    ["512x512", [512, 512]],
                    ["896x512", [896, 512]],
                    ["768x512", [768, 512]],
                    ["683x512", [683, 512]],
                    ["640x512", [640, 512]],
                    ["512x640", [512, 640]],
                    ["512x683", [512, 683]],
                    ["512x768", [512, 768]],
                    ["512x896", [512, 896]],
                    ["1024x1024", [1024, 1024]],
                    ["1152x896", [1152, 896]],
                    ["1216x832", [1216, 832]],
                    ["1344x768", [1344, 768]],
                    ["1536x640", [1536, 640]],
                    ["640x1536", [640, 1536]],
                    ["768x1344", [768, 1344]],
                    ["832x1216", [832, 1216]],
                    ["896x1152", [896, 1152]],
                ];
                var width = 512;
                var height = 512;
                $.each(validSizes, function (index, val) {
                    if (val[0] == size) {
                        width = val[1][0];
                        height = val[1][1];
                        return false;
                    }
                });
                var textPrompt = [
                    {
                        text: prompt,
                        weight: 1,
                    },
                ];
                if (negativePrompt != "") {
                    textPrompt = [
                        {
                            text: prompt,
                            weight: 1,
                        },
                        {
                            text: negativePrompt,
                            weight: -1.3,
                        },
                    ];
                }
                var data = {
                    text_prompts: textPrompt,
                    width: width,
                    height: height,
                    samples: samples,
                    cfg_scale: cfg,
                    steps: steps,
                };
                if (presets != "") {
                    data.style_preset = presets;
                }
                if (seed != "") {
                    data.seed = seed;
                }
                $.ajax({
                    url:
                        "https://api.stability.ai/v1/generation/" +
                        saiEngine +
                        "/text-to-image",
                    data: JSON.stringify(data),
                    contentType: false,
                    processData: false,
                    type: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + stabilityaiApiKey,
                        "Stability-Client-ID": "Antimena", // Optional
                        "Stability-Client-Version": "1.0", // Optional
                    },
                    beforeSend: function (xhr) {
                        selector
                            .find("#modal-ai-image")
                            .css("pointer-events", "none");
                        selector
                            .find("#antimena-loader-1")
                            .css("display", "flex");
                    },
                    success: function (data) {
                        if (data) {
                            var images = data.artifacts;
                            if (images !== undefined && images != "") {
                                var output = "";
                                $.each(images, function (index, val) {
                                    var status = val.finishReason;
                                    if (status == "ERROR") {
                                        output +=
                                            '<div class="palleon-masonry-item"><div class="palleon-masonry-item-inner"><div class="palleon-img-wrap error"><img src="./assets/ai-placeholder.png" /></div></div></div>';
                                    } else {
                                        var base64 = val.base64;
                                        var seed = val.seed;
                                        output +=
                                            '<div class="palleon-masonry-item"><div class="palleon-masonry-item-inner"><div class="palleon-img-wrap"><img id="' +
                                            seed +
                                            '" src="data:image/png;base64,' +
                                            base64 +
                                            '" /></div><div class="antimena-img-card"><div class="antimena-img-card-inner"><div class="antimena-img-seed-wrap"><span>Seed</span><input id="antimena-img-seed" class="palleon-form-field" type="text" value="' +
                                            seed +
                                            '" autocomplete="off" readonly></div><div class="antimena-img-btns"><button type="button" class="palleon-btn btn-full antimena-img-download" autocomplete="off" data-seed="' +
                                            seed +
                                            '"><span class="material-icons arrow">download</span>Download</button><button type="button" class="palleon-btn btn-full antimena-img-save" autocomplete="off" data-seed="' +
                                            seed +
                                            '"><span class="material-icons arrow">save</span>Save</button><button type="button" class="palleon-btn btn-full primary antimena-img-select" autocomplete="off" data-seed="' +
                                            seed +
                                            '"><span class="material-icons arrow">done</span>Select</button></div></div></div></div></div>';
                                    }
                                });
                                selector.find("#sai-images").html("");
                                selector
                                    .find("#sai-images")
                                    .removeClass("antimena-grid-placeholder");
                                selector.find("#sai-images").html(output);
                                selector
                                    .find("#sai-balance-check")
                                    .trigger("click");
                                toastr.success(
                                    "Image processing is complete.",
                                    palleonParams.success
                                );
                            } else {
                                toastr.error(
                                    palleonParams.wrong,
                                    palleonParams.error
                                );
                            }
                        } else {
                            toastr.error(
                                palleonParams.wrong,
                                palleonParams.error
                            );
                        }
                    },
                    error: function (jqXHR, error, errorThrown) {
                        if (jqXHR.status && jqXHR.responseText) {
                            var parsejson = JSON.parse(jqXHR.responseText);
                            toastr.error(
                                parsejson.message,
                                jqXHR.status + " " + palleonParams.error
                            );
                        } else if (jqXHR.status) {
                            toastr.error(palleonParams.wrong, jqXHR.status);
                        } else {
                            toastr.error(
                                palleonParams.wrong,
                                palleonParams.error
                            );
                        }
                        selector
                            .find("#modal-ai-image")
                            .css("pointer-events", "auto");
                        selector
                            .find("#antimena-loader-1")
                            .css("display", "none");
                    },
                }).done(function (response) {
                    selector
                        .find("#modal-ai-image")
                        .css("pointer-events", "auto");
                    selector.find("#antimena-loader-1").css("display", "none");
                });
            }
        } else {
            toastr.error("Prompt field cannot be empty.", palleonParams.error);
        }
    });

    /* REGENERATOR */

    // Generate button
    selector.on("click", "#sai-imgtoimg-generate", function () {
        var prompt = selector.find("#sai-imgtoimg-prompt").val();
        if (prompt.length >= 1) {
            var answer = window.confirm(
                "Are you sure you want to regenerate the image?"
            );
            if (answer) {
                var negativePrompt = selector
                        .find("#sai-imgtoimg-negative-prompt")
                        .val(),
                    presets = selector
                        .find("#sai-imgtoimg-style-presets")
                        .find(":selected")
                        .val(),
                    seed = selector.find("#sai-seed").val(),
                    strength = parseFloat(
                        selector.find("#sai-imgtoimg-strength").val()
                    ),
                    cfg = parseInt(selector.find("#sai-cfg").val()),
                    steps = parseInt(selector.find("#sai-steps").val()),
                    mask = "disable",
                    url =
                        "https://api.stability.ai/v1/generation/" +
                        saiEngine +
                        "/image-to-image",
                    image = "";
                if (selector.find("#sai-imgtoimg-mask").is(":checked")) {
                    mask = "enable";
                }
                if (mask == "enable") {
                    url =
                        "https://api.stability.ai/v1/generation/" +
                        saiInpaintingEngine +
                        "/image-to-image/masking";
                }

                canvas.clone(function (canvas) {
                    canvas.setZoom(1);
                    selector
                        .find("#palleon-resize-width")
                        .trigger("sizeChanged");
                    selector
                        .find("#palleon-resize-height")
                        .trigger("sizeChanged");
                    canvas.setWidth(
                        selector.find("#palleon-resize-width").data("size")
                    );
                    canvas.setHeight(
                        selector.find("#palleon-resize-height").data("size")
                    );
                    image = canvas.toDataURL({
                        format: "png",
                        enableRetinaScaling: false,
                    });
                    var blob = aiDataURLtoBlob(image);
                    var file = new File([blob], "image.png");

                    var form = new FormData();
                    form.append("init_image", file);
                    form.append("samples", 1);
                    form.append("cfg_scale", cfg);
                    form.append("steps", steps);
                    form.append("text_prompts[0][text]", prompt);
                    form.append("text_prompts[0][weight]", 1);
                    if (negativePrompt != "") {
                        form.append("text_prompts[1][text]", negativePrompt);
                        form.append("text_prompts[1][weight]", -1.3);
                    }
                    if (presets != "") {
                        form.append("style_preset", presets);
                    }
                    if (seed != "") {
                        form.append("seed", seed);
                    }
                    if (mask == "enable") {
                        form.append("mask_source", "INIT_IMAGE_ALPHA");
                    } else {
                        form.append("init_image_mode", "IMAGE_STRENGTH");
                        form.append("image_strength", strength);
                    }
                    $.ajax({
                        url: url,
                        data: form,
                        contentType: false,
                        processData: false,
                        crossDomain: true,
                        type: "POST",
                        headers: {
                            Accept: "application/json",
                            Authorization: "Bearer " + stabilityaiApiKey,
                            "Stability-Client-ID": "Antimena", // Optional
                            "Stability-Client-Version": "1.0", // Optional
                        },
                        beforeSend: function () {
                            selector
                                .find("#palleon-canvas-loader")
                                .css("display", "flex");
                        },
                        success: function (data) {
                            if (data) {
                                var images = data.artifacts;
                                if (images !== undefined && images != "") {
                                    $.each(images, function (index, val) {
                                        var base64 = val.base64;
                                        var seed = val.seed;
                                        selector
                                            .find("#sai-imgtoimg-seed")
                                            .val(data.seed);
                                        $(document).trigger("loadBase64Img", [
                                            "data:image/png;base64," + base64,
                                            seed,
                                        ]);
                                        return false;
                                    });
                                    selector
                                        .find("#sai-balance-check")
                                        .trigger("click");
                                    toastr.success(
                                        "Image processing is complete.",
                                        palleonParams.success
                                    );
                                } else {
                                    toastr.error(
                                        palleonParams.wrong,
                                        palleonParams.error
                                    );
                                }
                            } else {
                                toastr.error(
                                    palleonParams.wrong,
                                    palleonParams.error
                                );
                            }
                        },
                        error: function (jqXHR, error, errorThrown) {
                            if (jqXHR.status && jqXHR.responseText) {
                                var parsejson = JSON.parse(jqXHR.responseText);
                                toastr.error(
                                    parsejson.message,
                                    jqXHR.status + " " + palleonParams.error
                                );
                            } else if (jqXHR.status) {
                                toastr.error(palleonParams.wrong, jqXHR.status);
                            } else {
                                toastr.error(
                                    palleonParams.wrong,
                                    palleonParams.error
                                );
                            }
                            selector
                                .find("#palleon-canvas-loader")
                                .css("display", "none");
                        },
                    });
                    canvas.dispose();
                });
            }
        } else {
            toastr.error("Prompt field cannot be empty.", palleonParams.error);
        }
    });

    /* UPSCALER */

    selector.on("sizeChanged", "#palleon-resize-width", function () {
        selector.find("#sai-upscale-width").val($(this).val());
        selector.find("#sai-upscale-width").data("size", $(this).val());
        selector.find("#sai-upscale").prop("disabled", true);
    });

    selector.on("sizeChanged", "#palleon-resize-height", function () {
        selector.find("#sai-upscale-height").val($(this).val());
        selector.find("#sai-upscale-height").data("size", $(this).val());
        selector.find("#sai-upscale").prop("disabled", true);
    });

    selector.on("input paste", "#sai-upscale-width", function () {
        var val = $(this).val(),
            valHeight = selector.find("#sai-upscale-height").val(),
            height = selector.find("#sai-upscale-height").data("size"),
            width = $(this).data("size"),
            ratio = width / height;
        selector
            .find("#sai-upscale-height")
            .val(Math.round(this.value / ratio));
        if (val.length >= 1 && valHeight.length >= 1) {
            selector.find("#sai-upscale").prop("disabled", false);
        } else {
            selector.find("#sai-upscale").prop("disabled", true);
        }
    });

    selector.on("input paste", "#sai-upscale-height", function () {
        var val = $(this).val(),
            valWidth = selector.find("#sai-upscale-width").val(),
            height = $(this).data("size"),
            width = selector.find("#sai-upscale-width").data("size"),
            ratio = height / width;
        selector.find("#sai-upscale-width").val(Math.round(this.value / ratio));
        if (val.length >= 1 && valWidth.length >= 1) {
            selector.find("#sai-upscale").prop("disabled", false);
        } else {
            selector.find("#sai-upscale").prop("disabled", true);
        }
    });

    // Upscale button
    selector.on("click", "#sai-upscale", function () {
        var dataWidth = selector.find("#sai-upscale-width").data("size"),
            dataHeight = selector.find("#sai-upscale-height").data("size"),
            width = parseInt(selector.find("#sai-upscale-width").val()),
            height = parseInt(selector.find("#sai-upscale-height").val()),
            val = width * height;
        if (val > 4194304) {
            toastr.error(
                "This operation outputs an image with a maximum pixel count of 4,194,304. This is equivalent to dimensions such as 2048x2048 and 4096x1024.",
                "Too big!"
            );
            return;
        }
        if (width < 512 || height < 512) {
            toastr.error(
                "Width and height must be bigger than 512px.",
                "Too small!"
            );
            return;
        }
        if (width <= dataWidth || height <= dataHeight) {
            toastr.error(antimenaParams.mustBeBigger, palleonParams.error);
            return;
        }
        var answer = window.confirm(
            "Are you sure you want to upscale the image?"
        );
        if (answer) {
            selector.find("#palleon-canvas-loader").css("display", "flex");
            canvas.clone(function (canvas) {
                canvas.setZoom(1);
                selector.find("#palleon-resize-width").trigger("sizeChanged");
                selector.find("#palleon-resize-height").trigger("sizeChanged");
                canvas.setWidth(
                    selector.find("#palleon-resize-width").data("size")
                );
                canvas.setHeight(
                    selector.find("#palleon-resize-height").data("size")
                );
                var image = canvas.toDataURL({
                    format: "png",
                    enableRetinaScaling: false,
                });
                var blob = aiDataURLtoBlob(image);
                var file = new File([blob], "image.png");
                var form = new FormData();
                form.append("width", width);
                form.append("image", file);
                $.ajax({
                    url: "https://api.stability.ai/v1/generation/esrgan-v1-x2plus/image-to-image/upscale",
                    data: form,
                    contentType: false,
                    processData: false,
                    type: "POST",
                    headers: {
                        Authorization: "Bearer " + stabilityaiApiKey,
                        Accept: "application/json",
                        "Stability-Client-ID": "Antimena", // Optional
                        "Stability-Client-Version": "1.0", // Optional
                    },
                    beforeSend: function () {
                        selector
                            .find("#palleon-canvas-loader")
                            .css("display", "flex");
                    },
                    success: function (data) {
                        if (data) {
                            var images = data.artifacts;
                            if (images !== undefined && images != "") {
                                $.each(images, function (index, val) {
                                    var base64 = val.base64;
                                    var seed = val.seed;
                                    $(document).trigger("loadBase64Img", [
                                        "data:image/png;base64," + base64,
                                        seed,
                                    ]);
                                    return false;
                                });
                                selector
                                    .find("#sai-balance-check")
                                    .trigger("click");
                                toastr.success(
                                    "Image processing is complete.",
                                    palleonParams.success
                                );
                            } else {
                                toastr.error(
                                    palleonParams.wrong,
                                    palleonParams.error
                                );
                            }
                        } else {
                            toastr.error(
                                palleonParams.wrong,
                                palleonParams.error
                            );
                        }
                    },
                    error: function (jqXHR, error, errorThrown) {
                        if (jqXHR.status && jqXHR.responseText) {
                            var parsejson = JSON.parse(jqXHR.responseText);
                            toastr.error(
                                parsejson.message,
                                jqXHR.status + " " + palleonParams.error
                            );
                        } else if (jqXHR.status) {
                            toastr.error(palleonParams.wrong, jqXHR.status);
                        } else {
                            toastr.error(
                                palleonParams.wrong,
                                palleonParams.error
                            );
                        }
                        selector
                            .find("#palleon-canvas-loader")
                            .css("display", "none");
                    },
                });
                canvas.dispose();
            });
        }
    });

    ///////////////* CLIPDROP *///////////////

    // Text to image
    selector.on("click", "#clipdrop-image-generate", function () {
        var prompt = selector.find("#clipdrop-prompt").val();
        if (prompt.length >= 1) {
            var answer = window.confirm(
                "Are you sure you want to send the request?"
            );
            if (answer) {
                selector.find("#modal-ai-image").css("pointer-events", "none");
                selector.find("#antimena-loader-2").css("display", "flex");
                var form = new FormData();
                form.append("prompt", prompt);
                fetch("https://clipdrop-api.co/text-to-image/v1", {
                    method: "POST",
                    headers: {
                        "x-api-key": clipdropApiKey,
                    },
                    body: form,
                    redirect: "follow",
                })
                    .then(clipdropHandleErrors)
                    .then((response) => response.arrayBuffer())
                    .then((buffer) => {
                        var id = new Date().getTime();
                        var data =
                            '<div class="palleon-masonry-item"><div class="palleon-masonry-item-inner"><div class="palleon-img-wrap"><img id="' +
                            id +
                            '" src="data:image/png;base64,' +
                            arrayBufferToBase64(buffer) +
                            '" /></div><div class="antimena-img-card"><div class="antimena-img-card-inner"><div class="antimena-img-btns"><button type="button" class="palleon-btn btn-full antimena-img-download" autocomplete="off" data-seed="' +
                            id +
                            '"><span class="material-icons arrow">download</span>Download</button><button type="button" class="palleon-btn btn-full antimena-img-save" autocomplete="off" data-seed="' +
                            id +
                            '"><span class="material-icons arrow">save</span>Save</button><button type="button" class="palleon-btn btn-full primary antimena-img-select" autocomplete="off" data-seed="' +
                            id +
                            '"><span class="material-icons arrow">done</span>Select</button></div></div></div></div></div>';
                        selector.find("#clipdrop-images").html("");
                        selector
                            .find("#clipdrop-images")
                            .removeClass("antimena-grid-placeholder");
                        selector.find("#clipdrop-images").html(data);
                        selector
                            .find("#modal-ai-image")
                            .css("pointer-events", "auto");
                        selector.find("#antimena-loader-2").hide();
                    })
                    .catch((err) => {
                        toastr.error(err, palleonParams.error);
                        selector.find("#antimena-loader-2").hide();
                    });
            }
        }
    });

    // Enable & disable generate button
    selector.on("input paste", "#clipdrop-prompt", function () {
        var val = $(this).val();
        if (val.length >= 1) {
            selector.find("#clipdrop-image-generate").prop("disabled", false);
        } else {
            selector.find("#clipdrop-image-generate").prop("disabled", true);
        }
    });

    // Remove background
    selector.on("click", "#clipdrop-remove-background", function () {
        var answer = window.confirm(
            "Are you sure you want to remove the background?"
        );
        if (answer) {
            selector.find("#palleon-canvas-loader").css("display", "flex");
            canvas.clone(function (tempCanvas) {
                var tempObjects = tempCanvas.getObjects();
                tempObjects
                    .filter((element) => element.objectType != "BG")
                    .forEach((element) => tempCanvas.remove(element));
                tempCanvas.setZoom(1);
                selector.find("#palleon-resize-width").trigger("sizeChanged");
                selector.find("#palleon-resize-height").trigger("sizeChanged");
                tempCanvas.setWidth(
                    selector.find("#palleon-resize-width").data("size")
                );
                tempCanvas.setHeight(
                    selector.find("#palleon-resize-height").data("size")
                );
                var image = tempCanvas.toDataURL({
                        format: "png",
                        enableRetinaScaling: false,
                    }),
                    blob = aiDataURLtoBlob(image),
                    file = new File([blob], "removebg.png"),
                    form = new FormData();
                form.append("image_file", file);
                fetch("https://clipdrop-api.co/remove-background/v1", {
                    method: "POST",
                    headers: {
                        "x-api-key": clipdropApiKey,
                    },
                    body: form,
                    redirect: "follow",
                })
                    .then(clipdropHandleErrors)
                    .then((response) => response.arrayBuffer())
                    .then((buffer) => {
                        selector
                            .find("#palleon-canvas-img")
                            .attr(
                                "src",
                                "data:image/png;base64," +
                                    arrayBufferToBase64(buffer)
                            );

                        // Wait for the placeholder image fully load
                        selector
                            .find("#palleon-canvas-img-wrap")
                            .imagesLoaded(function () {
                                var imgurl = selector
                                    .find("#palleon-canvas-img")
                                    .attr("src");
                                fabric.Image.fromURL(imgurl, function (img) {
                                    canvas.setBackgroundImage(
                                        img,
                                        canvas.renderAll.bind(canvas),
                                        {
                                            objectType: "BG",
                                            mode: "image",
                                            top: canvas.backgroundImage["top"],
                                            left: canvas.backgroundImage[
                                                "left"
                                            ],
                                            scaleX: canvas.backgroundImage[
                                                "scaleX"
                                            ],
                                            scaleY: canvas.backgroundImage[
                                                "scaleY"
                                            ],
                                            selectable: false,
                                            angle: canvas.backgroundImage[
                                                "angle"
                                            ],
                                            originX:
                                                canvas.backgroundImage[
                                                    "originX"
                                                ],
                                            originY:
                                                canvas.backgroundImage[
                                                    "originY"
                                                ],
                                            lockMovementX: true,
                                            lockMovementY: true,
                                            lockRotation: true,
                                            erasable: true,
                                        },
                                        { crossOrigin: "anonymous" }
                                    );
                                    setTimeout(function () {
                                        selector
                                            .find("#palleon-canvas-loader")
                                            .hide();
                                    }, 500);
                                });
                            });
                    })
                    .catch((err) => {
                        toastr.error(err, palleonParams.error);
                        selector
                            .find("#palleon-canvas-loader")
                            .css("display", "none");
                    });
                tempCanvas.dispose();
            });
        }
    });

    // Enable & disable remove background button
    selector.on("input paste", "#clipdrop-replace-bg-prompt", function () {
        var val = $(this).val();
        if (val.length >= 1) {
            selector
                .find("#clipdrop-replace-background")
                .prop("disabled", false);
        } else {
            selector
                .find("#clipdrop-replace-background")
                .prop("disabled", true);
        }
    });

    // Replace background
    selector.on("click", "#clipdrop-replace-background", function () {
        var prompt = selector.find("#clipdrop-replace-bg-prompt").val();
        if (prompt.length >= 1) {
            var answer = window.confirm(
                "Are you sure you want to remove the background?"
            );
            if (answer) {
                selector.find("#palleon-canvas-loader").css("display", "flex");
                canvas.clone(function (tempCanvas) {
                    var tempObjects = tempCanvas.getObjects();
                    tempObjects
                        .filter((element) => element.objectType != "BG")
                        .forEach((element) => tempCanvas.remove(element));
                    tempCanvas.setZoom(1);
                    selector
                        .find("#palleon-resize-width")
                        .trigger("sizeChanged");
                    selector
                        .find("#palleon-resize-height")
                        .trigger("sizeChanged");
                    tempCanvas.setWidth(
                        selector.find("#palleon-resize-width").data("size")
                    );
                    tempCanvas.setHeight(
                        selector.find("#palleon-resize-height").data("size")
                    );
                    var image = tempCanvas.toDataURL({
                            format: "png",
                            enableRetinaScaling: false,
                        }),
                        blob = aiDataURLtoBlob(image),
                        file = new File([blob], "replacebg.png"),
                        form = new FormData();
                    form.append("image_file", file);
                    form.append("prompt", prompt);
                    fetch("https://clipdrop-api.co/replace-background/v1", {
                        method: "POST",
                        headers: {
                            "x-api-key": clipdropApiKey,
                        },
                        body: form,
                        redirect: "follow",
                    })
                        .then(clipdropHandleErrors)
                        .then((response) => response.arrayBuffer())
                        .then((buffer) => {
                            selector
                                .find("#palleon-canvas-img")
                                .attr(
                                    "src",
                                    "data:image/png;base64," +
                                        arrayBufferToBase64(buffer)
                                );

                            // Wait for the placeholder image fully load
                            selector
                                .find("#palleon-canvas-img-wrap")
                                .imagesLoaded(function () {
                                    var imgurl = selector
                                        .find("#palleon-canvas-img")
                                        .attr("src");
                                    fabric.Image.fromURL(
                                        imgurl,
                                        function (img) {
                                            canvas.setBackgroundImage(
                                                img,
                                                canvas.renderAll.bind(canvas),
                                                {
                                                    objectType: "BG",
                                                    mode: "image",
                                                    top: canvas.backgroundImage[
                                                        "top"
                                                    ],
                                                    left: canvas
                                                        .backgroundImage[
                                                        "left"
                                                    ],
                                                    scaleX: canvas
                                                        .backgroundImage[
                                                        "scaleX"
                                                    ],
                                                    scaleY: canvas
                                                        .backgroundImage[
                                                        "scaleY"
                                                    ],
                                                    selectable: false,
                                                    angle: canvas
                                                        .backgroundImage[
                                                        "angle"
                                                    ],
                                                    originX:
                                                        canvas.backgroundImage[
                                                            "originX"
                                                        ],
                                                    originY:
                                                        canvas.backgroundImage[
                                                            "originY"
                                                        ],
                                                    lockMovementX: true,
                                                    lockMovementY: true,
                                                    lockRotation: true,
                                                    erasable: true,
                                                },
                                                { crossOrigin: "anonymous" }
                                            );
                                            setTimeout(function () {
                                                selector
                                                    .find(
                                                        "#palleon-canvas-loader"
                                                    )
                                                    .hide();
                                            }, 500);
                                        }
                                    );
                                });
                        })
                        .catch((err) => {
                            toastr.error(err, palleonParams.error);
                            selector
                                .find("#palleon-canvas-loader")
                                .css("display", "none");
                        });
                    tempCanvas.dispose();
                });
            }
        }
    });

    // Remove text
    selector.on("click", "#clipdrop-remove-text", function () {
        var answer = window.confirm(
            "Are you sure you want to remove the text that appears on your image?"
        );
        if (answer) {
            selector.find("#palleon-canvas-loader").css("display", "flex");
            canvas.clone(function (tempCanvas) {
                var tempObjects = tempCanvas.getObjects();
                tempObjects
                    .filter((element) => element.objectType != "BG")
                    .forEach((element) => tempCanvas.remove(element));
                tempCanvas.setZoom(1);
                selector.find("#palleon-resize-width").trigger("sizeChanged");
                selector.find("#palleon-resize-height").trigger("sizeChanged");
                tempCanvas.setWidth(
                    selector.find("#palleon-resize-width").data("size")
                );
                tempCanvas.setHeight(
                    selector.find("#palleon-resize-height").data("size")
                );
                var image = tempCanvas.toDataURL({
                        format: "png",
                        enableRetinaScaling: false,
                    }),
                    blob = aiDataURLtoBlob(image),
                    file = new File([blob], "removetext.png"),
                    form = new FormData();
                form.append("image_file", file);
                fetch("https://clipdrop-api.co/remove-text/v1", {
                    method: "POST",
                    headers: {
                        "x-api-key": clipdropApiKey,
                    },
                    body: form,
                    redirect: "follow",
                })
                    .then(clipdropHandleErrors)
                    .then((response) => response.arrayBuffer())
                    .then((buffer) => {
                        selector
                            .find("#palleon-canvas-img")
                            .attr(
                                "src",
                                "data:image/png;base64," +
                                    arrayBufferToBase64(buffer)
                            );

                        // Wait for the placeholder image fully load
                        selector
                            .find("#palleon-canvas-img-wrap")
                            .imagesLoaded(function () {
                                var imgurl = selector
                                    .find("#palleon-canvas-img")
                                    .attr("src");
                                fabric.Image.fromURL(imgurl, function (img) {
                                    canvas.setBackgroundImage(
                                        img,
                                        canvas.renderAll.bind(canvas),
                                        {
                                            objectType: "BG",
                                            mode: "image",
                                            top: canvas.backgroundImage["top"],
                                            left: canvas.backgroundImage[
                                                "left"
                                            ],
                                            scaleX: canvas.backgroundImage[
                                                "scaleX"
                                            ],
                                            scaleY: canvas.backgroundImage[
                                                "scaleY"
                                            ],
                                            selectable: false,
                                            angle: canvas.backgroundImage[
                                                "angle"
                                            ],
                                            originX:
                                                canvas.backgroundImage[
                                                    "originX"
                                                ],
                                            originY:
                                                canvas.backgroundImage[
                                                    "originY"
                                                ],
                                            lockMovementX: true,
                                            lockMovementY: true,
                                            lockRotation: true,
                                            erasable: true,
                                        },
                                        { crossOrigin: "anonymous" }
                                    );
                                    setTimeout(function () {
                                        selector
                                            .find("#palleon-canvas-loader")
                                            .hide();
                                    }, 500);
                                });
                            });
                    })
                    .catch((err) => {
                        toastr.error(err, palleonParams.error);
                        selector
                            .find("#palleon-canvas-loader")
                            .css("display", "none");
                    });
                tempCanvas.dispose();
            });
        }
    });

    // Upscaler

    selector.on("sizeChanged", "#palleon-resize-width", function () {
        selector.find("#clipdrop-upscale-width").val($(this).val());
        selector.find("#clipdrop-upscale-width").data("size", $(this).val());
        selector.find("#clipdrop-upscale").prop("disabled", true);
    });

    selector.on("sizeChanged", "#palleon-resize-height", function () {
        selector.find("#clipdrop-upscale-height").val($(this).val());
        selector.find("#clipdrop-upscale-height").data("size", $(this).val());
        selector.find("#clipdrop-upscale").prop("disabled", true);
    });

    selector.on("input paste", "#clipdrop-upscale-width", function () {
        var val = $(this).val(),
            valHeight = selector.find("#clipdrop-upscale-height").val(),
            height = selector.find("#clipdrop-upscale-height").data("size"),
            width = $(this).data("size"),
            ratio = width / height;
        selector
            .find("#clipdrop-upscale-height")
            .val(Math.round(this.value / ratio));
        if (val.length >= 1 && valHeight.length >= 1) {
            selector.find("#clipdrop-upscale").prop("disabled", false);
        } else {
            selector.find("#clipdrop-upscale").prop("disabled", true);
        }
    });

    selector.on("click", "#clipdrop-upscale-height", function () {
        var val = $(this).val(),
            valWidth = selector.find("#clipdrop-upscale-width").val(),
            height = $(this).data("size"),
            width = selector.find("#clipdrop-upscale-width").data("size"),
            ratio = height / width;
        selector
            .find("#clipdrop-upscale-width")
            .val(Math.round(this.value / ratio));
        if (val.length >= 1 && valWidth.length >= 1) {
            selector.find("#clipdrop-upscale").prop("disabled", false);
        } else {
            selector.find("#clipdrop-upscale").prop("disabled", true);
        }
    });

    selector.on("click", "#clipdrop-upscale", function () {
        var width = parseInt(selector.find("#clipdrop-upscale-width").val());
        var height = parseInt(selector.find("#clipdrop-upscale-height").val());
        if (width > 4096 || height > 4096) {
            toastr.error(
                "Maximum allowed width or height value is 4096px.",
                "Too big!"
            );
            return;
        } else if (1 > width || 1 > height) {
            toastr.error(
                "Width and height must be bigger than 1px.",
                "Too small!"
            );
            return;
        }
        var answer = window.confirm(
            "Are you sure you want to upscale the image?"
        );
        if (answer) {
            selector.find("#palleon-canvas-loader").css("display", "flex");
            canvas.clone(function (canvas) {
                canvas.setZoom(1);
                selector.find("#palleon-resize-width").trigger("sizeChanged");
                selector.find("#palleon-resize-height").trigger("sizeChanged");
                canvas.setWidth(
                    selector.find("#palleon-resize-width").data("size")
                );
                canvas.setHeight(
                    selector.find("#palleon-resize-height").data("size")
                );
                var image = canvas.toDataURL({
                        format: "png",
                        enableRetinaScaling: false,
                    }),
                    target_width = width,
                    target_height = height,
                    blob = aiDataURLtoBlob(image),
                    file = new File([blob], "upscale.png"),
                    form = new FormData();
                form.append("image_file", file);
                form.append("target_width", target_width);
                form.append("target_height", target_height);
                fetch("https://clipdrop-api.co/image-upscaling/v1/upscale", {
                    method: "POST",
                    headers: {
                        "x-api-key": clipdropApiKey,
                    },
                    body: form,
                    redirect: "follow",
                })
                    .then(clipdropHandleErrors)
                    .then((response) => response.arrayBuffer())
                    .then((buffer) => {
                        $(document).trigger("loadBase64Img", [
                            "data:image/png;base64," +
                                arrayBufferToBase64(buffer),
                            "",
                        ]);
                    })
                    .catch((err) => {
                        toastr.error(err, palleonParams.error);
                        selector
                            .find("#palleon-canvas-loader")
                            .css("display", "none");
                    });
                canvas.dispose();
            });
        }
    });

    // Inpainting
    selector.on("click", "#clipdrop-inpainting", function () {
        var drawing = canvas
            .getObjects()
            .filter((element) => element.type == "path")[0];
        if (drawing) {
            var answer = window.confirm(
                "Are you sure you want to remove the objects from your image?"
            );
            if (answer) {
                selector.find("#palleon-canvas-loader").css("display", "flex");
                canvas.clone(function (canvas) {
                    canvas.setZoom(1);
                    selector
                        .find("#palleon-resize-width")
                        .trigger("sizeChanged");
                    selector
                        .find("#palleon-resize-height")
                        .trigger("sizeChanged");
                    canvas.setWidth(
                        selector.find("#palleon-resize-width").data("size")
                    );
                    canvas.setHeight(
                        selector.find("#palleon-resize-height").data("size")
                    );
                    canvas
                        .getObjects()
                        .filter((element) => element.type != "path")
                        .forEach((element) => canvas.remove(element));
                    var form = new FormData();

                    canvas
                        .getObjects()
                        .filter((element) => element.type == "path")
                        .forEach((element) =>
                            element.set({ stroke: "transparent", shadow: null })
                        );
                    canvas.requestRenderAll();
                    var image = canvas.toDataURL({
                            format: "png",
                            enableRetinaScaling: false,
                        }),
                        blob = aiDataURLtoBlob(image),
                        file = new File([blob], "cleanup.png");
                    form.append("image_file", file);

                    canvas
                        .getObjects()
                        .filter((element) => element.type == "path")
                        .forEach((element) =>
                            element.set("stroke", "rgb(255,255,255)")
                        );
                    canvas.backgroundColor = "rgb(0,0,0)";
                    canvas.setBackgroundImage(null);
                    canvas.requestRenderAll();
                    var mask = canvas.toDataURL({
                        format: "png",
                        enableRetinaScaling: false,
                    });
                    var maskBlob = aiDataURLtoBlob(mask),
                        maskFile = new File([maskBlob], "mask.png");
                    form.append("mask_file", maskFile);

                    fetch("https://clipdrop-api.co/cleanup/v1", {
                        method: "POST",
                        headers: {
                            "x-api-key": clipdropApiKey,
                        },
                        body: form,
                        redirect: "follow",
                    })
                        .then(clipdropHandleErrors)
                        .then((response) => response.arrayBuffer())
                        .then((buffer) => {
                            $(document).trigger("loadBase64Img", [
                                "data:image/png;base64," +
                                    arrayBufferToBase64(buffer),
                                "",
                            ]);
                        })
                        .catch((err) => {
                            toastr.error(err, palleonParams.error);
                            selector
                                .find("#palleon-canvas-loader")
                                .css("display", "none");
                        });
                    canvas.dispose();
                });
            }
        } else {
            toastr.warning(
                'You must mark unwanted objects or defects using the "pencil brush".',
                palleonParams.warning
            );
        }
    });

    // Reimagine
    selector.on("click", "#clipdrop-clipdrop-reimagine", function () {
        var width = parseInt(selector.find("#clipdrop-upscale-width").val());
        var height = parseInt(selector.find("#clipdrop-upscale-height").val());
        if (width > 1024 || height > 1024) {
            toastr.error(
                "Maximum allowed width or height value is 1024px.",
                palleonParams.tooBig
            );
            return;
        }
        var answer = window.confirm(
            "Are you sure you want to reimagine your image?"
        );
        if (answer) {
            selector.find("#palleon-canvas-loader").css("display", "flex");
            canvas.clone(function (canvas) {
                canvas.setZoom(1);
                selector.find("#palleon-resize-width").trigger("sizeChanged");
                selector.find("#palleon-resize-height").trigger("sizeChanged");
                canvas.setWidth(
                    selector.find("#palleon-resize-width").data("size")
                );
                canvas.setHeight(
                    selector.find("#palleon-resize-height").data("size")
                );
                var image = canvas.toDataURL({
                        format: "png",
                        enableRetinaScaling: false,
                    }),
                    blob = aiDataURLtoBlob(image),
                    file = new File([blob], "reimagination.png"),
                    form = new FormData();
                form.append("image_file", file);
                fetch("https://clipdrop-api.co/reimagine/v1/reimagine", {
                    method: "POST",
                    headers: {
                        "x-api-key": clipdropApiKey,
                    },
                    body: form,
                    redirect: "follow",
                })
                    .then(clipdropHandleErrors)
                    .then((response) => response.arrayBuffer())
                    .then((buffer) => {
                        $(document).trigger("loadBase64Img", [
                            "data:image/png;base64," +
                                arrayBufferToBase64(buffer),
                            "",
                        ]);
                    })
                    .catch((err) => {
                        toastr.error(err, palleonParams.error);
                        selector
                            .find("#palleon-canvas-loader")
                            .css("display", "none");
                    });
                canvas.dispose();
            });
        }
    });

    // Sketch to Image

    var sketchCanvas = "";

    function sketchAdjustZoom() {
        if (sketchCanvas != "") {
            var outerCanvasContainer = $("#sketch-to-image-wrap")[0];
            var ratio = sketchCanvas.getWidth() / sketchCanvas.getHeight();
            var containerWidth = outerCanvasContainer.clientWidth;
            var scale = containerWidth / sketchCanvas.getWidth();
            var zoom = sketchCanvas.getZoom() * scale;
            sketchCanvas.setDimensions({
                width: containerWidth,
                height: containerWidth / ratio,
            });
            sketchCanvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
        }
    }

    $(window).on("resize", function () {
        sketchAdjustZoom();
    });

    selector.on("change", "#sketch-to-image-brush-color", function () {
        sketchCanvas.freeDrawingBrush.color = $(this).val();
    });

    selector.on(
        "input paste keyup keydown",
        "#sketch-to-image-brush-width",
        function () {
            sketchCanvas.freeDrawingBrush.width = parseInt($(this).val());
        }
    );

    selector.on("click", "#sketch-to-image-undo", function () {
        var objects = sketchCanvas.getObjects();
        var lastElement = objects.slice(-1)[0];
        sketchCanvas.remove(lastElement);
        sketchCanvas.requestRenderAll();
    });

    selector.on("click", "#sketch-to-image-clear", function () {
        var objects = sketchCanvas.getObjects();
        objects.forEach((element) => sketchCanvas.remove(element));
        sketchCanvas.requestRenderAll();
    });

    selector.on("click", "#sketch-to-image-prompt", function () {
        var val = $(this).val();
        if (val.length >= 1) {
            selector.find("#sketch-to-image-generate").prop("disabled", false);
        } else {
            selector.find("#sketch-to-image-generate").prop("disabled", true);
        }
    });

    selector.on("click", "#sketch-to-image-generate", function () {
        var prompt = selector.find("#sketch-to-image-prompt").val();
        if (prompt.length >= 1) {
            var answer = window.confirm(
                "Are you sure you want to send the request?"
            );
            if (answer) {
                selector.find("#modal-ai-image").css("pointer-events", "none");
                selector.find("#antimena-loader-3").css("display", "flex");
                sketchCanvas.clone(function (tempCanvas) {
                    var objects = tempCanvas.getObjects();
                    var scaleRatio = Math.min(
                        1024 / tempCanvas.getWidth(),
                        1024 / tempCanvas.getHeight()
                    );
                    var width = Math.ceil(tempCanvas.getWidth() * scaleRatio);
                    var height = Math.ceil(tempCanvas.getHeight() * scaleRatio);
                    tempCanvas.setDimensions({ width: width, height: height });
                    tempCanvas.setZoom(scaleRatio);
                    tempCanvas.backgroundColor = "rgb(255,255,255)";
                    objects.forEach((element) =>
                        element.set({ stroke: "rgb(0,0,0)" })
                    );
                    var image = tempCanvas.toDataURL({
                            format: "png",
                            enableRetinaScaling: false,
                        }),
                        blob = aiDataURLtoBlob(image),
                        file = new File([blob], "sketch.png"),
                        form = new FormData();
                    form.append("sketch_file", file);
                    form.append("prompt", prompt);

                    fetch(
                        "https://clipdrop-api.co/sketch-to-image/v1/sketch-to-image",
                        {
                            method: "POST",
                            headers: {
                                "x-api-key": clipdropApiKey,
                            },
                            body: form,
                            redirect: "follow",
                        }
                    )
                        .then(clipdropHandleErrors)
                        .then((response) => response.arrayBuffer())
                        .then((buffer) => {
                            var id = new Date().getTime();
                            var data =
                                '<div class="palleon-masonry-item"><div class="palleon-masonry-item-inner"><div class="palleon-img-wrap"><img id="' +
                                id +
                                '" src="data:image/jpeg;base64,' +
                                arrayBufferToBase64(buffer) +
                                '" /></div><div class="antimena-img-card"><div class="antimena-img-card-inner"><div class="antimena-img-btns"><button type="button" class="palleon-btn btn-full antimena-img-download" autocomplete="off" data-seed="' +
                                id +
                                '"><span class="material-icons arrow">download</span>Download</button><button type="button" class="palleon-btn btn-full antimena-img-save" autocomplete="off" data-seed="' +
                                id +
                                '"><span class="material-icons arrow">save</span>Save</button><button type="button" class="palleon-btn btn-full primary antimena-img-select" autocomplete="off" data-seed="' +
                                id +
                                '"><span class="material-icons arrow">done</span>Select</button></div></div></div></div></div>';
                            selector.find("#clipdrop-sketch-images").html("");
                            selector
                                .find("#clipdrop-sketch-images")
                                .removeClass("antimena-grid-placeholder");
                            selector.find("#clipdrop-sketch-images").html(data);
                            selector
                                .find("#modal-ai-image")
                                .css("pointer-events", "auto");
                            selector.find("#antimena-loader-3").hide();
                        })
                        .catch((err) => {
                            toastr.error(err, palleonParams.error);
                            selector.find("#antimena-loader-3").hide();
                        });
                    tempCanvas.dispose();
                });
            }
        }
    });

    ///////////////* BUILD *///////////////

    function palleon_controls() {
        // Tabs
        selector.find(".palleon-tabs-menu li").off();
        selector.find(".palleon-tabs-menu").on("click", "li", function () {
            var target = $(this).data("target");
            var wrapper = $(this).parent().parent();
            wrapper.find("> .palleon-tab").removeClass("active");
            $(target).addClass("active");
            wrapper.find("> .palleon-tabs-menu li").removeClass("active");
            $(this).addClass("active");
        });

        selector.find("#antimena-add-new-apis li").first().trigger("click");

        // Accordion
        selector
            .find("#modal-ai-image")
            .find("ul.palleon-accordion > li")
            .on("click", "a", function (e) {
                e.preventDefault();
                var parent = $(this).parent().parent();
                if ($(this).parent().hasClass("opened")) {
                    parent.find("li").removeClass("opened");
                } else {
                    parent.find("li").removeClass("opened");
                    $(this).parent().addClass("opened");
                }
            });
        selector
            .find("#antimena-adjust-accordion")
            .find("li")
            .on("click", "a", function (e) {
                e.preventDefault();
                var parent = $(this).parent().parent();
).parent();
                 data.value +
                        '" selected>' +
                        data.text +
                        "</option>"
                );
            } else {
                $("#sai-size").append(
                    '<option value="' +
                        data.value +
                        '">' +
                        data.text +
                        "</option>"
                );
            }
        });

        // Download image button
        selector.on("click", ".antimena-img-download", function () {
            var seed = $(this).data("seed"),
                a = document.createElement("a");
            a.href = selector.find("#" + seed).attr("src");
            a.download = seed + ".png";
            a.click();
        });

        // Select image button
        selector.on("click", ".antimena-img-select", function () {
            var seed = $(this).data("seed"),
                src = selector.find("#" + seed).attr("src");
            $(document).trigger("loadBase64Img", [src, seed]);
            selector.find("#modal-add-new").hide();
        });

        // Save image button
        selector.on("click", ".antimena-img-save", function () {
            /**
             * var imgData is DataURL
             * @see https://flaviocopes.com/data-urls/
             * @see http://fabricjs.com/docs/fabric.Canvas.html#toDataURL
             */
            var btn = $(this),
                seed = $(this).data("seed"),
                imgData = selector.find("#" + seed).attr("src");

            console.log(imgData);
            /* Do what you want */

            toastr.success(
                "To make save function work, you should have a database on your server and integrate it to Palleon using a server-side language. Please read the documentation.",
                "Info"
            );
            // toastr.error("Error!", "An error occured!");
        });
    }

    ///////////////* HTML OUTPUT *///////////////

    function main_html() {
        // Tab Title
        // var tabTitle =
        //     '<li data-target="#modal-ai-image"><span class="material-icons">landscape</span>AI Image</li>';
        // selector
        //     .find(
        //         "#modal-add-new > .palleon-modal-wrap > .palleon-modal-inner > .palleon-tabs > .palleon-tabs-menu li:last-child"
        //     )
        //     .after(tabTitle);
        // Tab Content
        // var tabContent =
        //     '<div id="modal-ai-image" class="palleon-tab palleon-modal-bg"><div class="palleon-tabs">';
        // // Tab Menu
        // tabContent +=
        //     '<ul id="antimena-add-new-apis" class="palleon-tabs-menu">';
        // if (stabilityaiApiKey != "") {
        //     tabContent +=
        //         '<li data-target="#sai-text-to-text-tab">Stability.ai</li>';
        // }
        // if (openaiApiKey != "") {
        //     tabContent += '<li data-target="#oai-text-to-text-tab">OpenAI</li>';
        // }
        // if (clipdropApiKey != "") {
        //     tabContent +=
        //         '<li data-target="#clipdrop-text-to-text-tab">Clipdrop</li>';
        //     tabContent +=
        //         '<li id="sketch-to-image-link" data-target="#clipdrop-sketch-to-image-tab">Sketch To Image</li>';
        // }
        // tabContent += "</ul>";
        // tabContent += "</div></div>";
        // selector
        //     .find(
        //         "#modal-add-new > .palleon-modal-wrap > .palleon-modal-inner > .palleon-tabs > .palleon-tabs-menu"
        //     )
        //     .after(tabContent);
    }

    function add_new_html() {
        // if (clipdropApiKey != "") {
        //     var clipdropContent =
        //         '<div id="clipdrop-text-to-text-tab" class="palleon-tab"> <div class="modal-ai-image-wrap"> <div class="modal-ai-image-column-left"> <div id="antimena-loader-2" class="palleon-loader-wrap antimena-loader"><div class="palleon-loader"></div></div> <div id="clipdrop-images" class="palleon-grid antimena-grid antimena-grid-placeholder"> <div class="palleon-masonry-item"> <div class="palleon-masonry-item-inner"> <div class="palleon-img-wrap"> <img src="assets/ai-placeholder.png" /> </div> </div> </div> </div> </div> <div class="modal-ai-image-column-right"> <ul class="palleon-accordion"> <li class="opened"> <a href="#"><span class="material-icons accordion-icon text-success">check_circle</span>Prompt (required)<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <textarea id="clipdrop-prompt" class="palleon-form-field" rows="2" autocomplete="off" placeholder="Post-apocalyptic wasteland with rusted and abandoned vehicles, dust storms and towering dust clouds, gritty, dark, dramatic, apocalyptic, stylized" maxlength="2000"></textarea> </div> </li> </ul> <button id="clipdrop-image-generate" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off" disabled><span class="material-icons arrow">landscape</span>Generate</button> </div> </div> </div>';
        //     clipdropContent +=
        //         '<div id="clipdrop-sketch-to-image-tab" class="palleon-tab"> <div class="modal-ai-image-wrap"> <div class="modal-ai-image-column-left"> <div id="antimena-loader-3" class="palleon-loader-wrap antimena-loader"><div class="palleon-loader"></div></div> <div id="sketch-to-image-wrap"> <canvas id="sketch-to-image-canvas"></canvas> </div> </div> <div class="modal-ai-image-column-right"> <div id="clipdrop-sketch-images" class="palleon-grid antimena-grid antimena-grid-placeholder"> </div> <ul class="palleon-accordion"> <li class="opened"> <a href="#"><span class="material-icons accordion-icon text-success">check_circle</span>Prompt (required)<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <textarea id="sketch-to-image-prompt" class="palleon-form-field" rows="2" autocomplete="off" maxlength="2000"></textarea> <div class="palleon-control-desc">Generate an image corresponding to the sketch and the prompt describing what you expect.</div> </div> </li> <li> <a href="#"><span class="material-icons accordion-icon">settings</span>Brush Settings<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Brush Width</label> <div class="palleon-control"> <input id="sketch-to-image-brush-width" class="palleon-form-field numeric-field" type="number" value="8" autocomplete="off" data-min="1" data-max="1000" data-step="1"> </div> </div> <div class="palleon-control-wrap control-text-color label-block"> <label class="palleon-control-label">Brush Color</label> <div class="palleon-control"> <input id="sketch-to-image-brush-color" type="text" class="palleon-colorpicker disallow-empty" autocomplete="off" value="#6658ea" /> </div> </div> <div class="palleon-control-wrap palleon-submit-btns sketch-to-image-buttons"> <button id="sketch-to-image-undo" type="button" class="palleon-btn tooltip" data-title="Undo"><span class="material-icons">undo</span></button> <button id="sketch-to-image-clear" type="button" class="palleon-btn tooltip" data-title="Clear"><span class="material-icons">delete</span></button> </div> </div> </li> </ul> <button id="sketch-to-image-generate" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off" disabled><span class="material-icons arrow">landscape</span>Generate</button> </div> </div> </div>';
        //     selector.find("#antimena-add-new-apis").after(clipdropContent);
        // }
        // if (openaiApiKey != "") {
        //     var oaiContent =
        //         '<div id="oai-text-to-text-tab" class="palleon-tab"> <div class="modal-ai-image-wrap"> <div class="modal-ai-image-column-left"> <div id="antimena-loader-4" class="palleon-loader-wrap antimena-loader"><div class="palleon-loader"></div></div> <div id="oai-images" class="palleon-grid antimena-grid antimena-grid-placeholder"> <div class="palleon-masonry-item"> <div class="palleon-masonry-item-inner"> <div class="palleon-img-wrap"> <img src="assets/ai-placeholder.png" /> </div> </div> </div> </div> </div> <div class="modal-ai-image-column-right"> <ul class="palleon-accordion"> <li class="opened"> <a href="#"><span class="material-icons accordion-icon text-success">check_circle</span>Prompt (required)<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <textarea id="oai-prompt" class="palleon-form-field" rows="2" autocomplete="off" placeholder="Post-apocalyptic wasteland with rusted and abandoned vehicles, dust storms and towering dust clouds, gritty, dark, dramatic, apocalyptic, stylized" maxlength="1000"></textarea> </div> </li> <li> <a href="#"><span class="material-icons accordion-icon">image</span>Source<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Image Size</label> <div class="palleon-control"> <select id="oai-size" class="palleon-select" autocomplete="off">';
        //     if (openaiModel == "dall-e-3") {
        //         oaiContent +=
        //             ' <option value="1024x1024" selected>1024x1024 px</option> <option value="1792x1024">1792x1024 px</option> <option value="1024x1792">1024x1792 px</option> ';
        //     } else {
        //         oaiContent +=
        //             '<option value="1024x1024" selected>1024x1024 px</option> <option value="512x512">512x512 px</option> <option value="256x256">256x256 px</option>';
        //     }
        //     oaiContent += "</select> </div> </div> </div> </li>";
        //     if (openaiModel == "dall-e-3") {
        //         oaiContent +=
        //             '<li class=""> <a href="#"><span class="material-icons accordion-icon">brush</span>Style<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Quality</label> <div class="palleon-control"> <select id="oai-quality" class="palleon-select" autocomplete="off"> <option value="standard" selected="">Standard</option> <option value="hd">HD</option> </select> </div> </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Style</label> <div class="palleon-control"> <select id="oai-style" class="palleon-select" autocomplete="off"> <option value="vivid" selected="">Vivid</option> <option value="natural">Natural</option> </select> </div> </div> <div class="palleon-control-desc"> Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. </div> </div> </li>';
        //     }
        //     oaiContent +=
        //         '</ul> <button id="oai-image-generate" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off" disabled><span class="material-icons arrow">landscape</span>Generate</button> </div> </div> </div>';
        //     selector.find("#antimena-add-new-apis").after(oaiContent);
        // }
        // if (stabilityaiApiKey != "") {
        //     var saiContent =
        // '<div id="sai-text-to-text-tab" class="palleon-tab"> <div class="modal-ai-image-wrap"> <div class="modal-ai-image-column-left"> <div id="antimena-loader-1" class="palleon-loader-wrap antimena-loader"><div class="palleon-loader"></div></div> <div id="sai-images" class="palleon-grid antimena-grid antimena-grid-placeholder"> <div class="palleon-masonry-item"> <div class="palleon-masonry-item-inner"> <div class="palleon-img-wrap"> <img src="assets/ai-placeholder.png" /> </div> </div> </div> <div class="palleon-masonry-item"> <div class="palleon-masonry-item-inner"> <div class="palleon-img-wrap"> <img src="assets/ai-placeholder.png" /> </div> </div> </div> </div> </div> <div class="modal-ai-image-column-right"> <ul class="palleon-accordion"> <li class="opened"> <a href="#"><span class="material-icons accordion-icon text-success">check_circle</span>Prompt (required)<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <textarea id="sai-prompt" class="palleon-form-field" rows="2" autocomplete="off" placeholder="Post-apocalyptic wasteland with rusted and abandoned vehicles, dust storms and towering dust clouds, gritty, dark, dramatic, apocalyptic, stylized" maxlength="2000"></textarea> </div> </li> <li> <a href="#"><span class="material-icons accordion-icon text-danger">cancel</span>Negative Prompt<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <textarea id="sai-negative-prompt" class="palleon-form-field" rows="2" autocomplete="off" placeholder="black and white, monochrome" maxlength="2000"></textarea> </div> </li> <li> <a href="#"><span class="material-icons accordion-icon">image</span>Source<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Image Size</label> <div class="palleon-control"> <select id="sai-size" class="palleon-select" autocomplete="off"></select> </div> </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Seed (Optional)</label> <div class="palleon-control"> <input id="sai-seed" class="palleon-form-field" type="number" value="" autocomplete="off"> </div> </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label slider-label">Image Count<span>2</span></label> <div class="palleon-control"> <input id="sai-samples" type="range" min="1" max="10" value="2" step="1" class="palleon-slider" autocomplete="off"> </div> </div> <div class="palleon-control-desc"> Number of images to generate. </div> </div> </li> <li> <a href="#"><span class="material-icons accordion-icon">brush</span>Style<span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Style Preset</label> <div class="palleon-control"> <select id="sai-style-presets" class="palleon-select" autocomplete="off"> <option value="" selected>Auto</option> <option value="3d-model">3d Model</option> <option value="analog-film">Analog Film</option> <option value="anime">Anime</option> <option value="cinematic">Cinematic</option> <option value="comic-book">Comic Book</option> <option value="digital-art">Digital Art</option> <option value="enhance">Enhance</option> <option value="fantasy-art">Fantasy Art</option> <option value="isometric">Isometric</option> <option value="line-art">Line Art</option> <option value="low-poly">Low Poly</option> <option value="modeling-compound">Modeling Compound</option> <option value="neon-punk">Neon Punk</option> <option value="origami">Origami</option> <option value="photographic">Photographic</option> <option value="pixel-art">Pixel Art</option> <option value="tile-texture">Tile Texture</option> </select> </div> </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label slider-label">CFG Scale<span>7</span></label> <div class="palleon-control"> <input id="sai-cfg" type="range" min="0" max="35" value="7" step="1" class="palleon-slider" autocomplete="off"> </div> </div> <div class="palleon-control-desc"> How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt). </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label slider-label">Steps<span>50</span></label> <div class="palleon-control"> <input id="sai-steps" type="range" min="10" max="150" value="50" step="1" class="palleon-slider" autocomplete="off"> </div> </div> <div class="palleon-control-desc"> Number of diffusion steps to run. </div> </div> </li> </ul> <button id="sai-image-generate" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off" disabled><span class="material-icons arrow">landscape</span>Generate</button> <div id="sai-balance-notice" class="notice notice-info"> <span id="sai-balance"></span><a href="#" id="sai-balance-check"><span class="material-icons arrow">refresh</span></a> </div> </div> </div> </div>';
        //     selector.find("#antimena-add-new-apis").after(saiContent);
        // }
    }

    function adjust_html() {
        // selector
        //     .find("#palleon-adjust > .palleon-accordion")
        //     .after(
        //         '<hr><ul id="antimena-adjust-accordion" class="palleon-accordion"></ul>'
        //     );
        // if (clipdropApiKey != "") {
        //     var clipdropContent =
        //         '<li id="antimena-clipdrop-remove-background" class="hide-on-canvas-mode"> <a href="#"><span class="material-icons accordion-icon">landscape</span>Remove BG<span class="data-count">clipdrop</span><span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-desc"> Layers will not be pushed to the API. Only the background image will be affected. </div> <button id="clipdrop-remove-background" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off"><span class="material-icons arrow">landscape</span>Remove Background</button> </div> </li> <li id="antimena-clipdrop-replace-background" class="hide-on-canvas-mode"> <a href="#"><span class="material-icons accordion-icon">landscape</span>Replace BG<span class="data-count">clipdrop</span><span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-desc"> Layers will not be pushed to the API. Only the background image will be affected. </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Prompt (Required)</label> <div class="palleon-control"> <textarea id="clipdrop-replace-bg-prompt" class="palleon-form-field" rows="2" autocomplete="off" maxlength="2000"></textarea> </div> </div> <div class="palleon-control-desc antimena-desc"> Describe the scene you want to teleport your item to. </div> <button id="clipdrop-replace-background" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off" disabled><span class="material-icons arrow">landscape</span>Replace Background</butto// </div> </li> <li // "antimena-clipdrop-inpainting" class="hide-on-canvas-mode"// a href="#"><span cla// "material-icons accordion-icon">landscape</span>Cleanup<span class="data-count">clipdrop<// an><span class=// terial-icons arrow">keyboard_arrow_d// </span></a> <div> <div class="pall// -control-desc"> Mark unwanted objects or defects using the "pencil brush" and click the button to remove them from the image. You can use any brush color. </div> <button id="clipdrop-inpainting" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off"><span class="material-icons arrow">landscape</span>Cleanup</button> </div> </li> <li id="antimena-clipdrop-remove-text" class="hide-on-canvas-mode"> <a href="#"><span class="material-icons accordion-icon">landscape</span>Remove Text<span class="data-count">clipdrop</span><span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-desc"> Layers will not be pushed to the API. Only the background image will be affected. </div> <button id="clipdrop-remove-text" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off"><span class="material-icons arrow">landscape</span>Remove Text</button> </div> </li> <li id="antimena-clipdrop-upscaler"> <a href="#"><span class="material-icons accordion-icon">landscape</span>Upscaler<span class="data-count">clipdrop</span><span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-wrap"> <label class="palleon-control-label">Width</label> <div class="palleon-control"> <input id="clipdrop-upscale-width" class="palleon-form-field" type="number" value="" autocomplete="off" data-size=""> </div> </div> <div class="palleon-control-wrap"> <label class="palleon-control-label">Height</label> <div class="palleon-control"> <input id="clipdrop-upscale-height" class="palleon-form-field" type="number" value="" autocomplete="off" data-size=""> </div> </div> <button id="clipdrop-upscale" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off"><span class="material-icons arrow">landscape</span>Upscale Image</button> </div> </li> <li id="antimena-clipdrop-reimagine"> <a href="#"><span class="material-icons accordion-icon">landscape</span>Reimagine<span class="data-count">clipdrop</span><span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <button id="clipdrop-clipdrop-reimagine" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off"><span class="material-icons arrow">landscape</span>Reimagine</button> </div> </li>';
        //     selector
        //         .find("#antimena-adjust-accordion")
        //         .prepend(clipdropContent);
        // }
        // if (openaiApiKey != "") {
        //     var oaiContent =
        //         '<li id="antimena-oai-edit"> <a href="#"><span class="material-icons accordion-icon">landscape</span>Image Edit<span class="data-count">OpenAI</span><span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Image Size</label> <div class="palleon-control"> <select id="oai-edit-size" class="palleon-select" autocomplete="off"> <option value="1024x1024" selected>1024x1024 px</option> <option value="512x512">512x512 px</option> <option value="256x256">56x256 px</option> </select> </div> </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Prompt (Required)</label> <div class="palleon-control"> <textarea id="oai-edit-prompt" class="palleon-form-field" rows="2" autocomplete="off" placeholder="Golden hour New York City skyline, iconic, dramatic" maxlength="1000"></textarea> </div> </div> <div class="palleon-control-desc"> The transparent areas of the image indicate where the image should be edited, and the prompt should describe the full new image, not just the transparent areas. You can use "Erase BG Image" brush to remove the pixels on the background image. </div> <button id="oai-edit" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off" disabled><span class="material-icons arrow">landscape</span>Edit Image</button> </div> </li> <li id="antimena-oai-variation" class="hide-on-canvas-mode"> <a href="#"><span class="material-icons accordion-icon">landscape</span>Image Variation<span class="data-count">OpenAI</span><span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="pall// -control-desc"> Creat// a variation of the background image. Layers will not//  pushed to the API. Only the background ima// will be af// ted. </div> <button id="oai-variat// " type="button" class="palleo// tn primary palleon-lg-btn btn-full" autocomplete="off"><span class="material-icons arrow">landscape</span>Generate</button> </div> </li>';
        //     selector.find("#antimena-adjust-accordion").prepend(oaiContent);
        // }
        // if (stabilityaiApiKey != "") {
        //     var saiContent =
        //         '<li id="antimena-sai-regenerator"> <a href="#"><span class="material-icons accordion-icon">landscape</span>Regenerator<span class="data-count">stability.ai</span><span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Prompt (Required)</label> <div class="palleon-control"> <textarea id="sai-imgtoimg-prompt" class="palleon-form-field" rows="2" autocomplete="off" placeholder="Golden hour New York City skyline, iconic, dramatic" maxlength="2000"></textarea> </div> </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Negative Prompt</label> <div class="palleon-control"> <textarea id="sai-imgtoimg-negative-prompt" class="palleon-form-field" rows="2" autocomplete="off" placeholder="black and white, monochrome"></textarea> </div> </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Style Preset</label> <div class="palleon-control"> <select id="sai-imgtoimg-style-presets" class="palleon-select" autocomplete="off"> <option value="" selected>Auto</option> <option value="3d-model">3d Model</option> <option value="analog-film">Analog Film</option> <option value="anime">Anime</option> <option value="cinematic">Cinematic</option> <option value="comic-book">Comic Book</option> <option value="digital-art">Digital Art</option> <option value="enhance">Enhance</option> <option value="fantasy-art">Fantasy Art</option> <option value="isometric">Isometric</option> <option value="line-art">Line Art</option> <option value="low-poly">Low Poly</option> <option value="modeling-compound">Modeling Compound</option> <option value="neon-punk">Neon Punk<// tion> <option value="origami">Origami</option> <option value="photographic">P// ographic</// ion> <option value="pixel-art">Pixel Ar// option> <option value="tile-t// ure">Tile Texture</option> </select> </div> </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label">Seed (Optional)</label> <div class="palleon-control"> <input id="sai-imgtoimg-seed" class="palleon-form-field" type="number" value="" autocomplete="off"> </div> </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label slider-label">Image Strength<span>0.35</span></label> <div class="palleon-control"> <input id="sai-imgtoimg-strength" type="range" min="0" max="1" value="0.35" step="0.05" class="palleon-slider" autocomplete="off"> </div> </div> <div class="palleon-control-desc antimena-desc"> How much influence the original image has on the diffusion process. Values close to 1 will yield images very similar to the original image while values close to 0 will yield images wildly different than the original image. </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label slider-label">CFG Scale<span>7</span></label> <div class="palleon-control"> <input id="sai-imgtoimg-cfg" type="range" min="0" max="35" value="7" step="1" class="palleon-slider" autocomplete="off"> </div> </div> <div class="palleon-control-desc antimena-desc"> How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt). </div> <div class="palleon-control-wrap label-block"> <label class="palleon-control-label slider-label">Steps<span>50</span></label> <div class="palleon-control"> <input id="sai-imgtoimg-steps" type="range" min="10" max="150" value="50" step="1" class="palleon-slider" autocomplete="off"> </div> </div> <div class="palleon-control-desc antimena-desc"> Number of diffusion steps to run. </div> <div class="palleon-control-wrap"> <label class="palleon-control-label">Alpha Mask</label> <div class="palleon-control palleon-toggle-control"> <label class="palleon-toggle"> <input id="sai-imgtoimg-mask" class="palleon-toggle-checkbox" type="checkbox" autocomplete="off" /> <div class="palleon-toggle-switch"></div> </label> </div> </div> <div class="palleon-control-desc antimena-desc"> If alpha mask is enabled, fully transparent pixels are replaced and fully opaque pixels are unchanged. You can use "Erase BG Image" brush to remove the pixels on the background image. </div> <button id="sai-imgtoimg-generate" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off" disabled><span class="material-icons arrow">landscape</span>Generate</button> </div> </li> <li id="antimena-sai-upscaler"> <a href="#"><span class="material-icons accordion-icon">landscape</span>Upscaler<span class="data-count">stability.ai</span><span class="material-icons arrow">keyboard_arrow_down</span></a> <div> <div class="palleon-control-wrap"> <label class="palleon-control-label">Width</label> <div class="palleon-control"> <input id="sai-upscale-width" class="palleon-form-field" type="number" value="" autocomplete="off" data-size=""> </div> </div> <div class="palleon-control-wrap"> <label class="palleon-control-label">Height</label> <div class="palleon-control"> <input id="sai-upscale-height" class="palleon-form-field" type="number" value="" autocomplete="off" data-size=""> </div> </div> <button id="sai-upscale" type="button" class="palleon-btn primary palleon-lg-btn btn-full" autocomplete="off" disabled><span class="material-icons arrow">landscape</span>Upscale Image</button> </div> </li> ';
        //     selector.find("#antimena-adjust-accordion").prepend(saiContent);
        // }
    }
}

///////////////* HELPERS *///////////////

// Arraybuffer to base64
function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

// Dataurl to blob
function aiDataURLtoBlob(dataurl) {
    var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

// Clipdrop error handling
function clipdropHandleErrors(response) {
    if (!response.ok) {
        if (response.status == 400) {
            throw Error(
                "Request is malformed or incomplete, non exhaustive causes can be: Missing image_file in request, input image format is not valid, image resolution is too big."
            );
        } else if (response.status == 401) {
            throw Error("Missing api key.");
        } else if (response.status == 402) {
            throw Error(
                "Your account has no remaining credits, you can buy more in your account page."
            );
        } else if (response.status == 403) {
            throw Error(antimenaParams.cp403);
        } else if (response.status == 406) {
            throw Error(antimenaParams.cp406);
        } else if (response.status == 429) {
            throw Error(antimenaParams.cp429);
        } else if (response.status == 500) {
            throw Error(antimenaParams.cp500);
        }
    } else {
        toastr.success(
            parseFloat(response.headers.get("x-remaining-credits")).toFixed(2) +
                " credits left.",
 //         palleonParams.success
        );
    }
    return response;
}

// Ope//  error handling
function oaiHandleErrors(response) {
    if (!response.ok) {
        if (response.status == 400) {
            throw Error(
                "Request is malformed or incomplete, non exhaustive causes can be: Missing image_file in request, input image format is not valid, image resolution is too big."
            );
        } else if (response.status == 401) {
            throw Error("Missing api key.");
        } else if (response.status == 402) {
            throw Error(
                "Your account has no remaining credits, you can buy more in your account page."
            );
        } else if (response.status == 403) {
            throw Error("Invalid or revocated api key.");
        } else if (response.status == 406) {
            throw Error("Accept header not acceptable.");
        } else if (response.status == 429) {
            throw Error("Too many requests, blocked by the rate limiter.");
        } else if (response.status == 500) {
            throw Error("An unexpected server error occurred.");
        }
    } else {
        toastr.success("Image processing is complete.", palleonParams.success);
    }
    return response;
}
